"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StarNavigation from "@/components/StarNavigation";
import BlueprintBuilding from "@/components/BlueprintBuilding";

gsap.registerPlugin(ScrollTrigger);

const services = [
  [
    "01",
    "Safety Training",
    "Practical OHS training shaped around the realities of your workplace.",
  ],
  [
    "02",
    "Risk Assessments",
    "Identify hazards, evaluate exposure and build meaningful controls.",
  ],
  [
    "03",
    "Safety Files",
    "Structured documentation that is current, usable and inspection-ready.",
  ],
  [
    "04",
    "First Aid",
    "Level 1, 2 and 3 programmes for workplace emergency readiness.",
  ],
  [
    "05",
    "Fire Safety",
    "Basic fire training, fire protection services and practical readiness.",
  ],
  [
    "06",
    "Working at Heights",
    "Training and safety support for high-risk elevated work.",
  ],
  [
    "07",
    "SHE Representation",
    "Build capable internal safety leadership and stronger compliance culture.",
  ],
  [
    "08",
    "PPE & Equipment",
    "Safety wear, uniforms, first aid kits and safety equipment.",
  ],
];

const training = [
  "Basic Fire Fighting",
  "Fire Marshall",
  "Accident / Incident Investigation",
  "First Aid Level 1",
  "First Aid Level 2",
  "First Aid Level 3",
  "Health & Safety Representative",
  "Health & Safety Officer (SHEQ)",
  "HIRA / Risk Assessment",
  "General OHS",
  "Legal Liability 16.2",
  "Working at Heights",
  "Scaffolding Erecting / Dismantling",
  "Scaffolding Inspector / Supervisor",
  "Fall Protection, Arrest & Rescue",
  "Chemical Handling",
  "Dangerous Goods by Road",
  "Stacking & Storing",
  "Confined Space",
];

