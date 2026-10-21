import { site } from "@/lib/site";

export function ScrollText() {
  return (
    <section aria-hidden="true" className="overflow-hidden py-14 sm:py-20">
      <div>
        <div
          data-scroll-x="0.9"
          className="text-outline whitespace-nowrap font-serif text-[17vw] font-light uppercase leading-[0.95] will-change-transform"
        >
          {"Infinit Modas ✦ Moda feminina ✦ ".repeat(4)}
        </div>
      </div>
      <div>
        <div
          data-scroll-x="-0.9"
          className="ink-shift whitespace-nowrap font-serif text-[17vw] italic leading-[0.95] will-change-transform"
        >
          {`Santa Rosa ✦ Desde ${site.since} ✦ Acessórios ✦ `.repeat(4)}
        </div>
      </div>
    </section>
  );
}
