import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, light = false, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <div data-reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`mb-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-gold ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gold" />
        {eyebrow}
        {centered && <span className="h-px w-8 bg-gold" />}
      </p>
      <h2
        className={`font-serif text-4xl font-light leading-[1.05] sm:text-5xl lg:text-6xl ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-base leading-relaxed sm:text-lg ${light ? "text-cream/70" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
