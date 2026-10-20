"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // GPU-accelerated coordinate setters
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.22, ease: "power2.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.22, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);

      // Check context from target element
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor]") as HTMLElement | null;

      if (interactiveEl) {
        const mode = interactiveEl.getAttribute("data-cursor");
        const customText = interactiveEl.getAttribute("data-cursor-text") || "";

        if (mode === "view") {
          setIsHovered(true);
          setIsPointer(false);
          setCursorText(customText || "EXPLORAR");
        } else if (mode === "pointer" || interactiveEl.tagName === "BUTTON" || interactiveEl.tagName === "A") {
          setIsPointer(true);
          setIsHovered(false);
          setCursorText("");
        }
      } else {
        const isClickable = target?.closest("button, a, input, textarea, [role='button']");
        if (isClickable) {
          setIsPointer(true);
          setIsHovered(false);
          setCursorText("");
        } else {
          setIsHovered(false);
          setIsPointer(false);
          setCursorText("");
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-[100] flex items-center justify-center rounded-full mix-blend-difference will-change-transform transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: "translate(-50%, -50%)",
        width: isHovered ? "80px" : isPointer ? "44px" : "10px",
        height: isHovered ? "80px" : isPointer ? "44px" : "10px",
        backgroundColor: isHovered ? "#ffffff" : isPointer ? "rgba(255, 255, 255, 0.2)" : "#ffffff",
        backdropFilter: isPointer ? "blur(4px)" : "none",
        border: isPointer ? "1px solid rgba(255, 255, 255, 0.4)" : "none",
        transition: "width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border 0.25s ease",
      }}
    >
      {isHovered && cursorText && (
        <span
          ref={textRef}
          className="text-[9px] font-mono uppercase tracking-[0.2em] font-medium text-black select-none text-center px-1"
        >
          {cursorText}
        </span>
      )}
    </div>
  );
}
