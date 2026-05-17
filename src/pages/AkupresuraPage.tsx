import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, Users, Award, Play, ChevronDown, ChevronRight, ChevronLeft, Star, Calendar, MapPin, Euro, X, Target, TrendingUp, Zap, ArrowRight, BookOpen, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CountdownBadge from '@/components/ui/CountdownBadge';
import EnhancedLearningCard from '@/components/ui/EnhancedLearningCard';
import QuickTipCard from '@/components/ui/QuickTipCard';
import FloatingElement from '@/components/ui/FloatingElement';
import ImageCarousel from '@/components/ui/ImageCarousel';
import HeroTitle from '@/components/ui/HeroTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import TextShimmer from '@/components/ui/TextShimmer';
import { CourseHighlights } from '@/components/ui/CourseHighlights';
import { CourseStickyBar } from '@/components/ui/CourseStickyBar';
import { CourseHero } from '@/components/CourseHero';
import { ContactFooter } from '@/components/ContactFooter';
import AutoCarousel from '@/components/ui/AutoCarousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { akupresuraSchedule, getNextCourseDate } from '@/data/courseSchedules';
import { format } from 'date-fns';
import 'swiper/css';
import 'swiper/css/navigation';
const AkupresuraPage = () => {
  const [activeTab, setActiveTab] = useState("petak");
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  // Get next course date
  const nextCourse = getNextCourseDate(akupresuraSchedule);

  const testimonials = [{
    text: "Nisam očekivala da ću već drugog dana prepoznati trigger točku na vratu palpacijom i osjetiti kako popušta pod prstom. Taj osjećaj potvrde da si na pravom mjestu — nema ga u knjigama.",
    author: "Ana M.",
    role: "Fizioterapeut",
    rating: 5
  }, {
    text: "Ante ne objašnjava samo što raditi, nego zašto tijelo reagira upravo tako. Tek kad razumiješ mehanizam, počneš raditi s pouzdanjem — a ne na sreću.",
    author: "Marko P.",
    role: "Maser",
    rating: 5
  }, {
    text: "Klijenti s kroničnom tenzijskom glavoboljom s kojima nisam napredovala tjednima — nakon primjene distalnih točaka protokola dobivam rezultate već u prvom tretmanu.",
    author: "Petra N.",
    role: "Kineziterapeut",
    rating: 5
  }];
  const benefits = [{
    icon: "🧭",
    title: "Dijagnostički protokol: punoća/praznina",
    description: "Naučiš prepoznati energetsko stanje tkiva palpacijom — i na temelju toga biraš tehniku, ne nagađaš."
  }, {
    icon: "📍",
    title: "18 preciznih akupresurnih točaka",
    description: "Lokacija, indikacije i tehnika za točke kao što su SI 3, BL 60, GB 21 — svaka s konkretnim protokolom za specifičan simptom."
  }, {
    icon: "⚡",
    title: "90-sekundni ishemijski pritisak (ICT)",
    description: "Inhibition Compression Technique — kontinuirani pritisak koji resetira živčano-mišićni signal i deaktivira trigger točku."
  }, {
    icon: "❄️",
    title: "Ice & Stretch — Hans Kraus metoda",
    description: "Hladnoća resetira mišićnu informaciju, istezanje reprogramira tkivo na novo stanje. Najefikasnija neinvazivna metoda za trajno gašenje trigger točaka."
  }, {
    icon: "🔬",
    title: "PIR i neuromuskularno istezanje",
    description: "Post-izometrijska relaksacija za eliminaciju hipertonusa — dublje i dugotrajnije od klasičnog istezanja."
  }, {
    icon: "🏠",
    title: "Protokoli za kućne vježbe klijenata",
    description: "Konkretne upute što dati klijentu između tretmana — da terapija traje, a ne da se bol vraća za tjedan dana."
  }];
  const courseSchedule = {
    petak: {
      title: "Dan 1: Akupresura — sustav koji razumiješ",
      subtitle: "Dijagnostika, meridijani i 18 točaka koje moraš znati",
      content: ["3-koračni dijagnostički protokol: punoća/praznina → odabir meridijana → tehnika", "Lokalne vs. distalne točke — kada koja i zašto to bitno mijenja rezultat", "Akupresura za okcipitalnu, lateralnu i frontalnu glavobolju", "Točke za križa, vrat i rame s pratećim meridijanima (BL, SI, GB)", "Tonifikacija vs. disperzija: odabir pritiska prema vrsti i intenzitetu boli"],
      hookBox: "Na kraju prvog dana znaš procijeniti je li klijent energetski pun ili prazan — i točno znaš što s tim."
    },
    subota: {
      title: "Dan 2: Trigger point terapija — lociranje i gašenje",
      subtitle: "Palpacija, 90-sekundna ICT tehnika i Ice & Stretch metoda",
      content: ["Kako pronaći trigger točku: napeta traka, bolno mjesto, referentna bol koja se širi", "Deep stroking massage kao priprema tkiva za dublji rad", "Ishemijski pritisak — 90-sekundna ICT tehnika korak po korak (3 stopa)", "Ice & Stretch po Hansu Krausu — hladnoća resetira, istezanje reprogramira", "Trigger točke za križa, tenzijsku glavobolju i ramena"],
      hookBox: "Na kraju drugog dana prstima prepoznaješ napetu traku i znaš je deaktivirati u 90 sekundi."
    },
    nedjelja: {
      title: "Dan 3: Integracija — protokol koji funkcionira u praksi",
      subtitle: "PIR, kombiniranje tehnika i protokoli koje odmah koristiš",
      content: ["Post-izometrijska relaksacija (PIR) — statička kontrakcija + pasivno istezanje", "Kombiniranje akupresure i trigger point terapije u jednom tretmanu", "Protokoli za kuk, koljeno, gležanj i donji ud", "Kućne vježbe i upute za klijente — terapija koja traje između tretmana", "Q&A: konkretni slučajevi iz prakse, tvoja pitanja, direktni odgovori"],
      hookBox: "Odlaziš s protokolima za 6 najčešćih bolnih stanja — spremnima za primjenu već sljedećeg ponedjeljka."
    }
  };
  const faqs = [{
    question: "Kada i gdje se održava tečaj?",
    answer: nextCourse ? `Sljedeći tečaj se održava ${format(new Date(nextCourse.startDate), 'dd.')}–${format(new Date(nextCourse.endDate), 'dd. MM. yyyy.')} u ${nextCourse.city}, ${nextCourse.location}.` : "Trenutno nema zakazanih termina. Kontaktirajte nas za informacije o sljedećem izdanju."
  }, {
    question: "Trebam li prethodno iskustvo?",
    answer: "Ne. Tečaj je struktuiran tako da od nule gradiš razumijevanje — teorija, demonstracija, vježba u paru. Iskusni terapeuti dobivaju sistemski okvir za ono što intutivno već rade."
  }, {
    question: "Što je uključeno u cijenu?",
    answer: "24 sata edukacije, materijali, refreshmenti i certifikat s upisom u e-radnu knjižicu."
  }, {
    question: "Mogu li plaćati na rate?",
    answer: "Da, plaćanje u 2–3 rate je moguće. Kontaktiraj nas direktno za dogovor."
  }, {
    question: "Što ako ne mogu doći jedan dan?",
    answer: "Propuštene sate možeš nadoknaditi na sljedećem terminu, bez dodatne naplate."
  }, {
    question: "Dobivam li certifikat?",
    answer: "Da, certifikat dobiva svaki polaznik koji završi tečaj, s upisom u e-radnu knjižicu."
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen bg-white">
      <CourseHero
        category="Akupresura & Trigger Point Terapija · Zagreb"
        headline={<>Kada znaš da si<br />na pravom mjestu.</>}
        subheadline="Akupresura i trigger point terapija za terapeute koji žele preciznije čitati reakciju tkiva, obrazac boli i promjenu pod pritiskom."
        videoSrc="https://www.dropbox.com/scl/fi/zu7uftbbxjg619w0j4r2s/atpt_hero-background.mp4?rlkey=53arhybzq615h8bvnx1ewqj51&st=ym2v8jte&raw=1"
        videoPoster="/poster-hero.jpg"
        primaryCTA={{ label: "Pogledaj program", onClick: scrollToPricing }}
        secondaryCTA={{ label: "Pogledaj video", onClick: () => setVideoModalOpen(true) }}
        facts={[
          { field: "Trajanje", value: "3 dana", detail: "intenzivan praktičan rad" },
          { field: "Opseg", value: "24 sata", detail: "edukacije" },
          { field: "Metodika", value: "Akupresura & Trigger Point", detail: "2 komplementarna sustava" },
          { field: "Format", value: "Rad u paru", detail: "demonstracija i korekcija" },
        ]}
      />

      {/* Unified Sticky Bar */}
      <CourseStickyBar locations={[{
      city: "Zagreb",
      dates: "27.–29. 03. 2026."
    }]} price="27.–29. 03. 2026. · Zagreb" ctaText="Rezerviraj mjesto" theme="light" />

      {/* New Premium Section - Od točke do olakšanja */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Left Content - 60% */}
            <div className="lg:col-span-3">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4
            }} viewport={{
              once: true
            }} className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full">
                  <span className="text-[#d4af37] font-bold text-sm uppercase tracking-wide">Novo izdanje 2025.</span>
                </div>
              </motion.div>

              <motion.h2 initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{
              fontFamily: 'Playfair Display, serif'
            }}>
                Nauči precizno uklanjati{' '}
                <span className="bg-gradient-to-r from-gray-900 via-[#d4af37] to-[#d4af37] bg-clip-text text-transparent">
                  bol u vratu i leđima
                </span>{' '}
                u 90 sekundi
              </motion.h2>

              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="mb-10 max-w-2xl space-y-6" style={{
              fontFamily: 'Inter, sans-serif'
            }}>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Sustavna i precizna metoda koja ti omogućuje da pouzdano identificiraš izvor boli i interveniraš s jasnoćom, sigurnošću i kontrolom.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  U tri dana intenzivnog praktičnog rada savladat ćeš protokole koji donose mjerljive rezultate – već tijekom tretmana.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed font-semibold">
                  Ovo nije još jedna radionica o bolnim točkama. Ovo je strukturirani pristup koji podiže razinu tvoje terapijske prakse.
                </p>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{
                    fontFamily: 'Playfair Display, serif'
                  }}>
                    Za koga je ova edukacija?
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#d4af37] mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">Za terapeute koji žele raditi precizno, a ne nasumično</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#d4af37] mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">Za profesionalce koji žele stabilne i ponovljive rezultate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#d4af37] mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">Za one koji žele diferencijaciju temeljenu na znanju, ne marketingu</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#d4af37] mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">Za terapeute koji žele veći profesionalni autoritet i sigurnost u radu</span>
                    </li>
                  </ul>
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
              duration: 0.4,
              delay: 0.3
            }} viewport={{
              once: true
            }} className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.98
              }} className="relative group">
                  <Button size="lg" className="bg-[#d4af37] hover:bg-[#c19b2a] text-black px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/30 transition-all duration-300 border-0 group-hover:animate-pulse" onClick={scrollToPricing}>
                    Osiguraj mjesto - 450€
                  </Button>
                  <div className="absolute inset-0 rounded-2xl bg-[#d4af37] blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
                </motion.div>
                
                <motion.div whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.98
              }}>
                  <Button variant="outline" size="lg" className="border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/25" onClick={() => setVideoModalOpen(true)}>
                    Pogledaj video (0:57)
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Video Thumbnail - 40% */}
            <div className="lg:col-span-2">
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.4,
              delay: 0.2
            }} viewport={{
              once: true
            }} whileHover={{
              scale: 1.05
            }} className="group cursor-pointer" onClick={() => setVideoModalOpen(true)}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#d4af37]/30 transition-all duration-300 group-hover:shadow-3xl">
                  <img src="/lovable-uploads/a52bc10d-78ab-46e0-8ee4-13bf1e57e3d9.png" alt="Akupresura i Trigger Point video" className="w-full h-auto object-cover" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-[#d4af37] ml-1" />
                    </div>
                  </div>
                  
                  {/* Gold glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-4 group-hover:ring-[#d4af37]/30 transition-all duration-300" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bar */}
      

      {/* First Section with Video */}
      

      {/* Kombinacija znanosti i tradicije */}
      <section className="py-24 relative overflow-hidden" style={{
      background: '#FFFDF9'
    }}>
        <div className="max-w-6xl mx-auto px-6">
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with Blur and Overlay */}
        <div className="absolute inset-0">
          <img src="/lovable-uploads/education-workshop-bg.jpg" alt="Education background" className="w-full h-full object-cover object-center opacity-45" style={{
          filter: 'blur(14px)'
        }} />
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDF9] to-[#F5F1EA] opacity-85"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{
            fontFamily: 'Playfair Display, serif'
          }}>
              Što ćeš savladati
            </h2>
            <p className="text-xl text-gray-600 font-medium" style={{
            fontFamily: 'Inter, sans-serif'
          }}>
              Praktične vještine i tehnike koje odmah možeš primijeniti
            </p>
          </motion.div>

          {/* Cards Grid - First Row */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Card 1 */}
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.12
          }} viewport={{
            once: true
          }} whileHover={{
            y: -8,
            scale: 1.02
          }} className="group">
              <div className="backdrop-blur-xl bg-white/75 border border-[#EADFC9] rounded-2xl p-8 h-full shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/10 transition-all duration-300 hover:border-[#d4af37]/40">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Energetski obrazac 6 ključnih meridijana
                </h3>
                <p className="text-[#d4af37] font-semibold mb-4 text-sm uppercase tracking-wide">
                  Balans tijela kroz 6 energetskih putova
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nauči kako prepoznati i uskladiti glavne energetske kanale tijela za bolju funkciju i zdravlje.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.24
          }} viewport={{
            once: true
          }} whileHover={{
            y: -8,
            scale: 1.02
          }} className="group">
              <div className="backdrop-blur-xl bg-white/75 border border-[#EADFC9] rounded-2xl p-8 h-full shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/10 transition-all duration-300 hover:border-[#d4af37]/40">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  30+ akupresurnih točaka
                </h3>
                <p className="text-[#d4af37] font-semibold mb-4 text-sm uppercase tracking-wide">
                  Precizna mapa tijela – više od 30 točaka
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ovladaj lokacijama i primjenom najvažnijih terapijskih točaka koje donose brze rezultate.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.36
          }} viewport={{
            once: true
          }} whileHover={{
            y: -8,
            scale: 1.02
          }} className="group">
              <div className="backdrop-blur-xl bg-white/75 border border-[#EADFC9] rounded-2xl p-8 h-full shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/10 transition-all duration-300 hover:border-[#d4af37]/40">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Trigger-point '90 s switch-off' tehnika
                </h3>
                <p className="text-[#d4af37] font-semibold mb-4 text-sm uppercase tracking-wide">
                  Olakšanje u 90 sekundi
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nauči dokazanu tehniku brzog gašenja mišićnih čvorova – bez nagađanja, samo precizna primjena.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Middle Highlight Card */}
          <motion.div initial={{
          opacity: 0,
          y: 60
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="mb-8">
            <div className="backdrop-blur-xl bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-2xl p-10 text-center shadow-xl shadow-[#d4af37]/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Dvostruki učinak, stvarni rezultati
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-4xl mx-auto">
                Ne nauči samo kako, već i zašto kombinacija akupresure i trigger točaka višestruko povećava učinkovitost terapije – s preciznošću i sigurnošću koju klijenti osjećaju već nakon prvog tretmana.
              </p>
              <p className="text-sm italic text-gray-600">
                Pro tip: Nakon ove trodnevne edukacije, tvoja praksa više neće biti ista – tretmani postaju jasniji, ciljano djeluju i donose trajne rezultate.
              </p>
            </div>
          </motion.div>

          {/* Cards Grid - Second Row */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 4 */}
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.48
          }} viewport={{
            once: true
          }} whileHover={{
            y: -8,
            scale: 1.02
          }} className="group">
              <div className="backdrop-blur-xl bg-white/75 border border-[#EADFC9] rounded-2xl p-8 h-full shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/10 transition-all duration-300 hover:border-[#d4af37]/40">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ice & Stretch metoda za trajne rezultate
                </h3>
                <p className="text-[#d4af37] font-semibold mb-4 text-sm uppercase tracking-wide">
                  Kombinacija za dugotrajno rješenje boli
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Integrirana metoda hlađenja i istezanja koja uklanja uzrok, a ne samo simptome.
                </p>
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.60
          }} viewport={{
            once: true
          }} whileHover={{
            y: -8,
            scale: 1.02
          }} className="group">
              <div className="backdrop-blur-xl bg-white/75 border border-[#EADFC9] rounded-2xl p-8 h-full shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/10 transition-all duration-300 hover:border-[#d4af37]/40">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Neuromuskularno istezanje & PIR
                </h3>
                <p className="text-[#d4af37] font-semibold mb-4 text-sm uppercase tracking-wide">
                  Napredne tehnike pokretljivosti
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Savladaj protokole koji povećavaju opseg pokreta i vraćaju funkcionalnost tijelu.
                </p>
              </div>
            </motion.div>

            {/* Card 6 */}
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.72
          }} viewport={{
            once: true
          }} whileHover={{
            y: -8,
            scale: 1.02
          }} className="group">
              <div className="backdrop-blur-xl bg-white/75 border border-[#EADFC9] rounded-2xl p-8 h-full shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/10 transition-all duration-300 hover:border-[#d4af37]/40">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Kućne vježbe za klijente
                </h3>
                <p className="text-[#d4af37] font-semibold mb-4 text-sm uppercase tracking-wide">
                  Rezultati koji ostaju i kod kuće
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Praktične vježbe koje tvoji klijenti mogu raditi sami za održavanje dugoročnog napretka.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Program po danima - Korak po korak do majstorstva */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Enhanced Blur and Overlay */}
        <div className="absolute inset-0">
          <img src="/lovable-uploads/education-workshop-bg.jpg" alt="Education background" className="w-full h-full object-cover object-center opacity-45" style={{
          filter: 'blur(16px)'
        }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F9F6F2] to-[#F5F1EA] opacity-90"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)'
          }}>
              Korak po korak do majstorstva
            </h2>
            <p className="text-xl text-gray-700" style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'
          }}>
              Detaljni pregled 3-dnevnog programa
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-full p-2 shadow-lg overflow-x-auto">
                <TabsTrigger value="petak" className="rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 data-[state=active]:bg-supra-golden data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-white/50" style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)'
              }}>
                  Petak
                </TabsTrigger>
                <TabsTrigger value="subota" className="rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 data-[state=active]:bg-supra-golden data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-white/50" style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)'
              }}>
                  Subota
                </TabsTrigger>
                <TabsTrigger value="nedjelja" className="rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 data-[state=active]:bg-supra-golden data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-white/50" style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)'
              }}>
                  Nedjelja
                </TabsTrigger>
              </TabsList>

              {Object.entries(courseSchedule).map(([day, schedule], index) => <TabsContent key={day} value={day} className="mt-8">
                  <motion.div initial={{
                opacity: 0,
                y: 30
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }}>
                    <Card className="bg-white/40 backdrop-blur-[24px] border-l-4 border-l-[#D9B67B] border border-white/30 rounded-2xl overflow-hidden hover:bg-white/50 hover:scale-[1.02] transition-all duration-500" style={{
                  boxShadow: '0 8px 30px rgba(0,0,0,0.06), 0 2px 8px rgba(217,182,123,0.1)',
                  border: '1px solid #D9B67B',
                  borderRadius: '16px'
                }}>
                      <CardContent className="p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl lg:text-3xl font-bold text-[#111] mb-2" style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                      }}>
                            {schedule.title}
                          </h3>
                          <p className="text-lg text-gray-700 font-medium" style={{
                        fontFamily: 'Inter, sans-serif'
                      }}>
                            {schedule.subtitle}
                          </p>
                        </div>
                        
                        <ul className="space-y-4 mb-6">
                          {schedule.content.map((item, itemIndex) => <li key={itemIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-supra-golden mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 leading-relaxed" style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                        }}>
                                {item}
                              </span>
                            </li>)}
                        </ul>
                        
                        {/* Hook Box */}
                        <motion.div initial={{
                      opacity: 0,
                      y: 20
                    }} whileInView={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      duration: 0.5,
                      delay: 0.2
                    }} viewport={{
                      once: true
                    }} className="bg-white/60 backdrop-blur-sm border-2 border-[#D9B67B] rounded-2xl p-6" style={{
                      boxShadow: '0 4px 20px rgba(217,182,123,0.15)'
                    }}>
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">💡</span>
                            <p className="text-gray-800 font-medium leading-relaxed" style={{
                          fontFamily: 'Inter, sans-serif'
                        }}>
                              {schedule.hookBox}
                            </p>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>)}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Trenuci koji ostaju Section */}
      <section className="relative py-24 overflow-hidden bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#111] mb-6" style={{
            fontFamily: 'Playfair Display, serif'
          }}>
              👉 Trenuci koji ostaju
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-4xl mx-auto" style={{
            fontFamily: 'Inter, sans-serif'
          }}>
              Svaka edukacija donosi nova iskustva, praktične uvide i povezanost s kolegama – pogledajte kako izgleda put do terapijske izvrsnosti.
            </p>
          </motion.div>

          {/* Custom Image Carousel */}
          <div className="relative">
            {/* Edge gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#FAF9F7] to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#FAF9F7] to-transparent pointer-events-none z-10"></div>
            
            <div id="momentsSlider" className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{
            scrollSnapType: 'x mandatory'
          }} aria-label="Trenuci koji ostaju" aria-roledescription="carousel" onMouseEnter={() => {
            const slider = document.getElementById('momentsSlider');
            if (slider) slider.style.scrollBehavior = 'auto';
          }} onMouseLeave={() => {
            const slider = document.getElementById('momentsSlider');
            if (slider) slider.style.scrollBehavior = 'smooth';
          }}>
              {/* Image 1 - Rad u paru */}
              <motion.div initial={{
              opacity: 0,
              y: 40,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="relative flex-shrink-0 w-80 h-64 snap-start group" data-card style={{
              scrollSnapAlign: 'start'
            }}>
                <img src="/lovable-uploads/96995098-9ffc-48e4-b20b-f599490baac9.png" alt="Rad u paru" className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300" />
                <motion.div initial={{
                opacity: 0,
                y: -20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4,
                delay: 0.3
              }} viewport={{
                once: true
              }} className="absolute top-4 left-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] px-3 py-1 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-white">Rad u paru</span>
                </motion.div>
              </motion.div>

              {/* Image 2 - Instruktor u akciji */}
              <motion.div initial={{
              opacity: 0,
              y: 40,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="relative flex-shrink-0 w-80 h-64 snap-start group" data-card style={{
              scrollSnapAlign: 'start'
            }}>
                <img src="/lovable-uploads/b843e565-9cd4-4b52-8f3d-02b24514415b.png" alt="Instruktor u akciji" className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300" />
                <motion.div initial={{
                opacity: 0,
                y: -20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4,
                delay: 0.4
              }} viewport={{
                once: true
              }} className="absolute top-4 left-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] px-3 py-1 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-white">Instruktor u akciji</span>
                </motion.div>
              </motion.div>

              {/* Image 3 - Preciznost točaka */}
              <motion.div initial={{
              opacity: 0,
              y: 40,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 0.3
            }} viewport={{
              once: true
            }} className="relative flex-shrink-0 w-80 h-64 snap-start group" data-card style={{
              scrollSnapAlign: 'start'
            }}>
                <img src="/lovable-uploads/b8e614dd-f6f8-4898-8d54-86f1245e6b74.png" alt="Preciznost točaka" className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300" />
                <motion.div initial={{
                opacity: 0,
                y: -20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4,
                delay: 0.5
              }} viewport={{
                once: true
              }} className="absolute top-4 left-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] px-3 py-1 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-white">Preciznost točaka</span>
                </motion.div>
              </motion.div>

              {/* Image 4 - Učenje zajedno */}
              <motion.div initial={{
              opacity: 0,
              y: 40,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 0.4
            }} viewport={{
              once: true
            }} className="relative flex-shrink-0 w-80 h-64 snap-start group" data-card style={{
              scrollSnapAlign: 'start'
            }}>
                <img src="/lovable-uploads/e933b2da-f729-436f-b2fd-e38c19eb94d9.png" alt="Učenje zajedno" className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300" />
                <motion.div initial={{
                opacity: 0,
                y: -20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4,
                delay: 0.6
              }} viewport={{
                once: true
              }} className="absolute top-4 left-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] px-3 py-1 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-white">Učenje zajedno</span>
                </motion.div>
              </motion.div>

              {/* Image 5 - Fokus i prisutnost */}
              <motion.div initial={{
              opacity: 0,
              y: 40,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 0.5
            }} viewport={{
              once: true
            }} className="relative flex-shrink-0 w-80 h-64 snap-start group" data-card style={{
              scrollSnapAlign: 'start'
            }}>
                <img src="/lovable-uploads/644c3804-7b28-42bc-a9fb-b2b614e46357.png" alt="Fokus i prisutnost" className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300" />
                <motion.div initial={{
                opacity: 0,
                y: -20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4,
                delay: 0.7
              }} viewport={{
                once: true
              }} className="absolute top-4 left-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] px-3 py-1 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-white">Fokus i prisutnost</span>
                </motion.div>
              </motion.div>

              {/* Image 6 - Energetska dijagnostika uha */}
              <motion.div initial={{
              opacity: 0,
              y: 40,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 0.6
            }} viewport={{
              once: true
            }} className="relative flex-shrink-0 w-80 h-64 snap-start group" data-card style={{
              scrollSnapAlign: 'start'
            }}>
                <img src="/lovable-uploads/0224950f-d652-4ec1-927d-024e023727ba.png" alt="Energetska dijagnostika uha" className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300" />
                <motion.div initial={{
                opacity: 0,
                y: -20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4,
                delay: 0.8
              }} viewport={{
                once: true
              }} className="absolute top-4 left-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] px-3 py-1 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-white">Energetska dijagnostika uha</span>
                </motion.div>
              </motion.div>

              {/* Image 7 - Prezentacija & praksa 1-na-1 */}
              <motion.div initial={{
              opacity: 0,
              y: 40,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 0.7
            }} viewport={{
              once: true
            }} className="relative flex-shrink-0 w-80 h-64 snap-start group" data-card style={{
              scrollSnapAlign: 'start'
            }}>
                <img src="/lovable-uploads/bf282f9f-783e-410e-86c8-4cabdf11f976.png" alt="Prezentacija & praksa 1-na-1" className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300" />
                <motion.div initial={{
                opacity: 0,
                y: -20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4,
                delay: 0.9
              }} viewport={{
                once: true
              }} className="absolute top-4 left-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] px-3 py-1 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-white">Prezentacija & praksa 1-na-1</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button id="momentsPrev" className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#d4af37] bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-white hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300 shadow-lg z-20 disabled:opacity-40 disabled:cursor-not-allowed" aria-label="Prethodno" role="button" tabIndex={0} onClick={() => {
            const slider = document.getElementById('momentsSlider');
            const card = slider?.querySelector('[data-card]') as HTMLElement;
            if (slider && card) {
              const cardWidth = card.offsetWidth + 16; // include gap
              slider.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
              });
            }
          }} onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              (e.target as HTMLButtonElement).click();
            }
          }}>
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            
            <button id="momentsNext" className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#d4af37] bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-white hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300 shadow-lg z-20 disabled:opacity-40 disabled:cursor-not-allowed" aria-label="Sljedeće" role="button" tabIndex={0} onClick={() => {
            const slider = document.getElementById('momentsSlider');
            const card = slider?.querySelector('[data-card]') as HTMLElement;
            if (slider && card) {
              const cardWidth = card.offsetWidth + 16; // include gap
              slider.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
              });
            }
          }} onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              (e.target as HTMLButtonElement).click();
            }
          }}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* O predavaču Ante Antić */}
      <section className="py-20 bg-gradient-to-b from-[#FAF8F4] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          ease: "easeOut"
        }}>
            {/* Desktop: Image left, Text right | Mobile: Stacked */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Image */}
              <motion.div initial={{
              opacity: 0,
              x: -40
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.7,
              ease: "easeOut"
            }} className="order-2 lg:order-1">
                <div className="w-full max-w-md mx-auto lg:mx-0 rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow-lg hover:shadow-xl transition-all duration-300">
                  <img src="/lovable-uploads/6f7f2e08-2f5a-42f8-a4cb-551d809913d6.png" alt="Ante Antić - Osnivač Supra Studija" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Right side - Text Content */}
              <motion.div initial={{
              opacity: 0,
              x: 40
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut"
            }} className="order-1 lg:order-2 space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wide">
                    👤 O predavaču
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900" style={{
                  fontFamily: 'Playfair Display'
                }}>
                    Ante Antić
                  </h2>
                  <p className="text-lg text-gray-600 font-medium">
                    Osnivač Supra Studija i pokretač Feel & Heal Festivala
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 text-lg font-medium text-[#C8A24A]">
                  <span>🕐 16 godina iskustva</span>
                  <span className="text-gray-300">|</span>
                  <span>👥 900+ polaznika</span>
                </div>

                {/* Bio Text */}
                <div className="space-y-4 text-gray-700" style={{
                lineHeight: '1.8'
              }}>
                  <p className="text-base lg:text-lg leading-loose">
                    S više od <strong className="text-[#D4AF37]">16 godina rada u manualnoj terapiji</strong>, kroz ruke mi je prošlo na tisuće klijenata s kroničnim bolovima, napetošću i neuspješnim pokušajima rješenja. Trigger point terapija je jedan od alata koji uvijek iznova dokazuje svoju učinkovitost – ali samo kad se koristi precizno, promišljeno i s razumijevanjem cijelog sustava.
                  </p>
                  <p className="text-base lg:text-lg leading-loose">
                    Upravo zato ovaj tečaj nije "još jedan seminar o bolnim točkama".<br />
                    To je strukturiran, visoko praktičan trening koji terapeutima daje samopouzdanje u radu s dubokim i zahtjevnim strukturama, a pritom ne gubi dodir sa stvarnim čovjekom ispred sebe.
                  </p>
                </div>

                {/* Separator Line */}
                <div className="border-t-2 border-[#D4AF37]/30 my-6"></div>

                {/* Mission Section */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#D4AF37] flex items-center gap-2">
                    🎯 Moja misija
                  </h3>
                  <p className="text-base lg:text-lg text-gray-700 leading-loose">
                    Prenositi znanje koje ima smisla u praksi – ono što <strong>djeluje danas</strong>, na stvarnim ljudima, u stvarnim uvjetima. Zato su moje edukacije uvijek fokusirane, konkretne i usmjerene na stvarne rezultate.
                  </p>
                </div>

                {/* CTA Button */}
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
              }} className="pt-6">
                  <motion.div whileHover={{
                  scale: 1.05
                }} transition={{
                  duration: 0.2
                }} className="inline-block">
                    <Button size="lg" asChild className="bg-gradient-to-r from-[#D4AF37] to-[#EBD79D] hover:from-[#D4AF37]/90 hover:to-[#EBD79D]/90 text-white font-bold px-8 py-4 text-base lg:text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                      <a href="#kontakt">
                        👉 Postavi pitanje predavaču
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Investiraj u svoju karijeru */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-white to-background relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Pricing Card */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.95,
            y: 30
          }} whileInView={{
            opacity: 1,
            scale: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="relative">
              <div className="rounded-2xl p-8 bg-white shadow-lg border border-accent/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="font-playfair text-3xl font-bold text-foreground mb-2">
                    🚀 Investiraj u svoju karijeru
                  </h3>
                  <p className="text-lg font-medium text-muted-foreground mb-6">
                    Ograničeno vrijeme – iskoristi ekskluzivni early-bird popust
                  </p>
                  
                  <div className="text-center mb-6">
                    <div className="text-lg text-muted-foreground line-through mb-2">
                      Redovna cijena: 450 €
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                      390 €
                    </div>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">Early-bird popust do 20.01.2026.</div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground text-center mb-6">Nakon isteka datuma cijena kotizacije je 450 Eur.</div>
                  
                  {/* Countdown Timer */}
                  <div className="mb-8">
                    <CountdownBadge />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Benefits List */}
            <div className="space-y-6">
              <div>
                <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
                  Uključen paket vrijednosti:
                </h3>
              </div>
              
              <div className="space-y-4">
                {[{
                text: "24 sata praktične edukacije – intenzivno znanje koje odmah možeš primijeniti u praksi",
                key: "24 sata praktične edukacije"
              }, {
                text: "PDF priručnik (99 stranica) – tvoj osobni vodič kroz sve tehnike",
                key: "PDF priručnik"
              }, {
                text: "Anatomske ilustracije (190 stranica) – jasno objašnjenje svake strukture i točke",
                key: "Anatomske ilustracije"
              }, {
                text: "3 mjeseca mentorskog praćenja – podrška i sigurnost da ne ostaneš sam nakon edukacije",
                key: "3 mjeseca mentorskog praćenja"
              }, {
                text: "Certifikat se može upisati u e-radnu knjižicu kao dodatno obrazovanje – dokaz tvoje stručnosti.",
                key: "Certifikat s upisom"
              }, {
                text: "Doživotni pristup materijalima – uvijek možeš ponoviti i obnoviti znanje",
                key: "Doživotni pristup"
              }].map((benefit, index) => <motion.div key={benefit.key} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.4,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 flex-shrink-0 rounded-full bg-primary flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <p className="text-foreground text-lg leading-relaxed">
                      {benefit.text.split(' – ').map((part, i) => i === 0 ? <strong key={i}>{part}</strong> : <span key={i}> – {part}</span>)}
                    </p>
                  </motion.div>)}
              </div>
            </div>
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
          delay: 0.4
        }} viewport={{
          once: true
        }} className="text-center mt-16">
            <div className="max-w-md mx-auto">
              <Button size="lg" className="w-full rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-4 text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" onClick={() => window.open('https://tally.so/r/wA5kvD', '_blank')}>
                👉 Prijavi se sada
              </Button>
              
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video + Testimonials */}
      {/* Testimonials - Što kažu naši polaznici */}
      <section className="py-20 bg-gradient-to-b from-[#FFFDFA] to-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Što kažu naši polaznici
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Iskustva onih koji su već prošli edukaciju i osjetili rezultate u praksi.
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <Swiper modules={[Navigation, Autoplay]} spaceBetween={30} slidesPerView={1} navigation={{
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev'
          }} autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }} breakpoints={{
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }} className="pb-12">
              {[{
              text: "Ante objašnjava kompleksne tehnike na vrlo jednostavan način. Odličan praktični pristup.",
              author: "Marko Petrović",
              role: "maser",
              rating: 5
            }, {
              text: "Tečaj mi je promijenio praksu – naučio sam tehnike koje odmah mogu koristiti na svojim klijentima.",
              author: "Ivana Horvat",
              role: "fizioterapeut",
              rating: 5
            }, {
              text: "Najviše mi se svidjela kombinacija praktičnih vježbi i jasnih objašnjenja – odmah primjenjivo.",
              author: "Luka Marić",
              role: "terapeut",
              rating: 5
            }].map((testimonial, index) => <SwiperSlide key={index}>
                  <motion.div initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.12
              }} viewport={{
                once: true
              }} className="h-full">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#EADFC9] relative overflow-hidden h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                      {/* Quote watermark */}
                      <div className="absolute top-4 right-4 text-6xl text-[#C8A24A] opacity-10 font-serif leading-none">
                        ❝
                      </div>
                      
                      {/* Stars */}
                      <div className="flex gap-1 mb-4 relative z-10">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#C8A24A] text-[#C8A24A]" />)}
                      </div>

                      {/* Text */}
                      <div className="flex-1 relative z-10 mb-6">
                        <p className="text-gray-700 text-lg leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </div>

                      {/* Author */}
                      <div className="relative z-10 pt-4 border-t border-gray-100">
                        <div className="font-bold text-gray-900 mb-1">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>)}
            </Swiper>

            {/* Navigation Arrows */}
            <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full border-2 border-[#C8A24A] bg-white text-[#C8A24A] hover:bg-[#C8A24A] hover:text-white transition-all duration-300 flex items-center justify-center group">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full border-2 border-[#C8A24A] bg-white text-[#C8A24A] hover:bg-[#C8A24A] hover:text-white transition-all duration-300 flex items-center justify-center group">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section - Često postavljana pitanja */}
      <section className="py-20 bg-gradient-to-b from-[#FFFDFA] to-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 40,
          scale: 0.92
        }} whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4" style={{
            fontFamily: 'Playfair Display'
          }}>
              Često postavljana pitanja
            </h2>
            <p className="text-xl font-medium text-[#444] max-w-2xl mx-auto">
              Sve što trebaš znati prije prijave
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 40,
          scale: 0.92
        }} whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2
        }} className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-[#EADFC9] rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-medium text-[#222]">
                      📍 Kada i gdje se održava tečaj?
                    </span>
                  </div>
                  
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-[#444] leading-relaxed">
                    Naš glavni tečaj održava se jednom godišnje u Zagrebu, a u drugim gradovima Hrvatske (kao što su Split, Rijeka, Osijek...) svake dvije godine, ovisno o interesu. Lokacije su pažljivo odabrane kako bismo ti osigurali lakoću dolaska i ugodno iskustvo učenja.
                  </p>
                  <p className="text-[#444] leading-relaxed mt-3">
                    📍 Popis svih gradova i nadolazećih lokacija možeš pronaći ovdje:{' '}
                    <a href="/raspored#lokacije-odrzavanja" className="text-[#C9A86C] hover:text-[#B8956B] font-medium underline underline-offset-2 transition-colors">
                      Pogledaj lokacije
                    </a>
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border border-[#EADFC9] rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-medium text-[#222]">
                      🤔 Trebam li prethodno iskustvo?
                    </span>
                  </div>
                  
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-[#444] leading-relaxed">
                    Ne! Tečaj je kreiran tako da ga mogu pratiti i potpuni početnici, ali i iskusni terapeuti. Kroz praktične vježbe brzo ćeš usvojiti tehnike koje možeš odmah primijeniti.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border border-[#EADFC9] rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-medium text-[#222]">
                      🎓 Dobivam li certifikat?
                    </span>
                  </div>
                  
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-[#444] leading-relaxed">
                    Da, nakon završetka edukacije dobivaš uvjerenje koje se može upisati u e-radnu knjižicu kao dodatno obrazovanje u skladu s člankom 2. Pravilnika o elektroničkom zapisu (NN 79/2013). To je službeni dokument koji potvrđuje tvoje znanje i doprinosi tvojoj stručnosti na tržištu rada.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border border-[#EADFC9] rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-medium text-[#222]">
                      💡 Što je uključeno u cijenu?
                    </span>
                  </div>
                  
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-[#444] leading-relaxed">
                    U cijenu su uključene 24 sata praktične edukacije, PDF priručnik (99 stranica), anatomske ilustracije (190 stranica), 3-mjesečno mentorstvo, te doživotni pristup svim materijalima.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border border-[#EADFC9] rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-medium text-[#222]">
                      📅 Što ako ne mogu doći jedan dan?
                    </span>
                  </div>
                  
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-[#444] leading-relaxed">
                    Nema brige – dobit ćeš pristup svim materijalima i snimljenim sadržajima, tako da ništa ne propuštaš. Možeš učiti svojim tempom i vratiti se na gradivo kad ti najviše odgovara.
                  </p>
                </AccordionContent>
              </AccordionItem>
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
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#c19b2a] text-[#111111] px-8 py-4 text-lg font-bold rounded-xl shadow-lg transition-all duration-300">
                  Pošalji upit
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Dark Mode Section - Other Courses */}
      

      {/* New Footer */}
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
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="text-center">
            {/* Copyright */}
            <p className="text-white/70 text-sm mb-6">
              © 2025 Supra Studium. Sva prava pridržana.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-6">
              <a href="https://www.facebook.com/profile.php?id=100078666409012" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#C8A24A] border border-white/20 hover:border-[#C8A24A] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              
              <a href="https://www.instagram.com/suprastudium/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#C8A24A] border border-white/20 hover:border-[#C8A24A] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.291l-.02-.02-.349-.406-.015-.018c-.593-.784-.944-1.764-.944-2.819 0-2.561 2.067-4.628 4.628-4.628s4.628 2.067 4.628 4.628c0 2.561-2.067 4.628-4.628 4.628l.028-.074z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
              
              <a href="https://www.youtube.com/@anteantic7905" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#C8A24A] border border-white/20 hover:border-[#C8A24A] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#C8A24A] border border-white/20 hover:border-[#C8A24A] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setVideoModalOpen(false)}>
            <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.8,
          opacity: 0
        }} className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white" onClick={() => setVideoModalOpen(false)}>
                <X className="w-6 h-6" />
              </Button>
              
              <iframe src="https://www.youtube.com/embed/KV_BrRMPHi4?autoplay=1" className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen />
            </motion.div>
          </motion.div>}
      </AnimatePresence>

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
export default AkupresuraPage;