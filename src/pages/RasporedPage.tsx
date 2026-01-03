import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Globe, Calendar, MapPin, Plus, Phone, Mail, CheckCircle, Brain, Video, Heart, ChevronDown } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import TextShimmer from '@/components/ui/TextShimmer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ContactFooter } from '@/components/ContactFooter';
import NextDatesBar from '@/components/ui/NextDatesBar';
const courses = [{
  city: 'Rijeka',
  location: 'Udruga Eterico',
  address: 'Ulica dr. Zdravka Kučića 39',
  courses: [{
    name: 'Praktična radionica za Manualnu terapiju (drugi stupanj)',
    dates: 'Petak, 7. studeni 2025. | 16:00 – 20:00',
    price: '50 €',
    time: '16:00 – 20:00'
  }, {
    name: 'Manualna terapija – 3. stupanj',
    dates: '8. i 9. studeni 2025.',
    price: '390 €'
  }]
}, {
  city: 'Zagreb',
  location: 'Poliklinika Medical Body Balance',
  address: 'Ulica Frane Kesterčaneka 2b',
  courses: [{
    name: 'Akupresura & Trigger Point terapija',
    dates: '14., 15. i 16. studeni 2025.',
    price: '390 € (early bird); 460 € (redovna cijena)'
  }, {
    name: 'Praktična radionica za Manualnu terapiju (prvi stupanj)',
    dates: 'Petak, 21. studeni 2025. | 16:00 – 20:00',
    price: '50 €',
    time: '16:00 – 20:00'
  }, {
    name: 'Manualna terapija – 2. stupanj',
    dates: '22. i 23. studeni 2025.',
    price: '390 €'
  }, {
    name: 'Cross Friction & Funkcionalna masaža – 2. stupanj (vrat, rame, gornji ud)',
    dates: '6. i 7. prosinac 2025.',
    price: '390 € – 460 €'
  }, {
    name: 'Cupping terapija s uvodom u TCM – jednodnevni seminar',
    dates: 'Nedjelja, 1. veljača 2026.',
    price: '300 € (early bird); 360 € (redovna cijena)'
  }, {
    name: 'Manualna terapija – 1. stupanj',
    dates: '6., 7. i 8. veljača 2026.',
    price: '390 €'
  }],
  note: 'Lomi Lomi masaža (Zagreb) – u izradi, termin će biti objavljen uskoro.'
}, {
  city: 'Zagreb',
  location: 'Maxi Dance Studio',
  address: 'Ulica Frane Kesterčaneka 2',
  courses: [{
    name: 'Kalabaš masaža',
    dates: '22. i 23. studeni 2025.',
    price: '450 € (early bird); 500 € (redovna cijena)'
  }]
}, {
  city: 'Slavonski Brod',
  location: 'HK Studio',
  address: 'Ulica Slavonija 1',
  courses: [{
    name: 'Akupresura & Trigger Point terapija',
    dates: '12., 13. i 14. prosinac 2025.',
    price: '390 € (early bird); 460 € (redovna cijena)'
  }]
}, {
  city: 'Split',
  location: 'Centar za ortopedsku manualnu terapiju Majce & Stojanović',
  address: 'Žnjanska 6',
  courses: [{
    name: 'Cross Friction & Funkcionalna masaža – 1. stupanj (križobolja)',
    dates: '24. i 25. siječanj 2026.',
    price: '390 € – 460 €'
  }]
}];
const locations = [{
  name: 'Poliklinika Medical Body Balance',
  city: 'Zagreb',
  address: 'Ulica Frane Kesterčaneka 2b',
  description: 'Smještena u blizini centra grada, s modernim prostorom za edukaciju i praktičan rad.',
  mapUrl: 'https://maps.app.goo.gl/J8Ee5y6KVcQE5aWdA',
  image: '/lovable-uploads/3118d6a4-0a56-49d4-ae18-b4a87a937529.png'
}, {
  name: 'Maxi Dance Studio',
  city: 'Zagreb',
  address: 'Ulica Frane Kesterčaneka 2',
  description: 'Svijetlan prostor idealan za Calabash i masažne edukacije.',
  mapUrl: 'https://maps.app.goo.gl/HqgkRGoTBPL7se4c8',
  image: '/lovable-uploads/574b1b65-57fb-471f-a894-55f0e8e66cc3.png'
}, {
  name: 'Udruga Eterico',
  city: 'Rijeka',
  address: 'Ulica dr. Zdravka Kučića 39',
  description: 'Lokacija uz more s toplom i opuštajućom atmosferom za praktične radionice.',
  mapUrl: 'https://maps.app.goo.gl/Y69A4q72cGaMHugs6',
  image: '/lovable-uploads/3118d6a4-0a56-49d4-ae18-b4a87a937529.png'
}, {
  name: 'Centar za ortopedsku manualnu terapiju Majce & Stojanović',
  city: 'Split',
  address: 'Žnjanska 6',
  description: 'Moderan prostor s pogledom na more, posebno prilagođen za praktične seminare.',
  mapUrl: 'https://maps.app.goo.gl/3VGy6L7pk3tAH4ts5',
  image: '/lovable-uploads/66cf27b6-2cc1-4164-ae68-00fda09daba5.png'
}, {
  name: 'HK Studio',
  city: 'Slavonski Brod',
  address: 'Ulica Slavonija 1',
  description: 'Ugodan edukativni prostor s toplom i prijateljskom atmosferom.',
  mapUrl: 'https://maps.app.goo.gl/SFQAban1rio47bVQ7',
  image: '/lovable-uploads/66cf27b6-2cc1-4164-ae68-00fda09daba5.png'
}];
const faqData = [{
  question: "Što trebam ponijeti na tečaj?",
  answer: "Sve što trebate jest udobna odjeća za vježbanje u kojoj se možete slobodno kretati. Sav stručni materijal, rekviziti i pribor za rad osigurani su od strane organizatora. Preporučujemo da ponesete i bilježnicu te USB stick – kako biste mogli spremiti edukacijske materijale koje ćete dobiti i zapisati korisne bilješke za kasnije."
}, {
  question: "Je li potrebno prethodno znanje?",
  answer: "Za tečajeve manualne terapije preporučuje se prethodno znanje anatomije ili završen studij fizioterapije. Za sve ostale tečajeve nije potrebno predznanje – otvoreni su za sve koji žele učiti, razvijati se i steći nova praktična znanja, bez obzira na prethodno iskustvo."
}, {
  question: "Dobivam li potvrdu o sudjelovanju?",
  answer: "Da. Nakon uspješno završenog tečaja dobivate službenu potvrdu o pohađanju. Ova potvrda je priznata u struci i međunarodno relevantna, te ju možete koristiti kao dio svog profesionalnog portfolija."
}, {
  question: "Je li moguće plaćanje na rate?",
  answer: "Trenutno ne nudimo mogućnost plaćanja u ratama. Razlog je taj što smo se maksimalno potrudili da cijene budu što pristupačnije, kako bi edukaciju mogao priuštiti što veći broj polaznika – bez dodatnih administrativnih troškova. Naš je cilj kvalitetno znanje učiniti dostupnim svima."
}, {
  question: "Jesu li tečajevi bodovani od strane Komore?",
  answer: "Ne, naši tečajevi trenutno nisu bodovani od strane Komore. Fokusiramo se na kvalitetu sadržaja, primjenjivost u praksi i međunarodno priznate standarde. Naša edukacija je akreditirana od Svjetske federacije za masažu, manualnu terapiju i Nuad Thai, pod kroviteljstvom Ministarstva zdravlja u Italiji. Certifikat se može upisati u e-radnu knjižicu kao dodatno obrazovanje, što je važno priznanje vaše stručnosti i prednost na tržištu rada – u Hrvatskoj i inozemstvu."
}];
export default function RasporedPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 800);
      
      // Calculate hero opacity based on scroll position
      // Fade out from scroll 0 to 600px
      const scrollY = window.scrollY;
      const fadeDistance = 600;
      const opacity = Math.max(0, 1 - (scrollY / fadeDistance));
      setHeroOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };
  const addToCalendar = (courseName: string, dates: string) => {
    const encodedEvent = encodeURIComponent(`${courseName} - ${dates}`);
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedEvent}&details=Tečaj u organizaciji Supra Studium`;
    window.open(calendarUrl, '_blank');
  };

  const handleRegister = (courseName: string) => {
    // Praktična radionica goes to email, all others to Tally
    if (courseName.toLowerCase().includes('praktična radionica')) {
      window.location.href = 'mailto:ante.a@web.de';
    } else {
      window.open('https://tally.so/r/wA5kvD', '_blank');
    }
  };

  // Parse and sort upcoming events
  const upcomingEvents = useMemo(() => {
    const parseDate = (dateStr: string): Date | null => {
      const months: {
        [key: string]: number;
      } = {
        'siječanj': 0,
        'veljača': 1,
        'ožujak': 2,
        'travanj': 3,
        'svibanj': 4,
        'lipanj': 5,
        'srpanj': 6,
        'kolovoz': 7,
        'rujan': 8,
        'listopad': 9,
        'studeni': 10,
        'prosinac': 11
      };

      // Try to match different date formats
      let match = dateStr.match(/(\d+)\.,?\s+(?:\d+\.,?\s+)?(?:i\s+)?(\d+)\.\s+(\w+)\s+(\d{4})/);
      if (match) {
        const day = parseInt(match[1]);
        const month = months[match[3].toLowerCase()];
        const year = parseInt(match[4]);
        if (month !== undefined) {
          return new Date(year, month, day);
        }
      }

      // Try simpler format (Petak, 7. studeni 2025.)
      match = dateStr.match(/(\d+)\.\s+(\w+)\s+(\d{4})/);
      if (match) {
        const day = parseInt(match[1]);
        const month = months[match[2].toLowerCase()];
        const year = parseInt(match[3]);
        if (month !== undefined) {
          return new Date(year, month, day);
        }
      }
      return null;
    };
    const formatDate = (dateStr: string): string => {
      const date = parseDate(dateStr);
      if (!date) return dateStr;
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    };
    const events: any[] = [];
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    courses.forEach(location => {
      location.courses.forEach(course => {
        const sortDate = parseDate(course.dates);
        if (sortDate && sortDate >= now) {
          events.push({
            date: formatDate(course.dates),
            city: location.city,
            courseName: course.name,
            price: course.price,
            rawDates: course.dates,
            sortDate,
            location: location.location
          });
        }
      });
    });
    return events.sort((a, b) => a.sortDate.getTime() - b.sortDate.getTime());
  }, []);

  // Get the next date for each city
  const nextDatesByCity = useMemo(() => {
    const map = new Map<string, string>();
    upcomingEvents.forEach(event => {
      if (!map.has(event.city)) {
        map.set(event.city, event.date);
      }
    });
    return map;
  }, [upcomingEvents]);

  // Find index of accordion with nearest event
  const defaultOpenAccordion = useMemo(() => {
    if (upcomingEvents.length === 0) return undefined;
    const nearestCity = upcomingEvents[0].city;
    const index = courses.findIndex(c => c.city === nearestCity);
    return index >= 0 ? `item-${index}` : undefined;
  }, [upcomingEvents]);
  return <div className="-mt-20">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden transition-opacity duration-300"
        style={{ opacity: heroOpacity }}
      >
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/lovable-uploads/raspored.jpeg)`
      }} />
        
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-24">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Tagline Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.6
          }} className="mb-3">
              <span className="inline-block bg-[#B9975B] text-white px-3 py-1 rounded-full text-[clamp(12px,1vw,14px)] font-bold uppercase tracking-wide">
                TEČAJEVI 2025.
              </span>
            </motion.div>

            {/* Mini Tag Above Title */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.6
          }} className="mb-2">
              <span className="block font-playfair font-normal text-white/90 drop-shadow-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide" style={{
              textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)'
            }}>
                Raspored tečajeva
              </span>
            </motion.div>

            {/* Main Title with Shimmer - NO BLUR */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }} className="mb-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-playfair font-bold tracking-wide">
                <TextShimmer className="text-white drop-shadow-xl [--base-gradient-color:#ffd700] [--base-color:#ffffff] [text-shadow:0_6px_12px_rgba(0,0,0,0.6),0_3px_6px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.3)]" duration={2.5} spread={3}>
                  ODABERI SVOJ PUT ZNANJA
                </TextShimmer>
              </h1>
            </motion.div>

            {/* Subtitle - NO BLUR */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7,
            duration: 0.8
          }} className="mb-8">
              <h2 className="text-[clamp(20px,3vw,28px)] leading-relaxed tracking-wide font-medium text-[#d4af37] drop-shadow-md">
                Pronađi termin koji ti odgovara i rezerviraj na vrijeme
              </h2>
            </motion.div>

            {/* Description - WITH BLUR BOX */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.9,
            duration: 0.8
          }} className="mb-8 max-w-3xl mx-auto">
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
                <p className="text-[clamp(16px,1.8vw,18px)] leading-relaxed text-white/90 mb-3" style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}>
                  Naši edukacijski programi prilagođeni su različitim razinama znanja i interesima.
                </p>
                <p className="text-[clamp(16px,1.8vw,18px)] leading-relaxed text-white/90" style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}>
                  Prati raspored i osiguraj svoje mjesto u svijetu manualne terapije i masaže.
                </p>
              </div>
            </motion.div>

            {/* Note Above Buttons */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.1,
            duration: 0.6
          }} className="mb-4">
              <p className="text-[0.85rem] text-white/85 italic">
                👉 Ne čekaj posljednji trenutak — mjesta su ograničena!
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 1.3,
            duration: 0.8
          }} className="flex flex-wrap justify-center gap-4 mt-6 w-full max-w-md mx-auto">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-[#B9975B] hover:brightness-110 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all" onClick={() => document.getElementById('raspored-content')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  Pogledaj raspored
                </Button>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white hover:bg-[#B9975B] text-[#B9975B] hover:text-white border border-[#B9975B] font-bold px-6 py-3 rounded-xl transition-all" onClick={() => document.getElementById('kontakt')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  Kontaktiraj nas
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O tečajevima section */}
      <section className="py-24 bg-gradient-to-b from-supra-ivory to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
              45deg,
              hsl(var(--supra-golden)) 0px,
              hsl(var(--supra-golden)) 1px,
              transparent 1px,
              transparent 20px
            )`
        }} />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-20">
            <SectionTitle className="font-playfair text-6xl mb-6 relative inline-block">
              Zašto baš naši tečajevi?
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-supra-golden to-yellow-500 rounded-full" />
            </SectionTitle>
            
            <div className="max-w-3xl mx-auto space-y-6 mt-12">
              <p className="text-xl font-medium text-foreground leading-relaxed">
                Zato što ne učite samo tehnike – učite kako razmišljati kao vrhunski terapeut.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Naši tečajevi proizašli su iz dugogodišnje kliničke prakse i stvarnih rezultata u radu s ljudima. Dizajnirani su za terapeute koji ne žele više rutine, već žele razumjeti tijelo, njegovu poruku i potencijal za iscjeljenje.
              </p>
              
              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-3 justify-center">
                  <span className="text-supra-golden text-xl mt-1">📌</span>
                  <p className="text-lg text-muted-foreground text-left max-w-2xl">
                    Kod nas učite kroz iskustvo – s preciznošću, prisutnošću i svrhom.
                  </p>
                </div>
                
                <div className="flex items-start gap-3 justify-center">
                  <span className="text-supra-golden text-xl mt-1">📌</span>
                  <p className="text-lg text-muted-foreground text-left max-w-2xl">
                    Ne nudimo još jedan seminar, već smjer koji oblikuje vaš terapeutski identitet.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed pt-6 italic">
                Tečajevi traju od jednog do tri dana — ali znanje koje donose ostaje s vama zauvijek.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: Clock,
            title: 'Kratki, intenzivni formati',
            desc: 'Maksimalno znanje u minimalnom vremenu'
          }, {
            icon: Users,
            title: 'Iskusni predavači',
            desc: 'Stručnjaci s dugogodišnjim iskustvom'
          }, {
            icon: Globe,
            title: 'Akreditirano. Globalno. Vaše.',
            desc: 'Partnerstvo s World Federation i EU priznanje. Upis u e-radnu knjižicu.'
          }].map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} viewport={{
            once: true
          }} whileHover={{
            y: -5
          }} className="group">
                <Card className="h-full backdrop-blur-lg bg-white/20 border-white/30 hover:border-supra-golden/50 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-supra-golden to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">
                      {item.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Raspored tečajeva section */}
      <section id="raspored-content" className="py-32 bg-gradient-to-b from-supra-ivory/30 to-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-20">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-supra-golden/20 to-yellow-500/10 mb-6"
            >
              <Calendar className="w-10 h-10 text-supra-golden" />
            </motion.div>
            
            <SectionTitle className="font-playfair text-5xl md:text-6xl mb-6 relative inline-block">
              Nadolazeći termini
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-supra-golden to-yellow-500 rounded-full" />
            </SectionTitle>
            
            <p className="text-muted-foreground text-base md:text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
              Pogledaj raspored. Odaberi edukaciju. Rezerviraj na vrijeme.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Next Dates Bar - Quick View of Upcoming Events */}
            {upcomingEvents.length > 0 && <NextDatesBar 
              events={upcomingEvents} 
              onAddToCalendar={addToCalendar} 
              onRegisterClick={() => {
                // This will be overridden in NextDatesBar to use course-specific logic
                window.open('https://tally.so/r/wA5kvD', '_blank');
              }} 
            />}

            {/* Full Schedule Accordion */}
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
              <div className="text-center mb-12">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold uppercase tracking-[0.02em] mb-4 text-foreground">
                  Svi termini po lokacijama
                </h3>
                <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                  Klikni na grad za detaljne informacije o svim nadolazećim terminima edukacija.
                </p>
              </div>

              <Accordion type="single" defaultValue={defaultOpenAccordion} collapsible className="space-y-6">
                {courses.map((location, index) => {
                const nextDate = nextDatesByCity.get(location.city);
                const hasNextDate = nextDate !== undefined;
                const isNearestEvent = defaultOpenAccordion === `item-${index}`;
                return <AccordionItem key={index} value={`item-${index}`} className={`rounded-3xl overflow-hidden bg-white dark:bg-background transition-all duration-500 group ${isNearestEvent ? 'border-2 border-supra-golden/50 shadow-[0_8px_30px_rgba(212,175,55,0.2)]' : 'border border-border/40 hover:border-supra-golden/40 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)]'}`} style={isNearestEvent ? {
                  boxShadow: '0 8px 30px rgba(212, 175, 55, 0.2)',
                  contentVisibility: 'auto'
                } : {
                  contentVisibility: 'auto'
                }}>
                      <AccordionTrigger className="px-7 py-6 text-left hover:bg-muted/20 transition-all duration-300">
                        <div className="flex items-center justify-between w-full pr-4 gap-4">
                          <div className="flex items-center gap-4 flex-1">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-supra-golden/20 to-yellow-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <MapPin className="w-6 h-6 text-supra-golden" />
                            </div>
                            <div>
                              <h3 className="text-base md:text-xl font-bold text-foreground mb-1">
                                {location.city} – {location.location}
                              </h3>
                              <p className="text-xs md:text-sm text-muted-foreground">{location.address}</p>
                            </div>
                          </div>
                          {hasNextDate && <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-supra-golden/15 to-yellow-500/10 border border-supra-golden/40 rounded-full px-4 py-2 flex-shrink-0">
                              <Calendar className="w-4 h-4 text-supra-golden" />
                              <span className="text-sm font-bold font-playfair text-supra-golden whitespace-nowrap">
                                {nextDate}
                              </span>
                            </div>}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-7 pb-6 bg-gradient-to-b from-transparent to-muted/10">
                        <div className="space-y-5 pt-3">
                          {location.courses.map((course, courseIndex) => <motion.div key={courseIndex} initial={{
                        opacity: 0,
                        x: -20
                      }} animate={{
                        opacity: 1,
                        x: 0
                      }} transition={{
                        duration: 0.4,
                        delay: courseIndex * 0.08
                      }} className="p-6 bg-white dark:bg-background rounded-2xl border border-border/40 hover:border-supra-golden/40 hover:shadow-[0_8px_30px_rgba(212,175,55,0.12)] transition-all duration-500">
                              {/* Course Name - Main Title */}
                              <h4 className="font-bold font-playfair text-lg md:text-xl text-foreground mb-4 leading-tight">{course.name}</h4>
                              
                              {/* Info Grid */}
                              <div className="space-y-3 mb-5">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-supra-golden/15 flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-4 h-4 text-supra-golden" />
                                  </div>
                                  <p className="text-sm md:text-base text-muted-foreground">
                                    {course.dates}
                                  </p>
                                </div>
                                
                                {(course as any).time && <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-supra-golden/15 flex items-center justify-center flex-shrink-0">
                                      <Clock className="w-4 h-4 text-supra-golden" />
                                    </div>
                                    <p className="text-sm md:text-base text-muted-foreground">
                                      {(course as any).time}
                                    </p>
                                  </div>}
                                
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-supra-golden/15 flex items-center justify-center flex-shrink-0">
                                    <span className="text-supra-golden font-bold text-sm">€</span>
                                  </div>
                                  <div className="inline-flex items-center bg-supra-golden/15 border border-supra-golden/40 rounded-lg px-3 py-1.5">
                                    <p className="text-sm md:text-base font-bold text-supra-golden">
                                      {course.price}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              
                              {/* CTA Buttons */}
                              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                                <Button 
                                  className="w-full sm:w-auto bg-gradient-to-r from-supra-golden to-yellow-500 hover:from-yellow-400 hover:to-supra-golden text-white font-semibold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-300 py-2 px-4"
                                  onClick={() => handleRegister(course.name)}
                                >
                                  Prijavi me
                                </Button>
                                
                                <Button 
                                  variant="ghost" 
                                  onClick={() => addToCalendar(course.name, course.dates)} 
                                  className="w-full sm:w-auto text-muted-foreground hover:text-supra-golden rounded-lg transition-all duration-300 font-medium text-sm py-2 px-4"
                                >
                                  <Plus className="w-4 h-4 mr-2" />
                                  <span className="hidden sm:inline">Dodaj u kalendar</span>
                                  <span className="sm:hidden">Kalendar</span>
                                </Button>
                              </div>
                            </motion.div>)}
                          
                          {/* Note if exists */}
                          {(location as any).note && <div className="mt-4 p-3 bg-muted/50 rounded-lg border border-border/50">
                              <p className="text-sm text-muted-foreground italic">
                                📝 {(location as any).note}
                              </p>
                            </div>}
                        </div>
                      </AccordionContent>
                    </AccordionItem>;
              })}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kako izgleda jedan vikend tečaj section */}
      <section className="relative py-32 overflow-hidden">
        {/* Soft Gradient Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent" />
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/35" />
        
        {/* Diagonal Light Streak - Apple Vision Pro inspired */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-supra-golden/10 via-transparent to-transparent blur-3xl transform rotate-12" />
        </div>
        
        {/* Parallax Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.15] blur-[8px]" style={{
        backgroundImage: 'url(/lovable-uploads/education-workshop-bg.jpg)',
        backgroundAttachment: 'fixed'
      }} />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Title and Tagline */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-20">
            <div className="backdrop-blur-sm">
              <SectionTitle className="font-playfair text-5xl md:text-6xl mb-3 text-white relative inline-block" style={{
              textShadow: '0 2px 6px rgba(0,0,0,0.4)'
            }}>
                Što možete očekivati
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-supra-golden to-yellow-500 rounded-full" />
              </SectionTitle>
              <p className="text-[#F8F8F8] text-base md:text-lg mt-6 font-light tracking-wide opacity-85" style={{
              color: '#C9A44C',
              textShadow: '0 2px 6px rgba(0,0,0,0.4)'
            }}>
                „U svakom tečaju – znanje postaje iskustvo."
              </p>
            </div>
          </motion.div>

          {/* Timeline Flow */}
          <div className="max-w-7xl mx-auto">
            {/* Desktop: Horizontal Progress Flow */}
            <div className="hidden md:flex items-start justify-between gap-6 relative">
              {/* Connecting Lines */}
              <div className="absolute top-12 left-[16.67%] right-[16.67%] h-[2px] bg-white/20">
                <motion.div initial={{
                scaleX: 0
              }} whileInView={{
                scaleX: 1
              }} transition={{
                duration: 1.2,
                delay: 0.5
              }} viewport={{
                once: true
              }} className="h-full bg-gradient-to-r from-supra-golden/50 to-supra-golden origin-left" />
              </div>

              {[{
              number: '1',
              icon: Brain,
              title: 'Kratki teorijski uvod',
              desc: 'Anatomske osnove i principi tehnike.',
              highlight: '🧠 Razumijete *zašto* tijelo reagira – ne samo *kako*.'
            }, {
              number: '2',
              icon: Video,
              title: 'Demonstracija tehnika',
              desc: 'Predavač prikazuje sve pokrete korak po korak.',
              highlight: '🎥 Učite gledanjem, slušanjem i promatranjem detalja.'
            }, {
              number: '3',
              icon: Heart,
              title: 'Intenzivan praktični rad',
              desc: 'Vježbanje u parovima uz individualne savjete.',
              highlight: '💪 Osjetite promjenu kroz vlastite ruke i iskustvo.'
            }].map((step, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }} transition={{
              duration: 0.6,
              delay: index * 0.15
            }} viewport={{
              once: true
            }} whileHover={{
              y: -8,
              transition: {
                duration: 0.3
              }
            }} className="flex-1 text-center group">
                  {/* Golden Gradient Circle with 3D depth */}
                  <div className="relative inline-block mb-6">
                    <motion.div whileHover={{
                  scale: 1.1
                }} className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#B9975B] to-[#D4AF37] flex items-center justify-center shadow-2xl" style={{
                  boxShadow: '0 10px 40px rgba(212, 175, 55, 0.4), inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.3)'
                }}>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20" />
                      <span className="text-3xl font-bold text-white relative z-10 drop-shadow-lg">
                        {step.number}
                      </span>
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-full bg-supra-golden/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                    </motion.div>
                    
                    {/* Icon Badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-supra-golden" />
                    </div>
                  </div>

                  <div className="backdrop-blur-sm px-2">
                    <h3 className="text-xl font-semibold mb-3 text-white" style={{
                  textShadow: '0 2px 6px rgba(0,0,0,0.4)'
                }}>
                      {step.title}
                    </h3>
                    <p className="text-[#D9D9D9] leading-[1.7] mb-3" style={{
                  textShadow: '0 2px 6px rgba(0,0,0,0.4)'
                }}>
                      {step.desc}
                    </p>
                    <p className="text-sm font-semibold italic leading-[1.7]" style={{
                  color: '#E5C97A',
                  textShadow: '0 2px 6px rgba(0,0,0,0.4)'
                }}>
                      {step.highlight}
                    </p>
                  </div>
                </motion.div>)}
            </div>

            {/* Mobile: Vertical Timeline */}
            <div className="md:hidden space-y-12 relative">
              {/* Vertical Connecting Line */}
              <div className="absolute left-12 top-12 bottom-12 w-[2px] bg-white/20">
                <motion.div initial={{
                scaleY: 0
              }} whileInView={{
                scaleY: 1
              }} transition={{
                duration: 1.5,
                delay: 0.3
              }} viewport={{
                once: true
              }} className="w-full bg-gradient-to-b from-supra-golden/50 to-supra-golden origin-top" style={{
                height: '100%'
              }} />
              </div>

              {[{
              number: '1',
              icon: Brain,
              title: 'Kratki teorijski uvod',
              desc: 'Anatomske osnove i principi tehnike.',
              highlight: 'Razumijete *zašto* tijelo reagira – ne samo *kako*.'
            }, {
              number: '2',
              icon: Video,
              title: 'Demonstracija tehnika',
              desc: 'Predavač prikazuje sve pokrete korak po korak.',
              highlight: 'Učite gledanjem, slušanjem i promatranjem detalja.'
            }, {
              number: '3',
              icon: Heart,
              title: 'Intenzivan praktični rad',
              desc: 'Vježbanje u parovima uz individualne savjete.',
              highlight: 'Osjetite promjenu kroz vlastite ruke i iskustvo.'
            }].map((step, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: index * 0.15
            }} viewport={{
              once: true
            }} className="flex gap-6 items-start relative">
                  {/* Golden Circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#B9975B] to-[#D4AF37] flex items-center justify-center shadow-2xl" style={{
                  boxShadow: '0 10px 40px rgba(212, 175, 55, 0.4), inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.3)'
                }}>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20" />
                      <span className="text-3xl font-bold text-white relative z-10 drop-shadow-lg">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Icon Badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-supra-golden" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-3 text-white" style={{
                  textShadow: '0 2px 6px rgba(0,0,0,0.4)'
                }}>
                      {step.title}
                    </h3>
                    <p className="text-[#D9D9D9] leading-[1.7] mb-3 text-lg" style={{
                  textShadow: '0 2px 6px rgba(0,0,0,0.4)'
                }}>
                      {step.desc}
                    </p>
                    <p className="text-base font-semibold italic leading-[1.7]" style={{
                  color: '#E5C97A',
                  textShadow: '0 2px 6px rgba(0,0,0,0.4)'
                }}>
                      {step.highlight}
                    </p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Prijava i cijene section */}
      {/* Lokacije section */}
      <section className="py-24 bg-gradient-to-b from-background to-supra-ivory">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="text-center mb-16">
            <SectionTitle className="font-playfair text-5xl md:text-6xl mb-4 relative inline-block text-[#141414]">
              Lokacije održavanja
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B9975B] rounded-full" />
            </SectionTitle>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              Edukacije se održavaju diljem Hrvatske u pažljivo odabranim prostorima.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 max-w-7xl mx-auto">
            {locations.map((location, index) => (
              <motion.div 
                key={index} 
                initial={{
                  opacity: 0,
                  y: 30
                }} 
                whileInView={{
                  opacity: 1,
                  y: 0
                }} 
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }} 
                viewport={{
                  once: true
                }}
                className="group h-full"
              >
                <Card 
                  className="h-full flex flex-col bg-white border border-[#CDA349]/20 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-8 flex flex-col flex-1">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-[#B9975B]/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-[#CDA349]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-playfair text-2xl font-semibold text-[#141414] mb-1">
                          {location.name}
                        </h3>
                        <p className="text-base text-neutral-500">
                          {location.city}
                        </p>
                      </div>
                    </div>

                    {/* Address */}
                    <p className="text-base text-neutral-700 mb-4 font-sans">
                      📍 {location.address}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-neutral-600 mb-6 leading-relaxed flex-1">
                      {location.description}
                    </p>

                    {/* CTA Button - Centered */}
                    <div className="flex justify-center mt-auto">
                      <a 
                        href={location.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Otvori ${location.name} na Google karti`}
                      >
                        <Button
                          className="bg-gradient-to-r from-[#D4AF37] to-[#B9975B] hover:from-[#E5C97A] hover:to-[#CDA349] text-white font-semibold px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          Otvori na karti
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-white via-[#FAFAFA] to-supra-ivory">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              duration: 0.6
            }} 
            viewport={{
              once: true
            }} 
            className="max-w-3xl mx-auto text-center"
          >
            {/* Title */}
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-[#141414] mb-6">
              Rezervirajte svoje mjesto
            </h2>
            
            {/* Description */}
            <div className="space-y-4 mb-10">
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                Mjesta su ograničena kako bismo osigurali individualnu pažnju svakom polaziniku.
              </p>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                Rezervirajte što prije i osigurajte sebi put u svijet manualne terapije.
              </p>
            </div>
            
            {/* CTA Button */}
            <motion.div 
              whileHover={{
                scale: 1.05
              }} 
              whileTap={{
                scale: 0.95
              }}
              className="mt-6"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#D4AF37] to-[#B9975B] hover:from-[#E5C97A] hover:to-[#CDA349] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="https://tally.so/r/wA5kvD" target="_blank" rel="noopener noreferrer">
                  Prijavi se sada
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-white via-[#FAFAFA] to-white">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-[#141414] mb-4">
              Česta pitanja
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#CDA349] to-transparent rounded-full" />
          </motion.div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="border border-[#E5E5E5] rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 px-6 py-2"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <span className="text-left font-semibold text-base text-[#141414]">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pt-2">
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* CTA Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center pt-8 mt-4"
          >
            <a 
              href="#kontakt" 
              className="text-sm font-medium text-[#CDA349] hover:text-[#B9975B] transition-colors duration-300 inline-flex items-center gap-2"
            >
              Imaš dodatna pitanja? Kontaktiraj nas →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Kontakt section */}
      

      {/* Sticky CTA Button */}
      {showStickyButton && <motion.div initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 1,
      scale: 1
    }} className="fixed bottom-6 right-6 z-50">
          <Button size="lg" className="bg-gradient-to-r from-supra-golden to-yellow-500 hover:from-yellow-500 hover:to-supra-golden text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild>
            <a href="https://tally.so/r/wA5kvD" target="_blank" rel="noopener noreferrer">
              👉 Prijavi se
            </a>
          </Button>
        </motion.div>}

      <ContactFooter />
    </div>;
}