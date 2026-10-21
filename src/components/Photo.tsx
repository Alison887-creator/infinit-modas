import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

export type ArtVariant = "rose" | "sand" | "espresso" | "blush" | "gold" | "olive";

type PhotoProps = {
  src: string;
  alt: string;
  variant: ArtVariant;
  sizes: string;
  className?: string;
  preload?: boolean;
};

// Shows /public{src} when the file exists; otherwise a styled gradient so the layout still looks finished.
export function Photo({ src, alt, variant, sizes, className = "", preload }: PhotoProps) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));
  const position = /\babsolute\b/.test(className) ? "" : "relative";

  return (
    <div className={`${position} overflow-hidden ${className}`}>
      {exists ? (
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className="object-cover" />
      ) : (
        <div role="img" aria-label={alt} className={`art art-${variant} absolute inset-0`}>
          <svg
            viewBox="0 0 200 100"
            className="absolute left-1/2 top-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 opacity-25"
            aria-hidden="true"
          >
            <path
              d="M100 50c-18-26-58-26-58 0s40 26 58 0 58-26 58 0-40 26-58 0z"
              fill="none"
              stroke="white"
              strokeWidth="1.2"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
