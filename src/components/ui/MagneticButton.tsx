"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  strength?: number;
  dataCursor?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  strength = 0.35,
  dataCursor = "pointer",
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    gsap.to(el, {
      x: x * strength,
      y: y * strength,
      duration: 0.35,
      ease: "power2.out",
    });

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        x: x * (strength * 0.5),
        y: y * (strength * 0.5),
        duration: 0.35,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    const el = containerRef.current;
    if (!el) return;

    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.4)",
    });

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
      });
    }
  };

  const buttonContent = (
    <span
      ref={contentRef}
      className="relative z-10 inline-flex items-center justify-center transition-transform duration-200"
    >
      {children}
    </span>
  );

  const baseStyles = `relative inline-flex items-center justify-center transition-colors will-change-transform focus:outline-none ${className}`;

  if (href) {
    return (
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <a
          href={href}
          data-cursor={dataCursor}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${baseStyles} ${
            isFocused ? "ring-1 ring-white/40 ring-offset-2 ring-offset-black" : ""
          }`}
        >
          {buttonContent}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <button
        type="button"
        onClick={onClick}
        data-cursor={dataCursor}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`${baseStyles} ${
          isFocused ? "ring-1 ring-white/40 ring-offset-2 ring-offset-black" : ""
        }`}
      >
        {buttonContent}
      </button>
    </div>
  );
}
