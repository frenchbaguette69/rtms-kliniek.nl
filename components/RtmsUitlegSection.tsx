"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, Brain } from "lucide-react";

export default function RtmsIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* decoratieve blob rechtsachter */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(42,159,174,0.10),transparent_60%)]"
      />
      <div className="container mx-auto grid  grid-cols-1 items-center gap-10 px-4 py-16 md:px-6 lg:grid-cols-2 lg:gap-12 lg:py-24">
        {/* LEFT: copy */}
        <div className="order-2 lg:order-1">
          <p className="mb-3 text-sm font-semibold tracking-wide text-[#2a9fae]">
            rTMS Behandeling uitgelegd
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            Wat is rTMS en hoe werkt het?
          </h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
            rTMS gebruikt magnetische pulsen om specifieke hersengebieden te
            stimuleren. Deze activatie bevordert{" "}
            <strong>neuroplasticiteit</strong> en helpt de balans in
            hersennetwerken te herstellen. De behandeling is{" "}
            <strong>niet-invasief</strong>, <strong>veilig</strong> en
            evidence-based voor o.a.{" "}
            <span className="font-medium">depressie</span> en{" "}
            <span className="font-medium">OCD</span>.
          </p>

          <ul className="space-y-3">
            {[
              "Geen systemische bijwerkingen",
              "Ambulante behandeling mogelijk",
              "Wetenschappelijk onderbouwd",
              "Combineerbaar met CGT",
            ].map((txt) => (
              <li key={txt} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span className="text-slate-800">{txt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: image + floating card */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            {/* image frame */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-sm">
              <Image
                src="/images/rtmshero.jpeg"
                alt="rTMS behandeling: sessie met coil en specialist"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
              />
              {/* zachte overlay voor leesbaarheid van floating card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10" />
            </div>

            {/* kleine decor blob */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-6 -right-6 h-28 w-28 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(42,159,174,0.12),transparent_60%)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
