"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";
import { Logo } from "./Logo";

const nav = [
  { href: "#colecao", label: "Coleção" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#como-comprar", label: "Como comprar" },
  { href: "#visite", label: "Visite a loja" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-ink/5 bg-cream/85 py-3 shadow-[0_8px_30px_-12px_rgba(42,33,29,0.15)] backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" aria-label="Infinit Modas – início" className="group">
          <Logo />
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[0.8rem] font-medium uppercase tracking-[0.18em] text-ink/80"
            >
              <span className="relative block overflow-hidden">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:-translate-y-full">
                  {item.label}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 translate-y-full text-gold transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-y-0"
                >
                  {item.label}
                </span>
              </span>
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          data-magnetic
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-gold lg:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Fale conosco
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="menu-mobile"
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 pb-6 pt-4 sm:px-8" aria-label="Menu móvel">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/10 py-4 font-serif text-2xl text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-cream"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Fale no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
