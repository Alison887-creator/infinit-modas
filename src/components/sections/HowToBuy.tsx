import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "../Icons";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    n: "01",
    title: "Inspire-se",
    text: `Siga @${site.instagramHandle} e acompanhe as novidades, os looks montados e as peças que acabaram de chegar.`,
  },
  {
    n: "02",
    title: "Chame no WhatsApp",
    text: "Tire dúvidas, consulte tamanhos e cores e reserve suas peças favoritas com a nossa equipe.",
  },
  {
    n: "03",
    title: "Venha provar",
    text: "Visite a loja no Centro de Santa Rosa, experimente com calma e leve seu novo look para casa.",
  },
];

export function HowToBuy() {
  return (
    <section id="como-comprar" className="relative overflow-hidden bg-espresso py-24 text-cream lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 select-none font-serif text-[28rem] leading-none text-cream/[0.04]"
      >
        <div data-mouse="-50" className="animate-spin-slow [animation-duration:60s]">
          ∞
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          light
          eyebrow="Como comprar"
          title={
            <>
              Do Instagram ao seu
              <br />
              guarda-roupa em <em className="ink-shift">3 passos</em>
            </>
          }
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-cream/10 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.n}
              data-reveal
              style={{ "--delay": `${i * 120}ms` } as React.CSSProperties}
              className="group bg-espresso p-8 transition-colors duration-500 hover:bg-[#33281f] sm:p-10"
            >
              <span
                data-speed={0.08 + i * 0.05}
                className="inline-block font-serif text-6xl font-light text-gold-light/80 transition-[color,scale] duration-500 group-hover:scale-125 group-hover:text-gold-light"
              >
                {s.n}
              </span>
              <h3 className="mt-8 font-serif text-3xl">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-cream/65">{s.text}</p>
            </li>
          ))}
        </ol>

        <div data-reveal className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-gold-light"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Começar agora
          </a>
          <p className="text-sm text-cream/60">Respondemos no horário de funcionamento da loja.</p>
        </div>
      </div>
    </section>
  );
}
