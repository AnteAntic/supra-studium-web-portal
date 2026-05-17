import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Play, Calendar, Euro, MapPin, Clock, Users, Star, HeartHandshake, Sparkles, ChevronUp, BookOpen, ArrowRight } from "lucide-react";
import { CourseFooter } from '@/components/CourseFooter';
import { useToast } from "@/hooks/use-toast";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import HeroTitle from '@/components/ui/HeroTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import TextShimmer from '@/components/ui/TextShimmer';
import { CourseHighlights } from '@/components/ui/CourseHighlights';
import AutoCarousel from '@/components/ui/AutoCarousel';
import { CourseStickyBar } from '@/components/ui/CourseStickyBar';
const LomiLomiPage: React.FC = () => {
  const {
    toast
  } = useToast();
  const [blackOverlay, setBlackOverlay] = useState(0);
  useEffect(() => {
    // SEO
    document.title = "Lomi Lomi edukacija – certificirani tečaj | Supra Studium";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = "Hramski Lomi Lomi ritual + Huna principi + ciljana terapija. 2× vikend modula. Certifikat i upis u e-radnu knjižicu. Zagreb • Rijeka • Split.";
      document.head.appendChild(m);
    } else {
      metaDesc.setAttribute("content", "Hramski Lomi Lomi ritual + Huna principi + ciljana terapija. 2× vikend modula. Certifikat i upis u e-radnu knjižnicu. Zagreb • Rijeka • Split.");
    }
    const linkRel = document.querySelector('link[rel="canonical"]');
    if (!linkRel) {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      l.setAttribute("href", window.location.origin + "/lomi-lomi");
      document.head.appendChild(l);
    }

    // JSON-LD Course schema
    const scriptId = "ld-course-lomi";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.type = "application/ld+json";
      s.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Lomi Lomi edukacija",
        description: "Certificirana edukacija Lomi Lomi – hramski stil, Huna principi i terapijske tehnike. 2× vikend modula s certifikatom.",
        provider: {
          "@type": "Organization",
          name: "Učilište Supra Studium",
          url: window.location.origin
        }
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

  // Countdown to next session (updates every minute)
  const [countdown, setCountdown] = useState<string>("");
  useEffect(() => {
    const target = new Date("2026-02-14T10:00:00+01:00").getTime();
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor(diff / (1000 * 60 * 60) % 24);
      const m = Math.floor(diff / (1000 * 60) % 60);
      setCountdown(`${d}d ${h}h ${m}m`);
    };
    tick();
    const id = setInterval(tick, 1000 * 60);
    return () => clearInterval(id);
  }, []);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    toast({
      title: "Hvala na prijavi!",
      description: "Uskoro ćemo vam poslati potvrdu i dodatne informacije."
    });
    (e.currentTarget as HTMLFormElement).reset();
  };
  return <>
    {/* Sticky Course Bar */}
    <CourseStickyBar locations={[{
      city: "Zagreb Modul 1",
      dates: "18. - 19.04.2026."
    }]} price="" ctaText="Rezerviraj svoje mjesto" ctaHref="https://tally.so/r/wA5kvD" theme="light" />
    
    <div
    // Page-scoped design tokens (HSL)
    style={{
      // brand gold #B68929 -> hsl(41 63% 44%)
      ["--supra-golden" as any]: "41 63% 44%",
      ["--supra-golden-300" as any]: "45 97% 77%",
      ["--supra-golden-700" as any]: "38 66% 35%",
      // text colors
      ["--brand-text" as any]: "215 28% 17%",
      // stone-900
      ["--brand-muted" as any]: "215 14% 34%",
      // stone-700 approx
      ["--brand-surface" as any]: "0 0% 100%",
      ["--brand-amber-50" as any]: "36 100% 97%",
      ["--brand-amber-300" as any]: "45 97% 77%",
      ["--overlay-dark" as any]: "220 8% 10%",
      ["--on-dark" as any]: "0 0% 100%",
      ["--glass-bg" as any]: "0 0% 100% / 0.08",
      ["--glass-border" as any]: "0 0% 100% / 0.25",
      // rounded token override 20px
      ["--radius" as any]: "1.25rem"
    }} className="min-h-screen bg-background text-foreground font-inter">
      {/* Hero Section */}
      <section className="relative min-h-[78vh] md:min-h-[90vh] flex items-center overflow-hidden -mt-20">
        {/* Black overlay that fades in on scroll */}
        <div className="absolute inset-0 bg-black z-[3] pointer-events-none transition-opacity duration-300" style={{
          opacity: blackOverlay
        }} />
        
        <div className="absolute inset-0 bg-cover bg-center md:bg-fixed" style={{
          backgroundImage: `linear-gradient(to bottom, hsl(var(--overlay-dark) / 0.55), hsl(var(--overlay-dark) / 0.9)), url(/lovable-uploads/lomi-lomi-hero-sharp.jpeg)`
        }} aria-hidden />
        {/* golden glow accents */}
        <div className="pointer-events-none absolute -top-28 -right-28 w-[460px] h-[460px] rounded-full blur-3xl" style={{
          background: "radial-gradient(circle, hsl(var(--supra-golden) / 0.35), transparent 60%)"
        }} />
        <div className="pointer-events-none absolute -bottom-28 -left-28 w-[520px] h-[520px] rounded-full blur-3xl" style={{
          background: "radial-gradient(circle, hsl(var(--supra-golden-300) / 0.25), transparent 60%)"
        }} />

        <div className="container pt-24 relative z-10 flex justify-center">
          <div className="max-w-5xl flex flex-col items-center">

            {/* Top badge — location, date, type */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mb-6">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-white/85 text-xs sm:text-sm tracking-[0.14em] uppercase font-semibold" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>
                ZAGREB&nbsp;•&nbsp;18.–19.04.2026.&nbsp;•&nbsp;CERTIFICIRANI DVODNEVNI MODUL
              </span>
            </motion.div>

            {/* Title block */}
            <motion.div initial="hidden" animate="visible" variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.035 } }
            }} className="mb-6 md:mb-7">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[-0.01em] leading-[0.9] text-center relative z-[4] px-4">
                {/* Small subtitle above shimmer */}
                <span className="block font-playfair font-normal text-white/75 drop-shadow-md text-base sm:text-lg md:text-xl lg:text-2xl mb-3 tracking-[0.08em] uppercase" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}>
                  Ancient Wave metoda&nbsp;•&nbsp;Hramovski stil
                </span>
                {/* Main shimmer headline */}
                <TextShimmer className="font-playfair font-bold text-white drop-shadow-xl tracking-wide relative z-[4] [--base-gradient-color:#ffd700] [--base-color:#ffffff] [text-shadow:0_6px_12px_rgba(0,0,0,0.6),0_3px_6px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.3)]" duration={2.5} spread={3}>
                  LOMI LOMI CERTIFIKACIJA
                </TextShimmer>
              </div>
            </motion.div>

            {/* Subheadline */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="mb-7">
              <p className="text-[clamp(16px,2vw,20px)] leading-relaxed tracking-wide font-medium text-white/85 text-center max-w-2xl" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>
                U 2 dana usvajaš Zlatnu formulu, Huna principe i terapijske tehnike koje klijenti osjete odmah.
              </p>
            </motion.div>

            {/* Micro-benefits */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7 }} className="mb-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-7">
              {[
                "Certifikat (upis u e-radnu knjižicu)",
                "3× svjetski nagrađivana tehnika",
                "120 € uštede pri upisu oba modula",
              ].map((benefit) => (
                <span key={benefit} className="flex items-center gap-2 text-white/80 text-sm font-medium" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.7)' }}>
                  <CheckCircle className="h-4 w-4 text-[#d4af37] flex-shrink-0" />
                  {benefit}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.8 }} className="flex flex-col items-center gap-3">
              {/* Capacity badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/70 text-xs tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] inline-block" />
                Ograničeno na 16 polaznika
              </span>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary CTA */}
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }} className="group relative overflow-hidden w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B9975B] to-[#9d7f47] rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-xl" />
                <Button size="lg" className="relative z-10 bg-[#B9975B] text-white hover:bg-[#9d7f47] px-8 py-3 font-bold rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#B9975B]/40 border-2 border-transparent w-full sm:w-auto flex items-center justify-center gap-3 text-base" asChild>
                  <a href="https://tally.so/r/wA5kvD" target="_blank" rel="noopener noreferrer">
                    <ArrowRight className="h-5 w-5" />
                    <span className="transition-all duration-200 group-hover:tracking-wide">Rezerviraj svoje mjesto</span>
                  </a>
                </Button>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="group w-full sm:w-auto">
                <Button variant="ghost" size="lg" className="relative z-10 px-6 py-3 font-medium rounded-xl border border-white/30 bg-white/10 text-white/90 hover:bg-white/20 hover:text-white transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 text-sm backdrop-blur-sm" onClick={() => {
                  document.querySelector('#program')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Pogledaj program ↓
                </Button>
              </motion.div>
              </div>
              <p className="text-xs text-white/45">Bez obveze — potvrda dolazi e-mailom.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emotional + Rational Bridge — Dark Section */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "hsl(var(--overlay-dark))" }}>
        {/* subtle golden grid texture */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `repeating-linear-gradient(135deg, hsl(var(--supra-golden) / 0.05) 0px, hsl(var(--supra-golden) / 0.05) 1px, transparent 1px, transparent 28px)`
        }} aria-hidden />
        {/* golden glow bottom-left */}
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full blur-3xl" style={{
          background: "radial-gradient(circle, hsl(var(--supra-golden) / 0.12), transparent 65%)"
        }} />

        <div className="container relative z-10 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start max-w-6xl mx-auto">

            {/* LEFT — Emotional Hook */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-playfair text-[clamp(2rem,4vw,2.75rem)] font-bold leading-tight mb-10 text-white">
                Osjećaš li da…
              </h2>

              <ul className="space-y-6 mb-12">
                {[
                  "Tvoji tretmani nemaju dubinu koju želiš",
                  "Brzo se iscrpiš tijekom rada",
                  "Klijenti osjete olakšanje, ali ne i transformaciju",
                  "Znaš tehniku, ali nedostaje povezanost",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-[10px] flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--supra-golden))" }} />
                    <span className="text-[clamp(1rem,1.8vw,1.1rem)] leading-relaxed text-white/75">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Golden divider */}
              <div className="w-10 h-px mb-10" style={{ background: "hsl(var(--supra-golden))" }} />

              {/* Strong sentence */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="font-playfair text-[clamp(1.2rem,2.2vw,1.5rem)] font-bold leading-snug mb-5 text-white"
              >
                Problem nije u tebi — već u pristupu.
              </motion.p>

              {/* Transition text */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-[clamp(0.95rem,1.6vw,1.05rem)] leading-relaxed text-white/60"
              >
                Lomi Lomi je struktura, ritam i prisutnost u pokretu.
              </motion.p>
            </motion.div>

            {/* RIGHT — Value Cards */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {[
                { icon: "📈", title: "Praktični rezultati", subtitle: "Polaznici osjete napredak već nakon prvog vikenda." },
                { icon: "🧩", title: "Metodološki pristup", subtitle: "Strukturirani rast kroz vikend module." },
                { icon: "🌍", title: "Dostupnost", subtitle: "Zagreb • Rijeka • Split" },
                { icon: "📚", title: "Kontinuirana podrška", subtitle: "Video materijali i mentorska podrška." },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="rounded-2xl p-6 border flex flex-col gap-3"
                  style={{
                    background: "hsl(var(--glass-bg))",
                    borderColor: "hsl(var(--glass-border))",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span className="text-2xl">{card.icon}</span>
                  <p className="font-playfair font-semibold text-white text-[1rem] leading-snug">{card.title}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{card.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 relative overflow-hidden">
        {/* decorative waves */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `repeating-linear-gradient(135deg, hsl(var(--supra-golden) / 0.06) 0px, hsl(var(--supra-golden) / 0.06) 1px, transparent 1px, transparent 22px)`
        }} aria-hidden />
        <div className="container relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-bold leading-tight mb-6 text-left" style={{
              color: "hsl(var(--brand-text))",
              fontFamily: 'Playfair Display, serif'
            }}>
              Što ćeš <span style={{ color: '#B9975B' }}>naučiti</span>
            </h2>
            <p className="text-[clamp(1rem,2vw,1.125rem)] leading-relaxed max-w-[700px]" style={{
              color: "hsl(var(--brand-muted))"
            }}>
              Ne samo tehnike — nego način rada koji mijenja iskustvo klijenta.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[{
              t: "Zlatna formula tretmana",
              d: "Cjeloviti slijed koji vodi klijenta od opuštanja do duboke transformacije.",
              icon: Sparkles
            }, {
              t: "Huna principi",
              d: "Rad s dahom, namjerom i prisutnošću — temelj sigurnog i snažnog tretmana.",
              icon: HeartHandshake
            }, {
              t: "Terapijske tehnike",
              d: "Konkretna rješenja za vrat, donja leđa, koljeno i Ahilovu tetivu.",
              icon: CheckCircle
            }, {
              t: "Dah i ritam",
              d: "Kako raditi bez iscrpljivanja — uz energiju koja traje.",
              icon: Clock
            }, {
              t: "Dijagnostika",
              d: "Prepoznati uzrok, ne samo simptom.",
              icon: MapPin
            }, {
              t: "Video + mentorstvo",
              d: "Podrška i nakon edukacije — da znanje postane rutina.",
              icon: Users
            }].map(({ t, d, icon: Icon }, idx) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Card className="hover:shadow-xl transition-all border bg-card/60 backdrop-blur h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{
                        background: "hsl(var(--brand-amber-50))",
                        border: `1px solid hsl(var(--brand-amber-300))`
                      }}>
                        <Icon className="w-5 h-5" style={{ color: "hsl(var(--supra-golden))" }} />
                      </div>
                      {idx === 0 && <img src="/lovable-uploads/ae55703b-92a4-4efc-986d-bc9bd3bee836.png" alt="Detalj rada Lomi Lomi" className="w-10 h-10 rounded-md object-cover" loading="lazy" />}
                    </div>
                    <h3 className="text-[clamp(1.125rem,2.5vw,1.375rem)] font-semibold mb-2 leading-tight" style={{
                      color: "hsl(var(--brand-text))"
                    }}>{t}</h3>
                    <p className="text-[clamp(0.875rem,1.75vw,1rem)] leading-relaxed text-muted-foreground">{d}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Micro CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-5 text-center"
          >
            <p className="text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed" style={{ color: "hsl(var(--brand-muted))" }}>
              Spreman/na si podići svoju praksu na novu razinu?
            </p>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }} className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B9975B] to-[#9d7f47] rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-xl" />
              <Button size="lg" className="relative z-10 bg-[#B9975B] text-white hover:bg-[#9d7f47] px-8 py-3 font-bold rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#B9975B]/40 border-2 border-transparent flex items-center gap-3 text-base" asChild>
                <a href="https://tally.so/r/wA5kvD" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="h-5 w-5" />
                  <span className="transition-all duration-200 group-hover:tracking-wide">Rezerviraj svoje mjesto</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Program + Pricing */}
      <section id="program" className="py-20 bg-muted/40">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-bold leading-tight mb-6 text-left" style={{
              color: "hsl(var(--brand-text))",
              fontFamily: 'Playfair Display, serif'
            }}>
              Program po <span style={{ color: '#B9975B' }}>modulima</span>
            </h2>
          </motion.div>

          <Tabs defaultValue="i" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="i">Modul I</TabsTrigger>
              <TabsTrigger value="ii">Modul II</TabsTrigger>
              <TabsTrigger value="cert">Certifikat & praksa</TabsTrigger>
            </TabsList>

            {/* MODUL I */}
            <TabsContent value="i">
              <Card>
                <CardContent className="p-0">
                  {/* Progression indicator */}
                  <div className="px-6 pt-5 pb-0">
                    <span className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: "hsl(var(--supra-golden))" }}>
                      Korak 1 – Temelj
                    </span>
                  </div>
                  <img src="/lovable-uploads/e9dcf90d-f48d-406f-aa32-ebb744991d83.png" alt="Modul I – fokus Awudi" className="w-full h-36 object-cover mt-4" loading="lazy" />
                  <div className="p-6 space-y-6">
                    <p className="text-[clamp(0.95rem,1.8vw,1.05rem)] leading-relaxed" style={{ color: "hsl(var(--brand-muted))" }}>
                      Temelj hramskog Lomi Lomi pristupa. Ovdje gradiš strukturu, ritam i prisutnost.
                    </p>
                    <div className="space-y-5">
                      {[
                        { title: "Filozofija i porijeklo", desc: "Razumijevanje hramske tradicije i konteksta rada." },
                        { title: "Huna principi", desc: "Rad s dahom i namjerom kao temelj tretmana." },
                        { title: "Zlatna formula", desc: "Kompletan slijed koji stvara siguran i snažan tretman." },
                      ].map((item) => (
                        <div key={item.title} className="flex gap-4 items-start">
                          <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--supra-golden))" }} />
                          <div>
                            <p className="font-semibold text-[0.95rem] mb-0.5" style={{ color: "hsl(var(--brand-text))" }}>{item.title}</p>
                            <p className="text-[0.9rem] leading-relaxed text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* MODUL II */}
            <TabsContent value="ii">
              <Card>
                <CardContent className="p-0">
                  <div className="px-6 pt-5 pb-0">
                    <span className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: "hsl(var(--supra-golden))" }}>
                      Korak 2 – Integracija
                    </span>
                  </div>
                  <img src="/lovable-uploads/e9dcf90d-f48d-406f-aa32-ebb744991d83.png" alt="Modul II – fokus Awudi" className="w-full h-36 object-cover mt-4" loading="lazy" />
                  <div className="p-6 space-y-6">
                    <p className="text-[clamp(0.95rem,1.8vw,1.05rem)] leading-relaxed" style={{ color: "hsl(var(--brand-muted))" }}>
                      Integracija i terapijska primjena. Ovdje tehnika postaje alat.
                    </p>
                    <div className="space-y-5">
                      {[
                        { title: "Terapijske primjene", desc: "Rad na vratu, donjim leđima, koljenu i Ahilovoj tetivi." },
                        { title: "Dijagnostika", desc: "Prepoznati uzrok, ne samo simptom." },
                        { title: "Energetska ekonomija", desc: "Rad bez iscrpljivanja – dugoročna održivost terapeuta." },
                      ].map((item) => (
                        <div key={item.title} className="flex gap-4 items-start">
                          <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--supra-golden))" }} />
                          <div>
                            <p className="font-semibold text-[0.95rem] mb-0.5" style={{ color: "hsl(var(--brand-text))" }}>{item.title}</p>
                            <p className="text-[0.9rem] leading-relaxed text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* CERTIFIKAT & PRAKSA */}
            <TabsContent value="cert">
              <Card>
                <CardContent className="p-0">
                  <div className="px-6 pt-5 pb-0">
                    <span className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: "hsl(var(--supra-golden))" }}>
                      Korak 3 – Profesionalna potvrda
                    </span>
                  </div>
                  <img
                    src="/lovable-uploads/lomi-lomi-certifikat-grupa.jpeg"
                    alt="Polaznici s diplomama"
                    className="w-full h-36 object-cover object-center mt-4"
                    loading="lazy"
                  />
                  <div className="p-6 space-y-6">
                    <p className="text-[clamp(0.95rem,1.8vw,1.05rem)] leading-relaxed" style={{ color: "hsl(var(--brand-muted))" }}>
                      Profesionalna potvrda i daljnji rast.
                    </p>
                    <div className="space-y-5">
                      {[
                        { title: "Certifikat Učilišta Supra Studium", desc: "Službena potvrda edukacije." },
                        { title: "Upis u e-radnu knjižicu", desc: "Dodatno obrazovanje evidentirano." },
                        { title: "Mentorska podrška", desc: "Materijali i podrška nakon edukacije." },
                      ].map((item) => (
                        <div key={item.title} className="flex gap-4 items-start">
                          <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--supra-golden))" }} />
                          <div>
                            <p className="font-semibold text-[0.95rem] mb-0.5" style={{ color: "hsl(var(--brand-text))" }}>{item.title}</p>
                            <p className="text-[0.9rem] leading-relaxed text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA block under modules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-5 text-center mt-12 mb-2"
          >
            <p className="text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed" style={{ color: "hsl(var(--brand-muted))" }}>
              Spreman/na si proći cijeli put?
            </p>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }} className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B9975B] to-[#9d7f47] rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-xl" />
              <Button size="lg" className="relative z-10 bg-[#B9975B] text-white hover:bg-[#9d7f47] px-8 py-3 font-bold rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#B9975B]/40 border-2 border-transparent flex items-center gap-3 text-base" asChild>
                <a href="https://tally.so/r/wA5kvD" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="h-5 w-5" />
                  <span className="transition-all duration-200 group-hover:tracking-wide">Rezerviraj svoje mjesto</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-10"
          >
            {/* Small heading */}
            <p className="text-xs font-semibold tracking-[0.14em] uppercase mb-6" style={{ color: "hsl(var(--supra-golden))" }}>
              Investicija u tvoju praksu
            </p>

            <Card className="border" style={{ borderColor: "hsl(var(--brand-amber-300))" }}>
              <CardContent className="p-6 md:p-8">

                {/* Price options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {/* Option 1 */}
                  <div className="rounded-xl border p-5 flex flex-col gap-1" style={{ borderColor: "hsl(var(--brand-amber-300) / 0.4)" }}>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">Opcija 1</p>
                    <p className="font-playfair font-semibold text-[1rem]" style={{ color: "hsl(var(--brand-text))" }}>Jedan modul</p>
                    <p className="text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold leading-none mt-1" style={{ color: "hsl(var(--supra-golden))" }}>450 €</p>
                    <p className="text-xs text-muted-foreground mt-0.5">po modulu</p>
                  </div>

                  {/* Option 2 — highlighted */}
                  <div className="rounded-xl border-2 p-5 flex flex-col gap-1 relative" style={{ borderColor: "hsl(var(--supra-golden))", background: "hsl(var(--brand-amber-50))" }}>
                    <span className="absolute -top-3 left-4 text-[0.7rem] font-bold tracking-widest uppercase px-3 py-0.5 rounded-full text-white" style={{ background: "hsl(var(--supra-golden))" }}>
                      Preporučeno
                    </span>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">Opcija 2</p>
                    <p className="font-playfair font-semibold text-[1rem]" style={{ color: "hsl(var(--brand-text))" }}>Oba modula unaprijed</p>
                    <p className="text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold leading-none mt-1" style={{ color: "hsl(var(--supra-golden))" }}>780 €</p>
                    <p className="text-sm font-medium mt-0.5" style={{ color: "hsl(var(--supra-golden-700))" }}>Ušteda 120 €</p>
                  </div>
                </div>

                {/* Capacity + highlight */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-7 px-1">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "hsl(var(--supra-golden))" }} />
                    Ograničeno na 16 polaznika
                  </span>
                  <span className="text-xs font-medium" style={{ color: "hsl(var(--supra-golden))" }}>
                    Najčešći odabir: oba modula uz 120 € popusta
                  </span>
                </div>

                {/* Value list */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {[
                    "Certifikat Učilišta Supra Studium",
                    "Upis u e-radnu knjižicu",
                    "Mentorska podrška",
                    "Materijali uključeni",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "hsl(var(--brand-muted))" }}>
                      <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: "hsl(var(--supra-golden))" }} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }} className="group relative overflow-hidden flex-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B9975B] to-[#9d7f47] rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-xl" />
                    <Button size="lg" className="relative z-10 w-full bg-[#B9975B] text-white hover:bg-[#9d7f47] font-bold rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#B9975B]/40 border-2 border-transparent flex items-center justify-center gap-3 text-base" asChild>
                      <a href="https://tally.so/r/wA5kvD" target="_blank" rel="noopener noreferrer">
                        <ArrowRight className="h-5 w-5" />
                        <span className="transition-all duration-200 group-hover:tracking-wide">Rezerviraj svoje mjesto</span>
                      </a>
                    </Button>
                  </motion.div>
                  <Button size="lg" variant="outline" className="flex-1 bg-white border-2 border-[#B9975B] text-[#B9975B] hover:bg-[#B9975B] hover:text-white font-semibold transition-all duration-300 rounded-xl px-6" asChild>
                    <a href="https://www.dropbox.com/scl/fi/fr3sy53fc0mk6ckvb9t2z/Lomi-Lomi.pdf?rlkey=0d139k2jwc74az93v8eseicis&st=aq15lh63&dl=0" target="_blank" rel="noopener noreferrer">
                      Preuzmi brošuru (PDF)
                    </a>
                  </Button>
                </div>

              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🌺</span>
                <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-bold leading-tight" style={{
                  color: "hsl(var(--brand-text))",
                  fontFamily: 'Playfair Display, serif'
                }}>
                  O <span style={{ color: '#B9975B' }}>voditelju</span>
                </h2>
              </div>

              {/* Intro paragraph */}
              <p className="text-[clamp(1rem,2vw,1.125rem)] leading-relaxed mb-8" style={{ color: "hsl(var(--brand-muted))" }}>
                Dr. Awudi Atitsogbui predsjednik je World Federation of Massage, Manual Therapy & Nuad Thai te međunarodno priznati učitelj s više od dva desetljeća iskustva u edukaciji terapeuta diljem svijeta.
              </p>

              {/* 3 authority blocks */}
              <div className="space-y-5 mb-8">
                {[
                  {
                    title: "Globalni lider",
                    desc: "Predsjednik svjetske federacije i ko-osnivač Croatian International Massage Championship."
                  },
                  {
                    title: "Akademska podloga",
                    desc: "Doktor Ayurvede i Panchakarme, autor knjige \"Ayurveda & Panchakarma: Complete Theory and Manual Guide\" te registrirani član Ayurveda Federation of India."
                  },
                  {
                    title: "Svjetski prvak",
                    desc: "Sedmerostruki zlatni medalist i ukupni svjetski prvak u međunarodnim natjecanjima masaže i manualne terapije."
                  },
                ].map((block, i) => (
                  <motion.div
                    key={block.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--supra-golden))" }} />
                    <div>
                      <p className="font-semibold text-[0.95rem] mb-0.5" style={{ color: "hsl(var(--brand-text))" }}>{block.title}</p>
                      <p className="text-[0.9rem] leading-relaxed text-muted-foreground">{block.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Integration paragraph */}
              <p className="text-[clamp(0.95rem,1.8vw,1.05rem)] leading-relaxed mb-6" style={{ color: "hsl(var(--brand-muted))" }}>
                Njegov rad spaja havajski izvorni stil, Ayurvedsku dijagnostiku i suvremene terapijske metode — stvarajući edukaciju koja nadilazi klasičnu masažu.
              </p>

              {/* Closing line */}
              <Card className="border-l-4 bg-muted/30 mb-7" style={{ borderLeftColor: "hsl(var(--supra-golden))" }}>
                <CardContent className="p-5">
                  <p className="text-[clamp(1rem,2vw,1.1rem)] italic leading-relaxed font-medium" style={{ color: "hsl(var(--brand-text))" }}>
                    "Učiš izravno od učitelja koji oblikuje standarde struke."
                  </p>
                </CardContent>
              </Card>

              {/* Credibility row */}
              <p className="text-[0.78rem] tracking-[0.08em] text-muted-foreground">
                820+ educiranih terapeuta&nbsp;•&nbsp;Međunarodne certifikacije&nbsp;•&nbsp;Autor knjige&nbsp;•&nbsp;Predsjednik svjetske federacije
              </p>
            </motion.div>

            {/* Right: Images */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="order-1 md:order-2 relative"
            >
              <img src="/lovable-uploads/35deda14-a395-446a-ac28-5f3b1f62b3ef.png" alt="Voditelj Awudi nasmiješen tijekom rada" className="w-full h-auto rounded-lg shadow-xl" />
              <img src="/lovable-uploads/ff8e8a4b-ad45-4ad9-bf5e-93fafbf189ff.png" alt="Awudi u radu s polaznikom" className="hidden sm:block w-40 h-40 object-cover rounded-lg shadow-xl absolute -bottom-6 -left-6 border-4" style={{
                borderColor: "hsl(var(--brand-surface))"
              }} />
              <div className="absolute bottom-4 right-6 text-2xl italic" style={{ color: "hsl(var(--supra-golden))" }}>
                Awudi
              </div>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <div className="mb-4">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-center mb-6" style={{ color: "hsl(var(--supra-golden))" }}>
              Međunarodno priznati standard
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { n: "20+", l: "godina iskustva" },
              { n: "820+", l: "polaznika" },
              { n: "7×", l: "zlatni medalist" },
            ].map(s => (
              <Card key={s.l} className="text-center hover:shadow-lg transition-shadow border" style={{ borderColor: "hsl(var(--brand-amber-300))" }}>
                <CardContent className="p-6">
                  <div className="text-[clamp(2rem,4vw,3rem)] font-bold mb-2" style={{ color: "hsl(var(--supra-golden))" }}>
                    {s.n}
                  </div>
                  <div className="text-[clamp(0.875rem,1.75vw,1rem)] leading-relaxed" style={{ color: "hsl(var(--brand-muted))" }}>
                    {s.l}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container grid md:grid-cols-3 gap-6">
          {["/lovable-uploads/ae55703b-92a4-4efc-986d-bc9bd3bee836.png", "/lovable-uploads/e9dcf90d-f48d-406f-aa32-ebb744991d83.png", "/lovable-uploads/ff8e8a4b-ad45-4ad9-bf5e-93fafbf189ff.png"].map((src, i) => <img key={i} src={src} alt="Prizor s edukacije Lomi Lomi" className="w-full h-64 object-cover rounded-lg shadow-lg" loading="lazy" />)}
        </div>
      </section>

      {/* Testimonials - Carousel */}
      <section className="py-20 bg-muted/40">
        <div className="container">
          <Carousel className="w-full">
            <CarouselContent>
              {[{
                src: "/lovable-uploads/1f55607a-581e-4803-b62e-212cc10e53c6.png",
                q: "Osjetila sam veliku promjenu, kao da su se tehnika i prisutnost odjednom uskladile.",
                a: "Maja K."
              }, {
                src: "/lovable-uploads/dc1c502c-5eb2-44b6-b41d-15c6242c444b.png",
                q: "Zlatna formula mi je promijenila način rada s klijentima.",
                a: "Ivan P."
              }, {
                src: "/lovable-uploads/729c5ed7-3afc-4dea-9265-2a1373a1bbbf.png",
                q: "Dah i ritam – radim više, a trošim manje energije.",
                a: "Sara T."
              }].map((item, i) => <CarouselItem key={i} className="basis-full">
                  <div className="relative w-full h-[360px] md:h-[420px] rounded-[var(--radius)] overflow-hidden">
                    <img src={item.src} alt="Lomi Lomi akcija" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Card className="bg-white/80 backdrop-blur border" style={{
                      borderColor: "hsl(var(--brand-amber-300))"
                    }}>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <Star className="w-5 h-5 shrink-0" style={{
                            color: "hsl(var(--supra-golden))"
                          }} />
                            <div>
                              <p className="italic mb-1">“{item.q}”</p>
                              <p className="text-sm text-muted-foreground">— {item.a}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-bold leading-tight mb-12 text-left" style={{
            color: "hsl(var(--brand-text))",
            fontFamily: 'Playfair Display, serif'
          }}>
            Česta <span style={{
              color: '#B9975B'
            }}>pitanja</span>
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>Kada i gdje se održava edukacija?</AccordionTrigger>
              <AccordionContent>
                Vikend format (sub 10–18h, ned 9–15h). Lokacije: Zagreb, Rijeka, Split. Prijavom dobivaš sve logističke detalje.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Na kojem je jeziku edukacija?</AccordionTrigger>
              <AccordionContent>
                Na engleskom, ali prevoditelj nije potreban – radi se praktično uz jasne demonstracije i govor tijela.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Dobivam li službeni certifikat?</AccordionTrigger>
              <AccordionContent>
                Da. Dobivaš uvjerenje Učilišta Supra Studium koje se može upisati u e-radnu knjižicu kao dodatno obrazovanje.
                <br /><br />
                Program je verificiran i međunarodno priznat od Svjetske federacije za masažu, manualnu terapiju i Nuad Thai, što znači da tvoje znanje ima potvrdu na europskoj i svjetskoj razini – prepoznato kod poslodavaca, organizacija i natjecanja.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>Koji su načini plaćanja?</AccordionTrigger>
              <AccordionContent>
                Uplata kotizacije na žiro račun Učilišta. Moguće rezervirati jedno po jedno ili oba modula s ukupnim popustom od 120 €.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>Moram li imati prethodno iskustvo?</AccordionTrigger>
              <AccordionContent>
                Nije obavezno, ali preporučamo osnovno poznavanje anatomije ili iskustvo u nekoj vrsti tjelesnog rada. Edukacija je strukturirana tako da terapeuti s različitim razinama iskustva mogu pratiti i odmah primjenjivati naučeno.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q6">
              <AccordionTrigger>Koliko je fizički zahtjevna edukacija?</AccordionTrigger>
              <AccordionContent>
                Lomi Lomi uči te raditi s cijelim tijelom i duhom — ne samo rukama. Jedan od ključnih dijelova edukacije je upravo energetska ekonomija: kako raditi bez iscrpljivanja. Polaznici nakon vikenda izvještavaju da se osjećaju energičnije, ne iscrpljeno.
              </AccordionContent>
            </AccordionItem>
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
          <p className="text-lg mb-6" style={{
            color: "hsl(var(--brand-text))"
          }}>
            💡 Još pitanja? Kontaktiraj nas – rado ćemo ti pomoći.
          </p>
          <a href="#kontakt" className="inline-block">
            <motion.div whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(185,151,91,0.5)"
            }} whileTap={{
              scale: 0.95
            }} transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }} className="inline-block">
              <Button size="lg" className="bg-supra-golden hover:bg-supra-golden/90 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg transition-all duration-300">
                Pošalji upit
              </Button>
            </motion.div>
          </a>
        </motion.div>
      </section>

      {/* Registration */}
      <section id="prijava" className="py-20 bg-muted/40">
        <div className="container max-w-3xl">
          <Card>
            <CardContent className="p-8">
              <div className="mb-6">
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--brand-muted))" }}>
                  Radimo u malim grupama kako bi svaki polaznik dobio individualnu pažnju. Nakon popunjenja kapaciteta prijave se zatvaraju.
                </p>
              </div>
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ime i prezime</label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border bg-white" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon</label>
                    <input className="w-full px-4 py-3 rounded-lg border bg-white" />
                  </div>
                  <div>
                    <input className="w-full px-4 py-3 rounded-lg border bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Modul</label>
                  <select className="w-full px-4 py-3 rounded-lg border bg-white">
                    <option>Modul I</option>
                    <option>Modul II</option>
                    <option>Oba modula</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Napomena</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border bg-white" />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <Button type="submit" className="bg-[#B9975B] hover:bg-[#9d7f47] text-white font-semibold rounded-xl transition-all duration-300">
                    Rezerviraj svoje mjesto
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">Bez obveze — potvrda dolazi e-mailom.</p>
                  <p className="text-center text-xs text-muted-foreground mt-1">🔒 Tvoji podaci su sigurni i koristimo ih isključivo za organizaciju edukacije.</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center md:bg-fixed" style={{
          backgroundImage: "linear-gradient(hsl(var(--overlay-dark) / 0.75), hsl(var(--overlay-dark) / 0.9)), url(/lovable-uploads/869511d2-0596-4bc9-8a5b-8beae598be59.png)"
        }} aria-hidden />
        <div className="container relative z-10 text-center">
          <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-bold leading-tight mb-6" style={{
            color: "hsl(var(--on-dark))",
            fontFamily: 'Playfair Display, serif'
          }}>
            Spreman/na za svoj sljedeći <span style={{
              color: '#B9975B'
            }}>iskorak?</span>
          </h2>
          <p className="text-[clamp(1rem,2vw,1.125rem)] leading-relaxed max-w-[700px] mx-auto mb-8" style={{
            color: "hsl(var(--on-dark) / 0.85)"
          }}>
            Pridruži se Lomi Lomi zajednici terapeuta i donesi klijentima mir, olakšanje i novu razinu povjerenja.
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 bg-[#B9975B] hover:bg-[#9d7f47] text-white font-bold rounded-xl transition-all duration-300" asChild>
                <a href="https://tally.so/r/wA5kvD" target="_blank" rel="noopener noreferrer">Rezerviraj svoje mjesto</a>
              </Button>
              <Button size="lg" className="bg-white text-[#111] border-2 border-white hover:bg-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 font-semibold" asChild>
                <a href="#program">Pogledaj program</a>
              </Button>
            </div>
            <p className="text-xs text-white/50 mt-1">Bez obveze — potvrda dolazi e-mailom.</p>
          </div>
        </div>
      </section>


      {/* Back to top */}
      <button onClick={() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })} aria-label="Povratak na vrh" className="fixed bottom-5 right-5 rounded-full p-3 shadow-lg border" style={{
        background: "hsl(var(--brand-amber-50))",
        borderColor: "hsl(var(--brand-amber-300))",
        color: "hsl(var(--brand-text))"
      }}>
        <ChevronUp className="w-5 h-5" />
      </button>

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
                <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-bold leading-tight" style={{
                  color: '#B9975B',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  👉 Vaš terapijski put se tu ne <span style={{
                    color: '#D4AF37'
                  }}>zaustavlja</span>
                </h2>
              </div>
              <p className="text-[clamp(1rem,2vw,1.125rem)] leading-relaxed text-white/80 max-w-[700px] mx-auto">
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

      <CourseFooter />
    </div>
  </>;
};
export default LomiLomiPage;