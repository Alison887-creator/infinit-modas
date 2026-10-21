import { site } from "@/lib/site";
import { InstagramIcon } from "../Icons";
import { Photo, type ArtVariant } from "../Photo";

const tiles: ArtVariant[] = ["blush", "espresso", "sand", "rose", "olive", "gold"];

export function InstagramFeed() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal className="flex flex-col items-center text-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-ink text-cream">
            <InstagramIcon className="h-6 w-6" />
          </span>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 font-serif text-4xl text-ink transition-colors hover:text-gold sm:text-5xl"
          >
            @{site.instagramHandle}
          </a>
          <p className="mt-3 text-muted">
            Mais de <strong className="font-semibold text-ink">{site.followers} seguidoras</strong> acompanham nossas
            novidades. Venha fazer parte!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-6">
          {tiles.map((variant, i) => (
            <a
              key={i}
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              data-cursor="Abrir"
              style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}
              className="group relative aspect-square overflow-hidden rounded-2xl"
              aria-label={`Publicação ${i + 1} no Instagram da Infinit Modas`}
            >
              <Photo
                src={`/fotos/insta-${i + 1}.jpg`}
                alt=""
                variant={variant}
                sizes="(min-width: 1024px) 16vw, 33vw"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 grid place-items-center bg-ink/0 text-cream opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
                <InstagramIcon className="h-7 w-7" />
              </span>
            </a>
          ))}
        </div>

        <div data-reveal className="mt-12 text-center">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="inline-flex items-center gap-3 rounded-full border border-ink/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
          >
            <InstagramIcon className="h-5 w-5" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
