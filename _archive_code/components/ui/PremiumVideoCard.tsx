import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface PremiumVideoCardProps {
  videoId: string;
  posterUrl?: string;
}
export const PremiumVideoCard = ({
  videoId,
  posterUrl
}: PremiumVideoCardProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const handlePlayClick = () => {
    setIsVideoLoaded(true);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePlayClick();
    }
  };
  return <motion.div initial={{
    opacity: 0,
    scale: 0.98
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: 0.6,
    delay: 0.12,
    ease: [0.22, 0.9, 0.29, 1]
  }} className="video-hero--refactor max-w-[920px] mx-auto px-5 md:px-0">
      {/* Glassmorphic Card */}
      <motion.div whileHover={{
      y: -8,
      boxShadow: '0 32px 64px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(212,175,55,0.18)'
    }} transition={{
      duration: 0.35,
      ease: [0.22, 0.9, 0.29, 1]
    }} className="rounded-2xl relative overflow-hidden group" style={{
      background: 'rgba(0,0,0,0.75)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      boxShadow: '0 24px 48px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(212,175,55,0.12)'
    }} role="region" aria-labelledby="video-card-title">
        {/* Video/Poster Section */}
        <div className="relative aspect-video bg-black/90 rounded-t-2xl overflow-hidden">
          {!isVideoLoaded ? <>
              {/* Poster Image */}
              <img src={posterUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt="Crossfriction – Funkcionalna masaža video preview" loading="lazy" className="w-full h-full object-cover" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <motion.button whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }} onClick={handlePlayClick} onKeyDown={handleKeyDown} aria-label="Play video Crossfriction – Otvara se u lightboxu" className="relative z-10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-full">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative overflow-hidden" style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #B9975B 100%)',
                boxShadow: '0 8px 24px rgba(212,175,55,0.4), 0 0 0 2px rgba(255,255,255,0.2)'
              }}>
                    {/* Ripple effect on hover */}
                    <motion.div className="absolute inset-0 rounded-full bg-white/20" initial={{
                  scale: 0,
                  opacity: 0.6
                }} whileHover={{
                  scale: 1.5,
                  opacity: 0
                }} transition={{
                  duration: 0.6
                }} />
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white ml-1" />
                  </div>
                </motion.button>
              </div>
            </> : <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`} title="Crossfriction & Funkcionalna masaža – Video vodič" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy" />}
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-12 text-center flex flex-col items-center justify-center">
          {/* Tag/Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3,
          duration: 0.5
        }} className="inline-flex items-center mb-6">
            <span className="px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider text-white" style={{
            background: 'linear-gradient(135deg, #D4AF37 0%, #B9975B 100%)',
            boxShadow: '0 6px 20px rgba(212,175,55,0.5)'
          }}>CFM - MODUL 1</span>
          </motion.div>

          {/* Headline */}
          <motion.h2 id="video-card-title" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} style={{
          fontSize: 'clamp(26px, 4vw, 48px)',
          lineHeight: '1.1',
          color: '#ffffff',
          textShadow: '0 8px 24px rgba(0,0,0,0.7), 0 4px 12px rgba(0,0,0,0.5)'
        }} className="font-playfair font-black mb-6 tracking-tight max-w-4xl text-3xl text-center">Crossfriction &amp; Funkcionalna masaža - Temelj za uspješan Body Reset</motion.h2>

          {/* Subheadline */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5,
          duration: 0.6
        }} style={{
          color: '#E8E6E3',
          lineHeight: '1.5',
          textShadow: '0 2px 8px rgba(0,0,0,0.6)'
        }} className="text-base md:text-lg mb-8 font-normal max-w-3xl text-center">Otvorite vrata holističkoj terapiji uz tehnike koje povezuju mišiće, fascije, zglobove i živce u jedan učinkovit tretman koji smanjuje bol i poboljšava posturu.</motion.p>

          {/* Meta Info */}
          

          {/* CTAs */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.7,
          duration: 0.6
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <motion.div whileHover={{
            y: -4,
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="relative group/btn">
              
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover={{
            y: -4,
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }}>
              <Button size="lg" onClick={() => window.location.href = '/prijava'} className="px-8 py-6 text-base md:text-lg font-bold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4" style={{
              background: 'rgba(255,255,255,0.08)',
              border: '2px solid rgba(212,175,55,0.6)',
              color: '#FFFFFF',
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
              textShadow: '0 2px 6px rgba(0,0,0,0.5)'
            }} onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #D4AF37 0%, #B9975B 100%)';
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(212,175,55,0.6)';
            }} onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.borderColor = 'rgba(212,175,55,0.6)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
            }} aria-label="Prijavi se na tečaj" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                  Prijavi se na tečaj
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* JSON-LD Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Crossfriction & Funkcionalna masaža – Snaga funkcionalnog pristupa u praksi",
        "description": "Pogledajte kako Body Reset pristup integrira primjenu crossfriction tehniku – kroz edukacijski video s demonstracijama, objašnjenjima i stvarnim primjerima iz edukacije.",
        "thumbnailUrl": `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        "uploadDate": new Date().toISOString(),
        "contentUrl": `https://www.youtube.com/watch?v=${videoId}`,
        "embedUrl": `https://www.youtube.com/embed/${videoId}`,
        "duration": "PT12M"
      })}
      </script>
    </motion.div>;
};