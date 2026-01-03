import React from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  icon?: LucideIcon;
}

export const WhySupraCard: React.FC<CardProps> = ({ title, description, image }) => (
  <div
    className="relative rounded-2xl overflow-hidden group"
    aria-label={title}
  >
    {/* Background image (both mobile and desktop) */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
      style={{
        backgroundImage: `url(${image})`,
        filter: "brightness(0.9) saturate(0.9)"
      }}
    />

    {/* Mobile dark overlay for contrast */}
    <div className="absolute inset-0 md:hidden bg-gradient-to-b from-black/60 via-black/50 to-black/40 backdrop-blur-sm" />
    
    {/* Mobile inner glow */}
    <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/40 to-transparent" />

    {/* Desktop gold top light + vignette edges */}
    <div
      className="absolute inset-0 pointer-events-none hidden md:block"
      style={{
        background:
          "linear-gradient(180deg, rgba(217,182,123,0.18) 0%, rgba(0,0,0,0) 25%), radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.36) 100%)"
      }}
    />

    {/* Content wrapper */}
    <div className="relative z-10 min-h-[280px] flex flex-col justify-end p-5 md:p-6 md:mx-4 md:my-4">
      {/* Desktop glass effect */}
      <div className="hidden md:block backdrop-blur-md bg-white/10 border border-white/10 rounded-lg p-5 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
        <h3 className="text-white text-xl font-semibold tracking-tight drop-shadow-md">
          {title}
        </h3>
        <p className="text-white/90 mt-2 text-sm leading-relaxed">{description}</p>
      </div>
      
      {/* Mobile solid content */}
      <div className="md:hidden">
        <h3 className="text-white text-lg font-bold tracking-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          {title}
        </h3>
        <p className="text-white mt-2 text-sm leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">{description}</p>
      </div>
    </div>
  </div>
);
