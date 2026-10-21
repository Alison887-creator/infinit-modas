import type { CSSProperties } from "react";

// Splits text into per-letter spans (indexed by --i) while keeping each word unbreakable.
export function SplitChars({ text, start = 0 }: { text: string; start?: number }) {
  let i = start;
  const words = text.split(" ");
  return (
    <span aria-hidden="true">
      {words.map((word, w) => (
        <span key={w}>
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((ch, c) => (
              <span key={c} className="char" style={{ "--i": i++ } as CSSProperties}>
                {ch}
              </span>
            ))}
          </span>
          {w < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}
