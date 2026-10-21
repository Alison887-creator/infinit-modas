import { fullAddress, mapsDirectionsUrl, mapsEmbedUrl, site, whatsappLink } from "@/lib/site";
import { ArrowIcon, ClockIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "../Icons";
import { SectionHeading } from "./SectionHeading";

export function Visit() {
  return (
    <section id="visite" className="bg-sand/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Visite a loja"
          title={
            <>
              Te esperamos no
              <br />
              <em className="ink-shift">Centro de Santa Rosa</em>
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div data-reveal className="flex flex-col rounded-3xl bg-cream p-8 sm:p-10 lg:col-span-2">
            <ul className="space-y-8">
              <li className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-cream">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">Endereço</h3>
                  <p className="mt-2 text-lg leading-snug text-ink">{fullAddress}</p>
                  <a
                    href={mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-3 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
                  >
                    Como chegar
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </li>

              <li className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-cream">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">Horário</h3>
                  {site.hours.map((h) => (
                    <p key={h} className="mt-2 text-lg text-ink">
                      {h}
                    </p>
                  ))}
                </div>
              </li>

              <li className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-cream">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">
                    Telefone / WhatsApp
                  </h3>
                  {site.phones.map((p) => (
                    <a
                      key={p.wa}
                      href={whatsappLink(undefined, p.wa)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center gap-2 text-lg text-ink transition-colors hover:text-gold"
                    >
                      <WhatsAppIcon className="h-4 w-4 text-gold" />
                      {p.label}
                    </a>
                  ))}
                </div>
              </li>
            </ul>

            <a
              href={whatsappLink("Olá, Infinit Modas! Gostaria de agendar uma visita à loja.")}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-cream transition-all hover:bg-gold lg:mt-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agendar visita
            </a>
          </div>

          <div
            data-reveal
            style={{ "--delay": "120ms" } as React.CSSProperties}
            className="min-h-[24rem] overflow-hidden rounded-3xl border border-ink/10 bg-cream lg:col-span-3"
          >
            <iframe
              title={`Mapa: ${fullAddress}`}
              src={mapsEmbedUrl}
              className="h-full min-h-[24rem] w-full grayscale-[35%] sepia-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
