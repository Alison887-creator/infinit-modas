const items = [
  "Moda feminina",
  "Acessórios",
  "Tendências da estação",
  "Atendimento personalizado",
  "Centro de Santa Rosa",
  "Compre pelo WhatsApp",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-gold/30 bg-espresso py-5 text-cream" aria-hidden="true">
      <div data-skew>
        <div className="animate-marquee flex w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center">
              {row.map((item, i) => (
                <span key={`${copy}-${i}`} className="flex items-center">
                  <span className="px-8 font-serif text-2xl italic tracking-wide transition-colors duration-300 hover:text-gold-light sm:text-3xl">
                    {item}
                  </span>
                  <span className="text-gold-light">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
