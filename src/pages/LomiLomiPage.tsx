import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Play, Calendar, Euro, MapPin, Clock, Users, Star, HeartHandshake, Sparkles, ChevronUp, BookOpen, ArrowRight } from "lucide-react";
import { ContactFooter } from "@/components/ContactFooter";
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
    }]} price="" ctaText="Prijavi se" ctaHref="https://tally.so/r/wA5kvD" theme="light" />
    
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
        
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `linear-gradient(to bottom, hsl(var(--overlay-dark) / 0.55), hsl(var(--overlay-dark) / 0.9)), url(/lovable-uploads/lomi-lomi-hero-sharp.jpeg)`,
          backgroundAttachment: "fixed"
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
            <Badge className="mb-6 bg-[hsl(var(--brand-amber-50))] text-[hsl(var(--brand-text))] border" style={{
              borderColor: "hsl(var(--brand-amber-300))"
            }}>
              NOVO IZDANJE 2025.
            </Badge>
            <motion.div initial="hidden" animate="visible" variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.035
                }
              }
            }} className="mb-8 md:mb-10">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[-0.01em] leading-[0.9] text-center relative z-[4] px-4">
                <span className="block font-playfair font-normal text-white/90 drop-shadow-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 tracking-wide" style={{
                  textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  Tečaj
                </span>
                <TextShimmer className="font-playfair font-bold text-white drop-shadow-xl tracking-wide text-shadow-lg relative z-[4] [--base-gradient-color:#ffd700] [--base-color:#ffffff] [text-shadow:0_6px_12px_rgba(0,0,0,0.6),0_3px_6px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.3)]" duration={2.5} spread={3}>
                  LOMI LOMI
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
                Havajska umjetnost dodira – spoj tehnike, ritma i prisutnosti
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
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto border border-white/20">
                <p className="text-[clamp(16px,1.8vw,18px)] leading-relaxed text-white/90 text-center" style={{
                  fontFamily: 'Inter, sans-serif',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                }}>
                  Otkrij snagu izvorne Lomi Lomi masaže: učiš hramski stil, Huna principe i Zlatnu formulu tretmana koja je osvajala svjetska prvenstva. Kroz praktične module naučit ćeš povezati tijelo, um i duh, razviti dublju prisutnost i donijeti transformativne rezultate koje tvoji klijenti osjećaju odmah.
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
            }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{
                scale: 1.05,
                y: -3
              }} whileTap={{
                scale: 0.98
              }} className="group relative overflow-hidden w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B9975B] to-[#9d7f47] rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-xl" />
                <Button size="lg" className="relative z-10 bg-[#B9975B] text-white hover:bg-[#9d7f47] px-6 py-3 font-bold rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#B9975B]/40 border-2 border-transparent w-full sm:w-auto flex items-center justify-center gap-3 text-base" asChild>
                  <a href="https://tally.so/r/wA5kvD" target="_blank" rel="noopener noreferrer">
                    <ArrowRight className="h-5 w-5" />
                    <span className="transition-all duration-200 group-hover:tracking-wide">Rezerviraj mjesto</span>
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{
                scale: 1.05,
                y: -3
              }} whileTap={{
                scale: 0.96
              }} className="group relative overflow-hidden w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B9975B]/20 to-white/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg" />
                <Button variant="outline" size="lg" className="relative z-10 px-6 py-3 font-bold rounded-xl border-2 border-[#B9975B] bg-white/90 text-[#B9975B] hover:bg-white hover:text-[#9d7f47] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#B9975B]/30 w-full sm:w-auto flex items-center justify-center gap-3 text-base backdrop-blur-sm" asChild>
                  <a href="https://youtu.be/kFwF-gqKgyI?si=wNWIFnCXcmoAAb5V" target="_blank" rel="noopener noreferrer">
                    <Play className="h-5 w-5" />
                    <span className="transition-all duration-200 group-hover:tracking-wide">Pogledaj video</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <CourseHighlights items={[{
        icon: "📈",
        title: "Praktični Rezultati",
        subtitle: "polaznika osjeti napredak nakon 1. vikenda"
      }, {
        icon: "🧩",
        title: "Metodološki Pristup",
        subtitle: "vikend modula • strukturirani rast"
      }, {
        icon: "🌍",
        title: "Dostupnost",
        subtitle: "grada – Zagreb, Rijeka, Split"
      }, {
        icon: "📚",
        title: "Kontinuirana Podrška",
        subtitle: "video materijali i mentorska podrška"
      }]} accentIndex={1} bg="dark" />

      {/* What You'll Learn */}
      <section className="py-20 relative overflow-hidden">
        {/* decorative waves */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `repeating-linear-gradient(135deg, hsl(var(--supra-golden) / 0.06) 0px, hsl(var(--supra-golden) / 0.06) 1px, transparent 1px, transparent 22px)`
        }} aria-hidden />
        <div className="container relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-bold leading-tight mb-6 text-left" style={{
              color: "hsl(var(--brand-text))",
              fontFamily: 'Playfair Display, serif'
            }}>
              Što ćeš <span style={{
                color: '#B9975B'
              }}>naučiti</span>
            </h2>
            <p className="text-[clamp(1rem,2vw,1.125rem)] leading-relaxed max-w-[700px]" style={{
              color: "hsl(var(--brand-muted))"
            }}>
              Praktične vještine koje odmah možeš primijeniti – od rituala do ciljanih terapija.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              t: "Zlatna formula",
              d: "Kompletan slijed hramskog Lomi Lomi tretmana za duboko opuštanje i promjenu.",
              icon: Sparkles
            }, {
              t: "Huna principi",
              d: "7 načela prisutnosti i rada s energijom – temelj za sigurnu i svjesnu praksu.",
              icon: HeartHandshake
            }, {
              t: "Terapijske tehnike",
              d: "Vrat i glavobolja, donji dio leđa i išijas, koljeno, gležanj i Ahilova tetiva.",
              icon: CheckCircle
            }, {
              t: "Dah i ritam",
              d: "Kako disanjem i ergonomijom dobiti snagu bez iscrpljivanja.",
              icon: Clock
            }, {
              t: "Dijagnostika",
              d: "Prepoznavanje uzroka i izbor pristupa – ritual ili ciljano.",
              icon: MapPin
            }, {
              t: "Video + mentorstvo",
              d: "Materijali za ponavljanje i podrška nakon edukacije.",
              icon: Users
            }].map(({
              t,
              d,
              icon: Icon
            }, idx) => <Card key={t} className="hover:shadow-xl transition-all border bg-card/60 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{
                    background: "hsl(var(--brand-amber-50))",
                    border: `1px solid hsl(var(--brand-amber-300))`
                  }}>
                      <Icon className="w-5 h-5" style={{
                      color: "hsl(var(--supra-golden))"
                    }} />
                    </div>
                    {idx === 0 && <img src="/lovable-uploads/ae55703b-92a4-4efc-986d-bc9bd3bee836.png" alt="Detalj rada Lomi Lomi" className="w-10 h-10 rounded-md object-cover" loading="lazy" />}
                  </div>
                   <h3 className="text-[clamp(1.125rem,2.5vw,1.375rem)] font-semibold mb-2 leading-tight" style={{
                  color: "hsl(var(--brand-text))"
                }}>{t}</h3>
                   <p className="text-[clamp(0.875rem,1.75vw,1rem)] leading-relaxed text-muted-foreground">{d}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Program + Pricing */}
      <section id="program" className="py-20 bg-muted/40">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-bold leading-tight mb-6 text-left" style={{
              color: "hsl(var(--brand-text))",
              fontFamily: 'Playfair Display, serif'
            }}>
              Program po <span style={{
                color: '#B9975B'
              }}>modulima</span>
            </h2>
          </div>

          <Tabs defaultValue="i" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="i">Modul I</TabsTrigger>
              <TabsTrigger value="ii">Modul II</TabsTrigger>
              <TabsTrigger value="cert">Certifikat & praksa</TabsTrigger>
            </TabsList>
            <TabsContent value="i">
              <Card>
                <CardContent className="p-0">
                  <img src="/lovable-uploads/e9dcf90d-f48d-406f-aa32-ebb744991d83.png" alt="Modul I – fokus Awudi" className="w-full h-48 object-cover rounded-t-[var(--radius)]" loading="lazy" />
                  <div className="p-6 space-y-2">
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>Povijest i filozofija hramskog stila</li>
                      <li>7 Huna principa i rad s dahom</li>
                      <li>Zlatna formula – kompletan slijed</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ii">
              <Card>
                <CardContent className="p-0">
                  <img src="/lovable-uploads/e9dcf90d-f48d-406f-aa32-ebb744991d83.png" alt="Modul II – fokus Awudi" className="w-full h-48 object-cover rounded-t-[var(--radius)]" loading="lazy" />
                  <div className="p-6 space-y-2">
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>Donji dio leđa i išijas</li>
                      <li>Vrat i glavobolja</li>
                      <li>Koljeno, gležanj, Ahilova tetiva</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cert">
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="/lovable-uploads/e-radna-knjizica.png" 
                    alt="Certifikat i praksa" 
                    className="w-full h-48 object-cover rounded-t-[var(--radius)]" 
                    loading="lazy" 
                  />
                  <div className="p-6 space-y-2">
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>Certifikat Učilišta Supra Studium</li>
                      <li>Upis u e-radnu knjižicu kao dodatno obrazovanje</li>
                      <li>Mentorska podrška i materijali</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Pricing Bar */}
          <Card className="mt-8 border" style={{
            borderColor: "hsl(var(--brand-amber-300))"
          }}>
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold" style={{
                  color: "hsl(var(--brand-text))"
                }}>Kotizacija</h3>
                <p className="text-[clamp(1.5rem,4vw,2rem)] font-extrabold" style={{
                  color: "hsl(var(--supra-golden))"
                }}>450 € / modul</p>
                <p className="text-[clamp(0.875rem,1.75vw,1rem)] text-muted-foreground">Popust −120 € pri upisu oba modula unaprijed</p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button size="lg" className="bg-[#D4AF37] text-[#111] hover:bg-[#B9975B] hover:text-white font-semibold transition-all duration-300 rounded-lg px-6" asChild>
                  <a href="https://tally.so/r/wA5kvD" target="_blank" rel="noopener noreferrer">
                    Upiši seminar
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white font-semibold transition-all duration-300 rounded-lg px-6" asChild>
                  <a href="https://www.dropbox.com/scl/fi/fr3sy53fc0mk6ckvb9t2z/Lomi-Lomi.pdf?rlkey=0d139k2jwc74az93v8eseicis&st=aq15lh63&dl=0" target="_blank" rel="noopener noreferrer">
                    📄 Preuzmi brošuru (PDF)
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            {/* Left: Text Content */}
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🌺</span>
                <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-bold leading-tight" style={{
                  color: "hsl(var(--brand-text))",
                  fontFamily: 'Playfair Display, serif'
                }}>
                  O <span style={{
                    color: '#B9975B'
                  }}>voditelju</span>
                </h2>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-[clamp(1rem,2vw,1.125rem)] leading-relaxed" style={{
                  color: "hsl(var(--brand-muted))"
                }}>
                  Dr. Awudi Atitsogbui je međunarodno priznati učitelj Lomi Lomi masaže s više od 19 godina iskustva i preko 820 terapeuta educiranih diljem Europe i svijeta. Njegov rad spaja havajski izvorni stil, Ayurvedu, rad s dahom i suvremene terapijske tehnike — stvarajući iskustvo koje nadilazi klasičnu masažu.
                </p>

                <p className="text-[clamp(1rem,2vw,1.125rem)] leading-relaxed" style={{
                  color: "hsl(var(--brand-muted))"
                }}>
                  S dubokim poštovanjem prema tradiciji i preciznim pristupom pokretu, Dr. Awudi ne podučava samo tehniku — već filozofiju dodira koja transformira i terapeuta i klijenta.
                </p>
              </div>

              {/* Quote Box */}
              <Card className="border-l-4 bg-muted/30" style={{
                borderLeftColor: "hsl(var(--supra-golden))"
              }}>
                <CardContent className="p-6">
                  <p className="text-[clamp(1rem,2vw,1.125rem)] italic leading-relaxed" style={{
                    color: "hsl(var(--brand-text))"
                  }}>
                    "Lomi Lomi nije samo tretman. To je ritual koji otvara prostor za iscjeljenje i povezanost."
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right: Images */}
            <div className="order-1 md:order-2 relative">
              <img src="/lovable-uploads/35deda14-a395-446a-ac28-5f3b1f62b3ef.png" alt="Voditelj Awudi nasmiješen tijekom rada" className="w-full h-auto rounded-lg shadow-xl" />
              <img src="/lovable-uploads/ff8e8a4b-ad45-4ad9-bf5e-93fafbf189ff.png" alt="Awudi u radu s polaznikom" className="hidden sm:block w-40 h-40 object-cover rounded-lg shadow-xl absolute -bottom-6 -left-6 border-4" style={{
                borderColor: "hsl(var(--brand-surface))"
              }} />
              <div className="absolute bottom-4 right-6 text-2xl italic" style={{
                color: "hsl(var(--supra-golden))"
              }}>
                Awudi
              </div>
            </div>
          </div>

          {/* Stats Cards - Below Text */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[{
              n: "19+",
              l: "godina iskustva"
            }, {
              n: "820+",
              l: "polaznika"
            }, {
              n: "8",
              l: "država"
            }].map(s => <Card key={s.l} className="text-center hover:shadow-lg transition-shadow border" style={{
              borderColor: "hsl(var(--brand-amber-300))"
            }}>
                <CardContent className="p-6">
                  <div className="text-[clamp(2rem,4vw,3rem)] font-bold mb-2" style={{
                  color: "hsl(var(--supra-golden))"
                }}>
                    {s.n}
                  </div>
                  <div className="text-[clamp(0.875rem,1.75vw,1rem)] leading-relaxed" style={{
                  color: "hsl(var(--brand-muted))"
                }}>
                    {s.l}
                  </div>
                </CardContent>
              </Card>)}
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
                Uplata kotizacije na žiro račun Učilišta. Moguće rezervirati jedno po jedno ili oba modula s ukupnim popustom od 100 Eur.
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
                <p className="text-sm text-muted-foreground">Mjesta su ograničena zbog rada jedan-na-jedan. Rana prijava osigurava termin i popust.</p>
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
                <Button type="submit" className="mt-2 bg-supra-golden hover:bg-supra-golden/90 text-white font-semibold">
                  Pošalji prijavu
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "linear-gradient(hsl(var(--overlay-dark) / 0.75), hsl(var(--overlay-dark) / 0.9)), url(/lovable-uploads/869511d2-0596-4bc9-8a5b-8beae598be59.png)",
          backgroundAttachment: "fixed"
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 bg-supra-golden" style={{
              color: "hsl(var(--on-dark))"
            }} asChild>
              <a href="https://tally.so/r/wA5kvD" target="_blank" rel="noopener noreferrer">Prijavi se</a>
            </Button>
            <Button size="lg" className="bg-white text-[#111] border-2 border-white hover:bg-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 font-semibold" asChild>
              <a href="#program">Pogledaj program</a>
            </Button>
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

      <ContactFooter />
    </div>
  </>;
};
export default LomiLomiPage;