import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ChevronRight, Play, Quote, Calendar, ArrowRight, BookOpen, Clock, X, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import HeroTitle from '@/components/ui/HeroTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import TextShimmer from '@/components/ui/TextShimmer';
import { CourseHighlights } from '@/components/ui/CourseHighlights';
import { CourseStickyBar } from '@/components/ui/CourseStickyBar';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import AutoCarousel from '@/components/ui/AutoCarousel';
import { ContactFooter } from '@/components/ContactFooter';
const HERO_IMAGE = "/lovable-uploads/3118d6a4-0a56-49d4-ae18-b4a87a937529.png"; // WhatsApp Image 2025-08-11
const VIDEO_URL = "https://www.dropbox.com/scl/fi/ca9w2cbvrc12p8u9wwcul/Kalabas_V1.mp4?rlkey=ja673238zig4sh0abz0if6yml&st=4doqeh2l&dl=0";
const CalabashCertificationPage: React.FC = () => {
  const [blackOverlay, setBlackOverlay] = useState(0);
  
  // SEO
  useEffect(() => {
    document.title = "Therapeutic Calabash – Certifikacija | Supra Studium";
    const descText = "Ekskluzivna certifikacija Therapeutic Calabash Deep Tissue Myofascial Release s dr. Awudijem – Zagreb, 15–16.11.2025 – samo 12 mjesta.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", descText);
    let linkRel = document.querySelector('link[rel="canonical"]');
    if (!linkRel) {
      linkRel = document.createElement("link");
      linkRel.setAttribute("rel", "canonical");
      document.head.appendChild(linkRel);
    }
    linkRel.setAttribute("href", window.location.origin + "/calabash-certifikacija");
    const schemaId = "ld-course-calabash";
    if (!document.getElementById(schemaId)) {
      const s = document.createElement("script");
      s.id = schemaId;
      s.type = "application/ld+json";
      s.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Therapeutic Calabash Deep Tissue Myofascial Release Certifikacija",
        description: descText,
        provider: {
          "@type": "Organization",
          name: "Učilište Supra Studium",
          url: window.location.origin
        },
        location: {
          "@type": "Place",
          name: "Maxidance Studio",
          address: "ul. Frane Kesterčaneka 2, Zagreb"
        },
        startDate: "2025-11-15",
        endDate: "2025-11-16"
      });
      document.head.appendChild(s);
    }
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

  // Countdown to Early Bird (20. rujna 2025.)
  const [countdown, setCountdown] = useState<string>("");
  useEffect(() => {
    const target = new Date("2025-09-20T23:59:59+02:00").getTime();
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor(diff / (1000 * 60 * 60) % 24);
      const m = Math.floor(diff / (1000 * 60) % 60);
      setCountdown(`${d}d ${h}h ${m}m`);
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);
  return <div style={{
    // Page-scoped tokens (HSL)
    ["--radius" as any]: "1.25rem",
    ["--supra-golden" as any]: "39 51% 49%",
    // #B68D40
    ["--supra-golden-soft" as any]: "37 68% 70%",
    // #E6C07B
    ["--hero-overlay" as any]: "42 35% 40%"
  }} className="min-h-screen bg-background text-foreground">
      {/* Sticky CTA visible on all devices */}
      <a href="#prijava" className="fixed z-50 bottom-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full shadow-lg backdrop-blur-md border text-sm sm:text-base hover:scale-[1.03] transition-transform" style={{
      background: "linear-gradient(90deg, hsl(var(--supra-golden)) , hsl(var(--supra-golden-soft)))",
      color: "white",
      borderColor: "hsl(var(--supra-golden-soft))"
    }} aria-label="Rezerviraj mjesto">
        Rezerviraj mjesto
      </a>

      {/* Hero Section with enhanced background effects */}
      <section className="relative min-h-screen flex items-center overflow-hidden -mt-20">
        {/* Background with overlays */}
        <div className="absolute inset-0 bg-center bg-cover will-change-transform" style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundAttachment: "fixed"
      }} aria-hidden />
        
        {/* Top-to-bottom gradient for luxury depth */}
        <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.65) 100%)"
      }} />
      
        {/* Black overlay that fades in on scroll */}
        <div 
          className="absolute inset-0 bg-black z-[3] pointer-events-none transition-opacity duration-300"
          style={{ opacity: blackOverlay }}
        />

        <div className="container pt-24 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="max-w-5xl mx-auto text-center">
            {/* Hook with shimmer effect */}
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[-0.01em] leading-[0.9] text-center relative z-[4] px-4">
              <span className="block font-playfair font-normal text-white/90 drop-shadow-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 tracking-wide" style={{
              textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)'
            }}>
                Masterclass
              </span>
              <TextShimmer className="font-playfair font-bold text-white drop-shadow-xl tracking-wide text-shadow-lg relative z-[4] [--base-gradient-color:#ffd700] [--base-color:#ffffff] [text-shadow:0_6px_12px_rgba(0,0,0,0.6),0_3px_6px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.3)] mb-8" duration={2.5} spread={3}>
                KALABAŠ MASAŽA
              </TextShimmer>
            </div>
            
            {/* Subtitle */}
            <h2 className="text-[#F5F5F5] text-xl md:text-2xl leading-relaxed mb-10 font-inter text-center">
              Drevna afrička mudrost – prvi put u Hrvatskoj.
            </h2>
            
            {/* Centered transparent description box */}
            <div className="max-w-4xl mx-auto mb-10 p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/20" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}>
              <p className="text-[#EAEAEA] text-base md:text-lg leading-relaxed text-center">
                Kalabaš masaža koristi tradicionalnu afričku tikvicu kao terapeutski alat koji otpušta kronične napetosti, vraća ravnotežu tijelu i duboko opušta – bez iscrpljivanja terapeuta.
                <br /><br />
                Pod vodstvom dr. Awudija Atitsogbuija, 3× svjetskog rekordera u masaži, naučit ćeš kako spojiti stoljetnu tradiciju i suvremenu manualnu terapiju u tretman koji se pamti cijeli život.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <motion.div whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                <Button size="lg" className="text-base px-8 py-6 font-semibold w-full sm:w-auto" style={{
                background: "#C8A24A",
                color: "white"
              }} asChild>
                  <a href="#prijava">Rezerviraj mjesto</a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                <Button size="lg" variant="ghost" className="text-base px-8 py-6 border-2 border-[#C8A24A] text-white hover:bg-[#C8A24A]/10 font-semibold w-full sm:w-auto" asChild>
                  <a href="https://youtu.be/5GLWX_IMlEA?si=Tt1pF6H2dh_aUbMQ" target="_blank" rel="noopener noreferrer">
                    <Play className="mr-2 w-5 h-5" /> Pogledaj video
                  </a>
                </Button>
              </motion.div>
            </div>
            
            {/* Small text below buttons */}
            <p className="text-white/90 text-sm text-center max-w-2xl mx-auto">
              👉 Ovo nije samo tehnika – ovo je iskustvo koje tvoji klijenti pamte cijeli život. Samo 12 mjesta dostupno.
            </p>
          </motion.div>
        </div>
      </section>

      <CourseHighlights items={[{
      icon: "💎",
      title: "EKSKLUZIVNO ZNANJE",
      subtitle: "Ovo nije običan seminar. Prvi put u Zagrebu – drevna tehnika kalabaša, dostupna samo odabranima."
    }, {
      icon: "🌍",
      title: "UČITE OD LEGENDE",
      subtitle: "Dr. Awudi Atitsogbui, 3× zlatni rekorder u masaži, vodi vas kroz pokrete koji brišu godine napetosti."
    }, {
      icon: "🎯",
      title: "SNAGA BEZ NAPORA",
      subtitle: "Duboka terapija bez težine. Precizni zahvati koji štede vaše ruke, a klijentima pružaju olakšanje."
    }, {
      icon: "🏅",
      title: "MEĐUNARODNI CERTIFIKAT",
      subtitle: "Diploma priznata od Svjetske federacije i Ministarstva zdravlja Italije – potvrda ekspertize."
    }]} accentIndex={1} bg="dark" />

      {/* Unified Sticky Bar */}
      <CourseStickyBar locations={[{
      city: "Zagreb",
      dates: "22.–23. 11. 2025."
    }]} price="450 € / 500 €" ctaText="Prijavi se" theme="light" />

      {/* Video Section */}
      <section id="video" className="relative py-16 bg-muted/40">
        <div className="container max-w-[1200px] mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-10">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4 text-[#111]">
              🎥 Pogledajte tehniku u akciji
            </h2>
            <p className="font-inter text-lg text-[#444] max-w-[800px] mx-auto leading-relaxed italic">
              „Ovo nije samo edukacija – ovo je putovanje u kojem učiš tehniku koja tvoje tretmane pretvara u iskustva koja klijenti prepričavaju.”
            </p>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative mx-auto mb-8 rounded-[20px] overflow-hidden max-w-full cursor-pointer group" style={{
          border: "2px solid rgba(200, 162, 74, 0.4)",
          boxShadow: "0 10px 30px rgba(200, 162, 74, 0.15)"
        }} onClick={() => window.open("https://www.dropbox.com/scl/fi/ca9w2cbvrc12p8u9wwcul/Kalabas_V1.mp4?rlkey=ja673238zig4sh0abz0if6yml&st=7m5z1jhs&dl=0", "_blank")}>
            {/* Poster Image */}
            <div className="w-full aspect-video bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.02]" style={{
            backgroundImage: `url(/lovable-uploads/f8638ba1-5e0f-4295-b885-f5c4abd7a407.png)`
          }} aria-label="Video demonstracija Kalabaš masaže s dr. Awudijem i polaznicima." />
            
            {/* Centered Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }} className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center shadow-2xl group-hover:bg-white/30 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="text-center">
            <p className="font-inter text-lg text-[#333] mb-6 max-w-2xl mx-auto">
              👉 Rezerviraj mjesto i nauči tehniku uživo.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(200, 162, 74, 0.4), 0 0 20px rgba(200, 162, 74, 0.3)"
            }} whileTap={{
              scale: 0.98
            }} className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300" style={{
              background: "linear-gradient(135deg, #C8A24A 0%, #B8943A 100%)",
              boxShadow: "0 4px 15px rgba(200, 162, 74, 0.3)"
            }} aria-label="Rezerviraj mjesto na Calabash certifikaciji" onClick={() => document.getElementById('prijava')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Rezerviraj mjesto
              </motion.button>
              
              <motion.button whileHover={{
              scale: 1.02,
              borderColor: "#C8A24A",
              color: "#C8A24A",
              boxShadow: "0 8px 25px rgba(200, 162, 74, 0.2)"
            }} whileTap={{
              scale: 0.98
            }} className="px-8 py-4 rounded-2xl font-semibold transition-all duration-300" style={{
              border: "2px solid rgba(200, 162, 74, 0.6)",
              color: "#333"
            }} aria-label="Pogledaj program Calabash certifikacije" onClick={() => document.getElementById('sto-cete-nauciti')?.scrollIntoView({ behavior: 'smooth' })}>
                Pogledaj program
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Four Glassmorphic Cards Section - Floating from hero */}
      

      {/* Sticky Bar */}
      

      {/* Why this course */}
      <section className="py-16" style={{
      background: "linear-gradient(135deg, #fdf8f3 0%, #f4e6d3 100%)"
    }}>
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-6 text-[#111]">
              Zašto ovaj tečaj?
            </h3>
            <ul className="space-y-4">
              {["Spoj drevne afričke mudrosti i moderne znanosti – tehnika koja oslobađa godine napetosti.", "Duboka terapija bez boli za terapeuta – ali transformativna za klijenta.", "Priznat certifikat koji otvara vrata širom svijeta.", "Nauči izravno od 3× svjetskog rekordera u masaži."].map((text, index) => <motion.li key={text} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: index * 0.2,
                duration: 0.6
              }
            }} viewport={{
              once: true
            }} className="flex items-start gap-4">
                  <span className="mt-1 inline-flex w-8 h-8 items-center justify-center rounded-full border-2" style={{
                background: "linear-gradient(135deg, #C8A24A, #E6C07B)",
                borderColor: "#C8A24A",
                boxShadow: "0 2px 8px rgba(200, 162, 74, 0.3)"
              }} aria-label="Benefit highlight">
                    <span className="text-white text-sm">✨</span>
                  </span>
                  <span className="text-[#333] text-lg leading-relaxed font-inter">{text}</span>
                </motion.li>)}
            </ul>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl" style={{
            background: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
          }}>
              <img src="/lovable-uploads/48cde861-683b-4dfb-a1e6-d338811129f7.png" alt="Calabash tehnika – detalj rada" className="w-full h-80 object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-16" style={{
      background: "linear-gradient(135deg, #faf8f6 0%, #f4ede6 100%)"
    }}>
        <div className="container">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-6 text-center text-[#111]">Za koga je ovaj tečaj</h3>
          
          {/* Premium highlight intro */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-10">
            <p className="font-playfair italic text-lg md:text-xl text-[#222] max-w-4xl mx-auto leading-relaxed relative">
              👉 „Ovaj tečaj je kreiran za stručnjake koji žele više od običnih tretmana – za one koji žele postati terapeuti koje klijenti nikad ne zaboravljaju."
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent opacity-60"></span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            emoji: "💆",
            title: "Masažne terapeute",
            description: "Nadogradite svoje vještine i ponudite premium uslugu."
          }, {
            emoji: "💪",
            title: "Fizioterapeute",
            description: "Proširite terapeutski arsenal s drevnom tehnikom."
          }, {
            emoji: "🦴",
            title: "Osteopate i kiropraktičare",
            description: "Dodajte elegantnu dimenziju u svoj rad s tijelom."
          }, {
            emoji: "🌿",
            title: "Akupunkturiste i bodyworkere",
            description: "Obogatite holistički pristup afričkom mudrošću."
          }].map((item, index) => <motion.div key={item.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 0.15,
              duration: 0.6
            }
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.03,
            boxShadow: "0 20px 40px rgba(200, 162, 74, 0.2)",
            borderColor: "rgba(200, 162, 74, 0.4)"
          }} className="group cursor-pointer transition-all duration-300 rounded-2xl p-6 text-center" style={{
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)"
          }}>
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" role="img" aria-label={item.title}>
                  {item.emoji}
                </div>
                <h4 className="font-playfair font-semibold text-lg mb-3 text-[#111]">
                  {item.title}
                </h4>
                <p className="text-[#555] text-sm leading-relaxed font-inter">
                  {item.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section id="sto-cete-nauciti" className="py-16 relative overflow-hidden" style={{
      background: "linear-gradient(135deg, #0f0f0f 0%, #1c1c1c 100%)"
    }}>
        <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(135deg, rgba(200, 162, 74, 0.03) 0px, rgba(200, 162, 74, 0.03) 1px, transparent 1px, transparent 22px)`
      }} />
        <div className="container relative z-10">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-8 text-center text-white">Što ćete naučiti</h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[{
            icon: "✨",
            title: "Modul 1: Osnove i flow",
            description: "Prvi dodir s kalabašom. Naučit ćeš ga koristiti precizno i sigurno, oslobađati napetosti i raditi duboko – bez da trošiš vlastitu energiju."
          }, {
            icon: "🎯",
            title: "Modul 2: Dijagnostika i tretman",
            description: "Od ramena do kukova, naučit ćeš sekvence koje brišu bol i vraćaju ravnotežu u tijelo."
          }].map((module, index) => <motion.div key={module.title} initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 0.3,
              duration: 0.8
            }
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.03,
            boxShadow: "0 25px 50px rgba(200, 162, 74, 0.3)",
            borderColor: "rgba(200, 162, 74, 0.6)"
          }} className="group cursor-pointer transition-all duration-300 rounded-2xl p-8" style={{
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(200, 162, 74, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)"
          }}>
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-radial from-[#C8A24A]/30 to-transparent rounded-full blur-lg opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <span className="relative text-4xl transition-transform duration-300 group-hover:scale-110" role="img" aria-label={module.title}>
                      {module.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-playfair font-bold text-xl mb-4 text-[#fdf8f3] leading-tight">
                      {module.title}
                    </h4>
                    <p className="text-[#eaeaea] leading-relaxed font-inter">
                      {module.description}
                    </p>
                  </div>
                </div>
              </motion.div>)}
          </div>

          {/* Closing statement */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 1
        }} viewport={{
          once: true
        }} className="text-center mt-12">
            <p className="font-playfair italic text-lg md:text-xl text-[#C8A24A] max-w-2xl mx-auto relative">
              Ovo nije samo edukacija – ovo je putovanje u kojem učiš tehniku koja tvoje tretmane pretvara u iskustva koja klijenti prepričavaju.
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent opacity-70 animate-pulse"></span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certification and tools */}
      <section className="py-16" style={{
      background: "linear-gradient(135deg, #fdf8f3 0%, #f4e6d3 100%)"
    }}>
        <div className="container">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-8 text-center text-[#111]">Certifikacija i alati</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
            icon: "🎓",
            title: "Diploma Supra Studium škole",
            description: "dokaz tvoje stručnosti."
          }, {
            icon: "🌍",
            title: "Međunarodna registracija pri World Federation of Massage–Manual Therapy & Naud Thai",
            description: "certifikat koji vrijedi globalno."
          }, {
            icon: "🎁",
            title: "Ekskluzivni bonus: svaki polaznik dobiva dva ručno izrađena kalabaša u vrijednosti od 60 €",
            description: "odmah spremni za praksu."
          }].map((item, index) => <motion.div key={item.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 0.2,
              duration: 0.7
            }
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(200, 162, 74, 0.25)",
            borderColor: "rgba(200, 162, 74, 0.5)"
          }} className="group cursor-pointer transition-all duration-300 rounded-2xl p-6" style={{
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(200, 162, 74, 0.2)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)"
          }}>
                <div className="text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-radial from-[#C8A24A]/20 to-transparent rounded-full blur-md opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <span className="relative text-4xl transition-transform duration-300 group-hover:scale-110" role="img" aria-label={item.title}>
                      {item.icon}
                    </span>
                  </div>
                  <h4 className="font-playfair font-bold text-lg mb-3 text-[#111] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[#333] font-inter leading-relaxed">
                    – {item.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* About Dr. Awudi */}
      <section className="py-16" style={{
      background: "linear-gradient(135deg, #fbf9f7 0%, #f4e9df 100%)"
    }}>
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="relative overflow-hidden rounded-3xl" style={{
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
          }}>
              <img src="/lovable-uploads/bee0fe5c-f3fc-4b13-a5c2-533b30c4d78f.png" alt="Dr. Awudi Atitsogbui - Majstor kalabaš masaže i 3× svjetski rekorder" className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              <div className="absolute bottom-6 left-6 px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-md border" style={{
              background: "rgba(200, 162, 74, 0.9)",
              color: "#fff",
              borderColor: "rgba(200, 162, 74, 0.3)"
            }}>
                3× Svjetski rekorder
              </div>
            </motion.div>
            
            <div className="space-y-6">
              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }}>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-[#111] leading-tight">
                  O dr. Awudiju – Majstor koji spaja tradiciju i modernu znanost
                </h3>
                <p className="font-inter text-lg text-[#333] mb-6 leading-relaxed">
                  Dr. Awudi Atitsogbui nije samo terapeut – on je čuvar drevne afričke mudrosti i inovator koji je osvojio svijet.
                </p>
              </motion.div>

              <div className="space-y-4">
                {[{
                icon: "🌍",
                text: "3× svjetski rekorder u masaži",
                highlight: "3× svjetski rekorder",
                description: "poznat po svojoj snazi, preciznosti i eleganciji.",
                ariaLabel: "Globus simbolizira međunarodne uspjehe"
              }, {
                icon: "🎓",
                text: "Licencirani ajurvedski liječnik BAMS",
                highlight: "BAMS",
                description: "kombinira znanje Istoka i Zapada.",
                ariaLabel: "Diploma simbolizira akademsko obrazovanje"
              }, {
                icon: "🤝",
                text: "Trener s iskustvom 3 kontinenta",
                highlight: "3 kontinenta",
                description: "podučavao je terapeute u Europi, Aziji i Africi.",
                ariaLabel: "Rukovanje simbolizira međunarodnu suradnju"
              }, {
                icon: "🔥",
                text: "Pionir kalabaš masaže",
                highlight: "Pionir kalabaš masaže",
                description: "prvi je razvio i modernizirao tehniku dubinskog miofascijalnog otpuštanja s kalabašom, čineći je dostupnom profesionalcima diljem svijeta.",
                ariaLabel: "Vatra simbolizira inovaciju i strast"
              }].map((item, index) => <motion.div key={item.text} initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.1
              }} className="flex items-start gap-4 group">
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-110" role="img" aria-label={item.ariaLabel}>
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-inter text-lg text-[#333] leading-relaxed">
                        <span style={{
                      color: "#C8A24A",
                      fontWeight: "600"
                    }}>
                          {item.highlight}
                        </span>
                        {item.text.replace(item.highlight, "")} – {item.description}
                      </p>
                    </div>
                  </motion.div>)}
              </div>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.9
            }} className="pt-6 border-t border-[#C8A24A]/20">
                <p className="font-inter text-lg text-[#333] leading-relaxed">
                  👉 U Zagrebu ga imate priliku upoznati uživo i učiti direktno od majstora kojeg klijenti i terapeuti diljem svijeta opisuju kao{" "}
                  <span style={{
                  color: "#C8A24A",
                  fontWeight: "600",
                  fontStyle: "italic"
                }}>
                    „čovjeka koji prenosi energiju iscjeljenja kroz svaku tehniku"
                  </span>.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing and reservation */}
      <section id="prijava" className="py-16" style={{
      background: "linear-gradient(135deg, #f8f5f1 0%, #f2e4d7 100%)"
    }}>
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} className="relative overflow-hidden rounded-3xl" style={{
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
            }}>
                <img src="/lovable-uploads/1f55607a-581e-4803-b62e-212cc10e53c6.png" alt="Calabash certifikacija - atmosfera ekskluzivne edukacije" className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} className="p-8 rounded-3xl" style={{
              background: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(200, 162, 74, 0.2)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)"
            }}>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-[#111] leading-tight">
                  Cijena i rezervacija
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <span className="font-inter text-lg text-[#333]">Investicija: </span>
                      <span className="text-2xl font-bold" style={{
                      color: "#D4AF37"
                    }}>500 €</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✨</span>
                    <div>
                      <span className="font-inter text-lg text-[#333]">Early Bird: </span>
                      <span className="text-2xl font-bold" style={{
                      color: "#D4AF37"
                    }}>450 €</span>
                      <span className="font-inter text-lg text-[#333]"> do 20.9. – uštedi 50 € i osiguraj svoje mjesto na vrijeme.</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👥</span>
                    <p className="font-inter text-lg text-[#333]">
                      <span className="font-semibold">Samo 12 polaznika</span> – radimo u malim grupama za maksimalnu kvalitetu.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🗓️</span>
                    <p className="font-inter text-lg text-[#333]">
                      <span className="font-semibold">Napomena:</span> Ova ekskluzivna edukacija organizira se samo jednom godišnje u Hrvatskoj, isključivo u Zagrebu. Sljedeća prilika tek za godinu dana.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎁</span>
                    <p className="font-inter text-lg text-[#333] italic">
                      Vrijednost paketa s bonusima: <span style={{
                      color: "#D4AF37",
                      fontWeight: "600"
                    }}>preko 700 €</span>, 
                      tvoja investicija samo <span style={{
                      color: "#D4AF37",
                      fontWeight: "600"
                    }}>450 €</span>.
                    </p>
                  </div>
                </div>

                <div className="mb-6 p-4 rounded-2xl" style={{
                background: "rgba(212, 175, 55, 0.1)",
                border: "1px solid rgba(212, 175, 55, 0.2)"
              }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">📍</span>
                    <span className="font-inter font-semibold text-[#111]">15.–16. studenoga 2025 – Zagreb, Maxidance Studio</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">👨‍⚕️</span>
                    <span className="font-inter text-[#333]">Ekskluzivna edukacija s Dr. Awudijem</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <motion.a 
                    href="https://tally.so/r/wA5kvD"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)"
                    }} 
                    whileTap={{
                      scale: 0.98
                    }} 
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 group" 
                    style={{
                      background: "#D4AF37",
                      color: "#111",
                      boxShadow: "0 4px 20px rgba(212, 175, 55, 0.3)"
                    }}
                  >
                    Rezerviraj mjesto sada
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                  
                  <motion.a
                    href="https://youtu.be/5GLWX_IMlEA?si=FyzmnoX6BHX1VNkE"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.02,
                      background: "#D4AF37",
                      color: "#fff"
                    }} 
                    whileTap={{
                      scale: 0.98
                    }} 
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-300" 
                    style={{
                      border: "2px solid #D4AF37",
                      color: "#D4AF37",
                      background: "#fff"
                    }}
                  >
                    <Play className="w-5 h-5" />
                    Pogledaj video
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 relative overflow-hidden">
        {/* Background images that change with carousel */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8f5f1] to-[#f2e4d7]" />
          <div className="absolute inset-0 opacity-20 transition-opacity duration-1000" style={{
          backgroundImage: "url('/lovable-uploads/869511d2-0596-4bc9-8a5b-8beae598be59.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)"
        }} />
        </div>
        
        <div className="container relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-12">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#111] mb-4">
              Iskustva polaznika
            </h3>
            <div className="w-24 h-1 mx-auto rounded-full" style={{
            background: "#C8A24A"
          }} />
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="grid md:grid-cols-3 gap-8">
              {[{
              quote: "Moji klijenti kažu da se osjećaju kao da nose novo tijelo nakon tretmana.",
              author: "Elena, Italija",
              bgImage: "/lovable-uploads/bb83dd83-aacc-4c52-b104-6c7c083f6f62.png"
            }, {
              quote: "Najelegantnija tehnika dubokog tkiva koju sam ikad naučio. Kalabaš mijenja sve.",
              author: "Marco, Italija",
              bgImage: "/lovable-uploads/c87f7781-19c9-4e78-947a-eafbcf5a1802.png"
            }, {
              quote: "Osjećaj pripadnosti, vrhunsko znanje i tehnika koja će zauvijek promijeniti moj rad s klijentima.",
              author: "Sofia, Poljska",
              bgImage: "/lovable-uploads/d075a1ba-aef5-43ca-b231-ad0f475306ab.png"
            }].map((testimonial, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                delay: 0.4 + index * 0.2
              }
            }} viewport={{
              once: true
            }} whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              transition: {
                duration: 0.3
              }
            }} className="group relative overflow-hidden rounded-3xl cursor-pointer" style={{
              background: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(200, 162, 74, 0.2)",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)"
            }}>
                  {/* Background image overlay */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{
                backgroundImage: `url('${testimonial.bgImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(1px)"
              }} />
                  
                  <div className="relative p-8 z-10">
                    {/* Golden quotation mark */}
                    <div className="mb-6">
                      <span className="text-4xl font-serif leading-none opacity-80 group-hover:opacity-100 transition-opacity duration-300" style={{
                    color: "#C8A24A"
                  }} aria-label="Citat">
                        „
                      </span>
                    </div>
                    
                    {/* Five stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#C8A24A] text-[#C8A24A]" />
                      ))}
                    </div>
                    
                    {/* Quote text */}
                    <blockquote className="mb-6">
                      <p className="font-inter text-lg text-[#333] leading-relaxed italic group-hover:text-[#222] transition-colors duration-300">
                        {testimonial.quote}
                      </p>
                    </blockquote>
                    
                    {/* Author */}
                    <footer className="pt-4 border-t border-[#C8A24A]/20">
                      <cite className="font-playfair text-base font-semibold not-italic" style={{
                    color: "#C8A24A"
                  }}>
                        — {testimonial.author}
                      </cite>
                    </footer>
                  </div>
                  
                  {/* Subtle hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl" style={{
                background: "radial-gradient(circle at center, rgba(200, 162, 74, 0.1) 0%, transparent 70%)"
              }} />
                </motion.div>)}
            </motion.div>
          </div>

          {/* Decorative elements */}
          <motion.div initial={{
          opacity: 0,
          scale: 0
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 1,
          delay: 1.2
        }} className="absolute top-10 right-10 w-20 h-20 rounded-full opacity-10" style={{
          background: "linear-gradient(135deg, #C8A24A, #B8943A)"
        }} />
          
          <motion.div initial={{
          opacity: 0,
          scale: 0
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 1,
          delay: 1.4
        }} className="absolute bottom-10 left-10 w-16 h-16 rounded-full opacity-10" style={{
          background: "linear-gradient(135deg, #C8A24A, #B8943A)"
        }} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative" style={{
      minHeight: "80vh"
    }}>
        {/* Background with dark gradient overlay */}
        <div className="absolute inset-0 bg-center bg-cover will-change-transform" style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundAttachment: "fixed"
      }} aria-hidden />
        
        {/* Dark gradient overlay - elegant transition to footer */}
        <div className="absolute inset-0" style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)"
      }} />
        
        {/* Content - Apple-like Minimalist Design */}
        <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4">
          <div className="container max-w-5xl mx-auto text-center text-white">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Hero Title - Elegant Serif */}
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                <span className="block mb-4">
                  <span className="text-white">12 mjesta. 2 dana.</span>
                </span>
                <span className="block mb-4 text-white/95">
                  Tehnika koju nitko drugi u Hrvatskoj ne podučava.
                </span>
                <span className="block" style={{ color: "#D4AF37" }}>
                  Budi među prvima koji će je savladati.
                </span>
              </h1>
              
              {/* CTA Buttons - Horizontal on Desktop, Vertical on Mobile */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pt-8"
              >
                {/* Primary CTA - Reserve */}
                <motion.a
                  href="https://tally.so/r/wA5kvD"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)"
                  }} 
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold rounded-full transition-all duration-300 w-full md:w-auto"
                  style={{
                    background: "#D4AF37",
                    color: "#111",
                    boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)"
                  }}
                  aria-label="Rezerviraj mjesto na Calabash certifikaciji"
                >
                  <span>Rezerviraj mjesto sada</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
                
                {/* Secondary CTA - View Program */}
                <motion.a
                  href="#sto-cete-nauciti"
                  whileHover={{ 
                    scale: 1.02,
                    background: "#D4AF37",
                    color: "#fff",
                    borderColor: "#D4AF37"
                  }} 
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold rounded-full transition-all duration-300 w-full md:w-auto"
                  style={{
                    background: "#fff",
                    color: "#D4AF37",
                    border: "2px solid #D4AF37"
                  }}
                  aria-label="Pogledaj program Calabash certifikacije"
                >
                  <span>Pogledaj program</span>
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-y-1 group-hover:rotate-90" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* CSS for shimmer animation */}
        <style dangerouslySetInnerHTML={{
        __html: `
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              50% {
                background-position: 200% 0;
              }
              100% {
                background-position: -200% 0;
              }
            }
            @keyframes shimmer-button {
              0% {
                transform: translateX(-100%);
              }
              50% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
          `
      }} />
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
              <Button className="bg-[#B9975B] hover:bg-[#B9975B]/90 text-white px-8 py-3 text-lg font-semibold hover:shadow-[0_0_20px_rgba(185,151,91,0.5)] transition-all duration-300 group relative overflow-hidden shimmer-effect" onClick={() => window.location.href = '/tecajevi'}>
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
export default CalabashCertificationPage;