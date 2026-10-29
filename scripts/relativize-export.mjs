/**
 * Rewrites the static export's root-absolute URLs to page-relative ones, so
 * the build renders correctly whether it is served from a domain root or from
 * a sub-path (a preview host, a GitHub Pages project site, a CDN folder).
 *
 *   node scripts/relativize-export.mjs [outDir]
 *
 * Next emits "/_next/..." and "/about/". The artifact preview host also
 * reserves any top-level path beginning with "_", so the asset directory is
 * renamed at the same time.
 */
import { readdir, readFile, writeFile, rename } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const OUT = process.argv[2] ?? "out";
const FROM_DIR = "_next";
const TO_DIR = "nextassets";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => {
      const full = path.join(dir, e.name);
      return e.isDirectory() ? walk(full) : [full];
    }),
  );
  return files.flat();
}

// Rename the asset directory, then point every reference at the new name.
if (existsSync(path.join(OUT, FROM_DIR))) {
  await rename(path.join(OUT, FROM_DIR), path.join(OUT, TO_DIR));
}

const all = await walk(OUT);
const pages = all.filter((f) => f.endsWith(".html"));
const textAssets = all.filter((f) => /\.(html|js|css|txt|json|xml)$/.test(f));

// 1. Every text file: the old asset directory name no longer exists.
for (const file of textAssets) {
  const body = await readFile(file, "utf8");
  if (!body.includes(`/${FROM_DIR}/`)) continue;
  await writeFile(file, body.replaceAll(`/${FROM_DIR}/`, `/${TO_DIR}/`));
}

// 2. Stylesheets: @font-face and background urls are absolute. CSS lives at
//    <assets>/static/css/, media at <assets>/static/media/, so "../media/".
for (const file of all.filter((f) => f.endsWith(".css"))) {
  const body = await readFile(file, "utf8");
  if (!body.includes(`/${TO_DIR}/static/media/`)) continue;
  await writeFile(file, body.replaceAll(`/${TO_DIR}/static/media/`, "../media/"));
}

// 3. Webpack bakes its public path in at build time, which breaks the moment
//    the site is served from a sub-path. Derive it from the runtime chunk's own
//    URL instead — webpack's own "auto" behaviour, applied after the fact.
for (const file of all.filter((f) => /webpack-[^/]*\.js$/.test(f))) {
  const body = await readFile(file, "utf8");
  const needle = `.p="/${TO_DIR}/"`;
  if (!body.includes(needle)) continue;
  const auto =
    `.p=(function(){try{var s=document.currentScript&&document.currentScript.src;` +
    `if(s)return s.replace(/${TO_DIR}\\/.*$/,"${TO_DIR}/");}catch(e){}return"/${TO_DIR}/";})()`;
  await writeFile(file, body.replace(needle, auto));
}

// 4. Every page: make absolute URLs relative to that page's own depth.
let rewritten = 0;
for (const file of pages) {
  const rel = path.relative(OUT, file).replace(/\\/g, "/");
  const depth = rel.split("/").length - 1;
  const prefix = depth === 0 ? "" : "../".repeat(depth);
  let body = await readFile(file, "utf8");
  const before = body;

  // Assets, including the ones referenced from inline scripts.
  body = body.replaceAll(`"/${TO_DIR}/`, `"${prefix}${TO_DIR}/`);
  body = body.replaceAll(`'/${TO_DIR}/`, `'${prefix}${TO_DIR}/`);
  body = body.replaceAll(`(/${TO_DIR}/`, `(${prefix}${TO_DIR}/`);
  body = body.replaceAll('"/icon.svg"', `"${prefix}icon.svg"`);

  // NOTE: page href values are deliberately left absolute. Rewriting them here
  // desynchronises the prerendered HTML from what React renders on hydration
  // (error #418), and the router then restores the original values anyway.
  // Serving from a sub-path needs `basePath` set at build time instead.
  if (body !== before) {
    await writeFile(file, body);
    rewritten += 1;
  }
}

console.log(
  `relativised ${rewritten}/${pages.length} pages · ${textAssets.length} text assets · ${FROM_DIR}/ -> ${TO_DIR}/`,
);
