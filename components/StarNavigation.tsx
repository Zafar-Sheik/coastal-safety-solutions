"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const nav = [
  { href: "#services", label: "Services", kind: "cube" },
  { href: "#about", label: "About", kind: "sphere" },
  { href: "#training", label: "Training", kind: "diamond" },
  { href: "#contact", label: "Contact", kind: "pyramid" }
];

export default function StarNavigation() {
  const root = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const particles = gsap.utils.toArray<HTMLElement>(".nav-particle");
      const items = gsap.utils.toArray<HTMLElement>(".nav-shape-link");

      if (open) {
        gsap.timeline()
          .set(".nav-radial", { pointerEvents: "auto" })
          .fromTo(
            particles,
            { opacity: 0, scale: 0, x: 0, y: 0 },
            {
              opacity: 1,
              scale: () => gsap.utils.random(.5, 1.4),
              x: () => gsap.utils.random(-105, 105),
              y: () => gsap.utils.random(-105, 105),
              duration: .55,
              stagger: .012,
              ease: "expo.out"
            }
          )
          .fromTo(
            items,
            { opacity: 0, scale: .25, rotate: 160, x: 0, y: 0 },
            {
              opacity: 1,
              scale: 1,
              rotate: 0,
              x: (i) => -(84 + i * 78),
              y: (i) => -(70 + (i % 2) * 26),
              duration: .8,
              stagger: .055,
              ease: "back.out(1.6)"
            },
            0.05
          )
          .to(".star-glyph", { rotate: 135, scale: 1.15, duration: .55, ease: "expo.out" }, 0);
      } else {
        gsap.timeline()
          .to(items, {
            opacity: 0, scale: .25, rotate: 150, x: 0, y: 0,
            duration: .32, stagger: .025, ease: "power2.in"
          })
          .to(particles, { opacity: 0, scale: 0, x: 0, y: 0, duration: .22 }, 0)
          .to(".star-glyph", { rotate: 0, scale: 1, duration: .35 }, 0)
          .set(".nav-radial", { pointerEvents: "none" });
      }
    }, root);

    return () => ctx.revert();
  }, [open]);

  return (
    <div ref={root} className="star-navigation">
      <div className="nav-radial">
        <div className="nav-particles" aria-hidden="true">
          {Array.from({ length: 26 }).map((_, i) => <i className="nav-particle" key={i} />)}
        </div>

        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-shape-link"
            onClick={() => setOpen(false)}
            aria-label={item.label}
          >
            <span className={`nav-shape ${item.kind}`} />
            <small>{item.label}</small>
          </a>
        ))}
      </div>

      <button
        className="star-button"
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen((s) => !s)}
        aria-label="Open navigation"
        aria-expanded={open}
      >
        <span className="star-ring" />
        <span className="star-glyph">✦</span>
      </button>
    </div>
  );
}
