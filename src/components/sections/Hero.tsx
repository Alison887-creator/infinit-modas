import type { CSSProperties } from "react";
import { site, whatsappLink } from "@/lib/site";
import { ArrowIcon, InstagramIcon, WhatsAppIcon } from "../Icons";
import { Photo } from "../Photo";
import { SplitChars } from "../SplitChars";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-40">
      <div
        aria-hidden="true"
        data-mouse="45"
        className="scroll-hue pointer-events-none absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-blush/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        data-mouse="-35"
        className="scroll-hue pointer-events-none absolute -bottom-48 -left-32 h-[30rem] w-[30rem] rounded-full bg-sand blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p
            data-reveal
            className="mb-6 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold sm:text-[0.72rem] sm:tracking-[0.32em]"
          >
            <span className="h-px w-10 bg-gold" />
            Moda feminina · Santa Rosa – RS
          </p>

          <h1
            data-proximity
            aria-label="Elegância sem fim para cada momento seu."
            className="font-serif text-[3.2rem] font-light leading-[0.98] tracking-tight text-ink sm:text-7xl xl:text-[6.2rem]"
          >
            <SplitChars text="Elegância" start={0} />
            <br />
            <em className="ink-chars font-normal">
              <SplitChars text="sem fim" start={9} />
            </em>{" "}
            <SplitChars text="para" start={15} />
            <br />
            <SplitChars text="cada momento seu." start={19} />
          </h1>

          <p
            data-reveal
            style={{ "--delay": "500ms" } as CSSProperties}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Roupas femininas e acessórios escolhidos a dedo, com as tendências da estação e um atendimento que faz
            você se sentir em casa. Desde {site.since} no Centro de Santa Rosa.
          </p>

          <div
            data-reveal
            style={{ "--delay": "650ms" } as CSSProperties}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-ink px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-cream shadow-[0_18px_40px_-18px_rgba(29,25,22,0.7)] transition-colors hover:bg-gold"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Quero ver as novidades
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full border border-ink/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
            >
              <InstagramIcon className="h-5 w-5" />
              Ver no Instagram
            </a>
          </div>

          <dl
            data-reveal
            style={{ "--delay": "800ms" } as CSSProperties}
            className="mt-14 grid max-w-lg grid-cols-3 divide-x divide-ink/10 border-t border-ink/10 pt-8"
          >
            {[
              { value: site.since, label: "vestindo Santa Rosa" },
              { value: `+${site.followers}`, label: "seguidoras no Instagram" },
              { value: "Centro", label: "fácil de chegar" },
            ].map((s) => (
              <div key={s.label} className="px-4 first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="whitespace-nowrap font-serif text-2xl text-ink sm:text-4xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div data-reveal style={{ "--delay": "200ms" } as CSSProperties} className="relative">
            <div data-mouse="-14" data-speed="0.06" className="relative">
              <div className="absolute -inset-3 rounded-t-full border border-gold/40" aria-hidden="true" />
              <Photo
                src="/fotos/destaque.jpg"
                alt="Look da nova coleção Infinit Modas"
                variant="rose"
                sizes="(min-width: 1024px) 40vw, 90vw"
                preload
                className="aspect-[4/5] rounded-t-full shadow-[0_40px_80px_-30px_rgba(42,33,29,0.45)]"
              />
            </div>

            <div
              data-mouse="26"
              className="animate-float absolute -bottom-8 -left-4 rounded-2xl bg-cream/95 p-5 shadow-[0_24px_50px_-20px_rgba(42,33,29,0.35)] backdrop-blur sm:-left-10"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold">Nova coleção</p>
              <p className="mt-1 font-serif text-2xl leading-tight text-ink">
                Peças que chegam
                <br />
                toda estação
              </p>
            </div>

            <div
              data-mouse="34"
              className="absolute -right-2 -top-6 h-28 w-28 sm:h-32 sm:w-32"
              aria-hidden="true"
            >
              <div className="grid h-full w-full place-items-center rounded-full bg-ink text-cream">
                <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 h-full w-full">
                  <defs>
                    <path id="circle-text" d="M50 50m-37 0a37 37 0 1 1 74 0a37 37 0 1 1-74 0" />
                  </defs>
                  <text className="fill-current text-[9.5px] font-semibold uppercase tracking-[0.3em]">
                    <textPath href="#circle-text">Moda feminina • Desde {site.since} •</textPath>
                  </text>
                </svg>
                <span className="font-serif text-3xl text-gold-light">∞</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
