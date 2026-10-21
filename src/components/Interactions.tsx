"use client";

import { useEffect, useRef } from "react";

type CharPos = { el: HTMLElement; x: number; y: number; p: number };

function pagePos(el: HTMLElement) {
  let x = el.offsetWidth / 2;
  let y = el.offsetHeight / 2;
  let node: HTMLElement | null = el;
  while (node) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x, y };
}

export function Interactions() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const label = labelRef.current!;
    const bar = barRef.current!;

    const mouse = { x: innerWidth / 2, y: innerHeight / 2, moved: false };
    const ringPos = { x: mouse.x, y: mouse.y };
    const smooth = { mx: 0, my: 0 };
    let lastY = scrollY;
    let skew = 0;
    let raf = 0;
    let lastInk = "";

    const q = <T extends HTMLElement>(sel: string) => Array.from(document.querySelectorAll<T>(sel));
    const parallaxEls = q("[data-speed],[data-mouse]");
    const scrollXEls = q("[data-scroll-x]");
    const skewEls = q("[data-skew]");
    const inkEls = q(".ink-shift, .ink-chars");
    let chars: CharPos[] = [];

    const measureChars = () => {
      chars = q("[data-proximity] .char").map((el) => ({ el, ...pagePos(el), p: 0 }));
    };

    // Pointer: custom cursor, hover states, magnetic buttons, tilt cards
    let magnetic: HTMLElement | null = null;
    let tilt: HTMLElement | null = null;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!mouse.moved) {
        mouse.moved = true;
        ringPos.x = mouse.x;
        ringPos.y = mouse.y;
      }
      root.classList.add("cursor-on");

      const target = e.target as Element;

      const mag = target.closest<HTMLElement>("[data-magnetic]");
      if (magnetic && magnetic !== mag) magnetic.style.transform = "";
      magnetic = mag;
      if (mag) {
        const r = mag.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        mag.style.transform = `translate(${dx * 0.25}px, ${dy * 0.35}px)`;
      }

      const card = target.closest<HTMLElement>("[data-tilt]");
      if (tilt && tilt !== card) tilt.style.transform = "";
      tilt = card;
      if (card) {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.transform = `perspective(1000px) rotateX(${(0.5 - py) * 9}deg) rotateY(${(px - 0.5) * 11}deg) scale(1.015)`;
        card.style.setProperty("--gx", `${px * 100}%`);
        card.style.setProperty("--gy", `${py * 100}%`);
      }
    };

    const onOver = (e: PointerEvent) => {
      const t = (e.target as Element).closest("a, button, [data-cursor]");
      const text = t?.getAttribute("data-cursor");
      root.classList.toggle("cursor-hover", !!t && !text);
      root.classList.toggle("cursor-label", !!text);
      if (text) label.textContent = text;
    };

    const hideCursor = () => root.classList.remove("cursor-on");

    // Frame loop: cursor easing, scroll-linked motion, mouse parallax, letter proximity
    const tick = () => {
      const vw = innerWidth;
      const vh = innerHeight;

      if (fine && mouse.moved) {
        ringPos.x += (mouse.x - ringPos.x) * 0.2;
        ringPos.y += (mouse.y - ringPos.y) * 0.2;
        dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
        ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
        smooth.mx += ((mouse.x / vw - 0.5) * 2 - smooth.mx) * 0.06;
        smooth.my += ((mouse.y / vh - 0.5) * 2 - smooth.my) * 0.06;
      }

      const y = scrollY;
      const max = root.scrollHeight - vh;
      const progress = max > 0 ? y / max : 0;
      const velocity = reduce ? 0 : Math.max(-10, Math.min(10, (y - lastY) * 0.2));
      lastY = y;
      skew += (velocity - skew) * 0.12;
      if (Math.abs(skew) < 0.01) skew = 0;

      bar.style.transform = `scaleX(${progress})`;

      const ink = `${progress.toFixed(4)}|${smooth.mx.toFixed(3)}`;
      if (ink !== lastInk) {
        lastInk = ink;
        for (const el of inkEls) {
          el.style.setProperty("--scroll", progress.toFixed(4));
          el.style.setProperty("--mx", smooth.mx.toFixed(3));
        }
      }

      for (const el of parallaxEls) {
        const speed = reduce ? 0 : Number(el.dataset.speed || 0);
        const depth = fine ? Number(el.dataset.mouse || 0) : 0;
        let offY = 0;
        if (speed) {
          const r = (el.parentElement ?? el).getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) continue;
          offY = (r.top + r.height / 2 - vh / 2) * -speed;
        }
        el.style.translate = `${(smooth.mx * depth).toFixed(2)}px ${(smooth.my * depth + offY).toFixed(2)}px`;
      }

      for (const el of scrollXEls) {
        const r = (el.parentElement ?? el).getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) continue;
        const p = (vh - r.top) / (vh + r.height);
        const x = -0.6 * vw + (p - 0.5) * Number(el.dataset.scrollX) * vw;
        el.style.transform = `translate3d(${x.toFixed(1)}px, 0, 0) skewX(${(-skew).toFixed(2)}deg)`;
      }

      for (const el of skewEls) el.style.transform = `skewX(${(-skew * 0.8).toFixed(2)}deg)`;

      if (fine && mouse.moved) {
        const mx = mouse.x + scrollX;
        const my = mouse.y + y;
        for (const c of chars) {
          const d = Math.hypot(mx - c.x, my - c.y);
          const p = Math.round(Math.max(0, 1 - d / 170) * 100) / 100;
          if (p === c.p) continue;
          c.p = p;
          c.el.style.translate = `0 ${(-p * 0.22).toFixed(3)}em`;
          c.el.style.setProperty("--p", String(p));
        }
      }

      raf = requestAnimationFrame(tick);
    };

    measureChars();
    const measureLater = setTimeout(measureChars, 1600);
    document.fonts?.ready.then(measureChars);
    addEventListener("resize", measureChars);

    const iframes = q<HTMLIFrameElement>("iframe");
    if (fine) {
      addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerover", onOver);
      root.addEventListener("mouseleave", hideCursor);
      iframes.forEach((f) => f.addEventListener("pointerenter", hideCursor));
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(measureLater);
      removeEventListener("resize", measureChars);
      removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      root.removeEventListener("mouseleave", hideCursor);
      iframes.forEach((f) => f.removeEventListener("pointerenter", hideCursor));
      root.classList.remove("cursor-on", "cursor-hover", "cursor-label");
    };
  }, []);

  return (
    <>
      <div
        ref={barRef}
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-gold via-rose to-gold-light"
        style={{ transform: "scaleX(0)" }}
      />
      <div ref={dotRef} aria-hidden="true" className="cursor-dot" />
      <div ref={ringRef} aria-hidden="true" className="cursor-ring">
        <span>
          <span ref={labelRef} className="cursor-label-text" />
        </span>
      </div>
    </>
  );
}
