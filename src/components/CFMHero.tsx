import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface CFMHeroProps {
  onScrollToProgram: () => void;
  onScrollToLocations: () => void;
}

export function CFMHero({ onScrollToProgram, onScrollToLocations }: CFMHeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '42%']);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden -mt-20">

      {/* Background — YouTube video, Modul I */}
      <motion.div
        className="absolute inset-0 top-[-5rem] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        <iframe
          src="https://www.youtube.com/embed/KiDLo2J4CjA?autoplay=1&mute=1&loop=1&playlist=KiDLo2J4CjA&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&playsinline=1"
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'max(100%, calc(100vh * 1.7778))',
            height: 'max(100%, calc(100vw * 0.5625))',
            pointerEvents: 'none',
            border: 'none',
          }}
          allow="autoplay; encrypted-media"
          title=""
        />
      </motion.div>

      {/* Base atmospheric tonal layer — warm charcoal */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(16,10,4,0.20)' }}
      />

      {/* Cinematic edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 130% 130% at 50% 50%, transparent 28%, rgba(6,4,2,0.32) 100%)',
        }}
      />

      {/* Radial text-zone darkening — grounds the headline */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background: 'radial-gradient(ellipse 68% 75% at 22% 78%, rgba(8,5,2,0.42) 0%, transparent 100%)',
        }}
      />

      {/* Desktop: directional text-zone — warm charcoal left, atmosphere right */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgba(15,12,8,0.82) 0%, rgba(15,12,8,0.58) 32%, rgba(15,12,8,0.14) 56%, transparent 70%)',
        }}
      />

      {/* Desktop: bottom grounding — warm falloff, not pure black */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to top, rgba(10,8,5,0.44) 0%, rgba(10,8,5,0.20) 30%, transparent 52%)',
        }}
      />

      {/* Desktop: top vignette */}
      <div
        className="absolute top-0 left-0 right-0 h-32 hidden md:block"
        style={{ background: 'linear-gradient(to bottom, rgba(8,6,4,0.16), transparent)' }}
      />

      {/* Mobile: vertical atmospheric gradient — warm charcoal */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(to bottom, rgba(14,11,7,0.58) 0%, rgba(14,11,7,0.48) 22%, rgba(14,11,7,0.38) 48%, rgba(14,11,7,0.26) 70%, rgba(14,11,7,0.36) 100%)',
        }}
      />

      {/* Documentary grain — atmospheric texture, breaks clean-render feel */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
          opacity: 0.038,
          mixBlendMode: 'screen',
        }}
      />

      {/* Content — bottom-left, documentary positioning */}
      <motion.div style={{ opacity, y }} className="absolute inset-0">
        <div className="container mx-auto px-6 relative z-10 h-full flex items-end pb-[18%] md:pb-[8%]">
          <div className="w-full" style={{ maxWidth: '50rem' }}>

            {/* Category label */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
              className="mb-6"
            >
              <span
                className="text-[10px] sm:text-[11px] font-normal uppercase tracking-[0.28em] block"
                style={{ color: 'rgba(212,175,55,0.92)', textShadow: '0 1px 2px rgba(0,0,0,0.35)' }}
              >
                CFM Body Reset Method
              </span>
            </motion.div>

            {/* Separator */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.50, duration: 0.7, ease: 'easeOut' }}
              className="origin-left mb-9"
            >
              <div
                className="w-10 h-px"
                style={{ backgroundColor: 'rgba(212,175,55,0.40)' }}
              />
            </motion.div>

            {/* Headline — weighted clinical observation */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 1.05, ease: 'easeOut' }}
              className="mb-9"
            >
              <h1
                className="font-playfair font-semibold text-white leading-[1.17] text-[2.05rem] sm:text-[2.35rem] md:text-[2.7rem]"
                style={{
                  textShadow:
                    '0 2px 24px rgba(0,0,0,0.72), 0 1px 6px rgba(0,0,0,0.40)',
                }}
              >
                {'Kada tehnika'}
                <br className="sm:hidden" />{' '}
                {'više nije dovoljna.'}
                <br />
                <span
                  className="block sm:hidden"
                  style={{ height: '0.3em' }}
                  aria-hidden="true"
                />
                {'Počinje terapijsko'}
                <br className="sm:hidden" />{' '}
                {'razmišljanje.'}
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.95, ease: 'easeOut' }}
              className="mb-9"
            >
              <p
                className="text-[13.5px] sm:text-[14px] font-normal leading-[1.75]"
                style={{ color: 'rgba(255,255,255,0.58)', maxWidth: '44ch' }}
              >
                Metodologija palpacije i funkcionalnog razmišljanja za terapeute
                koji žele razumjeti logiku tkivnog odgovora.
              </p>
            </motion.div>

            {/* Meta strip */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.85, ease: 'easeOut' }}
              className="mb-14 flex flex-wrap items-center"
              style={{ columnGap: '14px', rowGap: '4px' }}
            >
              {[
                '2 dana',
                'Rad u paru',
                'Certifikat',
                'Periodične edukacije u manjim grupama.',
              ].map((item, i) => (
                <React.Fragment key={item}>
                  {i > 0 && (
                    <span
                      style={{
                        color: 'rgba(255,255,255,0.24)',
                        fontSize: '11px',
                        lineHeight: 1,
                      }}
                    >
                      ·
                    </span>
                  )}
                  <span
                    className="font-normal"
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.05em',
                      color: 'rgba(255,255,255,0.35)',
                    }}
                  >
                    {item}
                  </span>
                </React.Fragment>
              ))}
            </motion.div>

            {/* CTA group */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.80, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-5"
            >
              {/* Primary — institutional stamp */}
              <button
                className="font-normal uppercase cursor-pointer whitespace-nowrap"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  padding: '8px 20px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: 'rgba(212,175,55,0.90)',
                  color: '#1a1a1a',
                  transition: 'background-color 0.5s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#d4af37';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    'rgba(212,175,55,0.90)';
                }}
                onClick={onScrollToProgram}
              >
                Pogledaj program
              </button>

              {/* Ghost — em-dash prefix per DESIGN.md convention */}
              <button
                className="font-normal uppercase cursor-pointer bg-transparent border-0 p-0"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: 'rgba(255,255,255,0.72)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.45)',
                  transition: 'color 0.35s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.95)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.72)';
                }}
                onClick={onScrollToLocations}
              >
                — Termini i kotizacija
              </button>
            </motion.div>

          </div>
        </div>
      </motion.div>

    </section>
  );
}
