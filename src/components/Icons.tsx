import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const InstagramIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </Base>
);

export const WhatsAppIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3.5 20.5l1.3-4.1A8.5 8.5 0 1 1 8 19.4l-4.5 1.1z" />
    <path d="M9 8.6c.2-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.7l-.5.6c-.1.2-.1.4 0 .6.6 1 1.4 1.8 2.4 2.4.2.1.4.1.6 0l.6-.5c.2-.2.5-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.6-.6.8-.8.4-1.9.4-3.1-.2a9.5 9.5 0 0 1-4.3-4.3c-.6-1.2-.6-2.3-.2-3.1z" />
  </Base>
);

export const ThreadsIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M16.5 11.2c-.3-2.4-1.9-3.7-4.3-3.7-2.6 0-4.2 1.9-4.2 4.6 0 2.9 1.7 4.6 4.3 4.6 2 0 3.4-1.1 3.4-2.7 0-1.5-1.2-2.4-3.1-2.4-1.6 0-2.6.7-2.6 1.8 0 1 .8 1.6 1.9 1.6" />
    <path d="M12.2 3C7 3 3.5 6.7 3.5 12s3.4 9 8.7 9c3.4 0 6-1.5 7.4-4.1" />
  </Base>
);

export const FacebookIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2.5H8V14h2.5v6.5H14V14h2.5l.5-3.5h-3V8.5c0-.3.2-.5.5-.5z" />
  </Base>
);

export const MapPinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Base>
);

export const ClockIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Base>
);

export const PhoneIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Base>
);

export const ArrowIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const SparkleIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3c.6 4.2 2.4 6.3 6.5 7-4.1.7-5.9 2.8-6.5 7-.6-4.2-2.4-6.3-6.5-7 4.1-.7 5.9-2.8 6.5-7z" />
    <path d="M19 15.5c.2 1.4.8 2 2 2.2-1.2.2-1.8.9-2 2.3-.2-1.4-.8-2.1-2-2.3 1.2-.2 1.8-.8 2-2.2z" />
  </Base>
);

export const HeartIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z" />
  </Base>
);

export const HangerIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M10 6.5a2 2 0 1 1 2.8 1.8c-.5.2-.8.7-.8 1.2V10" />
    <path d="M12 10l8.6 6.1a1 1 0 0 1-.6 1.9H4a1 1 0 0 1-.6-1.9L12 10z" />
  </Base>
);

export const BagIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 8h14l-1 12H6L5 8z" />
    <path d="M9 10V6.5a3 3 0 0 1 6 0V10" />
  </Base>
);

export const MenuIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 8h16M4 16h16" />
  </Base>
);

export const CloseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Base>
);
