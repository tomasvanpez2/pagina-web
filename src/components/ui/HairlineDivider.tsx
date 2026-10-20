import React from "react";

interface HairlineDividerProps {
  label?: string;
  sublabel?: string;
  className?: string;
}

export default function HairlineDivider({
  label,
  sublabel,
  className = "",
}: HairlineDividerProps) {
  return (
    <div className={`relative w-full py-4 ${className}`}>
      <div className="h-[1px] w-full bg-white/[0.08]" />
      {(label || sublabel) && (
        <div className="flex items-center justify-between pt-3 text-[10px] uppercase font-mono tracking-[0.25em] text-[#8e8e93]">
          {label && <span>{label}</span>}
          {sublabel && <span className="text-[#55555a]">{sublabel}</span>}
        </div>
      )}
    </div>
  );
}
