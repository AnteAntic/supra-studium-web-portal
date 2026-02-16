import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink, Award, BookOpen, Users, Clock, MapPin, GraduationCap, CheckCircle, Calendar, Download, Play, ArrowRight, Euro, UserCheck, MapPinIcon, Trophy, Target, Building, X, Puzzle, Medal, Globe, Star } from "lucide-react";
import HeroSection from '@/components/ui/HeroSection';
import { ContactFooter } from '@/components/ContactFooter';
import AutoCarousel from '@/components/ui/AutoCarousel';
import { CourseStickyBar } from '@/components/ui/CourseStickyBar';
import TextShimmer from '@/components/ui/TextShimmer';
import HeroTitle from '@/components/ui/HeroTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import { CourseHighlights } from '@/components/ui/CourseHighlights';
import { useState, useEffect, useRef } from 'react';
const modules = [{
  number: 1,
  title: "Osnove manualne terapije",
  duration: "27 sati",
  description: "Učiš temelje manualne medicine: indikacije, kontraindikacije i pregled pacijenta s križoboljom.",
  learningOutcomes: ["Mobilizacije, testovi kuka i SI zgloba", "Terapija ishijadičnog živca", "Funkcionalna masaža i repozicije"],
  pdfUrl: "https://www.dropbox.com/scl/fi/hv3ggccj3bigoyxofngyf/raspored-1_stupanj.pdf?rlkey=8dhuv93b1aueor9438q4ngbve&st=8jkdb8g1&dl=1"
}, {
  number: 2,
  title: "Donji ud",
  duration: "18 sati",
  description: "Fokus na kuk, koljeno, gležanj i stopalo.",
  learningOutcomes: ["Mobilizacije i Mulligan tehnike", "Cross-friction masaža ligamenata i tetiva", "Terapija meniska i Ahilove tetive", "Funkcionalna masaža mišića nogu i plantarnih struktura"],
  pdfUrl: "https://www.dropbox.com/scl/fi/s1peg49p41h6rj9iwywu1/raspored-2_stupanj.pdf?rlkey=ofw87spp5r6rr5umtada7vfax&st=c9vvlbxz&dl=1"
}, {
  number: 3,
  title: "Gornji ud",
  duration: "18 sati",
  description: "Rameni pojas, lakat, podlaktica, ručni zglob i prsti.",
  learningOutcomes: ["Tehnike za smrznuto rame, trigger point pristupi", "Mobilizacije lopatice i lakta, dekompresije živaca", "Funkcionalne masaže i manipulacije šake i prstiju"],
  pdfUrl: "https://www.dropbox.com/scl/fi/4akk4tra87tjilms69dxp/raspored-3_stupanj.pdf?rlkey=2wqrsm3iy5rc7lplkh3j7s6w5&st=98yii60m&dl=1"
}, {
  number: 4,
  title: "Kralježnica (prsna i vratna)",
  duration: "18 sati",
  description: "Detaljan rad na torakalnoj i cervikalnoj kralježnici.",
  learningOutcomes: ["Mobilizacije i manipulacije rebara, Mulligan tehnike", "Sigurnosni testovi, tehnike za TOS i podlubanjske mišiće", "Poseban fokus na sigurnost i preciznost"],
  pdfUrl: "https://www.dropbox.com/scl/fi/bz93bt9daloo9mq0os52r/raspored-4_stupanj.pdf?rlkey=da0aa3adr8565p4picpncaugs&st=p02jdd4f&dl=1"
}, {
  number: 5,
  title: "Napredni program",
  duration: "18 sati",
  description: "Namijenjen samo onima koji su završili prethodna 4 stupnja.",
  learningOutcomes: ["Analiza stvarnih slučajeva iz prakse", "Napredne tehnike po izboru voditelja", "Mogućnost ispita i stjecanja titule Manualnog terapeuta upisive u e-radnu knjižicu"],
  pdfUrl: "https://www.dropbox.com/scl/fi/l8xz55gi1u927casmxz1g/raspored-5-stupanj.pdf?rlkey=vlhmcvvjx8a1d5ymqo5fhpe63&st=2mm38cft&dl=1"
}];
const benefits = [{
  icon: Award,
  title: "Certificirana edukacija",
  description: "Officialno priznanje Učilišta Supra Studium s mogućnošću upisa u e-radnu knjižicu"
}, {
  icon: Users,
  title: "Iskusni mentori",
  description: "Učenje od stručnjaka s dugogodišnjim iskustvom u kliničkoj praksi"
}, {
  icon: BookOpen,
  title: "Teorija + praksa",
  description: "Savršen balans između teoretskog znanja i praktičnih vještina"
}, {
  icon: CheckCircle,
  title: "Mala grupa",
  description: "Individualni pristup svakom polazniku za bolje rezultate učenja"
}];
export default function ManualTherapySchoolPage() {
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [blackOverlay, setBlackOverlay] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate hero opacity based on scroll position
      // Fade out from scroll 0 to 600px
      const scrollY = window.scrollY;
      const fadeDistance = 600;
      const opacity = Math.max(0, 1 - scrollY / fadeDistance);
      setHeroOpacity(opacity);

      // Black overlay increases as hero fades
      const blackOpacity = Math.min(1, scrollY / fadeDistance);
      setBlackOverlay(blackOpacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="-mt-20 relative">
      {/* Unified Sticky Bar */}
      <CourseStickyBar
      locations={[
      { city: "Rijeka", dates: "18.-19.04.", stage: "4. stupanj" },
      { city: "Zagreb", dates: "21-22.03.", stage: "3. stupanj" },
      { city: "Zagreb", dates: "6.–8. 2. 2026.", stage: "1. stupanj" }]
      }
      price="390 €"
      ctaText="Prijavi se"
      theme="light" />


      {/* Enhanced Hero Section */}
      <section
      className="relative min-h-screen flex items-center overflow-hidden">

        {/* Black overlay that fades in on scroll */}
        <div
        className="absolute inset-0 bg-black z-[3] pointer-events-none transition-opacity duration-300"
        style={{ opacity: blackOverlay }} />

        
        {/* Video Background - Z-index 0 */}
        <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline poster="/lovable-uploads/2ef2738d-0fc6-4dd0-b4ed-be99f3747df4.png">
          <source src="/videos/hero-MT.mp4" type="video/mp4" />
        </video>
        
        {/* Static fallback image (hidden initially) */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0" style={{
        backgroundImage: "url('/lovable-uploads/2ef2738d-0fc6-4dd0-b4ed-be99f3747df4.png')",
        display: 'none'
      }} />
        
        {/* Enhanced Overlay - Z-index 1 */}
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)'
      }} />
        
        {/* Gold Bokeh Particles - Z-index 2 */}
        <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Particle 1 */}
          <div className="absolute rounded-full" style={{
          backgroundColor: '#D4AF37',
          width: '18px',
          height: '18px',
          opacity: 0.12,
          top: '25%',
          left: '20%',
          animation: 'float-1 15s ease-in-out infinite'
        }} />
          {/* Particle 2 */}
          <div className="absolute rounded-full" style={{
          backgroundColor: '#D4AF37',
          width: '26px',
          height: '26px',
          opacity: 0.15,
          top: '65%',
          right: '15%',
          animation: 'float-2 20s ease-in-out infinite'
        }} />
          {/* Particle 3 */}
          <div className="absolute rounded-full" style={{
          backgroundColor: '#D4AF37',
          width: '22px',
          height: '22px',
          opacity: 0.14,
          bottom: '35%',
          left: '75%',
          animation: 'float-3 18s ease-in-out infinite'
        }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-[3] max-w-6xl text-center" style={{
        paddingTop: '120px',
        paddingBottom: '80px'
      }}>
          <div className="max-w-5xl mx-auto">
            {/* Main Title with Shimmer - Z-index 4 */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.8
          }}>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[-0.01em] leading-[0.9] text-center relative z-[4]">
                <span className="block font-playfair font-normal text-white/90 drop-shadow-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 tracking-wide" style={{
                textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)'
              }}>
                  Škola
                </span>
                <TextShimmer className="font-playfair font-bold text-white drop-shadow-xl tracking-wide text-shadow-lg relative z-[4] [--base-gradient-color:#ffd700] [--base-color:#ffffff] [text-shadow:0_6px_12px_rgba(0,0,0,0.6),0_3px_6px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.3)]" duration={2.5} spread={3}>
                  MANUALNE TERAPIJE
                </TextShimmer>
              </div>
            </motion.div>
            
            {/* Sub-headline with increased spacing */}
            <motion.h2 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} className="text-xl md:text-2xl mb-10 mt-8 md:mt-10 text-[#d9b67b] font-medium relative z-[3] text-center" style={{
            fontFamily: 'Inter, sans-serif',
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
          }}>
              Postani licencirani manualni terapeut – metoda dr. Stošića
            </motion.h2>
            
            {/* Description in Transparent Content Box */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7,
            duration: 0.8
          }} className="mb-12 md:mb-16 max-w-4xl mx-auto relative z-[3]">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg">
                <p className="text-white/90 text-lg md:text-xl leading-relaxed text-center" style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}>Nauči metodu dr. Stošića – jedini program koji povezuje ortopediju, manualnu terapiju i osteopatiju u učinkovit i jasan sustav rada.</p>
              </div>
            </motion.div>
            
            {/* Ticker */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8,
            duration: 0.8
          }} className="mb-10 md:mb-12 relative z-[3]">
                <div className="backdrop-blur-xl bg-white/10 border border-[#D4AF37]/40 rounded-full px-6 md:px-8 py-3 md:py-4 max-w-2xl mx-auto hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] mr-3 md:mr-4 animate-pulse flex-shrink-0"></div>
                    <div className="overflow-hidden">
                      <div className="ticker-content text-white font-medium text-sm md:text-base">
                        <span className="ticker-item">Znanje koje se prenosi generacijama.</span>
                        <span className="ticker-item">Metoda priznata od europskih federacija.</span>
                        <span className="ticker-item">Praktične vještine koje odmah koristiš u radu.</span>
                      </div>
                    </div>
                  </div>
                </div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.9,
            duration: 0.8
          }} className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-[3]">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.98
            }}>
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B48A1E] text-[#111] px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 border-0 focus:ring-2 focus:ring-[#B48A1E] focus:ring-offset-2" onClick={() => document.getElementById('program-overview')?.scrollIntoView({
                behavior: 'smooth'
              })} aria-label="Pregled programa – Manualna terapija">
                  Pregled programa
                </Button>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} whileTap={{
              scale: 0.98
            }}>
                <Button size="lg" className="backdrop-blur-md bg-white/10 border border-[#D4AF37] text-white hover:bg-[#D4AF37]/10 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/25 focus:ring-2 focus:ring-[#B48A1E] focus:ring-offset-2" onClick={() => document.getElementById('enrollment')?.scrollIntoView({
                behavior: 'smooth'
              })} aria-label="Prijavi se sada – Manualna terapija">
                  Prijavi se sada
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <CourseHighlights items={[{
      icon: "🎓",
      title: "Od 2010. godine",
      subtitle: "Najstarija škola manualne terapije u regiji",
      small: "Iskustvo u kojem se uči s povjerenjem i sigurnošću"
    }, {
      icon: "🧩",
      title: "5 Stupnjeva Do Majstorstva",
      subtitle: "Jasan put od temelja do advanced tehnika",
      small: "Korak po korak do potpunog znanja"
    }, {
      icon: "🏅",
      title: "Diploma Koja Vrijedi",
      subtitle: "Upis u e-knjižicu kao dodatno obrazovanje + međunarodna akreditacija",
      small: "Papir koji otvara stvarna vrata"
    }, {
      icon: "🌍",
      title: "Blizu Vas",
      subtitle: "Edukacije u Zagrebu, Rijeci, Splitu, Šibeniku i Sarajevu",
      small: "Znanje dostupno gdje god jeste"
    }]} accentIndex={1} bg="dark" />

      {/* WhyPainReturns Section - Premium Standalone Block */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Centered on teacher and student */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/4502616b-1016-4ec3-89aa-1c7280d754ef.png')`,
        backgroundPosition: 'center center' // Keep teacher and student in focus
      }} />
        
        {/* Two-layer overlay system */}
        {/* Layer 1: Main gradient overlay */}
        <div className="absolute inset-0" style={{
        background: 'linear-gradient(0deg, rgba(250,250,247,0.98) 60%, rgba(0,0,0,0.25) 100%)'
      }} />
        
        {/* Layer 2: Subtle texture/noise overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }} />
        
        {/* Content Container - Max width 800px for text */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            
            {/* H2 Title with fade-in + blur animation */}
            <motion.div initial={{
            opacity: 0,
            filter: 'blur(6px)'
          }} whileInView={{
            opacity: 1,
            filter: 'blur(0px)'
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="mb-6">
              <h2 className="font-bold text-[#111] mb-4 leading-tight" style={{
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              fontFamily: 'Playfair Display, serif'
            }}>
                Zašto se bol uvijek vraća?
              </h2>
              {/* Golden underline accent */}
              <div className="mx-auto rounded-full mt-3" style={{
              width: '64px',
              height: '2px',
              backgroundColor: '#B9975B'
            }} />
            </motion.div>
            
            {/* Lead (subtitle) with staggered animation */}
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.12
          }} viewport={{
            once: true
          }} className="mb-8">
              <p className="font-serif italic leading-relaxed max-w-2xl mx-auto text-[#111]" style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)'
            }}>
                Jer većina tretira samo <span style={{
                color: '#B9975B',
                fontWeight: 'bold'
              }}>simptom</span> – a pravi <span style={{
                color: '#B9975B',
                fontWeight: 'bold'
              }}>uzrok</span> ostaje netaknut.
              </p>
            </motion.div>
            
            {/* Body text with staggered animation */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.24
          }} viewport={{
            once: true
          }} className="mb-10">
              <p className="sans-serif font-normal leading-[1.6] max-w-[700px] mx-auto text-[#111]" style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)'
            }}>
                Na našoj <span style={{
                color: '#B9975B',
                fontWeight: 'bold'
              }}>Školi Manualne Terapije</span> naučit ćeš prepoznati, razumjeti i ukloniti stvarne izvore boli – koristeći spoj moderne znanosti i provjerenih kliničkih metoda.
              </p>
            </motion.div>
            
            {/* Separator line for powerline */}
            <motion.div initial={{
            opacity: 0,
            scaleX: 0
          }} whileInView={{
            opacity: 0.3,
            scaleX: 1
          }} transition={{
            duration: 0.5,
            delay: 0.36
          }} viewport={{
            once: true
          }} className="mb-6">
              <div className="mx-auto" style={{
              width: '60px',
              height: '1px',
              backgroundColor: '#D4AF37'
            }} />
            </motion.div>
            
            {/* Powerline with letter-spacing animation */}
            <motion.div initial={{
            opacity: 0,
            letterSpacing: '0.3em'
          }} whileInView={{
            opacity: 1,
            letterSpacing: '0.05em'
          }} transition={{
            duration: 0.8,
            delay: 0.48
          }} viewport={{
            once: true
          }}>
              <p className="font-bold uppercase text-center" style={{
              color: '#B9975B',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)'
            }}>
                Ovo nije još jedan tečaj. Ovo je točka <span style={{
                fontWeight: 'bold'
              }}>preokreta</span> u tvom terapeutskom radu.
              </p>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Enhanced Program Section - 5 Levels */}
      <section id="program-overview" className="py-20 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url('/lovable-uploads/education-workshop-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
        
        {/* Bottom gradient overlay for smooth transition */}
        
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            {/* Headline */}
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="font-bold text-[#111] mb-8" style={{
            fontSize: 'clamp(1.6rem, 4vw, 3rem)',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em'
          }}>
              Postani terapeut kojem vjeruju i pacijenti i liječnici
            </motion.h2>

            {/* Subheadline */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.25
          }} viewport={{
            once: true
          }} className="text-[#111]/80 mb-4" style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            lineHeight: 1.4,
            letterSpacing: '-0.01em'
          }}>
              5 stručnih koraka do certifikata kroz praktične module manualne terapije
            </motion.p>

            {/* Emotional line */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.4
          }} viewport={{
            once: true
          }} className="italic mb-10" style={{
            fontSize: 'clamp(1rem, 2vw, 1.1rem)',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 400,
            color: '#B9975B',
            lineHeight: 1.5
          }}>
              Znanje koje pacijenti osjete, a liječnici poštuju.
            </motion.p>

            {/* Body text */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.55
          }} viewport={{
            once: true
          }} className="text-[#111]/70 max-w-2xl mx-auto" style={{
            fontSize: 'clamp(1rem, 2vw, 1.1rem)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            lineHeight: 1.65,
            letterSpacing: '-0.005em'
          }}>
              99 sati znanja i prakse kroz 5 pažljivo osmišljenih stupnjeva.
              <br />
              Od prve dijagnostike do naprednih manualnih tehnika – svaki stupanj gradi tvoje vještine i donosi rezultate koje pacijenti osjete.
            </motion.p>
          </div>

          {/* Progress Bar */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="mb-12">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-4">
                {modules.map((module, index) => <div key={module.number} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#d9b67b] text-white text-sm font-bold flex items-center justify-center">
                      {module.number}
                    </div>
                    {index < modules.length - 1 && <div className="w-8 h-0.5 bg-[#d9b67b]/30 mx-2" />}
                  </div>)}
              </div>
            </div>
            <p className="text-center text-sm text-gray-500">Znanje se gradi postupno – jasno strukturiran put od prvih zahvata do profesionalnog certifikata.</p>
          </motion.div>

          {/* Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {modules.map((module, index) => <motion.div key={module.number} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.03,
            y: -8
          }} className="group">
                <div className="relative backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 h-full overflow-hidden hover:border-[#d9b67b]/50 transition-all duration-300 bg-white/70 hover:bg-white/90">
                  {/* Glassmorphism glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#d9b67b]/5 via-transparent to-[#d9b67b]/10" />
                  
                  {/* Hover shadow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl shadow-[#d9b67b]/20" />
                  
                  <div className="relative h-full flex flex-col">
                    {/* Module Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#d9b67b] to-[#b8941f] text-white rounded-2xl flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                        {module.number}
                      </div>
                      <Badge variant="secondary" className="bg-[#d9b67b]/10 text-[#d9b67b] hover:bg-[#d9b67b]/20 border-0">
                        {module.duration}
                      </Badge>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-bold text-gray-900 mb-4 group-hover:text-[#B9975B] transition-colors duration-300" style={{
                  fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)'
                }}>
                      {module.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="sans-serif font-normal leading-[1.6] text-gray-600 mb-6 flex-grow" style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}>
                      ➡️ {module.description}
                    </p>
                    
                    {/* Learning Outcomes */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Praktični rad:</h4>
                      <ul className="space-y-1">
                        {module.learningOutcomes.map((outcome, i) => <li key={i} className="flex items-start text-sm text-gray-600">
                            <span className="text-[#d9b67b] mr-2 flex-shrink-0">👉</span>
                            {outcome}
                          </li>)}
                      </ul>
                    </div>
                    
                    {/* CTA Button */}
                    <Button variant="outline" size="sm" className="w-full justify-center border-[#d9b67b]/30 text-[#d9b67b] hover:bg-[#d9b67b] hover:text-white hover:border-[#d9b67b] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#d9b67b]/25" onClick={() => window.open(module.pdfUrl, '_blank')}>
                      <Download className="w-4 h-4 mr-2" />
                      Preuzmi raspored
                    </Button>
                  </div>
                </div>
              </motion.div>)}
          </div>

          {/* Action Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.98
          }}>
              <Button size="lg" className="bg-[#d9b67b] hover:bg-[#b8941f] text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-0" onClick={() => window.open('/kontakt', '_blank')}>
                <BookOpen className="w-5 h-5 mr-2" />
                Preuzmite detaljan program (PDF)
              </Button>
            </motion.div>
            
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.98
          }}>
              
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Što dobivate Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white via-amber-50/20 to-white relative overflow-hidden" style={{
      marginTop: '60px'
    }}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(
              45deg,
              #d9b67b 0px,
              #d9b67b 1px,
              transparent 1px,
              transparent 30px
            )`
      }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#d9b67b]/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-20">
            <h2 className="font-bold mb-6 text-[#111] text-center" style={{
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem'
          }}>
              <span style={{
              color: '#B9975B'
            }}>Znanje</span> koje ostaje.{' '}
              <span style={{
              color: '#B9975B'
            }}>Rezultati</span> koji se vide.
            </h2>
          </motion.div>

          {/* Grid 2x3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Card 1 - Certificirana edukacija */}
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05,
            y: -8
          }} className="group">
              <div className="relative backdrop-blur-xl bg-white/80 border border-[#d9b67b]/20 rounded-3xl p-8 h-full overflow-hidden hover:bg-white/90 transition-all duration-300 hover:border-[#d9b67b]/50 hover:shadow-2xl hover:shadow-[#d9b67b]/20">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#d9b67b]/10 via-transparent to-[#d9b67b]/5" />
                
                <div className="relative h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#d9b67b]/20 to-[#d9b67b]/30 backdrop-blur-sm flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#d9b67b]/25 transition-all duration-300 border border-[#d9b67b]/10">
                    <Award className="w-8 h-8 text-[#d9b67b] drop-shadow-sm" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 group-hover:text-[#B9975B] transition-colors duration-300" style={{
                  fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)'
                }}>Kvalifikacija za manualnog terapeuta</h3>
                  <p className="sans-serif font-normal leading-[1.6] text-gray-600" style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}>
                    Upisivo u e-Radnu knjižicu pod rubrikom "dodatno obrazovanje". Međunarodno priznato od World Federation of Massage, Manual Therapy & Nuad Thai.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Dva stručnjaka na svakom tečaju */}
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05,
            y: -8
          }} className="group">
              <div className="relative backdrop-blur-xl bg-white/80 border border-[#d9b67b]/20 rounded-3xl p-8 h-full overflow-hidden hover:bg-white/90 transition-all duration-300 hover:border-[#d9b67b]/50 hover:shadow-2xl hover:shadow-[#d9b67b]/20">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#d9b67b]/10 via-transparent to-[#d9b67b]/5" />
                
                <div className="relative h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#d9b67b]/20 to-[#d9b67b]/30 backdrop-blur-sm flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#d9b67b]/25 transition-all duration-300 border border-[#d9b67b]/10">
                    <UserCheck className="w-8 h-8 text-[#d9b67b] drop-shadow-sm" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 group-hover:text-[#B9975B] transition-colors duration-300" style={{
                  fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)'
                }}>
                    Dva stručnjaka na svakom tečaju
                  </h3>
                  <p className="sans-serif font-normal leading-[1.6] text-gray-600" style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}>
                    Na svakom stupnju učite od dr. Stošića i Ante Antića – stručnjaka koji su pomogli tisućama pacijenata.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Jedinstvena praktična radionica */}
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05,
            y: -8
          }} className="group">
              <div className="relative backdrop-blur-xl bg-white/80 border border-[#d9b67b]/20 rounded-3xl p-8 h-full overflow-hidden hover:bg-white/90 transition-all duration-300 hover:border-[#d9b67b]/50 hover:shadow-2xl hover:shadow-[#d9b67b]/20">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#d9b67b]/10 via-transparent to-[#d9b67b]/5" />
                
                <div className="relative h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#d9b67b]/20 to-[#d9b67b]/30 backdrop-blur-sm flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#d9b67b]/25 transition-all duration-300 border border-[#d9b67b]/10">
                    <Target className="w-8 h-8 text-[#d9b67b] drop-shadow-sm" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 group-hover:text-[#B9975B] transition-colors duration-300" style={{
                  fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)'
                }}>
                    Jedinstvena praktična radionica
                  </h3>
                  <p className="sans-serif font-normal leading-[1.6] text-gray-600" style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}>
                    Nakon svakog stupnja održava se dodatna radionica posvećena samo ponavljanju i vježbanju ključnih tehnika – bez predavanja, fokus na praksu.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - Mala grupa */}
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05,
            y: -8
          }} className="group">
              <div className="relative backdrop-blur-xl bg-white/80 border border-[#d9b67b]/20 rounded-3xl p-8 h-full overflow-hidden hover:bg-white/90 transition-all duration-300 hover:border-[#d9b67b]/50 hover:shadow-2xl hover:shadow-[#d9b67b]/20">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#d9b67b]/10 via-transparent to-[#d9b67b]/5" />
                
                <div className="relative h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#d9b67b]/20 to-[#d9b67b]/30 backdrop-blur-sm flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#d9b67b]/25 transition-all duration-300 border border-[#d9b67b]/10">
                    <Users className="w-8 h-8 text-[#d9b67b] drop-shadow-sm" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 group-hover:text-[#B9975B] transition-colors duration-300" style={{
                  fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)'
                }}>
                    Mala grupa
                  </h3>
                  <p className="sans-serif font-normal leading-[1.6] text-gray-600" style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}>
                    Maksimalno 12 polaznika za osobni pristup i kvalitetu učenja.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 5 - Materijali */}
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05,
            y: -8
          }} className="group">
              <div className="relative backdrop-blur-xl bg-white/80 border border-[#d9b67b]/20 rounded-3xl p-8 h-full overflow-hidden hover:bg-white/90 transition-all duration-300 hover:border-[#d9b67b]/50 hover:shadow-2xl hover:shadow-[#d9b67b]/20">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#d9b67b]/10 via-transparent to-[#d9b67b]/5" />
                
                <div className="relative h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#d9b67b]/20 to-[#d9b67b]/30 backdrop-blur-sm flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#d9b67b]/25 transition-all duration-300 border border-[#d9b67b]/10">
                    <BookOpen className="w-8 h-8 text-[#d9b67b] drop-shadow-sm" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#d9b67b] transition-colors duration-300">
                    Materijali
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Knjige, članci i dodatni materijali koji ostaju zauvijek s vama.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 6 - Podrška i mreža */}
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05,
            y: -8
          }} className="group">
              <div className="relative backdrop-blur-xl bg-white/80 border border-[#d9b67b]/20 rounded-3xl p-8 h-full overflow-hidden hover:bg-white/90 transition-all duration-300 hover:border-[#d9b67b]/50 hover:shadow-2xl hover:shadow-[#d9b67b]/20">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#d9b67b]/10 via-transparent to-[#d9b67b]/5" />
                
                <div className="relative h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#d9b67b]/20 to-[#d9b67b]/30 backdrop-blur-sm flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#d9b67b]/25 transition-all duration-300 border border-[#d9b67b]/10">
                    <Users className="w-8 h-8 text-[#d9b67b] drop-shadow-sm" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 group-hover:text-[#B9975B] transition-colors duration-300" style={{
                  fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)'
                }}>
                    Podrška i mreža
                  </h3>
                  <p className="sans-serif font-normal leading-[1.6] text-gray-600" style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}>
                    Nakon tečaja ulazite u privatnu WhatsApp grupu s nekoliko stotina terapeuta – stalna podrška, pitanja i razmjena iskustava.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.98
          }}>
              
            </motion.div>
            
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.98
          }}>
              <Button size="lg" variant="outline" className="bg-white/50 backdrop-blur-md border-2 border-[#d9b67b] text-[#d9b67b] hover:bg-[#d9b67b] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg" onClick={() => document.getElementById('enrollment')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                <Users className="w-5 h-5 mr-2" />
                Pridružite se zajednici terapeuta
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Znanje, praksa i podrška Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white via-amber-50/20 to-white relative overflow-hidden" style={{
      marginTop: '60px'
    }}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 20px 20px, #d9b67b 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
        <div className="absolute inset-0 bg-gradient-to-l from-[#d9b67b]/5 to-transparent" />
        
        {/* Golden divider above title */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#d9b67b]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-20">
            <h2 className="font-bold mb-6 text-[#111] text-left" style={{
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem'
          }}>
              Znanje, praksa i podrška – temelj <span style={{
              color: '#B9975B'
            }}>vrhunskog terapeuta</span>.
            </h2>
          </motion.div>

          {/* 3 cards in row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Teorijska osnova */}
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.03,
            y: -8
          }} className="group">
              <div className="relative backdrop-blur-xl bg-white/80 border border-[#d9b67b]/30 rounded-3xl p-8 h-full overflow-hidden hover:bg-white/90 transition-all duration-300 hover:border-[#d9b67b]/50 hover:shadow-2xl hover:shadow-[#d9b67b]/15">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#d9b67b]/5 via-transparent to-[#d9b67b]/10" />
                
                <div className="relative h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#d9b67b]/20 to-[#d9b67b]/30 backdrop-blur-sm flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#d9b67b]/25 transition-all duration-300 border border-[#d9b67b]/10">
                    <BookOpen className="w-8 h-8 text-[#d9b67b] drop-shadow-sm" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 group-hover:text-[#B9975B] transition-colors duration-300" style={{
                  fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)',
                  fontFamily: 'Playfair Display, serif'
                }}>
                    Teorijska osnova
                  </h3>
                  <p className="sans-serif font-normal leading-[1.6] text-gray-600" style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
                  fontFamily: 'Inter, sans-serif'
                }}>
                    Učite razumjeti tijelo u dubinu – anatomiju, fiziologiju i patologiju – da biste svaku tehniku primjenjivali s povjerenjem.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Praktična primjena */}
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.25
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.03,
            y: -8
          }} className="group">
              <div className="relative backdrop-blur-xl bg-white/80 border border-[#d9b67b]/30 rounded-3xl p-8 h-full overflow-hidden hover:bg-white/90 transition-all duration-300 hover:border-[#d9b67b]/50 hover:shadow-2xl hover:shadow-[#d9b67b]/15">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#d9b67b]/5 via-transparent to-[#d9b67b]/10" />
                
                <div className="relative h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#d9b67b]/20 to-[#d9b67b]/30 backdrop-blur-sm flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#d9b67b]/25 transition-all duration-300 border border-[#d9b67b]/10">
                    <Target className="w-8 h-8 text-[#d9b67b] drop-shadow-sm" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 group-hover:text-[#B9975B] transition-colors duration-300" style={{
                  fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)',
                  fontFamily: 'Playfair Display, serif'
                }}>
                    Praktična primjena
                  </h3>
                  <p className="sans-serif font-normal leading-[1.6] text-gray-600" style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
                  fontFamily: 'Inter, sans-serif'
                }}>
                    Vježbate na stvarnim slučajevima, uz stalno vodstvo mentora koji vas prate u svakom koraku.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Kontinuirani razvoj */}
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.03,
            y: -8
          }} className="group">
              <div className="relative backdrop-blur-xl bg-white/80 border border-[#d9b67b]/30 rounded-3xl p-8 h-full overflow-hidden hover:bg-white/90 transition-all duration-300 hover:border-[#d9b67b]/50 hover:shadow-2xl hover:shadow-[#d9b67b]/15">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#d9b67b]/5 via-transparent to-[#d9b67b]/10" />
                
                <div className="relative h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#d9b67b]/20 to-[#d9b67b]/30 backdrop-blur-sm flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#d9b67b]/25 transition-all duration-300 border border-[#d9b67b]/10">
                    <Trophy className="w-8 h-8 text-[#d9b67b] drop-shadow-sm" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 group-hover:text-[#B9975B] transition-colors duration-300" style={{
                  fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)',
                  fontFamily: 'Playfair Display, serif'
                }}>
                    Kontinuirani razvoj
                  </h3>
                  <p className="sans-serif font-normal leading-[1.6] text-gray-600" style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
                  fontFamily: 'Inter, sans-serif'
                }}>Nakon tečaja ostajete dio naše zajednice – uz podršku, mentorstvo, praktične radionice i nove prilike za rast.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O predavaču Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden" style={{
      marginTop: '60px'
    }}>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Text content */}
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="font-bold mb-8 text-[#111] text-left" style={{
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              fontFamily: 'Playfair Display, serif',
              marginBottom: '1.5rem'
            }}>
                <span className="relative">
                  👨‍⚕️ O predavaču –{' '}
                  <span style={{
                  color: '#B9975B'
                }}>dr. Aleksandar Stošić</span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#B9975B] opacity-60" />
                </span>
              </h2>
              
              <div className="space-y-6 mb-8">
                <p style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)'
              }} className="font-bold text-gray-800 text-lg">
                  Jedini liječnik u regiji koji objedinjuje ortopediju, osteopatiju i manualnu terapiju.
                </p>
                
                <p className="sans-serif font-normal leading-[1.6] text-gray-700 max-w-[700px]" style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)'
              }}>
                  Dr. Aleksandar Stošić, specijalist ortoped, sportski liječnik, osteopat (DO) i licencirani manualni terapeut, više od 40 godina radi s pacijentima i educira terapeute. Njegov rad povezuje znanost i praksu, a kroz edukacije je prenio znanje stotinama fizioterapeuta, kineziologa, radnih terapeuta i liječnika u Hrvatskoj i regiji.
                </p>
                
                <p className="sans-serif font-normal leading-[1.6] text-gray-700 max-w-[700px]" style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)'
              }}>
                  Kao stalni sudski vještak i predavač na Medicinskom fakultetu i Veleučilištu zdravstvenih studija u Rijeci, dr. Stošić ostaje aktivan i u znanosti i u praksi. Njegove edukacije toliko su <span style={{
                  color: '#B9975B',
                  fontWeight: 'bold'
                }}>priznate</span> da vodeće poliklinike pri zapošljavanju prednost daju kandidatima koji su završili njegove programe.
                </p>
              </div>

              {/* Highlight bullets with icons */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0" style={{
                  color: '#B9975B',
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}>✅</span>
                  <span className="sans-serif font-normal leading-[1.6] text-gray-700" style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}><span style={{
                    color: '#B9975B',
                    fontWeight: 'bold'
                  }}>Specijalist ortoped i sportski liječnik, osteopat (DO), OMT terapeut</span></span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0" style={{
                  color: '#B9975B',
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}>🏅</span>
                  <span className="sans-serif font-normal leading-[1.6] text-gray-700" style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}><span style={{
                    color: '#B9975B',
                    fontWeight: 'bold'
                  }}>Dobitnik nagrade Franjo Bučar za doprinos sportu</span></span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0" style={{
                  color: '#B9975B',
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}>👥</span>
                  <span className="sans-serif font-normal leading-[1.6] text-gray-700" style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}><span style={{
                    color: '#B9975B',
                    fontWeight: 'bold'
                  }}>600+ educiranih terapeuta kroz 15 godina edukacija</span></span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0" style={{
                  color: '#B9975B',
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}>⚖️</span>
                  <span className="sans-serif font-normal leading-[1.6] text-gray-700" style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}><span style={{
                    color: '#B9975B',
                    fontWeight: 'bold'
                  }}>Stalni sudski vještak u području ortopedije i traumatologije</span></span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0" style={{
                  color: '#B9975B',
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}>🎓</span>
                  <span className="sans-serif font-normal leading-[1.6] text-gray-700" style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}><span style={{
                    color: '#B9975B',
                    fontWeight: 'bold'
                  }}>Predavač na Medicinskom fakultetu u Rijeci i Veleučilištu zdravstvenih studija</span></span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0" style={{
                  color: '#B9975B',
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}>🌍</span>
                  <span className="sans-serif font-normal leading-[1.6] text-gray-700" style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)'
                }}><span style={{
                    color: '#B9975B',
                    fontWeight: 'bold'
                  }}>Inovator nagrađivan na svjetskim izložbama (Bruxelles, Pittsburgh, Ženeva)</span></span>
                </div>
              </div>

              {/* Biography button */}
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.98
            }} className="mt-8">
              <Button className="text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg" style={{
                backgroundColor: '#D4AF37'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b9962f';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D4AF37';
              }} onClick={() => {
                window.open('https://www.dropbox.com/scl/fi/7tuc5bwo1ogx0nv7ij2fn/Mrsc-Aleksandar-Stosic-drmed-OMT-DO.pdf?rlkey=r241zkyuqnp55fmpq60iyjppa&st=9yb2rksc&dl=1', '_blank');
              }}>
                📄 Pročitaj impozantnu biografiju dr. Stošića
              </Button>
              </motion.div>
            </motion.div>

            {/* Right column - Images */}
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Main large image - Stosic1.jpeg */}
                <div className="col-span-2 relative">
                  <img src="/lovable-uploads/c7158dcf-7737-4386-afa1-11556b3d6b02.png" alt="Dr. Aleksandar Stošić demonstrira manualne tehnike terapije na pacijentu" className="w-full h-80 object-cover rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300" style={{
                  objectPosition: 'center',
                  filter: 'blur(0px) brightness(1.05)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                }} />
                </div>
                
                {/* Smaller images */}
                <div className="relative">
                  <img src="/lovable-uploads/ef2118cc-2e45-4c99-a38d-641b88fa6209.png" alt="Praktična nastava manualne terapije - studenti vježbaju tehnike" className="w-full h-40 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" style={{
                  objectPosition: 'center',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                }} />
                </div>
                <div className="relative">
                  <img src="/lovable-uploads/c1b3474f-d166-428c-aca9-b161b7cdc270.png" alt="Dr. Stošić teaching manual therapy techniques" className="w-full h-40 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" style={{
                  objectPosition: 'center',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden" style={{
      marginTop: '60px'
    }}>
        {/* Golden divider */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#d9b67b]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="font-bold text-[#111] mb-8 text-center" style={{
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem'
          }}>
              Što kažu <span style={{
              color: '#B9975B'
            }}>polaznici</span>
            </h2>
          </motion.div>

          {/* Testimonials carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="group">
              <div className="relative backdrop-blur-xl bg-white/80 border border-[#d9b67b]/20 rounded-3xl p-8 h-full hover:bg-white/90 transition-all duration-300 hover:border-[#d9b67b]/50 hover:shadow-2xl hover:shadow-[#d9b67b]/15">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#d9b67b]/5 via-transparent to-[#d9b67b]/10" />
                
                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#d9b67b]/20 flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  
                  {/* 5 Gold Stars */}
                  <div className="flex gap-1 justify-center mb-4">
                    {[...Array(5)].map((_, i) =>
                  <Star key={i} className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
                  )}
                  </div>
                  
                  <blockquote className="text-gray-700 italic mb-6 leading-[1.6]" style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)'
                }}>
                    "Doktor Stošić je čudo od čovjeka… kapa do poda."
                  </blockquote>
                  <cite className="font-bold" style={{
                  color: '#B9975B'
                }}>— Tomislav B.</cite>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="group">
              <div className="relative backdrop-blur-xl bg-white/80 border border-[#d9b67b]/20 rounded-3xl p-8 h-full hover:bg-white/90 transition-all duration-300 hover:border-[#d9b67b]/50 hover:shadow-2xl hover:shadow-[#d9b67b]/15">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#d9b67b]/5 via-transparent to-[#d9b67b]/10" />
                
                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#d9b67b]/20 flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  
                  {/* 5 Gold Stars */}
                  <div className="flex gap-1 justify-center mb-4">
                    {[...Array(5)].map((_, i) =>
                  <Star key={i} className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
                  )}
                  </div>
                  
                  <blockquote className="text-gray-700 italic mb-6 leading-[1.6]" style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)'
                }}>
                    "Moj dragi učitelj i mentor, od njega sam jako puno naučio. Vrhunski znalac i dobar čovjek."
                  </blockquote>
                  <cite className="font-bold" style={{
                  color: '#B9975B'
                }}>— Ivan R.</cite>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} viewport={{
            once: true
          }} className="group">
              <div className="relative backdrop-blur-xl bg-white/80 border border-[#d9b67b]/20 rounded-3xl p-8 h-full hover:bg-white/90 transition-all duration-300 hover:border-[#d9b67b]/50 hover:shadow-2xl hover:shadow-[#d9b67b]/15">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#d9b67b]/5 via-transparent to-[#d9b67b]/10" />
                
                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#d9b67b]/20 flex items-center justify-center">
                    <span className="text-2xl">❤️</span>
                  </div>
                  
                  {/* 5 Gold Stars */}
                  <div className="flex gap-1 justify-center mb-4">
                    {[...Array(5)].map((_, i) =>
                  <Star key={i} className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
                  )}
                  </div>
                  
                  <blockquote className="text-gray-700 italic mb-6 leading-[1.6]" style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)'
                }}>
                    "Vrhunski doktor, čestitam od svega srca ❤️"
                  </blockquote>
                  <cite className="font-bold" style={{
                  color: '#B9975B'
                }}>— Tereza D.</cite>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} viewport={{
          once: true
        }} className="text-center mt-16">
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.98
          }}>
              <Button size="lg" className="bg-[#d9b67b] hover:bg-[#b8941f] text-white px-12 py-6 text-xl rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-[#d9b67b]/30 transition-all duration-300 border-0" onClick={() => document.getElementById('enrollment')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Prijavi se na tečaj
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Spremni za transformaciju */}
      <section id="enrollment" className="py-20 md:py-24 relative overflow-hidden" style={{
      marginTop: '60px'
    }}>
        {/* Background Image with dark overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('/lovable-uploads/e054bb2b-09dd-41c6-b6b6-608faad68fd7.png')"
      }} />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#d9b67b]/10 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="max-w-4xl mx-auto">
            <h2 className="font-bold mb-8 text-white text-center" style={{
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem'
          }}>
              Spremni za <span style={{
              color: '#B9975B'
            }}>transformaciju</span>?
            </h2>
            
            <p className="sans-serif font-normal leading-[1.6] text-white/80 mb-12 max-w-[700px] mx-auto text-center" style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)'
          }}>
              Pridružite se stotinama terapeuta koji su već promijenili svoju praksu kroz našu edukaciju.
            </p>

            {/* Course dates as cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
              {/* Card 1 - Rijeka */}
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-[#b8985f]/30 rounded-2xl p-6 hover:bg-white/15 hover:border-[#b8985f]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#b8985f]/20">

                <div className="flex items-center mb-3" style={{ color: '#b8985f' }}>
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-semibold text-lg">Rijeka</span>
                </div>
                <div className="flex items-center mb-2 text-white/90">
                  <Calendar className="w-5 h-5 mr-2" style={{ color: '#b8985f' }} />
                  <span>18.-19.04.</span>
                </div>
                <div className="text-[#b8985f] font-bold text-sm">4. stupanj</div>
              </motion.div>

              {/* Card 2 - Zagreb MT2 */}
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-[#b8985f]/30 rounded-2xl p-6 hover:bg-white/15 hover:border-[#b8985f]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#b8985f]/20">

                <div className="flex items-center mb-3" style={{ color: '#b8985f' }}>
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-semibold text-lg">Zagreb</span>
                </div>
                <div className="flex items-center mb-2 text-white/90">
                  <Calendar className="w-5 h-5 mr-2" style={{ color: '#b8985f' }} />
                  <span>21.-22.03.</span>
                </div>
                <div className="text-[#b8985f] font-bold text-sm">3. stupanj</div>
              </motion.div>

              {/* Card 3 - Zagreb MT1 */}
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-[#b8985f]/30 rounded-2xl p-6 hover:bg-white/15 hover:border-[#b8985f]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#b8985f]/20">

                <div className="flex items-center mb-3" style={{ color: '#b8985f' }}>
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-semibold text-lg">Zagreb</span>
                </div>
                <div className="flex items-center mb-2 text-white/90">
                  <Calendar className="w-5 h-5 mr-2" style={{ color: '#b8985f' }} />
                  <span>6.–8. 2. 2026.</span>
                </div>
                <div className="text-[#b8985f] font-bold text-sm">1. stupanj</div>
              </motion.div>
            </div>

            {/* Price and CTA */}
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="flex items-center text-white text-2xl font-bold">
                <Euro className="w-7 h-7 mr-2" style={{ color: '#b8985f' }} />
                <span>450 €</span>
              </div>

              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.98
            }}>
                <Button
                size="lg"
                className="bg-[#d9b67b] hover:bg-[#b8941f] text-white px-12 py-6 text-xl rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-[#d9b67b]/30 transition-all duration-300 border-0"
                onClick={() => window.open('https://tally.so/r/wA5kvD', '_blank')}>

                  <MapPin className="w-6 h-6 mr-3" />
                  Rezerviraj mjesto
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vaš terapijski put se tu ne zaustavlja Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0F0F0F]">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 2px,
            #D4AF37 2px,
            #D4AF37 4px
          )`,
        backgroundSize: '20px 20px'
      }}></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#B9975B]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-[#D4AF37]/15 to-transparent rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-20">
              {/* SVG Icon instead of emoji */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#B9975B] to-[#D4AF37] rounded-lg flex items-center justify-center shadow-lg shadow-[#B9975B]/30">
                  <BookOpen className="h-6 w-6 text-black" />
                </div>
                <h2 className="font-bold text-center" style={{
                fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                color: '#B9975B',
                fontFamily: 'Playfair Display, serif',
                marginBottom: '1.5rem'
              }}>
                  👉 Vaš terapijski put se tu ne <span style={{
                  color: '#B9975B'
                }}>zaustavlja</span>
                </h2>
              </div>
              <p className="sans-serif font-normal leading-[1.6] text-white/80 max-w-[700px] mx-auto text-center" style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)'
            }}>
                Otkrijte cijeli spektar specijaliziranih edukacija i proširite svoje terapijske vještine.
              </p>
            </motion.div>
            
            {/* Auto-rotating Carousel with arrows */}
            <AutoCarousel />
            
            {/* CTA Button */}
            <motion.div initial={{
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
          }} className="text-center mb-16">
              <Button className="bg-[#B9975B] hover:bg-[#B9975B]/90 text-white px-8 py-3 text-lg font-semibold hover:shadow-[0_0_20px_rgba(185,151,91,0.5)] transition-all duration-300 group relative overflow-hidden shimmer-effect" onClick={() => window.location.href = '/'}>
                <span className="relative flex items-center">
                  Pogledaj sve seminare
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </div>;
}