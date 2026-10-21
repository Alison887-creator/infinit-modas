import { whatsappLink } from "@/lib/site";
import { ArrowIcon } from "../Icons";
import { Photo, type ArtVariant } from "../Photo";
import { SectionHeading } from "./SectionHeading";

const categories: {
  name: string;
  hint: string;
  file: string;
  variant: ArtVariant;
  span: string;
}[] = [
  {
    name: "Vestidos",
    hint: "Do casual ao especial",
    file: "vestidos.jpg",
    variant: "rose",
    span: "sm:col-span-2 lg:row-span-2",
  },
  { name: "Blusas & Camisas", hint: "Para todos os dias", file: "blusas.jpg", variant: "sand", span: "" },
  { name: "Calças & Saias", hint: "Caimento impecável", file: "calcas.jpg", variant: "espresso", span: "" },
  { name: "Conjuntos", hint: "Look pronto, sem esforço", file: "conjuntos.jpg", variant: "blush", span: "" },
  { name: "Acessórios", hint: "O detalhe que faz a diferença", file: "acessorios.jpg", variant: "gold", span: "" },
];

export function Collection() {
  return (
    <section id="colecao" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Coleção"
            title={
              <>
                Peças para todos os
                <br />
                seus <em className="ink-shift">momentos</em>
              </>
            }
          />
          <p data-reveal className="max-w-sm text-muted lg:text-right">
            Clique em uma categoria e receba as novidades direto no seu WhatsApp, com fotos, tamanhos e valores.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[18rem] gap-5 sm:grid-cols-2 lg:auto-rows-[17rem] lg:grid-cols-4">
          {categories.map((c, i) => (
            <div key={c.name} data-reveal style={{ "--delay": `${i * 90}ms` } as React.CSSProperties} className={c.span}>
            <a
              href={whatsappLink(`Olá, Infinit Modas! Quero ver as novidades em ${c.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              data-tilt
              data-cursor="Ver"
              className="group relative block h-full overflow-hidden rounded-3xl"
            >
              <Photo
                src={`/fotos/${c.file}`}
                alt={`${c.name} – Infinit Modas`}
                variant={c.variant}
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
              <span className="tilt-glare" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-cream sm:p-7">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-gold-light">{c.hint}</p>
                  <h3 className={`mt-2 font-serif leading-none transition-[letter-spacing] duration-500 group-hover:tracking-wide ${i === 0 ? "text-4xl sm:text-5xl" : "text-3xl"}`}>
                    {c.name}
                  </h3>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cream/40 transition-all duration-300 group-hover:border-cream group-hover:bg-cream group-hover:text-ink">
                  <ArrowIcon className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                </span>
              </div>
            </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
