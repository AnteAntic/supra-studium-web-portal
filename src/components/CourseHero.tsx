import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';

export interface CourseHeroFact {
  field: string;
  value: string;
  detail: string;
}

export interface CourseHeroCTA {
  label: string;
  onClick: () => void;
}

export interface CourseHeroProps {
  category: string;
  headline: React.ReactNode;
  subheadline: string;
  videoSrc: string;
  videoPoster?: string;
  primaryCTA: CourseHeroCTA;
  secondaryCTA?: CourseHeroCTA;
  facts: [CourseHeroFact, CourseHeroFact, CourseHeroFact, CourseHeroFact];
}

export function CourseHero({
  category,
  headline,
  subheadline,
  videoSrc,
  videoPoster,
  primaryCTA,
  secondaryCTA,
  facts,
}: CourseHeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden -mt-20">

        {/* Video */}
        <div className="absolute inset-0 top-[-5rem]">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={videoPoster}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'top center' }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        {/* Base tonal settle */}
        <div className="absolute inset-0 bg-black/12" />

        {/* Desktop: soft left-to-right atmospheric zone */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(108deg, rgba(10,8,6,0.50) 0%, rgba(10,8,6,0.30) 32%, rgba(10,8,6,0.08) 58%, transparent 76%)',
          }}
        />

        {/* Mobile: vertical atmospheric gradient */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(to bottom, rgba(8,6,4,0.42) 0%, rgba(8,6,4,0.34) 28%, rgba(8,6,4,0.22) 52%, rgba(8,6,4,0.14) 72%, rgba(8,6,4,0.22) 100%)',
          }}
        />

        {/* Top vignette */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/18 to-transparent" />

        {/* Bottom grounding vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/22 to-transparent" />

        {/* Text content */}
        <motion.div style={{ opacity, y }} className="absolute inset-0">
          <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
            <div className="max-w-xl relative w-full" style={{ marginTop: '-3%' }}>

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-6"
              >
                <span className="text-[#B89A4F]/75 text-[9px] sm:text-[10px] font-normal uppercase tracking-[0.2em] sm:tracking-[0.28em] whitespace-nowrap overflow-hidden block">
                  {category}
                </span>
              </motion.div>

              {/* Separator */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                className="origin-left mb-8"
              >
                <div className="w-10 h-px bg-[#B89A4F]/45" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
                className="mb-9"
              >
                <h1
                  className="font-playfair font-semibold text-white leading-[1.18] text-[1.75rem] sm:text-[2rem] md:text-[2.1rem]"
                  style={{ textShadow: '0 1px 12px rgba(0,0,0,0.38), 0 1px 3px rgba(0,0,0,0.22)' }}
                >
                  {headline}
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mb-10"
              >
                <p className="text-[13px] font-normal text-white/65 leading-[1.65] max-w-sm">
                  {subheadline}
                </p>
              </motion.div>

              {/* CTA group */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.7 }}
                className="flex flex-row items-center gap-4"
              >
                <Button
                  className="bg-[#B89A4F]/90 hover:bg-[#B89A4F] text-white px-7 py-2.5 text-xs font-medium rounded-sm tracking-wider uppercase transition-colors duration-300 border-0 shadow-none h-auto"
                  onClick={primaryCTA.onClick}
                >
                  {primaryCTA.label}
                </Button>

                {secondaryCTA && (
                  <button
                    className="text-white/68 hover:text-white/90 text-xs font-normal tracking-[0.12em] transition-colors duration-400 bg-transparent border-0 cursor-pointer p-0"
                    onClick={secondaryCTA.onClick}
                  >
                    — {secondaryCTA.label}
                  </button>
                )}
              </motion.div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Facts Band ─────────────────────────────────────────── */}
      <section className="bg-[#F4F1EA] pt-5">
        <div className="container mx-auto px-6 md:px-10">
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{
              borderTop: '1px solid rgba(0,0,0,0.08)',
              borderBottom: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            {facts.map((item, i) => (
              <div
                key={i}
                className={[
                  'py-7 px-6 md:px-8',
                  i === 0 ? 'pl-0' : '',
                  i === 3 ? 'md:pr-0' : '',
                ].join(' ')}
                style={{
                  borderLeft: i !== 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                }}
              >
                <div
                  className="text-[9.5px] uppercase tracking-[0.25em] mb-2 font-normal"
                  style={{ color: '#B89A4F' }}
                >
                  {item.field}
                </div>
                <div
                  className="text-[18px] font-medium leading-snug"
                  style={{ color: '#0e0e0e' }}
                >
                  {item.value}
                </div>
                <div
                  className="text-[12px] mt-1 font-normal leading-relaxed"
                  style={{ color: '#3b3b3b' }}
                >
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
