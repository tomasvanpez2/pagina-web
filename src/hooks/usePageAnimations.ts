"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function usePageAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero Reveal Animation
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTl
        .from("[data-hero-headline]", {
          y: 60,
          opacity: 0,
          duration: 1.2,
          delay: 0.2,
          clearProps: "transform,opacity",
        })
        .from(
          "[data-hero-meta]",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            clearProps: "transform,opacity",
          },
          "-=0.7"
        )
        .from(
          "[data-hero-desc]",
          {
            y: 30,
            opacity: 0,
            duration: 0.9,
            clearProps: "transform,opacity",
          },
          "-=0.6"
        );

      // 2. Manifesto Scroll Scrub
      const manifestoSection = document.querySelector("#manifesto-section");
      if (manifestoSection) {
        gsap.from("[data-manifesto-text]", {
          scrollTrigger: {
            trigger: manifestoSection,
            start: "top 75%",
            end: "bottom 85%",
            scrub: 1.2,
          },
          y: 40,
          opacity: 0.25,
          ease: "none",
        });
      }

      // 3. Services Rows Stagger Reveal
      const servicesSection = document.querySelector("#servicios");
      if (servicesSection) {
        gsap.from("#servicios [data-service-row]", {
          scrollTrigger: {
            trigger: servicesSection,
            start: "top 70%",
          },
          y: 35,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "transform,opacity",
        });
      }

      // 4. Selected Works Parallax & Clip-path Reveal
      const projectCards = document.querySelectorAll("[data-project-card]");
      projectCards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          clipPath: "polygon(0% 12%, 100% 0%, 100% 88%, 0% 100%)",
          opacity: 0,
          y: 50,
          duration: 1.1,
          ease: "power3.out",
          clearProps: "clipPath,transform,opacity",
        });
      });

      // 5. Process Cards Stagger
      const processSection = document.querySelector("#proceso");
      if (processSection) {
        gsap.from("#proceso [data-process-card]", {
          scrollTrigger: {
            trigger: processSection,
            start: "top 72%",
          },
          y: 45,
          opacity: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: "power2.out",
          clearProps: "transform,opacity",
        });
      }

      // 6. Footer CTA Scrub
      const footerSection = document.querySelector("#contacto");
      if (footerSection) {
        gsap.from("#contacto h2", {
          scrollTrigger: {
            trigger: footerSection,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 1.0,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);
}
