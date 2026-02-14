'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TextShimmer from './TextShimmer';
import AnimatedGroup from './AnimatedGroup';
import HeroHeader from './HeroHeader';
import HeroCTAButtons from './HeroCTAButtons';
import HeroSubtitle from './HeroSubtitle';
import BodyText from './BodyText';
const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5
      }
    }
  }
};
function AppleHeroSection() {
  const [whiteOverlay, setWhiteOverlay] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]); // Parallax at 0.9x speed
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 0.7]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeDistance = 600;
      const whiteOpacity = Math.min(1, scrollY / fadeDistance);
      setWhiteOverlay(whiteOpacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <>
      <HeroHeader />
      <main ref={heroRef} className="overflow-hidden relative min-h-screen">
        {/* White overlay that fades in on scroll */}
        <div className="absolute inset-0 bg-white z-[35] pointer-events-none transition-opacity duration-300" style={{
        opacity: whiteOverlay
      }} />
        
        {/* Diagonal Background Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(
              45deg,
              #a58d4e 0px,
              #a58d4e 1px,
              transparent 1px,
              transparent 20px
            )`,
        opacity: 0.04
      }} />

        {/* Hero Background Video with Enhanced Overlays */}
        <motion.div style={{
        y: backgroundY, willChange: 'transform', transform: 'translateZ(0)'
      }} className="absolute inset-0 z-10">
          {/* Premium gradient overlays for perfect readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.38] to-black/[0.55] z-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/[0.02] via-transparent to-black/[0.02] z-15" />
          <motion.div style={{
          opacity: overlayOpacity
        }} className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent z-18" />
          
          {/* Bottom blur mask for depth */}
          <div className="absolute inset-0 z-19" style={{
          background: 'linear-gradient(to bottom, transparent 70%, rgba(0,0,0,0.1) 100%)',
          backdropFilter: 'blur(2px)'
        }} />
          
          {/* Floating golden bokeh elements */}
          <motion.div animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0]
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#D4AF37]/[0.03] blur-3xl z-12" />
          <motion.div animate={{
          x: [0, -40, 25, 0],
          y: [0, 30, -20, 0]
        }} transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }} className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-[#D4AF37]/[0.04] blur-2xl z-12" />
          <motion.div animate={{
          x: [0, 20, -35, 0],
          y: [0, -15, 25, 0]
        }} transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }} className="absolute bottom-1/3 right-1/2 w-20 h-20 rounded-full bg-[#D4AF37]/[0.02] blur-xl z-12" />
          
          {/* Background Video with Parallax */}
          <motion.video initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1.2
        }} autoPlay muted loop playsInline preload="auto" poster="/lovable-uploads/1b5efec4-3889-44fd-a4a1-0cc1b67a3012.png" aria-hidden="true" className="w-full h-full object-cover object-center" style={{
          transform: `translateY(${videoY})`,
          filter: 'brightness(0.72) contrast(1.08)'
        }} onCanPlay={e => {
          const video = e.currentTarget;
          video.play().catch(() => {
            console.log('Video autoplay blocked, using poster fallback');
          });
        }}>
            <source src="https://www.dropbox.com/scl/fi/g2k7uc7aayor5i6qt81nk/Home-video.mp4?dl=1" type="video/mp4" />
            <img src="/lovable-uploads/1b5efec4-3889-44fd-a4a1-0cc1b67a3012.png" alt="Human connection and warmth in therapy" className="w-full h-full object-cover object-center" />
          </motion.video>
        </motion.div>

        <section className="relative z-30">
          <motion.div className="relative pt-32 md:pt-40 lg:pt-48 min-h-screen flex items-center">
            <div className="mx-auto max-w-4xl px-6 relative w-full text-center">
              <AnimatedGroup variants={transitionVariants}>
                {/* Single Badge */}
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }} className="mb-8">
                  <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-300/30 px-4 py-2 text-sm font-medium text-green-200 backdrop-blur-sm">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-400/30">
                      <svg className="w-3 h-3 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-semibold">1000+ uspješnih polaznika</span>
                  </div>
                </motion.div>

                {/* Hero Title with typography hierarchy */}
                <motion.div initial={{
                opacity: 0,
                y: 30
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.4
              }} className="mb-2 md:mb-8 relative max-w-[85%] md:max-w-none mx-auto">
                  <h1 className="tracking-[-0.01em] md:tracking-[-0.01em] leading-[1.1] md:leading-[0.9] text-center relative z-20 font-bold text-[clamp(2rem,6vw,3rem)] md:text-8xl">
                    <span style={{
                    textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)'
                  }} className="block font-playfair font-normal text-white/90 drop-shadow-lg mb-1 md:mb-2 tracking-[0.02em] md:tracking-wide text-[clamp(1.25rem,4vw,1.875rem)] md:text-5xl">
                      Učilište
                    </span>
                    <TextShimmer className="font-playfair font-bold text-white drop-shadow-xl tracking-[0.02em] md:tracking-wide text-shadow-lg relative z-30 [--base-gradient-color:#ffd700] [--base-color:#ffffff] [text-shadow:0_6px_12px_rgba(0,0,0,0.6),0_3px_6px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.3)]" duration={2.5} spread={3}>
                      SUPRA STUDIUM
                    </TextShimmer>
                  </h1>
                </motion.div>

                {/* Hero Subtitle - Call to journey */}
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.6
              }} className="mb-6 md:mb-8 mt-2 md:mt-0">
                  <HeroSubtitle className="drop-shadow-md text-center text-[clamp(1.125rem,3vw,1.75rem)]">
                    Gdje rastu super-terapeuti.
                  </HeroSubtitle>
                </motion.div>

                {/* Clean merged description with background overlay */}
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.8
              }} className="mb-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg max-w-3xl mx-auto">
                  <BodyText className="text-white/85 text-center" maxLines={6}>
                    Supra Studium nije samo učilište – to je pokret koji oblikuje novu generaciju terapeuta: onih koji znaju, osjećaju i djeluju s jasnoćom i svrhom.
S više znanja, više prisutnosti i dubljim djelovanjem. Pridruži se edukaciji koja ostavlja trag – u tijelu, umu i zajednici.
                  </BodyText>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 1.0
              }}>
                  <HeroCTAButtons />
                  
                </motion.div>
              </AnimatedGroup>
            </div>
          </motion.div>
        </section>

        {/* Premium Section Transition with Diagonal Fade */}
        <div className="absolute bottom-0 left-0 right-0 z-40">
          {/* Gold hairline separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
          {/* Soft diagonal fade to next section */}
          
          
        </div>
      </main>
    </>;
}
export default AppleHeroSection;