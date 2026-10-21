import { fullAddress, site, whatsappLink } from "@/lib/site";
import { FacebookIcon, InstagramIcon, ThreadsIcon, WhatsAppIcon } from "../Icons";
import { Logo } from "../Logo";
import { SplitChars } from "../SplitChars";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden="true"
        data-mouse="70"
        className="scroll-hue pointer-events-none absolute inset-0 m-auto h-[30rem] w-[30rem] rounded-full bg-blush/70 blur-3xl"
      />
      <div data-reveal className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-gold">✦ Infinit Modas ✦</p>
        <h2
          data-proximity
          aria-label="Seu próximo look favorito está esperando por você."
          style={{ "--step": "18ms", "--base": "200ms" } as React.CSSProperties}
          className="mt-6 font-serif text-5xl font-light leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
        >
          <SplitChars text="Seu próximo look favorito" start={0} />
          <br />
          <SplitChars text="está" start={22} />{" "}
          <em className="ink-chars">
            <SplitChars text="esperando por você." start={26} />
          </em>
        </h2>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          data-magnetic
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-ink px-10 py-5 text-sm font-semibold uppercase tracking-[0.16em] text-cream shadow-[0_18px_40px_-18px_rgba(29,25,22,0.7)] transition-colors hover:bg-gold"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const socials = [
    { href: site.instagramUrl, label: "Instagram", icon: InstagramIcon },
    { href: site.threadsUrl, label: "Threads", icon: ThreadsIcon },
    { href: site.facebookUrl, label: "Facebook", icon: FacebookIcon },
    { href: whatsappLink(), label: "WhatsApp", icon: WhatsAppIcon },
  ];

  return (
    <footer className="bg-ink pt-20 text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
            {site.tagline}. Roupas femininas e acessórios em Santa Rosa – RS.
          </p>
        </div>

        <div>
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold-light">Contato</h3>
          <ul className="mt-5 space-y-3 text-sm text-cream/75">
            <li>{fullAddress}</li>
            <li>{site.hours.join(" · ")}</li>
            {site.phones.map((p) => (
              <li key={p.wa}>
                <a
                  href={whatsappLink(undefined, p.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-light"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold-light">Siga a gente</h3>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                data-magnetic
                className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 transition-all hover:border-gold-light hover:bg-gold-light hover:text-ink"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm text-cream/60">@{site.instagramHandle}</p>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-2 border-t border-cream/10 px-5 py-8 text-xs text-cream/45 sm:flex-row sm:justify-between sm:px-8">
        <p>© Infinit Modas · Desde {site.since}. Todos os direitos reservados.</p>
        <p>Santa Rosa – Rio Grande do Sul</p>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      data-magnetic
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-110 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden" />
      <WhatsAppIcon className="relative h-7 w-7" strokeWidth={1.8} />
    </a>
  );
}
