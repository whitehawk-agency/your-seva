import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CtaBand({
  title = (
    <>
      Give once. <span className="text-orange-400">Or give monthly</span> and let us plan ahead.
    </>
  ),
  body = "Monthly gifts are what let our field teams commit to a rebuild in March that completes in June. Any amount, cancel any time, 100% to the field.",
  primary = { label: "Donate now", href: "/donate" },
  secondary = { label: "Other ways to help", href: "/get-involved" },
}: {
  title?: React.ReactNode;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white lg:py-28">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-[-5%] top-[-45%] size-[55%] rounded-full bg-orange-600/30 blur-[130px]" />
        <div className="absolute bottom-[-50%] right-[-5%] size-[55%] rounded-full bg-orange-800/30 blur-[130px]" />
        <div className="grain-overlay absolute inset-0 opacity-[0.14] mix-blend-soft-light" />
      </div>

      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Badge variant="light" className="px-3.5 py-1.5">
              <Heart aria-hidden className="size-3.5 fill-current text-orange-400" />
              100% to the field, always
            </Badge>
          </Reveal>

          <Reveal index={1}>
            <h2 className="headline mt-6 text-[2.2rem] sm:text-5xl lg:text-[3.6rem]">{title}</h2>
          </Reveal>

          <Reveal index={2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{body}</p>
          </Reveal>

          <Reveal index={3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="xl">
                <Link href={primary.href}>
                  {primary.label}
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline-light" size="xl">
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
