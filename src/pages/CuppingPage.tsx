import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Award, Users, Brain, Activity, ArrowRight, Star, Phone, Calendar, Euro, Clock, MapPin, BookOpen, Plus, Quote, Play, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import GoldenWave from '@/components/ui/GoldenWave';
import HeroTitle from '@/components/ui/HeroTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import TextShimmer from '@/components/ui/TextShimmer';
import { CourseHighlights } from '@/components/ui/CourseHighlights';
import { CourseStickyBar } from '@/components/ui/CourseStickyBar';
import { ContactFooter } from '@/components/ContactFooter';
import AutoCarousel from '@/components/ui/AutoCarousel';

// Add smooth scrolling CSS and shimmer animations
const smoothScrollCSS = `
  html {
    scroll-behavior: smooth;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes shimmer-border {
    0% { background-position: -400% 0; }
    100% { background-position: 400% 0; }
  }
  
  .shimmer-effect {
    position: relative;
    overflow: hidden;
  }
  
  .shimmer-effect::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: shimmer 1.5s linear infinite;
    z-index: 1;
  }
`;

// Add CSS to head
if (typeof document !== 'undefined' && !document.getElementById('smooth-scroll-styles')) {
  const style = document.createElement('style');
  style.id = 'smooth-scroll-styles';
  style.textContent = smoothScrollCSS;
  document.head.appendChild(style);
}
const CuppingPage = () => {
  const [blackOverlay, setBlackOverlay] = React.useState(0);
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
      <section className="relative min-h-screen flex items-center overflow-hidden -mt-20">
        {/* Black overlay that fades in on scroll */}
        <div className="absolute inset-0 bg-black z-[3] pointer-events-none transition-opacity duration-300" style={{
        opacity: blackOverlay
      }} />
        
        <motion.div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 100%), url(/lovable-uploads/f24de08b-302e-4c5a-bf63-8aa00555f3d8.png)`
      }} initial={{
        scale: 1.1
      }} animate={{
        scale: 1
      }} transition={{
        duration: 1.5,
        ease: "easeOut"
      }} />
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-5xl mx-auto">
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
          }} className="mb-8 md:mb-10">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[-0.01em] leading-[0.9] text-center relative z-[4] px-4">
                <span className="block font-playfair font-normal text-white/90 drop-shadow-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 tracking-wide" style={{
                textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)'
              }}>Edukacija koja ostavlja trag</span>
                <TextShimmer className="font-playfair font-bold text-white drop-shadow-xl tracking-wide text-shadow-lg relative z-[4] [--base-gradient-color:#ffd700] [--base-color:#ffffff] [text-shadow:0_6px_12px_rgba(0,0,0,0.6),0_3px_6px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.3)]" duration={2.5} spread={3}>
                  CUPPING TERAPIJA
                </TextShimmer>
              </div>
            </motion.div>

            {/* New Subtitle */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} className="mb-6">
              <h2 className="text-[clamp(20px,3vw,28px)] leading-relaxed tracking-wide font-medium text-[#d4af37] text-center drop-shadow-md">
                Cupping koji djeluje dublje od površine
              </h2>
            </motion.div>

            {/* Transparent Description Box */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8,
            duration: 0.8
          }} className="mb-8 flex justify-center">
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 max-w-3xl border border-white/20">
                <p className="text-[clamp(16px,1.8vw,18px)] leading-relaxed text-white/90 text-center" style={{
                fontFamily: 'Inter, sans-serif',
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}>
                  Nauči primjenjivati cupping terapiju kao snažan alat za oslobađanje napetosti, ubrzavanje oporavka i vraćanje ravnoteže tijelu. Savladat ćeš statičke i klizne tehnike, razumjeti energetske blokade i otkriti kako cupping kombinirati s masažom, akupresurom i trigger točkama.
                </p>
                <p className="text-[clamp(16px,1.8vw,18px)] leading-relaxed text-white/90 text-center mt-4" style={{
                fontFamily: 'Inter, sans-serif',
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}>
                  <strong>Rezultat:</strong> tretmani koji ostavljaju dugotrajan učinak – ne samo na koži, već u cijelom organizmu.
                </p>
              </div>
            </motion.div>

            
            {/* Updated CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 1.0,
            duration: 0.8
          }} className="flex flex-col sm:flex-row gap-4 mb-4 justify-center items-center">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }}>
                <Button size="lg" className="bg-[#d4af37] hover:bg-[#c19b2a] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] text-black px-8 py-4 text-lg font-bold rounded-xl shadow-lg transition-all duration-300">
                  Upiši seminar
                </Button>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }}>
                <Button asChild variant="outline" size="lg" className="backdrop-blur-md bg-white/10 border-[#d4af37] text-white hover:bg-white/20 hover:text-[#d4af37] px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300">
                  <a href="#why-cupping">Saznaj više</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Additional CTA Text */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 1.2,
            duration: 0.8
          }} className="text-[#d4af37] text-base font-semibold text-center" style={{
            textShadow: '0 0 10px rgba(212, 175, 55, 0.5), 1px 1px 2px rgba(0,0,0,0.8)'
          }}>
              Pridružite se ekskluzivnoj edukaciji – samo 12 mjesta!
            </motion.p>
          </div>
        </div>
      </section>

      <CourseHighlights items={[{
      icon: "⚡️",
      title: "Cupping Koji Donosi Rezultat",
      subtitle: "Integrirani protokol: cupping + masaža + akupresura + trigger-točke = mjerljivo olakšanje nakon 1 tretmana."
    }, {
      icon: "🎯",
      title: "9 Tehnika • 3 Koraka",
      subtitle: "Savladaj 9 kliznih tehnika i 3 ključna TCM principa. Jasne upute, odmah primjenjivo u praksi."
    }, {
      icon: "🎪",
      title: "Jedan Sustav. Više Ciljeva.",
      subtitle: "Bol, napetost, anti-age i anticelulit – precizni protokoli za jasne estetske i terapijske rezultate."
    }, {
      icon: "🏅",
      title: "Certifikat Koji Vrijedi",
      subtitle: "Upis u e-radnu knjižicu. Međunarodno priznato znanje koje diže tvoju cijenu i otvara nova tržišta."
    }]} accentIndex={1} bg="dark" />

      {/* Unified Sticky Bar */}
      <CourseStickyBar locations={[{
      city: "Split",
      dates: "1. 2. 2026."
    }]} price="300 €" ctaText="Prijavi se" theme="light" />

      {/* Value Proposition - Light Mode Apple Design */}
      <section id="cupping-techniques" className="py-24 relative overflow-hidden scroll-mt-20 bg-gradient-to-b from-[#ffffff] to-[#fdf9f3]">
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
          }}>
              <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
                {/* Left - Text Content */}
                <div className="space-y-12">
                  {/* Gold hairline separator */}
                  <div className="w-16 h-px bg-[#D4AF37] opacity-40"></div>
                  
                  {/* Headline - Larger and more prominent */}
                  <motion.h2 initial={{
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
                }} className="text-4xl lg:text-5xl xl:text-[52px] font-bold leading-[1.15] text-[#B48A1E]" style={{
                  fontFamily: 'Playfair Display, serif'
                }}>
                    Tehnika koja povezuje tisućljetnu tradiciju i moderne protokole
                  </motion.h2>
                  
                  {/* Subheadline */}
                  <motion.p initial={{
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
                }} className="text-lg text-[#333333] leading-[1.8]" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>
                    Cupping je više od terapije – to je filozofija koja spaja tijelo i duh. Na ovom seminaru naučit ćete kako ovu mudrost pretočiti u praksu koja oduševljava klijente i donosi rezultate koje pamte.
                  </motion.p>
                  
                  {/* Benefits - More spacing */}
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
                }} className="space-y-5">
                    {["vraća energiju", "obnavlja vitalnost", "stvara osjećaj lakoće u tijelu"].map((benefit, index) => <motion.div key={index} initial={{
                    opacity: 0,
                    x: -20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.2
                  }} viewport={{
                    once: true
                  }} className="flex items-center gap-4">
                        <span className="text-[#D4AF37] text-2xl">✨</span>
                        <span className="text-[#333333] text-base" style={{
                      fontFamily: 'Inter, sans-serif'
                    }}>
                          {benefit}
                        </span>
                      </motion.div>)}
                  </motion.div>

                  {/* Za koga je ovaj tečaj - Card Style */}
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
                }} className="bg-[#fdf9f3] rounded-2xl p-6 border border-[#D4AF37]/20">
                    <h3 className="text-xl font-semibold text-[#B48A1E] mb-5" style={{
                    fontFamily: 'Playfair Display, serif'
                  }}>
                      Za koga je ovaj tečaj:
                    </h3>
                    <div className="space-y-4">
                      {[{
                      icon: "👨‍⚕️",
                      text: "fizioterapeute"
                    }, {
                      icon: "💆‍♂️",
                      text: "masere"
                    }, {
                      icon: "🌿",
                      text: "wellness terapeute"
                    }, {
                      icon: "⚡",
                      text: "sportske trenere"
                    }].map((item, index) => <motion.div key={index} initial={{
                      opacity: 0,
                      x: -20
                    }} whileInView={{
                      opacity: 1,
                      x: 0
                    }} transition={{
                      duration: 0.6,
                      delay: 0.6 + index * 0.2
                    }} viewport={{
                      once: true
                    }} className="flex items-center gap-4">
                          <span className="text-[#D4AF37] text-2xl">{item.icon}</span>
                          <span className="text-[#333333] text-base" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                            {item.text}
                          </span>
                        </motion.div>)}
                    </div>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div initial={{
                  opacity: 0,
                  y: 30
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.6,
                  delay: 0.8
                }} viewport={{
                  once: true
                }} className="flex flex-col sm:flex-row gap-4 pt-6">
                    <motion.div whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }} transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                  }}>
                      <Button asChild variant="outline" size="lg" className="backdrop-blur-[20px] bg-white/80 border-[#D4AF37] border-2 text-[#B48A1E] hover:bg-[#D4AF37] hover:text-[#000000] hover:border-[#D4AF37] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B48A1E] focus:ring-offset-2" style={{
                      fontFamily: 'Inter, sans-serif'
                    }}>
                        <a href="#zasto-sportasi">Saznaj više</a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Right - Image with gold border */}
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
                    <img src="/lovable-uploads/936f411a-11b3-48c2-891b-0d675042d4b5.png" alt="Cupping terapija u praksi - profesionalna obuka" className="w-full max-w-md h-auto rounded-xl border-2 border-[#D4AF37] shadow-[0_10px_40px_rgba(0,0,0,0.1)]" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Cupping Works - Light Mode Premium Section */}
      <section id="zasto-sportasi" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#fdf9f3] scroll-mt-20">
        {/* Gold hairline separator */}
        <div className="w-full h-px bg-[#D4AF37] opacity-40 mb-16" aria-hidden />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Text Content */}
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
            }} className="space-y-8">
                {/* Heading with shimmer */}
                <motion.h3 initial={{
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
              }} className="text-3xl lg:text-4xl xl:text-[42px] font-bold leading-tight text-[#B48A1E]" style={{
                fontFamily: 'Playfair Display, serif'
              }}>
                  <TextShimmer className="[--base-gradient-color:#D4AF37] [--base-color:#B48A1E]" duration={3} spread={2} as="span">
                    Zašto sportaši i terapeuti širom svijeta prisežu na cupping?
                  </TextShimmer>
                </motion.h3>
                
                {/* Subheading */}
                <motion.p initial={{
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
              }} className="text-lg text-[#333333] leading-relaxed" style={{
                fontFamily: 'Inter, sans-serif'
              }}>
                  Rezultati govore sami za sebe – od bržeg oporavka sportaša do anti-age učinaka koji oduševljavaju klijente.
                  <br /><strong>Ovo nije još jedan trend. Ovo je metoda koja mijenja praksu.</strong>
                </motion.p>
                
                {/* Two-column benefit cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Block 1 - What you get */}
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
                }} className="bg-white/80 backdrop-blur-[12px] p-6 rounded-[18px] border border-[#E9E2CF] hover:border-[#D4AF37] hover:shadow-[0_8px_32px_rgba(212,175,55,0.15)] transition-all duration-300 group">
                    <h4 className="text-lg font-semibold text-[#B48A1E] mb-4" style={{
                    fontFamily: 'Inter, sans-serif'
                  }}>
                      Što dobivaš u jednom tretmanu?
                    </h4>
                    <div className="space-y-3">
                      {["Brži oporavak mišića i smanjenje kroničnih bolova", "Anti-age i anticelulitni učinci koje klijenti odmah primijete", "Više energije, vitalnosti i ravnoteže – iznutra i izvana"].map((benefit, index) => <div key={index} className="flex items-start gap-3">
                          <span className="text-[#D4AF37] text-sm mt-1" aria-label="Benefit">✔</span>
                          <span className="text-[#333333] text-sm leading-relaxed" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                            {benefit}
                          </span>
                        </div>)}
                    </div>
                  </motion.div>

                  {/* Block 2 - Exclusive approach */}
                  <motion.div initial={{
                  opacity: 0,
                  y: 30
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.6,
                  delay: 0.5
                }} viewport={{
                  once: true
                }} className="bg-white/80 backdrop-blur-[12px] p-6 rounded-[18px] border border-[#E9E2CF] hover:border-[#D4AF37] hover:shadow-[0_8px_32px_rgba(212,175,55,0.15)] transition-all duration-300 group">
                    <h4 className="text-lg font-semibold text-[#B48A1E] mb-4" style={{
                    fontFamily: 'Inter, sans-serif'
                  }}>
                      Naš ekskluzivni pristup uključuje:
                    </h4>
                    <div className="space-y-3">
                      {[{
                      text: "9 naprednih tehnika kliznog cuppinga",
                      icon: "💎"
                    }, {
                      text: "Integraciju s akupresurom i trigger točkama",
                      icon: "💎"
                    }, {
                      text: "Protokole za anti-aging i estetske tretmane",
                      icon: "💎"
                    }].map((item, index) => <div key={index} className="flex items-start gap-3">
                          <span className="text-[#D4AF37] text-sm mt-1" aria-label="Exclusive feature">{item.icon}</span>
                          <span className="text-[#333333] text-sm leading-relaxed" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                            {item.text}
                          </span>
                        </div>)}
                    </div>
                  </motion.div>
                </div>

                {/* Testimonial card */}
                <motion.div initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.7,
                type: "spring",
                bounce: 0.2
              }} viewport={{
                once: true
              }} className="bg-white/80 backdrop-blur-[12px] p-6 rounded-[18px] border border-[#D4AF37]/20 shadow-[0_8px_32px_rgba(212,175,55,0.1)]">
                  <p className="text-[#333333] italic mb-3 text-lg leading-relaxed" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>
                    <span className="text-[#D4AF37] text-2xl mr-2" aria-label="Quote">🗣️</span>
                    "Kombiniranje cuppinga s drugim tehnikama donijelo je revoluciju u moj rad. Klijenti su oduševljeni rezultatima!"
                  </p>
                  <p className="text-[#B48A1E] font-semibold" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>
                    — Marija, wellness terapeutkinja
                  </p>
                </motion.div>
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
                  <img src="/lovable-uploads/066cc46f-5240-4fd2-b099-d721353fb96a.png" alt="Napredne cupping tehnike u praksi" className="w-full max-w-md h-auto rounded-[18px] shadow-[0_10px_40px_rgba(0,0,0,0.1)]" />
                  {/* Subtle golden glow border */}
                  <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#D4AF37]/5"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section - Light Mode Apple Design */}
      <section id="cupping-program" className="py-20 px-4 relative overflow-hidden scroll-mt-20 bg-gradient-to-b from-white to-[#fdf9f3]">
        {/* Gold hairline separator */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-[#D4AF37] opacity-40"></div>
        
        <div className="container mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-block">
              <motion.h2 initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true
            }} className="text-4xl md:text-5xl font-bold mb-6 text-[#B48A1E] font-serif" style={{
              fontFamily: 'Playfair Display, serif'
            }}>
                <TextShimmer className="[--base-gradient-color:#D4AF37] [--base-color:#B48A1E]" duration={3} spread={2} as="span">
                  Od prve čašice do majstorske ruke – ovo ćeš naučiti
                </TextShimmer>
              </motion.h2>
              
              {/* Shimmer accent line */}
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60 animate-pulse"></div>
            </div>
            
            <motion.p initial={{
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
          }} className="text-xl text-[#333] max-w-4xl mx-auto mt-8 font-inter leading-relaxed" style={{
            fontFamily: 'Inter, sans-serif'
          }}>
              Program je dizajniran da te u samo jednom danu povede od osnova do naprednih protokola. Bez suvišne teorije – 90% praktičnog rada.
            </motion.p>
          </div>

          {/* Cards Layout - 3 + 2 */}
          <div className="max-w-6xl mx-auto">
            {/* First row - 3 cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[{
              iconPath: "M12 2L2 7l10 5 10-5-10-5z",
              title: "Statički cupping",
              description: "drevna tehnika za balans energije"
            }, {
              iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              title: "9 kliznih tehnika",
              description: "za mišićnu relaksaciju i optimalan protok krvi"
            }, {
              iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              title: "Anti-age tretmani lica",
              description: "pomlađivanje prirodnim putem"
            }].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.2
            }} viewport={{
              once: true
            }} className="group relative p-8 rounded-[18px] bg-[#ffffffcc] backdrop-blur-[12px] border border-[#E9E2CF] hover:border-[#D4AF37] transition-all duration-500 hover:shadow-lg hover:shadow-[#D4AF37]/20 hover:scale-[1.03]">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-label={`Icon for ${item.title}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#B48A1E] font-serif" style={{
                fontFamily: 'Playfair Display, serif'
              }}>{item.title}</h3>
                  <p className="text-[#333] font-inter leading-relaxed" style={{
                fontFamily: 'Inter, sans-serif'
              }}>{item.description}</p>
                  
                  {/* Hover glow effect with pulse */}
                  <div className="absolute inset-0 rounded-[18px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-pulse"></div>
                </motion.div>)}
            </div>

            {/* Second row - 2 cards centered */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[{
              iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              title: "Anti-cellulite protokoli",
              description: "estetski rezultati koje klijenti obožavaju"
            }, {
              iconPath: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
              title: "Integracija s masažom i akupresurom",
              description: "stvaranje holističkog iskustva"
            }].map((item, index) => <motion.div key={index + 3} initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: (index + 3) * 0.2
            }} viewport={{
              once: true
            }} className="group relative p-8 rounded-[18px] bg-[#ffffffcc] backdrop-blur-[12px] border border-[#E9E2CF] hover:border-[#D4AF37] transition-all duration-500 hover:shadow-lg hover:shadow-[#D4AF37]/20 hover:scale-[1.03]">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-label={`Icon for ${item.title}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#B48A1E] font-serif" style={{
                fontFamily: 'Playfair Display, serif'
              }}>{item.title}</h3>
                  <p className="text-[#333] font-inter leading-relaxed" style={{
                fontFamily: 'Inter, sans-serif'
              }}>{item.description}</p>
                  
                  {/* Hover glow effect with pulse */}
                  <div className="absolute inset-0 rounded-[18px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-pulse"></div>
                </motion.div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Light Mode */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#fdf9f3]">
        {/* Gold hairline separator */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-[#D4AF37] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                {/* Headline with icon */}
                <motion.h3 initial={{
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
              }} className="text-3xl lg:text-4xl xl:text-[42px] font-bold leading-tight text-[#B48A1E] flex items-start gap-3" style={{
                fontFamily: 'Playfair Display, serif'
              }}>
                  <span className="text-3xl" aria-label="Books">📚</span>
                  <span>Iskustvo koje se uči kroz ruke – ne iz knjiga</span>
                </motion.h3>
                
                {/* Subheadline */}
                <motion.p initial={{
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
              }} className="text-lg text-[#333333] leading-relaxed" style={{
                fontFamily: 'Inter, sans-serif'
              }}>
                  Ovdje ne gledate – ovdje radite.<br />
                  Edukacija se odvija u malim grupama, uz aktivnu primjenu tehnika i osobno mentorstvo. Već prvi dan radite s pravim ljudima i stvarnim izazovima.
                </motion.p>
                
                {/* Benefits list */}
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
              }} className="space-y-4">
                  {["Hands-on vođenje – radite odmah uz instruktora", "Pravi slučajevi – odmah vidite rezultate dok učite", "Male grupe – osobna pažnja, sigurnost i podrška", "Sve je osigurano – oprema, materijali, individualni pristup"].map((benefit, index) => <motion.div key={index} initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1
                }} viewport={{
                  once: true
                }} className="flex items-start gap-3">
                      <span className="text-[#D4AF37] text-lg mt-0.5 flex-shrink-0" aria-label="Check">✔️</span>
                      <span className="text-[#333333] leading-relaxed" style={{
                    fontFamily: 'Inter, sans-serif'
                  }}>
                        {benefit}
                      </span>
                    </motion.div>)}
                </motion.div>

                {/* Closing italic line */}
                <motion.p initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.8
              }} viewport={{
                once: true
              }} className="text-lg text-[#333333] leading-relaxed italic" style={{
                fontFamily: 'Inter, sans-serif'
              }}>
                  Zamislite da već sutra možete koristiti ovu tehniku u svom studiju.
                </motion.p>

                {/* Video CTA line */}
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 1.0
              }} viewport={{
                once: true
              }} className="flex items-center gap-3 text-[#B48A1E] font-semibold">
                  <span className="text-2xl" aria-label="Video">🎥</span>
                  <span style={{
                  fontFamily: 'Inter, sans-serif'
                }}>Pogledajte kako izgleda seminar u stvarnosti:</span>
                </motion.div>
              </motion.div>

              {/* Right - YouTube Video Embed */}
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
                <div className="relative w-full max-w-md">
                  <div className="relative rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.25)] transition-all duration-300">
                    <div className="relative w-full" style={{
                    paddingBottom: '56.25%'
                  }}>
                      <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/0nyxaDct2Mw?si=Js1Qw8i7KO7LAejM" title="Cupping seminar - kako izgleda u stvarnosti" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                  </div>
                  {/* Subtle golden glow border on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#D4AF37]/5 pointer-events-none"></div>
                </div>
              </motion.div>
            </div>

            {/* CTA Block - PDF Download */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} viewport={{
            once: true
          }} className="mt-16 text-center px-4">
              <div className="bg-[#fdf9f3] p-4 md:p-8 rounded-2xl border border-[#E9E2CF] max-w-2xl mx-auto">
                <p className="text-lg md:text-xl font-semibold text-[#B48A1E] mb-6" style={{
                fontFamily: 'Playfair Display, serif'
              }}>
                  📥 Želite više detalja o seminaru?
                </p>
                <Button asChild className="bg-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#000000] text-white border-none transition-all duration-300 px-4 py-4 md:px-8 md:py-6 text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 w-full md:w-auto">
                  <a href="https://www.dropbox.com/scl/fi/aku28pxzau8i2l3dy5gnx/Cupping.pdf?rlkey=5397z1ty166esvgqf50a0yn50&st=qlnv77xs&dl=0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3">
                    <Download className="h-5 w-5" />
                    <span className="whitespace-normal">Preuzmi PDF brošuru</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instructor Section - Light Mode */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#fdf9f3]">
        {/* Gold hairline separator */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-[#D4AF37] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                {/* Heading */}
                <motion.h2 initial={{
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
              }} className="text-3xl lg:text-4xl xl:text-[42px] font-bold leading-tight text-[#D4AF37] flex items-center gap-3" style={{
                fontFamily: 'Playfair Display, serif'
              }}>
                  <span className="text-4xl">🟡</span>
                  O predavaču
                </motion.h2>
                
                {/* Gold accent line */}
                <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B48A1E] opacity-60"></div>

                {/* Content */}
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
              }} className="space-y-6">
                  <p className="text-lg text-[#333333] leading-relaxed" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>
                    <strong className="text-xl text-[#1a1a1a]">Ante Antić</strong> je terapeut s više od 16 godina rada u praksi i edukaciji, poznat po sposobnosti da kompleksne koncepte prenese jasno, praktično i s rezultatima koje klijenti osjete već nakon prvog tretmana.
                  </p>
                  
                  <p className="text-lg text-[#333333] leading-relaxed" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>
                    Njegov pristup cuppingu temelji se na dubljem razumijevanju — ne koristi se "šaljicama" samo za efekt, već kao dijagnostičko-terapijskim alatom koji donosi stvarnu promjenu. Kroz <strong>Body Reset</strong> pristup kombinira znanja iz akupresure, trigger point terapije, fascijalnog rada i funkcionalne masaže.
                  </p>

                  {/* Quote Box */}
                  <motion.div initial={{
                  opacity: 0,
                  y: 30
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.6,
                  delay: 0.4
                }} viewport={{
                  once: true
                }} className="bg-gradient-to-r from-[#fdf9f3] to-white p-6 rounded-[12px] border-l-4 border-[#D4AF37] shadow-[0_4px_16px_rgba(212,175,55,0.1)]">
                    <p className="text-[#333333] italic text-lg leading-relaxed" style={{
                    fontFamily: 'Inter, sans-serif'
                  }}>
                      "Moja vizija je da svaki terapeut, bez obzira na razinu iskustva, nauči jasno, primjenjivo i učinkovito koristiti cupping – kao sredstvo koje vraća pokret, smanjuje bol i vraća povjerenje u tijelo."
                    </p>
                  </motion.div>

                  <p className="text-lg text-[#333333] leading-relaxed" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>
                    Do sada je više od 900 terapeuta prošlo njegove edukacije, opisujući ga kao predavača koji ne prenosi samo tehnike, već <strong>filozofiju terapijskog rada</strong> – s poštovanjem prema klijentu, tijelu i znanju koje se temelji na stvarnoj praksi.
                  </p>
                </motion.div>
              </motion.div>

              {/* Right - Instructor Image */}
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
                <div className="relative group">
                  <img src="/lovable-uploads/6d4c78a8-0f8c-4cb1-9cbf-ae0784821e16.png" alt="Ante Antić - instruktor cupping terapije" className="w-full max-w-md h-auto rounded-[12px] shadow-[0_12px_48px_rgba(0,0,0,0.12)] group-hover:scale-105 transition-transform duration-300 scale-x-[-1]" />
                  {/* Subtle golden glow border */}
                  <div className="absolute inset-0 rounded-[12px] bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section - Light Mode */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#fdf9f3]">
        {/* Gold hairline separator */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-[#D4AF37] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                {/* Heading */}
                <motion.h3 initial={{
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
              }} className="text-3xl lg:text-4xl xl:text-[42px] font-bold leading-tight text-[#B48A1E]" style={{
                fontFamily: 'Playfair Display, serif'
              }}>
                  <TextShimmer className="[--base-gradient-color:#D4AF37] [--base-color:#B48A1E]" duration={3} spread={2} as="span">
                    Jedan dan koji mijenja tvoju praksu
                  </TextShimmer>
                </motion.h3>
                
                {/* Subheading */}
                <motion.p initial={{
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
              }} className="text-lg text-[#333333] leading-relaxed" style={{
                fontFamily: 'Inter, sans-serif'
              }}>Znanje koje ti donosi više prepoznatljivosti, više rezultata i više klijenata koji se vraćaju.</motion.p>

                {/* Price Block */}
                <motion.div initial={{
                opacity: 0,
                y: 30,
                scale: 0.95
              }} whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
              }} transition={{
                duration: 0.6,
                delay: 0.4,
                type: "spring",
                bounce: 0.3
              }} viewport={{
                once: true
              }} className="bg-white/80 backdrop-blur-[12px] p-8 rounded-[18px] border border-[#E9E2CF] hover:border-[#D4AF37] hover:shadow-[0_12px_40px_rgba(212,175,55,0.2)] transition-all duration-300 group">
                  
                  {/* Early Bird Badge */}
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#c19b2a] text-[#111111] px-6 py-3 rounded-full font-bold text-sm shadow-lg" style={{
                    fontFamily: 'Inter, sans-serif'
                  }}>
                      <Clock className="w-5 h-5" />
                      <span>Early Bird – vrijedi do 20.12.2025.</span>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-4 mb-3">
                      <span className="text-2xl text-[#333333]/50 line-through" style={{
                      fontFamily: 'Inter, sans-serif'
                    }}>360 €</span>
                      <span className="text-6xl font-bold text-[#D4AF37]" style={{
                      fontFamily: 'Playfair Display, serif'
                    }}>300 €</span>
                    </div>
                    <p className="text-[#B48A1E] font-semibold text-lg mb-2" style={{
                    fontFamily: 'Inter, sans-serif'
                  }}>
                      Early Bird kotizacija za jednodnevni praktični tečaj
                    </p>
                    <p className="text-[#666666] text-sm" style={{
                    fontFamily: 'Inter, sans-serif'
                  }}>⏳ Nakon 20.12.2025. cijena raste na 360 €<span className="font-bold text-[#333333]">360 €</span>
                    </p>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.8
              }} viewport={{
                once: true
              }} className="flex justify-center">
                  <motion.a href="https://tally.so/r/wA5kvD" target="_blank" rel="noopener noreferrer" whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(212,175,55,0.5)"
                }} whileTap={{
                  scale: 0.95
                }} transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17
                }}>
                    <Button size="lg" className="bg-[#D4AF37] hover:bg-[#c79f33] hover:text-white text-[#111111] px-12 py-6 text-xl font-bold rounded-xl shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B48A1E] focus:ring-offset-2" style={{
                    fontFamily: 'Inter, sans-serif'
                  }}>
                      Rezerviraj mjesto sada
                    </Button>
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right - Value Package Info Block */}
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
            }}>
                <div className="bg-[#fdf9f3] p-6 rounded-[18px] border border-[#E9E2CF] shadow-lg">
                  <h4 className="text-2xl font-bold text-[#B48A1E] mb-6" style={{
                  fontFamily: 'Playfair Display, serif'
                }}>
                    ✅ Uključen paket vrijednosti
                  </h4>
                  
                  <div className="space-y-5">
                    <div className="flex gap-3">
                      <span className="text-[#D4AF37] text-xl flex-shrink-0">🔸</span>
                      <div>
                        <h5 className="font-bold text-[#333333] mb-1" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                          Jednodnevna intenzivna edukacija
                        </h5>
                        <p className="text-[#666666] text-sm leading-relaxed" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                          Praktični tečaj pun znanja koje možeš odmah primijeniti u radu s klijentima.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-[#D4AF37] text-xl flex-shrink-0">🔸</span>
                      <div>
                        <h5 className="font-bold text-[#333333] mb-1" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                          PDF priručnik o cuppingu
                        </h5>
                        <p className="text-[#666666] text-sm leading-relaxed" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                          Tvoj osobni vodič kroz sve ključne tehnike i principe terapije.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-[#D4AF37] text-xl flex-shrink-0">🔸</span>
                      <div>
                        <h5 className="font-bold text-[#333333] mb-1" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                          Anatomske ilustracije i protokoli (85 str.)
                        </h5>
                        <p className="text-[#666666] text-sm leading-relaxed" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                          Vizualno jasni postupnici sa slikama, uključujući tretman lica i anticelulitni protokol.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-[#D4AF37] text-xl flex-shrink-0">🔸</span>
                      <div>
                        <h5 className="font-bold text-[#333333] mb-1" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                          3 mjeseca mentorskog praćenja
                        </h5>
                        <p className="text-[#666666] text-sm leading-relaxed" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                          Podrška i sigurnost nakon edukacije – nisi prepušten sam sebi.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-[#D4AF37] text-xl flex-shrink-0">🔸</span>
                      <div>
                        <h5 className="font-bold text-[#333333] mb-1" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                          Certifikat s upisom u e-radnu knjižicu
                        </h5>
                        <p className="text-[#666666] text-sm leading-relaxed" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                          Dokaz tvoje stručnosti koji se može upisati kao dodatno obrazovanje.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-[#D4AF37] text-xl flex-shrink-0">🔸</span>
                      <div>
                        <h5 className="font-bold text-[#333333] mb-1" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                          Doživotni pristup materijalima
                        </h5>
                        <p className="text-[#666666] text-sm leading-relaxed" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                          Uvijek možeš obnoviti znanje i pratiti nadogradnje.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[#E9E2CF]">
                    <p className="text-center text-[#B48A1E] font-semibold text-sm" style={{
                    fontFamily: 'Inter, sans-serif'
                  }}>
                      💡 Sve što ti treba za siguran start u profesionalnoj cupping terapiji
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Light Mode Premium Apple Design */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#fdf9f3]">
        {/* Gold hairline separator */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-[#D4AF37] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#B48A1E] mb-6" style={{
              fontFamily: 'Playfair Display, serif'
            }}>
                Najčešće dvojbe – i naši odgovori 👇
              </h2>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <Accordion type="single" collapsible className="space-y-6">
                {[{
                question: "❓ Mogu li doći i ako nemam iskustva s cuppingom?",
                answer: "👉 Naravno! Seminar je kreiran i za potpune početnike i za terapeute s iskustvom. Sve učimo korak po korak kroz praktičan rad, tako da odmah osjetiš sigurnost i razumiješ tehniku."
              }, {
                question: "❓ Što sve dobivam kada se prijavim?",
                answer: "👉 Cijena uključuje sve što ti treba – cjelodnevnu edukaciju, materijale i opremu za rad, praktične vježbe pod vodstvom instruktora, službeni certifikat koji se upisuje u e-radnu knjižicu i trajnu podršku i nakon završetka seminara."
              }, {
                question: "❓ Hoću li znati primijeniti tehniku već sljedeći dan?",
                answer: "👉 Da! Edukacija je 80% praktična. Već od prvog sata radiš na stvarnim slučajevima, tako da nakon seminara možeš sigurno i učinkovito primjenjivati cupping u svom radu i dobivati rezultate koji oduševljavaju klijente."
              }, {
                question: "❓ Mogu li platiti u ratama?",
                answer: "👉 Razumijemo da je edukacija ulaganje, ali zbog ograničenog broja mjesta (samo 12 polaznika) i ekskluzivnosti programa – uplate primamo isključivo jednokratno. Na taj način osiguravamo kvalitetnu organizaciju i posvećenost svakom polazniku bez administrativnih prepreka."
              }].map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} viewport={{
                once: true
              }}>
                    <AccordionItem value={`item-${index}`} className="bg-white/80 backdrop-blur-[12px] rounded-[18px] border border-[#E9E2CF] hover:border-[#D4AF37] hover:shadow-[0_8px_32px_rgba(212,175,55,0.15)] transition-all duration-300 group overflow-hidden">
                      <AccordionTrigger className="px-8 py-6 text-left text-[#B48A1E] hover:text-[#D4AF37] transition-colors duration-300 text-lg font-bold" style={{
                    fontFamily: 'Playfair Display, serif'
                  }}>
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-[#333333] leading-relaxed text-base" style={{
                    fontFamily: 'Inter, sans-serif'
                  }}>
                        {/* Gold hairline separator */}
                        <div className="w-full h-px bg-[#D4AF37] opacity-20 mb-4"></div>
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>)}
              </Accordion>
            </motion.div>

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
              <p className="text-lg text-[#333333] mb-6" style={{
              fontFamily: 'Inter, sans-serif'
            }}>
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
                  <Button size="lg" className="bg-[#D4AF37] hover:bg-[#c19b2a] text-[#111111] px-8 py-4 text-lg font-bold rounded-xl shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B48A1E] focus:ring-offset-2" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>
                    Pošalji upit
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#111111] to-[#1c1c1c]">
        {/* Subtle golden glow pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px] animate-pulse" style={{
          animationDelay: '2s'
        }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <motion.h2 initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-6 leading-tight" style={{
            fontFamily: 'Playfair Display, serif'
          }}>
              Spremni ste za sljedeći korak?
            </motion.h2>

            {/* Subheading */}
            <motion.p initial={{
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
          }} className="text-xl text-[#f5f5f5] max-w-3xl mx-auto mb-12 leading-relaxed" style={{
            fontFamily: 'Inter, sans-serif'
          }}>
              Ovo nije samo seminar – ovo je ulaznica u svijet terapeuta koji se izdvajaju znanjem i rezultatima.
            </motion.p>

            {/* Bullet highlights */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} viewport={{
            once: true
          }} className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
              {[{
              icon: "💛",
              text: "Samo 12 mjesta – prijave zatvaramo čim se popune."
            }, {
              icon: "📜",
              text: "Certifikat međunarodne vrijednosti."
            }, {
              icon: "✨",
              text: "Znanje koje ostaje s vama zauvijek."
            }].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.6 + index * 0.2
            }} viewport={{
              once: true
            }} className="flex flex-col items-center text-center max-w-xs">
                  <span className="text-3xl mb-3 text-[#D4AF37]">{item.icon}</span>
                  <p className="text-[#f5f5f5] text-sm leading-relaxed" style={{
                fontFamily: 'Inter, sans-serif'
              }}>
                    {item.text}
                  </p>
                </motion.div>)}
            </motion.div>

            {/* CTA Button */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} viewport={{
            once: true
          }}>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }}>
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#c19b2a] text-[#111111] px-12 py-4 text-lg font-bold rounded-xl shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#1c1c1c]" style={{
                fontFamily: 'Inter, sans-serif'
              }}>
                  Rezerviraj mjesto sada
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vaš terapijski put se tu ne zaustavlja - Copied from Akupresura page */}
      

      {/* New Footer - Copied from Akupresura page */}
      <footer className="bg-[#0D0D0D] relative">
        {/* Thin gold divider line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent"></div>
        
        {/* Subtle diagonal stripe background */}
        <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            #C8A24A 2px,
            #C8A24A 4px
          )`,
        backgroundSize: '20px 20px'
      }}></div>
        
        
      </footer>

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
                <h2 className="text-3xl lg:text-4xl font-bold" style={{
                color: '#B9975B',
                fontFamily: 'Playfair Display, serif'
              }}>
                  👉 Vaš terapijski put se tu ne zaustavlja
                </h2>
              </div>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
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
};
export default CuppingPage;