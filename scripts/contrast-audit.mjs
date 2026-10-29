/**
 * Contrast audit. Walks every rendered page, finds every text node, resolves
 * its true foreground/background (following translucency up the tree) and
 * reports anything that misses the WCAG target.
 *
 *   node scripts/contrast-audit.mjs [baseUrl] [AA|AAA]
 */
import { createRequire } from "node:module";

// Resolve Playwright from the project if it is installed there, otherwise from
// wherever it lives on this machine — the audit is a dev tool, not a dependency.
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const BASE = process.argv[2] ?? "http://localhost:3800";
const LEVEL = (process.argv[3] ?? "AAA").toUpperCase();

const PAGES = [
  "/", "/our-work/", "/100-percent-model/", "/impact-stories/",
  "/impact-stories/fifteen-pounds-every-month/", "/about/", "/donate/",
  "/get-involved/", "/transparency/", "/contact/", "/privacy/", "/terms/",
];

const audit = (level) => `(() => {
  const LEVEL = ${JSON.stringify(level)};
  const srgb = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
  const lum = ([r, g, b]) => 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
  const ratio = (a, b) => { const l1 = lum(a), l2 = lum(b); const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1]; return (hi + 0.05) / (lo + 0.05); };
  // Resolve ANY CSS colour notation (rgb, oklch, color-mix, …) to real RGBA by
  // painting one pixel. Tailwind v4 emits oklch(), which string parsing misses.
  const _c = document.createElement('canvas'); _c.width = _c.height = 1;
  const _x = _c.getContext('2d', { willReadFrequently: true });
  const _cache = new Map();
  const parse = (s) => {
    if (!s) return null;
    if (_cache.has(s)) return _cache.get(s);
    let v = null;
    try {
      _x.globalCompositeOperation = 'copy';
      _x.fillStyle = '#000';
      _x.fillStyle = s;
      _x.fillRect(0, 0, 1, 1);
      const d = _x.getImageData(0, 0, 1, 1).data;
      v = [d[0], d[1], d[2], d[3] / 255];
    } catch (e) { v = null; }
    _cache.set(s, v);
    return v;
  };
  const over = (fg, bg) => [0,1,2].map(i => fg[i] * fg[3] + bg[i] * (1 - fg[3]));

  // Resolve the effective background by compositing every ancestor layer.
  const bgOf = (el) => {
    let stack = [], node = el;
    while (node && node !== document.documentElement) {
      const cs = getComputedStyle(node);
      const c = parse(cs.backgroundColor);
      if (c && c[3] > 0) stack.push(c);
      if (cs.opacity !== '1' && parseFloat(cs.opacity) < 1) stack.push([255,255,255,1 - parseFloat(cs.opacity)]);
      node = node.parentElement;
    }
    let base = [250, 250, 249];
    for (let i = stack.length - 1; i >= 0; i--) base = over(stack[i], base);
    return base;
  };

  const out = [];
  const seen = new Set();
  for (const el of document.querySelectorAll('body *')) {
    const text = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join(' ').trim();
    if (!text) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none') continue;
    const r = el.getBoundingClientRect();
    if (r.width <= 2 || r.height <= 2) continue; // sr-only / clipped
    if (cs.clipPath === 'inset(50%)' || cs.clip === 'rect(0px, 0px, 0px, 0px)') continue;
    const fgRaw = parse(cs.color);
    if (!fgRaw) continue;
    const bg = bgOf(el);
    const fg = over(fgRaw, bg);
    const size = parseFloat(cs.fontSize);
    const weight = parseInt(cs.fontWeight, 10) || 400;
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    // A brand-coloured fill is held to AA: 7:1 is unreachable for a vivid
    // action colour, and the brand is a deliberate, documented choice.
    const brand = !!el.closest('[data-contrast="brand"]');
    const level = brand ? 'AA' : LEVEL;
    const need = level === 'AAA' ? (large ? 4.5 : 7) : (large ? 3 : 4.5);
    const got = ratio(fg, bg);
    if (got + 0.005 < need) {
      const key = cs.color + '|' + bg.join(',') + '|' + Math.round(size) + '|' + weight;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({ text: text.slice(0, 46), got: +got.toFixed(2), need, level, size: Math.round(size), weight,
        fg: cs.color, bg: 'rgb(' + bg.map(Math.round).join(',') + ')',
        cls: (typeof el.className === 'string' ? el.className : '').slice(0, 90) });
    }
  }
  return out;
})()`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
let total = 0;

for (const path of PAGES) {
  await page.goto(BASE + path, { waitUntil: "networkidle" });
  // Reveal animations start at opacity 0; settle them before measuring.
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 600) {
    await page.evaluate((v) => window.scrollTo({ top: v, behavior: "instant" }), y);
    await page.waitForTimeout(90);
  }
  await page.waitForTimeout(500);
  const fails = await page.evaluate(audit(LEVEL));
  if (fails.length) {
    console.log(`\n${path}  — ${fails.length} failing pairing(s)`);
    for (const f of fails) {
      console.log(`  ${String(f.got).padStart(5)}:1 (need ${f.need} · ${f.level})  ${f.size}px/${f.weight}  ${f.fg} on ${f.bg}`);
      console.log(`         "${f.text}"  ·  ${f.cls}`);
    }
  }
  total += fails.length;
}

console.log(
  `\n${total === 0 ? `PASS — all text meets WCAG ${LEVEL}, brand-coloured fills meet AA` : `${total} pairing(s) failing`}`,
);
await browser.close();
process.exit(total === 0 ? 0 : 1);
