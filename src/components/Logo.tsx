export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`inline-flex flex-col items-center leading-none ${light ? "text-cream" : "text-ink"}`}>
      <span className="font-serif text-[1.65rem] font-medium tracking-[0.22em] transition-[letter-spacing,color] duration-500 group-hover:tracking-[0.3em] group-hover:text-gold">
        INFINIT
      </span>
      <span className="mt-1 flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.55em] text-gold">
        <span className="h-px w-4 bg-current" />
        MODAS
        <span className="h-px w-4 bg-current" />
      </span>
    </span>
  );
}
