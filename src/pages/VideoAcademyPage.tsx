import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DrStosicInterview } from '@/components/DrStosicInterview';
import { VideoAcademy } from '@/components/VideoAcademy';
import { ExclusiveContent } from '@/components/ExclusiveContent';
import { InstagramReels } from '@/components/InstagramReels';
import { SocialConnect } from '@/components/SocialConnect';
import { FeelHealFestivalSection } from '@/components/FeelHealFestivalSection';
import { ContactFooter } from '@/components/ContactFooter';
import TextShimmer from '@/components/ui/TextShimmer';

export default function VideoAcademyPage() {
  const [whiteOverlay, setWhiteOverlay] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
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

  const scrollToContent = () => {
    const element = document.getElementById('video-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white -mt-20">
      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden pt-0">
        {/* White overlay that fades in on scroll */}
        <div 
          className="absolute inset-0 bg-white z-[25] pointer-events-none transition-opacity duration-300"
          style={{ opacity: whiteOverlay }}
        />
        
        {/* Video Background */}
        <div className="absolute inset-0 top-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-85"
            style={{ objectPosition: 'center center' }}
          >
            <source src="https://www.dropbox.com/scl/fi/wqgyagoa2icy35fe0m3js/0720.mp4?rlkey=49xc5xo94h6szemeq1vk1y3we&st=o9lgmr7c&dl=1" type="video/mp4" />
          </video>
        </div>

        {/* Enhanced Video Overlay for Premium Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 pointer-events-none z-0" />

        {/* Hero Content with Fade Out Effect */}
        <motion.div style={{ opacity, y }} className="absolute inset-0">
          <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
            <div className="mx-auto max-w-[820px] relative w-full text-center">
              {/* Glassmorphic Content Box */}
              <div 
                className="rounded-2xl p-8 md:p-12 border border-white/25 relative overflow-hidden"
                style={{
                  background: 'rgba(0,0,0,0.28)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 0 20px rgba(185,151,91,0.08)'
                }}
              >
                {/* Subtle top reflection for premium depth */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)'
                  }}
                />

                <div className="relative z-10">
                  {/* Tagline Badge */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-[#B9975B]/20 border border-[#B9975B]/30 rounded-full backdrop-blur-sm"
                  >
                    <span className="text-[#B9975B] font-bold text-sm uppercase tracking-[0.05em]">
                      Znanje na dohvat ruke
                    </span>
                  </motion.div>

                  {/* Small subtitle above main heading */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="mb-4"
                  >
                    <span 
                      className="block font-playfair font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 tracking-wide"
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      Supra Video Akademija
                    </span>
                  </motion.div>

                  {/* Main Title with Shimmer */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="mb-8 md:mb-10"
                  >
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.01em] leading-[0.9] text-center relative z-[4]">
                      <TextShimmer 
                        className="font-playfair font-bold text-white drop-shadow-xl tracking-wide relative z-[4] [--base-gradient-color:#ffd700] [--base-color:#ffffff] [text-shadow:0_6px_12px_rgba(0,0,0,0.6),0_3px_6px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.3)]"
                        duration={2.5} 
                        spread={3}
                      >
                        UVIDI. TEHNIKE. STRUČNJACI.
                      </TextShimmer>
                    </div>
                  </motion.div>

                  {/* Subtitle */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="mb-6"
                  >
                    <h2 
                      className="text-[clamp(20px,3vw,28px)] leading-relaxed tracking-wide font-medium text-center drop-shadow-md"
                      style={{ color: '#B9975B' }}
                    >
                      Istražite našu biblioteku edukativnih sadržaja
                    </h2>
                  </motion.div>

                  {/* Description */}
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-[1.7] text-center font-inter"
                    style={{
                      color: 'rgba(255,255,255,0.85)',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                    }}
                  >
                    Od intervjua s predavačima i promotivnih pregleda do kratkih edukativnih isječaka koji prikazuju duh i kvalitetu naše edukacije — sve na jednom mjestu.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative group"
                    >
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-[#D4AF37] to-[#B9975B] hover:from-[#c19b2a] hover:to-[#a88544] text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#B9975B]/30 transition-all duration-300 border-0"
                        onClick={scrollToContent}
                        style={{
                          boxShadow: '0 6px 12px rgba(0,0,0,0.08)'
                        }}
                      >
                        🎥 Pogledaj video sadržaje
                      </Button>
                      <div className="absolute inset-0 rounded-2xl bg-[#D4AF37] blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        size="lg" 
                        className="backdrop-blur-md text-white hover:bg-[#B9975B]/20 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-[0.45s] hover:shadow-lg"
                        style={{
                          background: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.6)',
                          boxShadow: '0 6px 12px rgba(0,0,0,0.08)'
                        }}
                        onClick={() => window.location.href = '/prijava'}
                      >
                        📝 Prijavi se na tečaj
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div id="video-content">
        <DrStosicInterview />
        <VideoAcademy />
        <ExclusiveContent />
        <InstagramReels />
        <SocialConnect />
        <FeelHealFestivalSection />
      </div>
      <ContactFooter />
    </div>
  );
}
