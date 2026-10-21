import { site } from "@/lib/site";
import { HangerIcon, HeartIcon, SparkleIcon, BagIcon } from "../Icons";
import { Photo } from "../Photo";
import { SectionHeading } from "./SectionHeading";

const values = [
  {
    icon: SparkleIcon,
    title: "Curadoria de tendências",
    text: "Selecionamos peças atuais que realmente funcionam no dia a dia da mulher real.",
  },
  {
    icon: HeartIcon,
    title: "Atendimento personalizado",
    text: "Ajudamos você a montar o look certo, com calma, carinho e sinceridade.",
  },
  {
    icon: HangerIcon,
    title: "Novidades frequentes",
    text: "Coleções renovadas para você sempre encontrar algo novo na arara.",
  },
  {
    icon: BagIcon,
    title: "Compra fácil",
    text: "Venha provar na loja ou escolha suas peças pelo WhatsApp.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-sand/60 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div data-speed="0.05" data-mouse="-10" className="w-[82%]">
            <Photo
              src="/fotos/loja.jpg"
              alt="Interior da loja Infinit Modas em Santa Rosa"
              variant="sand"
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="aspect-[4/5] rounded-[2rem]"
            />
          </div>
          <div data-speed="-0.14" data-mouse="18" className="absolute -bottom-10 right-0 w-[52%]">
            <Photo
              src="/fotos/detalhe.jpg"
              alt="Detalhe de peças e acessórios da Infinit Modas"
              variant="espresso"
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="aspect-square rounded-[2rem] border-[10px] border-cream shadow-[0_30px_60px_-25px_rgba(42,33,29,0.5)]"
            />
          </div>
          <div
            data-mouse="28"
            className="absolute left-6 top-6 rounded-full bg-cream/90 px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-ink backdrop-blur"
          >
            Desde {site.since}
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Nossa história"
            title={
              <>
                Vestindo a mulher
                <br />
                <em className="ink-shift">santa-rosense</em> com estilo
              </>
            }
          />
          <div data-reveal className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              A Infinit Modas nasceu da vontade de trazer para Santa Rosa a moda que a gente vê nas vitrines das
              grandes cidades, com um jeito próximo e acolhedor de atender.
            </p>
            <p>
              Desde {site.since}, nosso espaço no Centro reúne roupas femininas e acessórios para o trabalho, o fim de
              semana e as ocasiões especiais. Aqui, cada cliente é atendida pelo nome.
            </p>
          </div>

          <ul className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {values.map((v, i) => (
              <li
                key={v.title}
                data-reveal
                style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
                className="group"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold transition-all duration-500 group-hover:rotate-[360deg] group-hover:border-gold group-hover:bg-gold group-hover:text-cream">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-2xl text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