export default function Home() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".hero-word", { yPercent: 120, opacity: 0 });
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .to(".hero-word", {
          yPercent: 0,
          opacity: 1,
          duration: 1.15,
          stagger: 0.06,
        })
        .from(".hero-kicker", { opacity: 0, x: -30, duration: 0.8 }, 0.15)
        .from(".hero-intro", { opacity: 0, y: 25, duration: 0.8 }, 0.55)
        .from(".hero-cta-row", { opacity: 0, y: 25, duration: 0.8 }, 0.7)
        .from(".hero-media", { opacity: 0, scale: 0.94, duration: 1.4 }, 0.2);

      gsap.to(".scene-grid", {
        rotateZ: 4,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      gsap.to(".hero-media img", {
        scale: 1.13,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>(".drift-image").forEach((el, i) => {
        const img = el.querySelector("img");
        gsap.fromTo(
          el,
          {
            xPercent: i % 2 ? 16 : -18,
            yPercent: 12,
            rotate: i % 2 ? 2.5 : -2.5,
          },
          {
            xPercent: i % 2 ? -10 : 12,
            yPercent: -18,
            rotate: i % 2 ? -1 : 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.15,
            },
          },
        );

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1, filter: "grayscale(1) contrast(.88)" },
            {
              scale: 1.12,
              filter: "grayscale(.12) contrast(1.05)",
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "center 45%",
                scrub: 1,
              },
            },
          );
        }
      });

      gsap.from(".manifesto-sheet", {
        clipPath: "inset(0 100% 0 0)",
        scrollTrigger: {
          trigger: ".manifesto-section",
          start: "top 75%",
          end: "center 45%",
          scrub: 1,
        },
        immediateRender: false,
      });

      gsap.from(".manifesto-line", {
        y: 45,
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".manifesto-section",
          start: "top 65%",
          end: "center 42%",
          scrub: 1,
        },
        immediateRender: false,
      });

      gsap.from(".bp-floor", {
        y: 160,
        opacity: 0,
        rotateX: 85,
        scale: 0.72,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".blueprint-section",
          start: "top 70%",
          end: "bottom 55%",
          scrub: 1,
        },
        immediateRender: false,
      });

      gsap.from(".bp-column, .bp-beam, .bp-core", {
        scaleY: 0,
        transformOrigin: "bottom",
        stagger: 0.035,
        ease: "none",
        scrollTrigger: {
          trigger: ".blueprint-section",
          start: "top 65%",
          end: "bottom 48%",
          scrub: 1,
        },
        immediateRender: false,
      });

      gsap.from(".bp-label", {
        opacity: 0,
        x: 30,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".blueprint-section",
          start: "45% 70%",
          end: "75% 55%",
          scrub: 1,
        },
        immediateRender: false,
      });

      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, i) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          rotate: i % 2 ? 1 : -1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 68%",
            scrub: 1,
          },
          immediateRender: false,
        });
      });

      gsap.from(".training-item", {
        y: 35,
        opacity: 0,
        stagger: 0.04,
        scrollTrigger: {
          trigger: ".training-list",
          start: "top 80%",
          end: "center 60%",
          scrub: 1,
        },
        immediateRender: false,
      });

      gsap.to(".ticker-track", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".ticker",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, root);

    // Refresh ScrollTrigger after all animations are set up
    // This ensures all elements are properly measured and recognized
    ScrollTrigger.refresh();

    const interactive =
      root.current.querySelectorAll<HTMLElement>("[data-tilt]");
    const cleaners: (() => void)[] = [];

    interactive.forEach((el) => {
      const onMove = (e: PointerEvent) => {
        if (window.matchMedia("(pointer: coarse)").matches) return;
        const r = el.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(el, {
          rotateY: nx * 7,
          rotateX: ny * -7,
          x: nx * 7,
          y: ny * 7,
          transformPerspective: 900,
          duration: 0.35,
          ease: "power2.out",
        });
      };
      const onLeave = () => {
        gsap.to(el, {
          rotateY: 0,
          rotateX: 0,
          x: 0,
          y: 0,
          duration: 0.75,
          ease: "elastic.out(1,.5)",
        });
      };
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      cleaners.push(() => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      });
    });

    return () => {
      cleaners.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return (
    <main ref={root}>
      <div className="scene-grid" />
      <StarNavigation />

      <section className="hero">
        <div className="hero-media">
          <Image
            src="/images/hero-dusk.png"
            alt="Industrial safety professionals overlooking a modern plant"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-media-shade" />
        </div>

        <div className="hero-frame">
          <header className="top-bar">
            <a href="#" className="brand-mark">
              <span className="brand-symbol">CS</span>
              <span>
                COASTAL
                <br />
                SAFETY SOLUTIONS
              </span>
            </a>
            <div className="top-meta">
              PROFESSIONAL SAFETY SOLUTIONS · SOUTH AFRICA
            </div>
          </header>

          <div className="hero-copy">
            <p className="hero-kicker">SAFETY / TRAINING / COMPLIANCE</p>
            <h1 className="hero-title">
              <span className="clip">
                <span className="hero-word">SAFETY</span>
              </span>
              <span className="clip">
                <span className="hero-word">TODAY.</span>
              </span>
              <span className="clip accent-line">
                <span className="hero-word">SECURE</span>
              </span>
              <span className="clip accent-line">
                <span className="hero-word">TOMORROW.</span>
              </span>
            </h1>
            <p className="hero-intro">
              Training, PPE, risk assessments and compliance support built
              around the real conditions of your workplace.
            </p>
            <div className="hero-cta-row">
              <a className="primary-cta" href="#contact">
                Start a safer project <span>↗</span>
              </a>
              <a className="ghost-link" href="#services">
                Explore capabilities
              </a>
            </div>
          </div>

          <div className="hero-index">
            <span>01</span>
            <i />
            <span>05</span>
          </div>
        </div>
      </section>

      <section className="floating-gallery" id="about">
        <div className="section-kicker">AN INTERACTIVE SAFETY PRACTICE</div>
        <div className="gallery-head">
          <h2>
            Built for the places where <em>risk becomes real.</em>
          </h2>
          <p>
            Coastal Safety Solutions combines practical training, documentation,
            equipment and direct support so businesses can build stronger safety
            systems before incidents happen.
          </p>
        </div>

        <div className="gallery-stage">
          <figure className="drift-image image-a" data-tilt>
            <Image
              src="/images/gear-blueprints.png"
              alt="Safety gear and industrial blueprints"
              fill
              sizes="55vw"
            />
            <figcaption>TOOLS / SYSTEMS / PREPARATION</figcaption>
          </figure>

          <figure className="drift-image image-b" data-tilt>
            <Image
              src="/images/cpr-training.png"
              alt="Workplace first aid training"
              fill
              sizes="45vw"
            />
            <figcaption>TRAINING THAT BECOMES INSTINCT</figcaption>
          </figure>

          <figure className="drift-image image-c" data-tilt>
            <Image
              src="/images/sunset-safety.png"
              alt="Safety professional at an industrial site"
              fill
              sizes="50vw"
            />
            <figcaption>
              CONTROL THE RISK BEFORE THE RISK CONTROLS THE DAY
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="manifesto-section">
        <div className="manifesto-number">02</div>
        <div className="manifesto-sheet">
          <span className="section-kicker">THE SAFETY MANIFESTO</span>
          <h2 className="manifesto-line">
            Documentation is not the destination.
          </h2>
          <h2 className="manifesto-line">Safer people are.</h2>
          <p className="manifesto-line">
            The strongest safety system is one that people understand, use and
            trust. We turn compliance requirements into clear actions, practical
            training and structured records that support the people doing the
            work.
          </p>
        </div>
      </section>

      <section className="blueprint-section">
        <div className="blueprint-copy">
          <span className="section-kicker">SCROLL TO ASSEMBLE</span>
          <h2>Compliance is architecture.</h2>
          <p>
            Risk control, training, documentation, equipment and accountability
            are separate components. When they connect properly, they become a
            system.
          </p>
          <div className="blueprint-note">
            <span>03</span>
            <i />
            <span>BUILD / VERIFY / MAINTAIN</span>
          </div>
        </div>

        <div className="blueprint-canvas">
          <div className="blueprint-photo">
            <Image
              src="/images/exploded-architecture.png"
              alt="Exploded architectural safety system"
              fill
              sizes="55vw"
            />
          </div>
          <BlueprintBuilding />
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <span className="section-kicker">CAPABILITIES</span>
          <h2>Safety systems with practical utility.</h2>
        </div>
        <div className="services-grid">
          {services.map(([n, title, text]) => (
            <article className="service-card" data-tilt key={title}>
              <span className="service-no">{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <span className="service-glow" />
            </article>
          ))}
        </div>
      </section>

      <section className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>FIRST AID</span>
          <i>✦</i>
          <span>FIRE SAFETY</span>
          <i>✦</i>
          <span>WORKING AT HEIGHTS</span>
          <i>✦</i>
          <span>RISK ASSESSMENT</span>
          <i>✦</i>
          <span>SAFETY FILES</span>
          <i>✦</i>
          <span>PPE</span>
          <i>✦</i>
          <span>FIRST AID</span>
          <i>✦</i>
          <span>FIRE SAFETY</span>
          <i>✦</i>
          <span>WORKING AT HEIGHTS</span>
          <i>✦</i>
          <span>RISK ASSESSMENT</span>
          <i>✦</i>
          <span>SAFETY FILES</span>
          <i>✦</i>
          <span>PPE</span>
          <i>✦</i>
        </div>
      </section>

      <section className="training-section" id="training">
        <div className="training-intro">
          <span className="section-kicker">TRAINING INDEX</span>
          <h2>Skills that move from classroom to site.</h2>
        </div>
        <div className="training-list">
          {training.map((item, i) => (
            <div className="training-item" key={item}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
              <i>↗</i>
            </div>
          ))}
        </div>
      </section>

      <section className="impact-section">
        <div className="impact-image">
          <Image
            src="/images/cpr-training.png"
            alt="Workplace safety training session"
            fill
            sizes="100vw"
          />
          <div className="impact-overlay" />
        </div>
        <div className="impact-copy">
          <span className="section-kicker">THE HUMAN OUTCOME</span>
          <h2>
            Trained staff.
            <br />
            Safer workplace.
            <br />
            <em>Stronger tomorrow.</em>
          </h2>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-heading">
          <span className="section-kicker">START A CONVERSATION</span>
          <h2>Make safety easier to act on.</h2>
        </div>

        <div className="contact-grid">
          <a href="tel:+27630508721">
            <small>CALL / WHATSAPP</small>
            <strong>076 719 0108</strong>
            <span>↗</span>
          </a>

          <a href="mailto:info@coastalss.co.za">
            <small>EMAIL</small>
            <strong>riza@coastalsafetysolutions.co.za</strong>
            <span>↗</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-mark">CS</div>
        <div>COASTAL SAFETY SOLUTIONS</div>
        <div>SAFETY TODAY. SECURE TOMORROW.</div>
      </footer>
    </main>
  );
}
