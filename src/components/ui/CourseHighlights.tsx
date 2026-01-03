"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HighlightItem {
  icon: string;
  title: string;
  subtitle: string;
  small?: string;
}
interface CourseHighlightsProps {
  items: [HighlightItem, HighlightItem, HighlightItem, HighlightItem];
  accentIndex?: number | null;
  ctaBelow?: React.ReactNode;
  bg?: 'dark' | 'light';
  className?: string;
}
export function CourseHighlights({
  items,
  accentIndex = null,
  ctaBelow,
  bg = 'dark',
  className
}: CourseHighlightsProps) {
  return <section className={cn("relative py-20 overflow-hidden", bg === 'dark' ? 'bg-[#0E0E0E]' : 'bg-white', className)}>
      {/* Hero to cards transition gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0E0E0E]" />
      
      {/* Subtle gold bokeh particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-[#D4AF37] opacity-[0.08] rounded-full blur-sm animate-[float_15s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-[#D4AF37] opacity-[0.12] rounded-full blur-sm animate-[float_20s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-[#D4AF37] opacity-[0.10] rounded-full blur-sm animate-[float_18s_ease-in-out_infinite]" />
      </div>
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/15 opacity-40" aria-hidden="true" />
      
      <div className="container mx-auto px-6 relative z-10 pt-12">
        {/* Desktop: 4 cards in row, Tablet: 2x2, Mobile: stacked */}
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-5 lg:gap-7">
            {items.map((item, index) => {
            const isAccented = accentIndex === index;
            return <React.Fragment key={index}>
                  <motion.div initial={{
                opacity: 0,
                y: 20,
                scale: 0.95
              }} whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
              }} transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
              }} viewport={{
                once: true
              }} whileHover={{
                scale: 1.02,
                transition: {
                  duration: 0.2
                }
              }} className="group focus-within:outline-none focus-within:ring-2 focus-within:ring-[#B4BA1E] focus-within:ring-offset-2 focus-within:ring-offset-transparent rounded-2xl">
                    <div className={cn("backdrop-blur-sm bg-white/6 border border-[#D4AF37]/20 rounded-2xl p-7 text-left relative overflow-hidden", "shadow-lg", "transition-all duration-300", "hover:bg-white/8 hover:shadow-[0_8px_32px_rgba(212,175,55,0.25)]", isAccented && "ring-1 ring-[#D4AF37]/35 shadow-[0_0_20px_rgba(212,175,55,0.15)]")}>
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Accent gold halo for highlighted card */}
                      {isAccented && <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#D4AF37]/25 via-transparent to-[#D4AF37]/25 blur-sm" />}
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="mb-4 text-3xl leading-none">
                          {item.icon}
                        </div>
                        
                        {/* Title */}
                        <h3 className="font-semibold text-lg text-white mb-2 leading-tight">
                          {item.title}
                        </h3>
                        
                        {/* Subtitle */}
                        <p className="text-[15px] font-medium mb-2 leading-relaxed text-white/90">
                          {item.subtitle}
                        </p>
                        
                        {/* Small text */}
                        {item.small && <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
                            {item.small}
                          </p>}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Golden separators between cards on desktop only */}
                  {index < items.length - 1 && <div className="hidden lg:flex items-center justify-center absolute" style={{
                left: `${(index + 1) * 25 - 0.5}%`,
                top: '50%',
                transform: 'translateY(-50%)'
              }}>
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full opacity-30" />
                    </div>}
                </React.Fragment>;
          })}
          </div>
        </div>
        
        {/* Optional CTA below cards */}
        {ctaBelow && <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} viewport={{
        once: true
      }} className="mt-12 text-center">
            {ctaBelow}
          </motion.div>}
      </div>
    </section>;
}