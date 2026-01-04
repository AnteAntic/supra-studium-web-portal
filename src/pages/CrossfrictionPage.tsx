import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Target, Award, Users, Brain, Activity, ArrowRight, Star, Phone, Calendar, Euro, Clock, MapPin, BookOpen, Plus, Quote, TrendingUp, Zap, FileText, UserCheck, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import GoldenWave from '@/components/ui/GoldenWave';
import TextShimmer from '@/components/ui/TextShimmer';
import HeroTitle from '@/components/ui/HeroTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import { CourseHighlights } from '@/components/ui/CourseHighlights';
import { CourseStickyBar } from '@/components/ui/CourseStickyBar';
import { ContactFooter } from '@/components/ContactFooter';
import AutoCarousel from '@/components/ui/AutoCarousel';
const CrossfrictionPage = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  const [blackOverlay, setBlackOverlay] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeDistance = 600;
      const blackOpacity = Math.min(1, scrollY / fadeDistance);
      setBlackOverlay(blackOpacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden -mt-20">
        {/* Black overlay that fades in on scroll */}
        <div className="absolute inset-0 bg-black z-[3] pointer-events-none transition-opacity duration-300" style={{
        opacity: blackOverlay
      }} />
        
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/lovable-uploads/cb2ecdd8-d460-4768-8a2f-40a7f5513772.png)`
      }} />
        
        <div className="container mx-auto px-4 pt-24 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Micro Badge */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-[#d4af37]/20 border border-[#d4af37]/30 rounded-full backdrop-blur-sm">
              <span className="text-[#d4af37] font-bold text-sm uppercase tracking-wide">NOVO IZDANJE 2026.</span>
            </motion.div>
            
            {/* Main Title with Shimmer */}
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
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[-0.01em] leading-[0.9] text-center relative z-[4] px-4">
                <span className="block font-playfair font-normal text-white/90 drop-shadow-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 tracking-wide" style={{
                textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)'
              }}>Specijalizacija</span>
                <TextShimmer className="font-playfair font-bold text-white drop-shadow-xl tracking-wide text-shadow-lg relative z-[4] [--base-gradient-color:#ffd700] [--base-color:#ffffff] [text-shadow:0_6px_12px_rgba(0,0,0,0.6),0_3px_6px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.3)]" duration={2.5} spread={3}>
                  CROSSFRICTION & FUNKCIONALNA MASAŽA
                </TextShimmer>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.6
          }} className="mb-10 md:mb-12 mt-8 md:mt-10">
              <h2 className="text-[clamp(20px,3vw,28px)] leading-relaxed tracking-wide font-medium text-[#d4af37] text-center drop-shadow-md">Više od tretmana – resetiraj tijelo, ukloni bol i vrati slobodu pokreta</h2>
            </motion.div>
            
            {/* Description in Transparent Box */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8,
            duration: 0.8
          }} className="mb-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed" style={{
                fontFamily: 'Inter, sans-serif',
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}>
                  Praktična edukacija koja povezuje manualni rad, neurološku preciznost i stvarnu terapijsku promjenu. Nauči više od same tehnike – razvij osjećaj, razumijevanje i samopouzdanje u svakom dodiru.
                </p>
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
            delay: 1.0,
            duration: 0.8
          }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.98
            }}>
                <Button size="lg" className="bg-[#d4af37] hover:bg-[#c19b2a] text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/30 transition-all duration-300 border-0" onClick={() => document.getElementById('moduli-po-gradovima')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  Upiši seminar
                </Button>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.98
            }}>
                <Button size="lg" className="bg-white/10 backdrop-blur-md border-2 border-[#d4af37] text-white hover:bg-[#d4af37]/20 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/25" onClick={() => document.getElementById('revolutionary-approach')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                Saznaj više
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      <CourseHighlights items={[{
      icon: "📈",
      title: "99%",
      subtitle: "Trenutni rezultat",
      small: "klijenata osjeti olakšanje već nakon prvog tretmana"
    }, {
      icon: "⚡️",
      title: "Body Reset",
      subtitle: "Holistični pristup",
      small: "jedinstven tretman koji spaja mišiće, fascije, zglobove i živce"
    }, {
      icon: "🏆",
      title: "Certifikat",
      subtitle: "Službeno priznanje",
      small: "upis u e-radnu knjižicu kao dodatno obrazovanje + mentorska podrška"
    }, {
      icon: "🎯",
      title: "Pametnije",
      subtitle: "Ergonomija rada",
      small: "radi bez iscrpljenosti i ozljeda terapeuta"
    }]} accentIndex={1} bg="dark" />

      {/* Unified Sticky Bar */}
      <CourseStickyBar locations={[{
      city: "Split (CFM1)",
      dates: "24.–25. 01. 2026."
    }, {
      city: "Rijeka (CFM2)",
      dates: "14.–15. 02. 2026."
    }]} price="Kotizacija: prema postojećim vrijednostima" ctaText="Prijavi se" ctaHref="#moduli-po-gradovima" theme="dark" />

      {/* Value Proposition - Dark Mode */}
      <section id="revolutionary-approach" className="py-24 relative overflow-hidden scroll-mt-20" style={{
      backgroundColor: '#0F0F0F',
      scrollBehavior: 'smooth'
    }}>
        {/* Subtle golden gradient background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#B9975B]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-[#B9975B]/10 to-transparent rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
              {/* Left - Text Content */}
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
            }} className="space-y-8">
                {/* Golden SVG element instead of emoji */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#B9975B] to-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#B9975B]/30">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <h2 className="font-bold text-center mb-6" style={{
                  fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                  fontFamily: 'Playfair Display, serif',
                  color: '#B9975B'
                }}>
                    Više od dijela – terapija koja vidi cijelu sliku.
                  </h2>
                </div>
                
                {/* Transparent content box for readability */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg max-w-2xl mx-auto">
                  <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  lineHeight: '1.6',
                  color: '#D4AF37',
                  fontWeight: 'bold'
                }} className="text-lg leading-relaxed mb-6 text-center text-white-90 font-normal text-primary">U Body Reset pristupu, bol nije izoliran problem – već poziv na dublje razumijevanje tijela. Kroz integraciju mišićnog, fascijalnog, zglobnog i živčanog sustava, učimo gledati širu sliku i stvarati tretmane koji ne samo da uklanjaju bol, već vraćaju funkcionalnost, ravnotežu i lakoću pokreta.</p>
                  
                  <div className="text-center">
                    <p className="mb-4 text-white/90" style={{
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)'
                  }}>Razvijeno za:</p>
                    <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                      <div className="flex items-center gap-2 text-white/90">
                        <span>🧑‍⚕️</span> fizioterapeute
                      </div>
                      <div className="flex items-center gap-2 text-white/90">
                        <span>👐</span> masere
                      </div>
                      <div className="flex items-center gap-2 text-white/90">
                        <span>👨‍⚕️</span> liječnike
                      </div>
                      <div className="flex items-center gap-2 text-white/90">
                        <span>🧘</span> kinezi-terapeute
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Golden vertical separator lines */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col space-y-4">
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#B9975B] to-transparent"></div>
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent"></div>
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#B9975B] to-transparent"></div>
              </div>

              {/* Right - Icons */}
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
            }} className="flex flex-col gap-8 justify-center lg:pl-8">
                <div className="text-center group cursor-pointer transition-all duration-300 hover:scale-110">
                  <div className="w-24 h-24 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B9975B]/20 group-hover:shadow-[0_0_30px_rgba(185,151,91,0.4)] transition-all duration-300 border border-white/10">
                    <Brain className="h-12 w-12" style={{
                    color: '#B9975B'
                  }} />
                  </div>
                  <p className="font-medium text-lg" style={{
                  color: '#B9975B'
                }}>Mišići</p>
                </div>
                
                <div className="text-center group cursor-pointer transition-all duration-300 hover:scale-110">
                  <div className="w-24 h-24 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B9975B]/20 group-hover:shadow-[0_0_30px_rgba(185,151,91,0.4)] transition-all duration-300 border border-white/10">
                    <Activity className="h-12 w-12" style={{
                    color: '#B9975B'
                  }} />
                  </div>
                  <p className="font-medium text-lg" style={{
                  color: '#B9975B'
                }}>Fascije</p>
                </div>
                
                <div className="text-center group cursor-pointer transition-all duration-300 hover:scale-110">
                  <div className="w-24 h-24 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B9975B]/20 group-hover:shadow-[0_0_30px_rgba(185,151,91,0.4)] transition-all duration-300 border border-white/10">
                    <Target className="h-12 w-12" style={{
                    color: '#B9975B'
                  }} />
                  </div>
                  <p className="font-medium text-lg" style={{
                  color: '#B9975B'
                }}>Zglobovi</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Most Therapies Don't Work - Emotional Hook */}
      <section className="py-24 relative overflow-hidden" style={{
      backgroundColor: '#0F0F0F'
    }}>
        {/* Subtle golden radial gradient background */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-radial from-[#B9975B]/15 to-transparent rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-radial from-[#D4AF37]/10 to-transparent rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Text Content */}
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
            }} className="space-y-8">
                <h2 className="font-bold text-center mb-8 text-[#F9F9F9]" style={{
                fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                fontFamily: 'Playfair Display, serif'
              }}>
                  Zašto tvoje terapije <span style={{
                  color: '#B9975B'
                }}>ne traju?</span>
                </h2>
                
                <h3 className="text-center mb-6 text-[#B9975B]" style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 'bold'
              }}>Terapija nije samo masaža ili manipulacija.</h3>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg max-w-3xl mx-auto mb-8">
                  <p className="text-center text-[#F9F9F9] leading-relaxed" style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  lineHeight: '1.6'
                }}>
                    Većina tretmana gasi simptome, ali ne dira uzrok. <span style={{
                    color: '#B9975B',
                    fontWeight: 'bold'
                  }}>Na ovom seminaru naučit ćeš holistički Body Reset model – 
                      sistem koji pronalazi pravi uzrok, resetira tijelo i daje rezultate koji ostaju.</span>
                  </p>
                </div>
                
                {/* Glass effect container */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-red-400 text-lg">✕</span>
                    </div>
                    <p className="text-[#F9F9F9] text-lg">
                      Prečesto se terapija fokusira samo na simptom – bez razumijevanja biomehanike i uzroka.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-[#B9975B]/20 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="h-4 w-4 text-[#B9975B]" />
                    </div>
                    <div>
                      <p className="text-[#F9F9F9] text-lg mb-4">
                        Na ovom seminaru naučit ćete <strong className="text-[#B9975B]">jedinstveni Body Reset model</strong> koji:
                      </p>
                      <ul className="space-y-3 ml-4">
                        <li className="flex items-center gap-3 text-[#F9F9F9]/80">
                          <div className="w-2 h-2 bg-[#B9975B] rounded-full"></div>
                          Identificira uzrok kroz sistemsku procjenu
                        </li>
                        <li className="flex items-center gap-3 text-[#F9F9F9]/80">
                          <div className="w-2 h-2 bg-[#B9975B] rounded-full"></div>
                          Kombinira živčani sustav, mišiće i fascije u jednu terapijsku logiku
                        </li>
                        <li className="flex items-center gap-3 text-[#F9F9F9]/80">
                          <div className="w-2 h-2 bg-[#B9975B] rounded-full"></div>
                          Donosi promjene koje traju
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mt-8">
                  <p className="text-[#F9F9F9] italic mb-3 text-lg">"Nakon ovog seminara nisam više gasila požar kod klijenata, nego sam naučila rješavati stvarne probleme."</p>
                  <p className="text-[#B9975B] font-semibold">— Sara, fizioterapeutkinja</p>
                </div>
                
                {/* CTA Button */}
                <div className="mt-8">
                  <Button size="lg" className="bg-[#B9975B] hover:bg-[#B9975B]/90 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(185,151,91,0.5)]" onClick={() => document.getElementById('body-reset-praksa')?.scrollIntoView({
                  behavior: 'smooth'
                })}>
                    Saznaj više o Body Reset pristupu
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                {/* Scroll hint */}
                <div className="mt-8 text-sm text-[#F9F9F9]/60 flex items-center gap-2">
                  <span>👇</span>
                  <span>Što konkretno dobivate u programu</span>
                </div>
              </motion.div>
              
              {/* Right - Image */}
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
            }} className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img src="/lovable-uploads/cd747818-c16a-4548-a084-1ef6a310c426.png" alt="Terapist pomaže klijentu s anatomskim prikazom živčanog sustava" className="w-full max-w-md h-auto rounded-lg shadow-2xl shadow-black/40" style={{
                  borderRadius: '8px'
                }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B9975B]/20 to-transparent rounded-lg"></div>
                  {/* Golden overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-[#B9975B]/10 rounded-lg"></div>
                  {/* Enhanced shadow effect */}
                  <div className="absolute inset-0 -z-10 rounded-lg" style={{
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(185,151,91,0.1)'
                }}></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Sloped divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#B9975B"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#B9975B"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#B9975B"></path>
          </svg>
        </div>
      </section>

      {/* Body Reset Process - Interactive Timeline */}
      <section id="body-reset-praksa" className="py-24 relative overflow-hidden" style={{
      backgroundColor: '#0F0F0F',
      backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(185,151,91,0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(185,151,91,0.03) 0%, transparent 50%)'
    }}>
        {/* Canvas texture */}
        <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
      }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
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
            }} className="space-y-8">
                <h2 className="font-bold text-center mb-8" style={{
                fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                fontFamily: 'Playfair Display, serif',
                color: '#B9975B'
              }}>
                  Kako izgleda <span style={{
                  color: '#D4AF37'
                }}>Body Reset</span> u praksi?
                </h2>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg max-w-2xl mx-auto mb-8">
                  <p className="text-center text-[#DDD] leading-relaxed" style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  lineHeight: '1.6'
                }}>
                    Ovo nije samo terapija – ovo je sistem koji vas uči kako stvarno resetirati tijelo iznutra prema van.
                  </p>
                </div>
                
                {/* Timeline Steps */}
                <div className="space-y-8">
                  {/* Step 1 */}
                  <motion.div initial={{
                  opacity: 0,
                  x: -30
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.6,
                  delay: 0.1
                }} viewport={{
                  once: true
                }} className="flex items-start gap-6 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#B9975B] to-[#D4AF37] rounded-full flex items-center justify-center shadow-lg shadow-[#B9975B]/30 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(185,151,91,0.5)] transition-all duration-300">
                      <span className="text-xl font-bold text-white">1</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">Detaljna funkcionalna dijagnostika</h4>
                      <p className="text-white/80">Precizno identificiranje uzroka problema kroz sistematski pristup.</p>
                    </div>
                  </motion.div>
                  
                  {/* Connecting line */}
                  <div className="w-px h-8 bg-[#B9975B]/50 ml-8"></div>
                  
                  {/* Step 2 */}
                  <motion.div initial={{
                  opacity: 0,
                  x: -30
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.6,
                  delay: 0.2
                }} viewport={{
                  once: true
                }} className="flex items-start gap-6 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#B9975B] to-[#D4AF37] rounded-full flex items-center justify-center shadow-lg shadow-[#B9975B]/30 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(185,151,91,0.5)] transition-all duration-300">
                      <span className="text-xl font-bold text-white">2</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">Terapijska primjena (cross-friction + mobilizacije)</h4>
                      <p className="text-white/80">Precizna tehnika s maksimalnim rezultatima za tijelo.</p>
                    </div>
                  </motion.div>
                  
                  {/* Connecting line */}
                  <div className="w-px h-8 bg-[#B9975B]/50 ml-8"></div>
                  
                  {/* Step 3 */}
                  <motion.div initial={{
                  opacity: 0,
                  x: -30
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.6,
                  delay: 0.3
                }} viewport={{
                  once: true
                }} className="flex items-start gap-6 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#B9975B] to-[#D4AF37] rounded-full flex items-center justify-center shadow-lg shadow-[#B9975B]/30 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(185,151,91,0.5)] transition-all duration-300">
                      <span className="text-xl font-bold text-white">3</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">Post-tretmanska analiza i rezultat</h4>
                      <p className="text-white/80">Evaluacija rezultata i plan za dugoročno poboljšanje.</p>
                    </div>
                  </motion.div>
                </div>
                
                {/* BONUS Block */}
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
              }} className="mt-8 p-6 rounded-2xl" style={{
                border: '2px solid #B9975B',
                background: 'rgba(255,255,255,0.03)'
              }}>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">🎁</span>
                    <div>
                      <h4 className="text-lg font-bold text-[#B9975B] mb-1">BONUS</h4>
                      <p className="text-white">Priručnik + mentor + 17 GB literature!</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* CTA */}
                <div className="mt-12 text-center">
                  <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B48A1E] text-[#111] px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 border-0" onClick={() => document.getElementById('terapijski-razvoj')?.scrollIntoView({
                  behavior: 'smooth'
                })}>
                    Saznajte više o svakom koraku programa
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
              
              {/* Right - Image */}
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
            }} className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img src="/lovable-uploads/13716900-607e-4d69-8fde-bc0a3aa2945d.png" alt="Body Reset process - 3 faze dijagnostike, terapije i analize" className="w-full max-w-lg h-auto rounded-2xl shadow-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B9975B]/20 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules - Stepper Style */}
      <section id="terapijski-razvoj" className="py-24 relative overflow-hidden" style={{
      backgroundColor: '#0F0F0F'
    }}>
        {/* Subtle golden diagonal texture */}
        <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(45deg, transparent 40%, #B9975B 41%, #B9975B 42%, transparent 43%)',
        backgroundSize: '20px 20px'
      }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#B9975B]/15 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
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
            }} className="space-y-8">
                <h2 className="font-bold text-center mb-8" style={{
                fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                fontFamily: 'Playfair Display, serif',
                color: '#B9975B'
              }}>
                  Vaš terapijski <span style={{
                  color: '#D4AF37'
                }}>razvoj</span> – Modul po modul
                </h2>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg max-w-2xl mx-auto mb-8">
                  <p className="text-center text-[#DDD] leading-relaxed" style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  lineHeight: '1.6'
                }}>
                    Svaki modul donosi novu dimenziju razumijevanja tijela, uz praktičnu primjenu i strukturirani prijenos znanja.
                  </p>
                </div>
                
                {/* Stepper modules */}
                <div className="space-y-6">
                  {/* Connection line */}
                  <div className="relative">
                    <div className="absolute left-8 top-16 bottom-0 w-px bg-[#B9975B] opacity-50 z-0"></div>
                    
                    {/* Module 1 */}
                    <motion.div initial={{
                    opacity: 0,
                    y: 20
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    duration: 0.6,
                    delay: 0.1
                  }} viewport={{
                    once: true
                  }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B9975B]/30 hover:border-[#B9975B] hover:shadow-[0_0_30px_rgba(185,151,91,0.3)] transition-all duration-300 cursor-pointer group relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-[#B9975B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl">🦵</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-[#B9975B] mb-2">MODUL I</h4>
                          <h5 className="text-lg font-semibold text-white mb-2">Rješavanje križobolje i donjih ekstremiteta</h5>
                          <p className="text-white/80 text-sm">Kronična bol, išijalgija i dubinska dijagnostika uzroka bolova.</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Module 2 */}
                    <motion.div initial={{
                    opacity: 0,
                    y: 20
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    duration: 0.6,
                    delay: 0.2
                  }} viewport={{
                    once: true
                  }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B9975B]/30 hover:border-[#B9975B] hover:shadow-[0_0_30px_rgba(185,151,91,0.3)] transition-all duration-300 cursor-pointer group relative z-10 mt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-[#B9975B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl">💪</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-[#B9975B] mb-2">MODUL II</h4>
                          <h5 className="text-lg font-semibold text-white mb-2">Vrat, ramena i ruke</h5>
                          <p className="text-white/80 text-sm">Sindrom prenaprezanja, cervikalne disfunkcije i terapijski pristup.</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Module 3 */}
                    <motion.div initial={{
                    opacity: 0,
                    y: 20
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    duration: 0.6,
                    delay: 0.3
                  }} viewport={{
                    once: true
                  }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B9975B]/30 hover:border-[#B9975B] hover:shadow-[0_0_30px_rgba(185,151,91,0.3)] transition-all duration-300 cursor-pointer group relative z-10 mt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-[#B9975B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl">🧠</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-[#B9975B] mb-2">MODUL III</h4>
                          <h5 className="text-lg font-semibold text-white mb-2">Integracija znanja</h5>
                          <p className="text-white/80 text-sm">Mindfulness + Body Reset logika za holistički pristup terapiji.</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* PDF Download Button */}
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
                  }} className="mt-8">
                      <Button className="w-full bg-[#D4AF37] hover:bg-[#B48A1E] text-[#111] px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 border-0" asChild>
                        <a href="https://www.dropbox.com/scl/fi/yn8kc17b04lmzeffc9gzx/Cfm-vizija-programa.pdf?rlkey=29orrladodwfaw3un10mxokt5&st=trmcscjp&dl=0" target="_blank" rel="noopener noreferrer">
                          📄 Preuzmi cijelu viziju u PDF-u
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Right - Image */}
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
            }} className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img src="/lovable-uploads/9cfe67bb-72ab-4124-8514-9568549a2f12.png" alt="Moduli terapijskog razvoja" className="w-full max-w-lg h-auto rounded-2xl shadow-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B9975B]/20 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Dokazana učinkovitost */}
      <section className="py-24 relative overflow-hidden" style={{
      background: 'linear-gradient(to top, #0B0B0B, #0F0F0F)'
    }}>
        {/* Background image - subtle golden anatomy lines */}
        <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url('/lovable-uploads/52ef4e15-1bc8-4e0d-9e61-865ba934f5f8.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}></div>
        
        {/* Golden gradient wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#B9975B]/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
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
          }} className="mb-16">
              <h2 className="font-bold text-center mb-4" style={{
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              fontFamily: 'Playfair Display, serif',
              color: '#B9975B'
            }}>
                Rezultati koji govore <span style={{
                color: '#D4AF37'
              }}>sami za sebe</span>
              </h2>
              <p className="text-center text-[#DDD]" style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: '1.6'
            }}>
                Na temelju evaluacija 450+ klijenata iz prakse.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border-2 border-[#B9975B]/30 hover:border-[#B9975B] hover:shadow-[0_0_30px_rgba(185,151,91,0.3)] transition-all duration-300">
                <div className="text-6xl font-bold text-[#B9975B] mb-2">
                  <span className="countup">99</span><span>%</span>
                </div>
                <p className="text-[#F9F9F9]">klijenata osjeti olakšanje nakon 1 tretmana</p>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border-2 border-[#B9975B]/30 hover:border-[#B9975B] hover:shadow-[0_0_30px_rgba(185,151,91,0.3)] transition-all duration-300">
                <div className="text-6xl font-bold text-[#B9975B] mb-2">
                  <span className="countup">78</span><span>%</span>
                </div>
                <p className="text-[#F9F9F9]">ima manje bolova u leđima</p>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} viewport={{
              once: true
            }} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border-2 border-[#B9975B]/30 hover:border-[#B9975B] hover:shadow-[0_0_30px_rgba(185,151,91,0.3)] transition-all duration-300">
                <div className="text-6xl font-bold text-[#B9975B] mb-2">
                  <span className="countup">67</span><span>%</span>
                </div>
                <p className="text-[#F9F9F9]">pokazuje poboljšanje posture</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Za koga je CFM edukacija */}
      <section className="py-24 relative overflow-hidden" style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(/lovable-uploads/eb7db0d4-cc63-4234-9870-f67697edabdf.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#0F0F0F'
    }}>
        {/* Subtle golden diagonal texture */}
        <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(45deg, transparent 40%, #B9975B 41%, #B9975B 42%, transparent 43%)',
        backgroundSize: '20px 20px'
      }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#B9975B]/15 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
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
              <SectionTitle className="text-[#B9975B] mb-4">
                Za koga je ova edukacija?
              </SectionTitle>
              <p className="subtext text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Bez obzira jesi li fizioterapeut, maser ili tek počinješ – ova edukacija ti daje jasnu strukturu, sigurnost i alate koji odmah donose rezultate u praksi.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="group relative rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-[#B9975B]/30 hover:border-[#B9975B] hover:shadow-[0_0_30px_rgba(185,151,91,0.3)] transition-all duration-300 hover:scale-[1.03]">
                <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity duration-300" style={{
                backgroundImage: `url(/lovable-uploads/ef1d98cd-2156-445b-bfe6-cbf396735932.png)`
              }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                <div className="relative z-10 p-8 text-center">
                  <div className="w-16 h-16 bg-[#B9975B]/20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center border border-[#B9975B]/30 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(185,151,91,0.4)] transition-all duration-300">
                    <Users className="h-8 w-8 text-[#B9975B]" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">Fizioterapeuti & maseri</h4>
                  <p className="text-white/80 font-medium">koji žele jasnu dijagnostiku i tehnike koje djeluju odmah</p>
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="group relative rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-[#B9975B]/30 hover:border-[#B9975B] hover:shadow-[0_0_30px_rgba(185,151,91,0.3)] transition-all duration-300 hover:scale-[1.03]">
                <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity duration-300" style={{
                backgroundImage: `url(/lovable-uploads/823424b7-b993-4e45-ad3a-345bdf2b96c8.png)`
              }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                <div className="relative z-10 p-8 text-center">
                  <div className="w-16 h-16 bg-[#B9975B]/20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center border border-[#B9975B]/30 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(185,151,91,0.4)] transition-all duration-300">
                    <Target className="h-8 w-8 text-[#B9975B]" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">Oni koji žele rješenja</h4>
                  <p className="text-white/80 font-medium">a ne samo „još jedan tretman"</p>
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} viewport={{
              once: true
            }} className="group relative rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-[#B9975B]/30 hover:border-[#B9975B] hover:shadow-[0_0_30px_rgba(185,151,91,0.3)] transition-all duration-300 hover:scale-[1.03]">
                <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity duration-300" style={{
                backgroundImage: `url(/lovable-uploads/6ee38721-9454-4b7f-8093-bcc926dcb6ce.png)`
              }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                <div className="relative z-10 p-8 text-center">
                  <div className="w-16 h-16 bg-[#B9975B]/20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center border border-[#B9975B]/30 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(185,151,91,0.4)] transition-all duration-300">
                    <BookOpen className="h-8 w-8 text-[#B9975B]" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">Terapeuti</h4>
                  <p className="text-white/80 font-medium">koji žele metodologiju i praksu iza koje stoji znanost</p>
                </div>
              </motion.div>
            </div>
            
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
          }} className="text-center">
              
            </motion.div>
          </div>
        </div>
      </section>

          {/* Dodatne pogodnosti (Bonusi) */}
      <section className="py-24 relative overflow-hidden" style={{
      backgroundColor: '#0F0F0F'
    }}>
        {/* Subtle golden diagonal texture */}
        <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(45deg, transparent 40%, #B9975B 41%, #B9975B 42%, transparent 43%)',
        backgroundSize: '20px 20px'
      }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#B9975B]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#B9975B]/10 to-transparent rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
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
              <SectionTitle className="text-[#B9975B] mb-4 font-playfair">
                Dodatne pogodnosti koje ti ostaju zauvijek
              </SectionTitle>
              <p className="subtext text-xl text-white/90 max-w-3xl mx-auto">
                Sve što naučiš ne završava na seminaru – dobivaš alate, podršku i znanje koje te prati u praksi.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#B9975B]/30 hover:border-[#B9975B] hover:shadow-[0_0_30px_rgba(185,151,91,0.3)] transition-all duration-300 text-center overflow-hidden hover:scale-[1.02]">
                {/* Ribbon effect */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#B9975B] to-[#D4AF37] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-xl text-white animate-bounce">🎁</span>
                </div>
                
                <div className="relative z-10 pt-6">
                  <div className="w-16 h-16 bg-[#B9975B]/20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center border border-[#B9975B]/30 group-hover:scale-110 transition-all duration-300">
                    <BookOpen className="h-8 w-8 text-[#B9975B]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">BONUS #1</h4>
                  <p className="text-lg font-semibold text-[#B9975B] mb-2">PDF priručnik 34 stranice</p>
                  <p className="text-white/80 text-sm">jasnih koraka</p>
                </div>
                
                {/* Improved hover tooltip with dark background */}
                <div className="absolute inset-0 bg-black/90 text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <h5 className="font-bold text-[#CBA25D] mb-3">Sveobuhvatan priručnik</h5>
                    <p className="text-sm text-white/90">Korak-po-korak upute za sve tehnike koje naučiš na seminaru s detaljnim objašnjenjima.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#B9975B]/30 hover:border-[#B9975B] hover:shadow-[0_0_30px_rgba(185,151,91,0.3)] transition-all duration-300 text-center overflow-hidden hover:scale-[1.02]">
                {/* Ribbon effect */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#B9975B] to-[#D4AF37] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-xl text-white animate-bounce">🎁</span>
                </div>
                
                <div className="relative z-10 pt-6">
                  <div className="w-16 h-16 bg-[#B9975B]/20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center border border-[#B9975B]/30 group-hover:scale-110 transition-all duration-300">
                    <div className="flex items-center justify-center">
                      💬
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">BONUS #2</h4>
                  <p className="text-lg font-semibold text-[#B9975B] mb-2">Osobno mentoriranje</p>
                  <p className="text-white/80 text-sm">instruktora</p>
                </div>
                
                {/* Improved hover tooltip with dark background */}
                <div className="absolute inset-0 bg-black/90 text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <h5 className="font-bold text-[#CBA25D] mb-3">Mentorska podrška</h5>
                    <p className="text-sm text-white/90">Direktan pristup instruktoru i nakon edukacije za sva dodatna pitanja i savjete.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} viewport={{
              once: true
            }} className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#B9975B]/30 hover:border-[#B9975B] hover:shadow-[0_0_30px_rgba(185,151,91,0.3)] transition-all duration-300 text-center overflow-hidden hover:scale-[1.02]">
                {/* Ribbon effect */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#B9975B] to-[#D4AF37] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-xl text-white animate-bounce">🎁</span>
                </div>
                
                <div className="relative z-10 pt-6">
                  <div className="w-16 h-16 bg-[#B9975B]/20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center border border-[#B9975B]/30 group-hover:scale-110 transition-all duration-300">
                    <Activity className="h-8 w-8 text-[#B9975B]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">BONUS #3</h4>
                  <p className="text-lg font-semibold text-[#B9975B] mb-2">17 GB literature</p>
                  <p className="text-white/80 text-sm">za stalni razvoj</p>
                </div>
                
                {/* Improved hover tooltip with dark background */}
                <div className="absolute inset-0 bg-black/90 text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <h5 className="font-bold text-[#CBA25D] mb-3">Ogromna biblioteka</h5>
                    <p className="text-sm text-white/90">Kolekcija dodatnih materijala, studija slučaja i naprednih tehnika za daljnji razvoj.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Module Cards - Dark Mode */}
      <section id="moduli-po-gradovima" className="py-24 relative overflow-hidden scroll-mt-20" style={{
      backgroundColor: '#0F0F0F'
    }}>
        {/* Subtle golden diagonal texture */}
        <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(45deg, transparent 40%, #B9975B 41%, #B9975B 42%, transparent 43%)',
        backgroundSize: '20px 20px'
      }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#B9975B]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#B9975B]/10 to-transparent rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Scroll indicator */}
            <div className="text-center">
              <div className="w-1 h-16 bg-gradient-to-b from-[#B9975B] to-transparent mx-auto mb-4"></div>
              <p className="text-[#B9975B] text-sm">Moduli po gradovima</p>
            </div>

            {/* Modul 2 - Zagreb */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-[#B9975B]/30 p-8 hover:border-[#B9975B] hover:shadow-[0_0_30px_rgba(185,151,91,0.3)] transition-all duration-300 overflow-hidden">
              {/* Zagreb skyline background */}
              <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url(/lovable-uploads/66cf27b6-2cc1-4164-ae68-00fda09daba5.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>

              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-bold text-[#CBA25D] mb-8 text-center">
                  Modul 2 – <span className="text-white">Zagreb (6.–7.12.2025.)</span>
                </h3>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Euro className="h-6 w-6 text-[#CBA25D]" />
                      <span className="text-xl font-semibold text-white">Kotizacija: 460 €</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Calendar className="h-6 w-6 text-[#CBA25D]" />
                      <span className="text-xl text-white">Subota i nedjelja</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Clock className="h-6 w-6 text-[#CBA25D]" />
                      <span className="text-xl text-white">9:00 – 16:00</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <MapPin className="h-6 w-6 text-[#CBA25D]" />
                      <span className="text-xl text-white">Zagreb, Hrvatska</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Button size="lg" className="w-full bg-gradient-to-r from-[#B9975B] to-[#CBA25D] text-black font-bold hover:shadow-[0_0_25px_rgba(185,151,91,0.5)] transition-all duration-300 hover:scale-105" asChild>
                      <a href="https://tally.so/r/wA5kvD" target="_blank" rel="noopener noreferrer">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Prijavite se odmah
                      </a>
                    </Button>
                    
                    <Button size="lg" className="w-full bg-white/10 text-white border border-[#CBA25D]/30 hover:bg-[#CBA25D]/20 hover:border-[#CBA25D] transition-all duration-300" asChild>
                      <a href="https://wa.me/385958558953?text=Pozdrav%2C%20zanima%20me%20besplatna%20konzultacija%20vezano%20uz%20te%C4%8Daj%20CFM." target="_blank" rel="noopener noreferrer">
                        <Phone className="mr-2 h-5 w-5" />
                        Besplatna konzultacija
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Modul 1 - Split */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-[#B9975B]/30 p-8 hover:border-[#B9975B] hover:shadow-[0_0_30px_rgba(185,151,91,0.3)] transition-all duration-300 overflow-hidden">
              {/* Split landscape background */}
              <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `url(/lovable-uploads/ffc3eb58-f687-443d-af4a-ae13c5923f78.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>

              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-bold text-[#CBA25D] mb-8 text-center">
                  Modul 1 – <span className="text-white">Split (24.–25.01.2026.)</span>
                </h3>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Euro className="h-6 w-6 text-[#CBA25D]" />
                      <span className="text-xl font-semibold text-white">Kotizacija: 460 €</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Calendar className="h-6 w-6 text-[#CBA25D]" />
                      <span className="text-xl text-white">Subota i nedjelja</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Clock className="h-6 w-6 text-[#CBA25D]" />
                      <span className="text-xl text-white">9:00 – 16:00</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <MapPin className="h-6 w-6 text-[#CBA25D]" />
                      <span className="text-xl text-white">Split, Hrvatska</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Button size="lg" className="w-full bg-gradient-to-r from-[#B9975B] to-[#CBA25D] text-black font-bold hover:shadow-[0_0_25px_rgba(185,151,91,0.5)] transition-all duration-300 hover:scale-105" asChild>
                      <a href="https://tally.so/r/wA5kvD" target="_blank" rel="noopener noreferrer">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Prijavite se odmah
                      </a>
                    </Button>
                    
                    <Button size="lg" className="w-full bg-white/10 text-white border border-[#CBA25D]/30 hover:bg-[#CBA25D]/20 hover:border-[#CBA25D] transition-all duration-300" asChild>
                      <a href="https://wa.me/385958558953?text=Pozdrav%2C%20zanima%20me%20besplatna%20konzultacija%20vezano%20uz%20te%C4%8Daj%20CFM." target="_blank" rel="noopener noreferrer">
                        <Phone className="mr-2 h-5 w-5" />
                        Besplatna konzultacija
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Modul 1 - Rijeka */}
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
          }} className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-[#B9975B]/30 p-8 hover:border-[#B9975B] hover:shadow-[0_0_30px_rgba(185,151,91,0.3)] transition-all duration-300 overflow-hidden">
              {/* Rijeka background image */}
              <div className="absolute inset-0 opacity-20">
                <img src="/lovable-uploads/e496b135-28f2-457d-ab23-408935e31dd0.png" alt="Rijeka city" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#CBA25D] mb-8 text-center relative z-10">
                Modul 1 – <span className="text-white">Rijeka (14.–15.02.2026.)</span>
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Euro className="h-6 w-6 text-[#CBA25D]" />
                    <span className="text-xl font-semibold text-white">Kotizacija: 460 €</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Calendar className="h-6 w-6 text-[#CBA25D]" />
                    <span className="text-xl text-white">Subota i nedjelja</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-[#CBA25D]" />
                    <span className="text-xl text-white">9:00 – 16:00</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-[#CBA25D]" />
                    <span className="text-xl text-white">Rijeka, Hrvatska</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-gradient-to-r from-[#B9975B] to-[#CBA25D] text-black font-bold hover:shadow-[0_0_25px_rgba(185,151,91,0.5)] transition-all duration-300 hover:scale-105" asChild>
                    <a href="https://tally.so/r/wA5kvD" target="_blank" rel="noopener noreferrer">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Prijavite se odmah
                    </a>
                  </Button>
                  
                  <Button size="lg" className="w-full bg-white/10 text-white border border-[#CBA25D]/30 hover:bg-[#CBA25D]/20 hover:border-[#CBA25D] transition-all duration-300" asChild>
                    <a href="https://wa.me/385958558953?text=Pozdrav%2C%20zanima%20me%20besplatna%20konzultacija%20vezano%20uz%20te%C4%8Daj%20CFM." target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-5 w-5" />
                      Besplatna konzultacija
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O predavaču - Dark Mode - Redesigned */}
      <section className="py-24 relative overflow-hidden" style={{
      backgroundColor: '#0F0F0F'
    }}>
        {/* Subtle golden diagonal texture */}
        <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(45deg, transparent 40%, #B9975B 41%, #B9975B 42%, transparent 43%)',
        backgroundSize: '20px 20px'
      }}></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#B9975B]/15 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.h2 initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="font-bold text-center mb-16" style={{
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontFamily: 'Playfair Display, serif',
            color: '#B9975B'
          }}>
              O <span style={{
              color: '#D4AF37'
            }}>predavaču</span>
            </motion.h2>
            
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="grid lg:grid-cols-[300px_1fr] gap-12 items-start bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-[#B9975B]/30">
              {/* Image - Left on desktop, top on mobile */}
              <div className="lg:sticky lg:top-8">
                <div className="w-64 h-64 rounded-2xl mx-auto overflow-hidden shadow-2xl border-4 border-[#B9975B]/30">
                  <img src="/lovable-uploads/3f748ba1-dbd0-4f6b-88d0-24d82ba5f789.png" alt="Ante Antić - Instruktor CFM" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Content - Right on desktop, bottom on mobile */}
              <div className="space-y-8">
                {/* Hero intro */}
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">Ante Antić</h3>
                  <p className="text-xl text-[#CBA25D] font-semibold leading-relaxed">
                    Edukator, vizionar i stručnjak za manualnu terapiju
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-[#B9975B] flex-shrink-0" />
                      <span className="text-white/90 leading-relaxed">16+ godina iskustva</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-[#B9975B] flex-shrink-0" />
                      <span className="text-white/90 leading-relaxed">900+ educiranih terapeuta</span>
                    </div>
                  </div>
                  
                  <p className="text-white/90 leading-relaxed text-lg pt-2">
                    Osnivač Učilišta Supra Studium i autor inovativnih terapijskih metoda.
                  </p>
                </div>

                {/* Main description */}
                <div className="space-y-4 border-l-4 border-[#B9975B]/30 pl-6">
                  <p className="text-white/90 leading-loose text-lg">
                    Njegov pristup poučavanju kombinira <span className="text-[#CBA25D] font-semibold">preciznost, prisutnost i duboko poštovanje prema tijelu</span>.
                  </p>
                  <p className="text-white/90 leading-loose text-lg">
                    Kao specijalist za dijagnostiku, biomehaniku i terapiju, Ante ne prenosi samo znanje – on oblikuje novu generaciju terapeuta koji razumiju snagu transformacije kroz dodir.
                  </p>
                </div>

                {/* Mission quote */}
                <div className="bg-gradient-to-r from-[#B9975B]/20 to-transparent rounded-xl p-6 border-l-4 border-[#B9975B]">
                  <div className="flex gap-4">
                    <Quote className="h-8 w-8 text-[#B9975B] flex-shrink-0" />
                    <div className="space-y-3">
                      <p className="text-white/95 text-lg italic leading-loose">
                        Moja misija je osnažiti terapeute da postanu vođe – sigurni u svoje znanje, povezani sa sobom i spremni mijenjati živote.
                      </p>
                      <p className="text-[#CBA25D] font-semibold text-sm">— Ante Antić</p>
                    </div>
                  </div>
                </div>

                {/* Show more button */}
                <div className="pt-4">
                  <Button variant="outline" className="w-full sm:w-auto border-[#B9975B] text-[#CBA25D] hover:bg-[#B9975B]/10 hover:text-white transition-all duration-300" onClick={() => setShowFullBio(!showFullBio)}>
                    <ChevronDown className={`mr-2 h-4 w-4 transition-transform duration-300 ${showFullBio ? 'rotate-180' : ''}`} />
                    {showFullBio ? 'Prikaži manje' : 'Prikaži više o instruktoru'}
                  </Button>
                </div>

                {/* Expandable content */}
                <div className="overflow-hidden transition-all duration-500 ease-in-out" style={{
                maxHeight: showFullBio ? '2000px' : '0',
                opacity: showFullBio ? 1 : 0
              }}>
                  <div className="pt-6 space-y-6 border-t border-[#B9975B]/20">
                    <div className="space-y-6 text-white/90 leading-loose text-lg">
                      <p>
                        <span className="font-bold text-[#CBA25D]">CFM Body Reset</span> nije još jedan vikend tečaj. To je filozofija rada s tijelom.
                      </p>
                      
                      <p>
                        Kao terapeut s više od 18 godina iskustva, prošao sam kroz brojne metode – neke previše površne, druge previše apstraktne. CFM Body Reset rodio se iz stvarne potrebe: povezati znanstvenu jasnoću s dubinom dodira i vratiti čovjeka – ne samo simptom – u središte terapije.
                      </p>
                      
                      <p>
                        Ovaj pristup je praktičan, učinkovit i primjenjiv odmah, ali njegova snaga leži u nečemu dubljem: u razumijevanju tijela kao sustava i terapeuta kao osobe koja nosi znanje, prisutnost i sigurnost. CFM nije samo tehnika – to je način razmišljanja, osjećanja i djelovanja.
                      </p>
                      
                      <p>
                        Tu filozofiju živimo i kroz <span className="font-bold text-[#CBA25D]">Feel & Heal Festival</span> – međunarodni događaj koji okuplja terapeute i masere iz cijelog svijeta u slavlju dodira, znanja i zajedništva. Festival je više od natjecanja: to je platforma za rast, razmjenu iskustava i vrhunsku edukaciju. Kroz interaktivne radionice, demonstracije i konstruktivne povratne informacije, sudionici imaju priliku učiti, predstaviti se na međunarodnoj sceni i steći priznanja koja zaslužuju.
                      </p>
                      
                      <p>
                        CFM pristup i Feel & Heal Festival dijele istu viziju: podići struku, osnažiti terapeute i vratiti dodiru njegovo pravo mjesto – u terapiji, zajednici i svijesti.
                      </p>
                      
                      <p className="pt-4">
                        Ovo je poziv na dublje razumijevanje tijela, svijesti i uloge terapeuta.<br />
                        <span className="font-bold text-[#CBA25D]">S jasnoćom. S povjerenjem. S rezultatima koji se osjećaju.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - Dark Mode */}
      <section className="py-24 relative overflow-hidden" style={{
      backgroundColor: '#0B0B0B'
    }}>
        {/* Background image - new image from upload */}
        <div className="absolute inset-0 opacity-100" style={{
        backgroundImage: `url('/lovable-uploads/3cbe21cc-644a-4c35-b785-cc0cdc00fbc8.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Subtle golden diagonal texture */}
        <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(45deg, transparent 40%, #B9975B 41%, #B9975B 42%, transparent 43%)',
        backgroundSize: '20px 20px'
      }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
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
              <h2 className="font-bold text-center mb-4" style={{
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              fontFamily: 'Playfair Display, serif',
              color: '#FFFFFF'
            }}>
                Iskustva koja mijenjaju <span style={{
                color: '#D4AF37'
              }}>praksu</span>
              </h2>
              <p className="text-center text-white/90 max-w-3xl mx-auto" style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: '1.6'
            }}>
                Prava iskustva terapeuta i masera koji su prošli kroz edukaciju.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="group bg-[#1D1D1B] backdrop-blur-sm p-8 rounded-2xl border border-[#BFA76B]/50 hover:border-[#BFA76B] hover:shadow-[0_0_30px_rgba(191,167,107,0.3)] transition-all duration-300 hover:rotate-1 hover:-translate-y-1">
                {/* Quotation icon */}
                <Quote className="h-8 w-8 text-[#CBA25D] mb-4 opacity-60" />
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <motion.div key={i} initial={{
                  opacity: 0,
                  scale: 0
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  duration: 0.3,
                  delay: 0.5 + i * 0.1
                }} viewport={{
                  once: true
                }}>
                      <Star className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
                    </motion.div>)}
                </div>
                <p className="text-[#F5F5DC] italic mb-4 leading-relaxed">
                  "Predivnoo je bilo sve… Ante je jedan od rijetkih predavača koji nesebično… posebno… unosi cijelog sebe u predavanja. Jedna posebna divna ekipa ljudi. Predivna topla energija i jeeeeedva čekam dalje ❤️"
                </p>
                <p className="font-bold text-[#E0C48F]" style={{
                fontFamily: 'serif'
              }}>– Anamarija V.</p>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="group bg-[#1D1D1B] backdrop-blur-sm p-8 rounded-2xl border border-[#BFA76B]/50 hover:border-[#BFA76B] hover:shadow-[0_0_30px_rgba(191,167,107,0.3)] transition-all duration-300 hover:rotate-1 hover:-translate-y-1">
                {/* Quotation icon */}
                <Quote className="h-8 w-8 text-[#CBA25D] mb-4 opacity-60" />
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <motion.div key={i} initial={{
                  opacity: 0,
                  scale: 0
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  duration: 0.3,
                  delay: 0.7 + i * 0.1
                }} viewport={{
                  once: true
                }}>
                      <Star className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
                    </motion.div>)}
                </div>
                <p className="text-[#F5F5DC] italic mb-4 leading-relaxed">
                  "Sjajan rad, fantastično znanje, dijagnostičke metode, krasno koncipirano predavanje i sjajna lineage majstora, bio sam i mogu vam samo preporučiti da i vi odete, nauči se jako puno."
                </p>
                <p className="font-bold text-[#E0C48F]" style={{
                fontFamily: 'serif'
              }}>– Tomislav R.</p>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} viewport={{
              once: true
            }} className="group bg-[#1D1D1B] backdrop-blur-sm p-8 rounded-2xl border border-[#BFA76B]/50 hover:border-[#BFA76B] hover:shadow-[0_0_30px_rgba(191,167,107,0.3)] transition-all duration-300 hover:rotate-1 hover:-translate-y-1">
                {/* Quotation icon */}
                <Quote className="h-8 w-8 text-[#CBA25D] mb-4 opacity-60" />
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <motion.div key={i} initial={{
                  opacity: 0,
                  scale: 0
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  duration: 0.3,
                  delay: 0.9 + i * 0.1
                }} viewport={{
                  once: true
                }}>
                      <Star className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
                    </motion.div>)}
                </div>
                <p className="text-[#F5F5DC] italic mb-4 leading-relaxed">
                  "Pozdrav Ante, evo s povratnim informacijama... ja sam oduševljena bolovi su smanjeni za 80%... ogromna razlika se vidi... htjela bi još jednom doći jer me vrat još zeza pa da ponovimo još jednom tretman."
                </p>
                <p className="font-bold text-[#E0C48F]" style={{
                fontFamily: 'serif'
              }}>– Sanja B.</p>
              </motion.div>
            </div>
            
            {/* CTA button below testimonials */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} viewport={{
            once: true
          }} className="text-center mt-12">
              <Button className="bg-gradient-to-r from-[#B9975B] to-[#CBA25D] text-black font-semibold hover:shadow-[0_0_25px_rgba(185,151,91,0.5)] transition-all duration-300 hover:scale-105" size="lg">
                <ArrowRight className="mr-2 h-5 w-5" />
                Pogledaj više iskustava
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section - NEW */}
      <section className="py-24 relative overflow-hidden" style={{
      backgroundColor: '#191919'
    }}>
        {/* Subtle golden lines pattern */}
        <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(90deg, transparent 48%, #B9975B 49%, #B9975B 51%, transparent 52%)',
        backgroundSize: '30px 30px'
      }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
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
            <SectionTitle className="text-white mb-4 font-playfair">
              Trenuci s edukacija
            </SectionTitle>
                <p className="text-xl text-gray-400">Autentična atmosfera koja pokazuje kako znanje postaje iskustvo.</p>
              </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.6,
                delay: 0.1
              }} viewport={{
                once: true
              }} className="group relative overflow-hidden rounded-2xl border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] hover:scale-[1.03] transition-all duration-300">
                  <img src="/lovable-uploads/d6767fa7-480a-4007-a981-8b9d2f31a019.png" alt="Praktična edukacija u tijeku" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(212,175,55,0.3)] group-hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"></div>
                </motion.div>
                
                <motion.div initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }} viewport={{
                once: true
              }} className="group relative overflow-hidden rounded-2xl border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] hover:scale-[1.03] transition-all duration-300">
                  <img src="/lovable-uploads/f384d552-f9e5-4493-a482-d1f5365c77fd.png" alt="Praktična edukacija u tijeku" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(212,175,55,0.3)] group-hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"></div>
                </motion.div>
                
                <motion.div initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.6,
                delay: 0.3
              }} viewport={{
                once: true
              }} className="group relative overflow-hidden rounded-2xl border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] hover:scale-[1.03] transition-all duration-300">
                  <img src="/lovable-uploads/2bd499eb-7c80-44d0-9542-d26283f5db6a.png" alt="Instruktor demonstrira tehnike" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(212,175,55,0.3)] group-hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden wave transition between sections */}
      

      {/* FAQ - Dark Mode */}
      <section className="pt-24 pb-16 relative overflow-hidden" style={{
      backgroundColor: '#111111'
    }}>
        {/* Subtle golden diagonal texture */}
        <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(45deg, transparent 40%, #B9975B 41%, #B9975B 42%, transparent 43%)',
        backgroundSize: '20px 20px'
      }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <SectionTitle className="text-white mb-16 text-center font-playfair">
              Sve što vas zanima, prije nego što krenete
            </SectionTitle>
            
            <Accordion type="single" collapsible className="space-y-4">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} viewport={{
              once: true
            }}>
                <AccordionItem value="lokacija" className="border border-[#D4AF37]/30 rounded-lg px-6 bg-[#222222] hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300">
                  <AccordionTrigger className="text-lg font-semibold text-[#F5F5DC] hover:text-[#D4AF37] transition-colors duration-300 group">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#D4AF37] text-sm">?</span>
                      </div>
                      Na kojoj lokaciji se održava i kako doći?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#F5F5DC] leading-relaxed transition-all duration-500 data-[state=open]:animate-accordion-down">
                    <div className="relative">
                      <span className="group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-[#B9975B] group-data-[state=open]:via-[#D4AF37] group-data-[state=open]:to-[#B9975B] group-data-[state=open]:bg-clip-text group-data-[state=open]:text-transparent group-data-[state=open]:animate-pulse">
                        Edukacije se održavaju u Zagrebu, Rijeci, Splitu, Slavoniji i Sarajevu, uvijek vikendom (09:00–16:00). Točne datume pogledajte u rasporedu ili nam pišite.
                      </span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} viewport={{
              once: true
            }}>
                <AccordionItem value="certifikat" className="border border-[#D4AF37]/30 rounded-lg px-6 bg-[#222222] hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300">
                  <AccordionTrigger className="text-lg font-semibold text-[#F5F5DC] hover:text-[#D4AF37] transition-colors duration-300 group">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#D4AF37] text-sm">?</span>
                      </div>
                      Dobivam li službene bodove i certifikat?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#F5F5DC] leading-relaxed transition-all duration-500 data-[state=open]:animate-accordion-down">
                    <div className="relative">
                      <span className="group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-[#B9975B] group-data-[state=open]:via-[#D4AF37] group-data-[state=open]:to-[#B9975B] group-data-[state=open]:bg-clip-text group-data-[state=open]:text-transparent group-data-[state=open]:animate-pulse">
                        Tečaj nije bodovan službenim bodovima komore, ali po završetku dobivate uvjerenje koje je moguće upisati u e-radnu knjižicu kao dodatno obrazovanje. Ovaj program je takoðer priznat i verificiran od Svjetske federacije za masažu, manualnu terapiju i Nuad Thai.
To je službeni dokaz stručnosti koji može pomoći kod zapošljavanja ili rada na tržištu.

                      </span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} viewport={{
              once: true
            }}>
                <AccordionItem value="iskustvo" className="border border-[#D4AF37]/30 rounded-lg px-6 bg-[#222222] hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300">
                  <AccordionTrigger className="text-lg font-semibold text-[#F5F5DC] hover:text-[#D4AF37] transition-colors duration-300 group">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#D4AF37] text-sm">?</span>
                      </div>
                      Je li edukacija za mene ako nemam iskustva?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#F5F5DC] leading-relaxed transition-all duration-500 data-[state=open]:animate-accordion-down">
                    <div className="relative">
                      <span className="group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-[#B9975B] group-data-[state=open]:via-[#D4AF37] group-data-[state=open]:to-[#B9975B] group-data-[state=open]:bg-clip-text group-data-[state=open]:text-transparent group-data-[state=open]:animate-pulse">
                        Dobrodošli su svi s osnovnim znanjem anatomije i fiziologije: fizioterapeuti, maseri, kineziolozi, studenti i ostali terapeuti. Ako radite s pokretom ili dodirom – ovaj tečaj je za vas.
                      </span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

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
            }}>
                <AccordionItem value="razlika" className="border border-[#D4AF37]/30 rounded-lg px-6 bg-[#222222] hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300">
                  <AccordionTrigger className="text-lg font-semibold text-[#F5F5DC] hover:text-[#D4AF37] transition-colors duration-300 group">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#D4AF37] text-sm">?</span>
                      </div>
                      Po čemu se razlikuje ovaj tečaj?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#F5F5DC] leading-relaxed transition-all duration-500 data-[state=open]:animate-accordion-down">
                    <div className="relative">
                      <span className="group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-[#B9975B] group-data-[state=open]:via-[#D4AF37] group-data-[state=open]:to-[#B9975B] group-data-[state=open]:bg-clip-text group-data-[state=open]:text-transparent group-data-[state=open]:animate-pulse">
                        Ovo nije klasična masaža. Učimo vas preciznoj dijagnostici i terapiji kroz Body Reset metodu: mobilizacije, fascije, živci i funkcionalna integracija – sve u jednom pristupu.
                      </span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.5
            }} viewport={{
              once: true
            }}>
                <AccordionItem value="placanje" className="border border-[#D4AF37]/30 rounded-lg px-6 bg-[#222222] hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300">
                  <AccordionTrigger className="text-lg font-semibold text-[#F5F5DC] hover:text-[#D4AF37] transition-colors duration-300 group">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#D4AF37] text-sm">?</span>
                      </div>
                      Koji su načini plaćanja?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#F5F5DC] leading-relaxed transition-all duration-500 data-[state=open]:animate-accordion-down">
                    <div className="relative">
                      <span className="group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-[#B9975B] group-data-[state=open]:via-[#D4AF37] group-data-[state=open]:to-[#B9975B] group-data-[state=open]:bg-clip-text group-data-[state=open]:text-transparent group-data-[state=open]:animate-pulse">
                        Kotizacija se uplaćuje na žiro račun Učilišta. Rezervaciju radite klikom na prijavu ili preko maila – a broj mjesta je ograničen jer radimo u malim grupama.
                      </span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            </Accordion>
          </div>

          {/* CTA Section */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} viewport={{
          once: true
        }} className="text-center mt-16">
            <p className="text-lg text-[#F5F5DC] mb-6">
              💡 Još pitanja? Kontaktiraj nas – rado ćemo ti pomoći.
            </p>
            <a href="#kontakt" className="inline-block">
              <motion.div whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(212,175,55,0.5)"
            }} whileTap={{
              scale: 0.95
            }} transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }} className="inline-block">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#c19b2a] text-[#111111] px-8 py-4 text-lg font-bold rounded-xl shadow-lg transition-all duration-300">
                  Pošalji upit
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>


      {/* Final CTA - Golden Background */}
      

      {/* Premium Dark Hero Section - Moved to bottom */}
      <motion.section initial={{
      opacity: 0,
      y: 8
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.25,
      ease: "easeOut"
    }} viewport={{
      once: true
    }} className="relative pt-16 pb-16 overflow-hidden" style={{
      backgroundColor: '#1E1B17'
    }}>
        {/* Diagonal shimmer pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(
              45deg,
              #C9A74F 0px,
              #C9A74F 1px,
              transparent 1px,
              transparent 12px
            )`
      }} />
        
        {/* Radial highlight */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-48 opacity-30" style={{
        background: 'radial-gradient(ellipse at center, #3A2F22 0%, transparent 100%)'
      }} />

        {/* Background Clock Icon - Subtle Indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden md:block">
          <Clock className="w-64 h-64 text-[#C9A74F]" strokeWidth={0.5} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-[780px] mx-auto text-center space-y-6">
            {/* Golden line above title */}
            <motion.div initial={{
            opacity: 0,
            scaleX: 0
          }} whileInView={{
            opacity: 0.8,
            scaleX: 1
          }} transition={{
            delay: 0.06,
            duration: 0.3
          }} viewport={{
            once: true
          }} className="w-16 h-0.5 mx-auto mb-6" style={{
            backgroundColor: '#C9A74F'
          }} />

            {/* Title */}
            <motion.h2 initial={{
            opacity: 0,
            y: 8,
            filter: "blur(6px)"
          }} whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
          }} transition={{
            delay: 0.06,
            duration: 0.6,
            ease: "easeOut"
          }} viewport={{
            once: true
          }} style={{
            letterSpacing: '0.2px'
          }} className="text-4xl sm:text-3xl font-bold text-[#FAFAFA] md:text-4xl font-playfair">
              🟡 Upisi su otvoreni – broj mjesta je ograničen!
            </motion.h2>

            {/* Lead text */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.12,
            duration: 0.4,
            ease: "easeOut"
          }} viewport={{
            once: true
          }} className="text-xl text-[#E0E0E0] leading-relaxed font-medium md:text-2xl">
              Ne čekajte zadnji trenutak – grupe se popunjavaju tjednima unaprijed jer radimo u manjim grupama radi kvalitete i individualnog pristupa.
            </motion.p>

            {/* Important Notice */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.15,
            duration: 0.4,
            ease: "easeOut"
          }} viewport={{
            once: true
          }} className="bg-[#2A2418]/40 border border-[#C9A74F]/20 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-lg text-[#FAFAFA] leading-relaxed">
                <span className="text-[#C9A74F] font-bold text-xl">📌 Važno:</span>{" "}
                <span className="font-semibold">Ovaj tečaj se u Zagrebu organizira samo jednom godišnje, a u drugim gradovima još rjeđe.</span>
                <br />
                <span className="text-[#CCCCCC]">Provjerite raspored i osigurajte svoje mjesto dok još stignete.</span>
              </p>
            </motion.div>

            {/* Final CTA text */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.18,
            duration: 0.4,
            ease: "easeOut"
          }} viewport={{
            once: true
          }} className="text-lg text-[#E0E0E0] leading-relaxed font-medium pt-2">
              👉 Budite dio generacije terapeuta koja podiže standard struke.
            </motion.p>

            {/* Hairline divider */}
            <motion.div initial={{
            opacity: 0,
            scaleX: 0
          }} whileInView={{
            opacity: 1,
            scaleX: 1
          }} transition={{
            delay: 0.21,
            duration: 0.4
          }} viewport={{
            once: true
          }} className="w-[60%] h-px mx-auto my-8" style={{
            backgroundColor: '#2A241D'
          }} />

            {/* CTA Button */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.24,
            duration: 0.4,
            ease: "easeOut"
          }} viewport={{
            once: true
          }}>
              <a href="#kontakt" className="inline-block">
                <motion.div whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(212,175,55,0.5)"
              }} whileTap={{
                scale: 0.95
              }} transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
              }} className="inline-block">
                  <Button size="lg" className="px-8 py-6 text-lg font-semibold rounded-full bg-[#C9A74F] hover:bg-[#B8964A] text-[#111111] border-2 border-[#C9A74F] hover:border-[#E8D6A2] transition-all duration-200 shadow-lg">
                    Provjerite termine i prijavite se
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vaš terapijski put se tu ne zaustavlja Section */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0F0F0F]">
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
                <h2 className="font-bold text-center mb-8" style={{
                fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                fontFamily: 'Playfair Display, serif',
                color: '#B9975B'
              }}>
                  Vaš terapijski put se tu <span style={{
                  color: '#D4AF37'
                }}>ne zaustavlja</span>
                </h2>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg max-w-2xl mx-auto mb-8">
                <p className="text-center text-white/80" style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: '1.6'
              }}>
                  Otkrijte cijeli spektar specijaliziranih edukacija i proširite svoje terapijske vještine.
                </p>
              </div>
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
              <Button className="bg-[#D4AF37] hover:bg-[#B48A1E] text-[#111] px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 border-0 group relative overflow-hidden" onClick={() => window.location.href = '/'}>
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
};
export default CrossfrictionPage;