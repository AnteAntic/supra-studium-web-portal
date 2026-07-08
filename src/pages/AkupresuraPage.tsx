import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CourseStickyBar } from '@/components/ui/CourseStickyBar';
import { CourseHero } from '@/components/CourseHero';
import { CourseFooter } from '@/components/CourseFooter';
import { CourseRecommendations } from '@/components/course/CourseRecommendations';
import { setPageMeta, setJsonLd, courseSchema, courseBreadcrumb } from '@/lib/seo';

const bonusi: { n: string; title: string; note: string; bullets?: string[]; disclaimer?: string }[] = [
  {
    n: '01',
    title: 'VIP Observer Pass — Official Croatian Massage & Manual Therapy Championship',
    note: 'Besplatan VIP Observer Pass za sva tri dana prvenstva.',
    bullets: [
      'Pristup svim natjecanjima',
      'Pristup stručnim radionicama',
      'Promatranje najboljih terapeuta iz Hrvatske i inozemstva',
      'Networking s međunarodnim sucima, edukatorima i terapeutima',
    ],
  },
  {
    n: '02',
    title: 'Online Q&A nakon edukacije',
    note: 'Jedan zajednički online susret nakon edukacije za pitanja, ponavljanje i razmjenu iskustava iz prakse.',
  },
  {
    n: '03',
    title: 'Ekskluzivni stručni PDF',
    note: 'Dodatni stručni materijal koji nije dio standardne skripte.',
  },
  {
    n: '04',
    title: 'Mogućnost promatranja tretmana uživo',
    note: 'Mogućnost promatranja rada iskusnog terapeuta tijekom tretmana s pravim klijentima, prema dogovoru i dostupnosti termina. Tijekom promatranja uči se:',
    bullets: [
      'Razgovor s klijentom',
      'Procjena stanja',
      'Razmišljanje terapeuta',
      'Odabir tehnika',
      'Prilagodba tretmana stvarnoj osobi',
      'Završna evaluacija tretmana',
    ],
    disclaimer: 'Promatranje se organizira prema dogovoru, raspoloživosti termina i uz prethodnu suglasnost klijenta.',
  },
];

const AkupresuraPage = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    setPageMeta({
      title: 'Akupresura & Trigger Point — Klinička edukacija | Supra Studium',
      description: 'Klinička edukacija akupresure i trigger point metode za terapeute. 3 dana, 24 sata intenzivnog rada u paru. Obrazac boli, palpacija i lokalna/distalna točka. Zagreb.',
      path: '/akupresura-trigger-point',
      ogImage: '/lovable-uploads/atp-program-kartica.webp',
    });
    setJsonLd('course', courseSchema({
      name: 'Akupresura & Trigger Point Terapija',
      description: 'Trodnevna klinička edukacija akupresure i trigger point metode za terapeute — obrazac boli, palpacija, lokalna i distalna točka.',
      path: '/akupresura-trigger-point',
      startDate: '2026-10-09',
      endDate: '2026-10-11',
      priceEUR: 460,
      location: 'Poliklinika Body Balance, Zagreb',
    }));
    setJsonLd('breadcrumb', courseBreadcrumb('Akupresura & Trigger Point', '/akupresura-trigger-point'));
  }, []);

  const scrollToProgram = () => {
    const element = document.getElementById('program');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen bg-white">
      <CourseHero
        category="Akupresura & Trigger Point Terapija · Zagreb"
        headline={<>Tkivo uvijek daje odgovor.<br />Znaš li ga pročitati?</>}
        subheadline="Akupresura i trigger point terapija za terapeute koji žele preciznije čitati reakciju tkiva, obrazac boli i promjenu pod pritiskom."
        videoSrc="https://www.dropbox.com/scl/fi/zu7uftbbxjg619w0j4r2s/atpt_hero-background.mp4?rlkey=53arhybzq615h8bvnx1ewqj51&raw=1"
        videoPoster="/lovable-uploads/atp-program-kartica.webp"
        primaryCTA={{ label: "Pogledaj program", onClick: scrollToProgram }}
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
      dates: "9.–11.10.2026."
    }]} price="Early Bird 460 €" ctaText="Prijavi se" ctaHref="https://tally.so/r/wA5kvD" theme="light" />

      {/* Klinička observacija */}
      <section className="bg-white pt-24 pb-0">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start max-w-5xl mx-auto">

            {/* Left: Editorial text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-7" style={{ color: '#B89A4F' }}>
                Metodika rada
              </p>
              <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.30)' }} />
              <h2
                className="font-playfair font-semibold leading-[1.22] mb-6 text-[1.9rem] md:text-[2.15rem]"
                style={{ color: '#1F1D1A' }}
              >
                Svaka reakcija tkiva nosi informaciju.<br />Pitanje nije pritiska — nego sposobnosti opažanja.
              </h2>
              <p className="text-[14px] leading-[1.65] font-normal mb-10" style={{ color: '#5F5A52' }}>
                Što se zapravo događa ispod prsta postaje jasnije kada palpacija prestane biti pogađanje.
              </p>
              <div className="space-y-5 mb-12">
                <p className="text-[15px] leading-[1.72] font-normal" style={{ color: '#3D3A35' }}>
                  Tkivo govori kroz obrasce — napetost, referalni bol, lokalna ishemija. Akupresura i trigger point terapija nisu dvije tehnike koje se izmjenjuju. Dva su sustava opservacije koji, kombinirani, daju precizniji uvid u ono što se zbiva ispod površine.
                </p>
                <p className="text-[15px] leading-[1.72] font-normal" style={{ color: '#3D3A35' }}>
                  Program gradi tu sposobnost u tri dana: od anatomske preciznosti do protokola koji se primjenjuju unutar samog tretmana.
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.22em] font-normal mb-5" style={{ color: '#B89A4F' }}>
                Što počinješ primjećivati
              </p>
              <div>
                {[
                  'Razliku između aktivne i latentne trigger točke u palpaciji',
                  'Referalni obrazac boli — lokalni i distalni',
                  'Reakciju tkiva pod ishemijskim pritiskom',
                  'Kada promijeniti tehniku, kada čekati odgovor tkiva',
                ].map((item, i) => (
                  <div key={i} className="py-4" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                    <p className="text-[14px] leading-[1.6] font-normal" style={{ color: '#1F1D1A' }}>
                      {item}
                    </p>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }} />
              </div>
            </motion.div>

            {/* Right: Clinical documentation image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="lg:pt-16"
            >
              <div
                className="relative cursor-pointer"
                onClick={() => setVideoModalOpen(true)}
              >
                <img loading="lazy" width={1280} height={714}
                  src="/lovable-uploads/atp-program-kartica.webp"
                  alt="Akupresura — klinička demonstracija"
                  className="w-full h-auto object-cover"
                  style={{ filter: 'grayscale(6%)' }}
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.82)' }}
                  >
                    <Play className="w-3 h-3 ml-0.5" style={{ color: '#1F1D1A' }} />
                  </div>
                  <span
                    className="text-[11px] uppercase tracking-[0.12em] font-normal"
                    style={{ color: 'rgba(255,255,255,0.88)', textShadow: '0 1px 4px rgba(0,0,0,0.45)' }}
                  >
                    Video pregled · 0:57
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
        <div style={{ background: 'linear-gradient(to bottom, #ffffff, #F4F1EA)', height: '5rem' }} />
      </section>

      {/* Intermezzo */}
      <section style={{ background: '#F4F1EA' }} className="py-12 md:py-14">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mx-auto text-center"
            style={{ maxWidth: '22rem' }}
          >
            <div className="h-px w-8 mx-auto mb-10" style={{ backgroundColor: 'rgba(0,0,0,0.12)' }} />
            <p className="text-[14px] leading-[1.85] font-normal" style={{ color: '#2A2723' }}>
              Tkivo ne reagira slučajno.
            </p>
            <p className="text-[14px] leading-[1.85] font-normal mt-6" style={{ color: '#5F5A52' }}>
              Pritisak je isti.<br />
              Odgovor nikada nije.
            </p>
            <p className="text-[14px] leading-[1.85] font-normal mt-6" style={{ color: '#5F5A52' }}>
              Razlika nije u sili tretmana,<br />
              nego u sposobnosti interpretacije reakcije.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program kompetencija */}
      <section style={{ background: '#F4F1EA' }} className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Program kompetencija
              </p>
              <h2
                className="font-playfair font-semibold leading-[1.26] text-[1.6rem] md:text-[1.85rem]"
                style={{ color: '#1F1D1A' }}
              >
                Što počinješ razumijevati.
              </h2>
            </motion.div>

            <div>
              {[
                {
                  n: '01',
                  title: 'Palpacija kao klinički alat',
                  body: 'Anatomija trigger točke: napeta traka, lokalna osjetljivost, referalni obrazac boli. Razlikovanje aktivne i latentne točke — i zašto ta razlika mijenja protokol.',
                },
                {
                  n: '02',
                  title: 'Akupresurni sustav — anatomija i primjena',
                  body: 'Lokacije i klinička primjena tridesetak terapijskih točaka. Meridijanski obrasci kao mapa napetosti muskuloskeletalnog sustava.',
                },
                {
                  n: '03',
                  title: 'Trigger point protokoli',
                  body: 'Ishemijski pritisak i sekvenciranje aplikacija. Procjena odgovora tkiva između pritisaka. Distalne i lokalne točke u istom protokolu.',
                },
                {
                  n: '04',
                  title: 'Neuromuskularno istezanje & PIR',
                  body: 'Post-izometrijska relaksacija kao završna faza protokola. Vraćanje opsega pokreta unutar samog tretmana.',
                },
                {
                  n: '05',
                  title: 'Integracija u klinički protokol',
                  body: 'Kada koristiti akupresuru, kada trigger point, kada kombinaciju. Klinička procjena prije tretmana kao temelj odluke o metodi.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="grid gap-6 md:gap-10 py-7"
                  style={{
                    borderTop: '1px solid rgba(0,0,0,0.08)',
                    gridTemplateColumns: '2.5rem 1fr',
                  }}
                >
                  <div className="pt-0.5 text-[11px] font-normal tabular-nums" style={{ color: '#B89A4F' }}>
                    {item.n}
                  </div>
                  <div>
                    <p className="text-[15px] font-medium mb-2 leading-snug" style={{ color: '#1F1D1A' }}>
                      {item.title}
                    </p>
                    <p className="text-[13.5px] leading-[1.68] font-normal" style={{ color: '#5F5A52' }}>
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }} />
            </div>

          </div>
        </div>
      </section>

      {/* Program edukacije */}
      <section id="program" style={{ background: '#F4F1EA' }} className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">

            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="pt-4 mb-4" />
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Struktura programa
              </p>
              <h2
                className="font-playfair font-semibold leading-[1.26] text-[1.6rem] md:text-[1.85rem]"
                style={{ color: '#1F1D1A' }}
              >
                Program rada.
              </h2>
            </motion.div>

            {/* PETAK */}
            {[
              {
                dayLabel: 'Petak · Dan 1',
                title: 'Akupresura — sustav procjene i terapije',
                intro: 'Meridijanski sustav kao osnova dijagnostičke procjene. Primjena akupresurnih točaka za cervikalnu, lumbalnu i kranijanu regiju.',
                modules: [
                  'Dijagnostički protokol — procjena stanja tkiva, izbor meridijana i tehnika',
                  'Lokalne i distalne točke: klinička logika odabira i kontekst primjene',
                  'Akupresura za okcipitalnu, lateralnu i frontalnu glavobolju',
                  'Akupresurne točke za križa, vrat i ramenski pojas — meridijani BL, SI, GB',
                  'Tonifikacija i disperzija: odabir pritiska prema karakteru boli',
                ],
              },
              {
                dayLabel: 'Subota · Dan 2',
                title: 'Trigger point terapija — lociranje i klinička primjena',
                intro: 'Palpacija kao klinička kompetencija, a ne intuicija. Lociranje, procjena i deaktivacija trigger točaka u kliničkom kontekstu.',
                modules: [
                  'Anatomija trigger točke u palpaciji: napeta traka, lokalna osjetljivost, referalni obrazac boli',
                  'Deep stroking massage kao priprema tkiva za dublji rad',
                  'Ishemijski pritisak: sekvenciranje aplikacije i procjena odgovora tkiva',
                  'Ice & Stretch metoda: fiziološka osnova i primjena unutar protokola',
                  'Trigger točke cervikalne i lumbalne regije, ramenskog pojasa i kranijalne zone',
                ],
              },
              {
                dayLabel: 'Nedjelja · Dan 3',
                title: 'Klinička integracija — kombiniranje metoda u protokol',
                intro: 'Kombiniranje akupresure i trigger point terapije u jedan terapijski protokol. Post-izometrijska relaksacija i klinička primjena na konkretnim slučajevima.',
                modules: [
                  'Post-izometrijska relaksacija (PIR): mehanizam, indikacije i tehnika primjene',
                  'Akupresura i trigger point u jednom tretmanu — logika kombiniranja',
                  'Protokoli za kuk, koljeno, gležanj i donji ud',
                  'Upute za samostalni rad klijenta između tretmana',
                  'Klinički Q&A: konkretni slučajevi, dijagnostičke dileme i primjena u praksi',
                ],
              },
            ].map((day, dayIdx) => (
              <motion.div
                key={dayIdx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: dayIdx * 0.08, ease: 'easeOut' }}
                viewport={{ once: true }}
                className={dayIdx > 0 ? 'mt-8 pt-8' : ''}
                style={dayIdx > 0 ? { borderTop: '1px solid rgba(0,0,0,0.10)' } : undefined}
              >
                <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-4" style={{ color: '#B89A4F' }}>
                  {day.dayLabel}
                </p>
                <h3
                  className="font-playfair font-semibold leading-[1.3] mb-4 text-[1.2rem] md:text-[1.35rem]"
                  style={{ color: '#1F1D1A' }}
                >
                  {day.title}
                </h3>
                <p className="text-[13.5px] leading-[1.72] font-normal mb-8" style={{ color: '#5F5A52' }}>
                  {day.intro}
                </p>
                <div>
                  {day.modules.map((module, i) => (
                    <div
                      key={i}
                      className="grid gap-6 md:gap-8 py-5"
                      style={{ borderTop: '1px solid rgba(0,0,0,0.07)', gridTemplateColumns: '2.5rem 1fr' }}
                    >
                      <div className="pt-0.5 text-[11px] font-normal tabular-nums" style={{ color: '#B89A4F' }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <p className="text-[14px] leading-[1.62] font-normal" style={{ color: '#3D3A35' }}>
                        {module}
                      </p>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Dokumentacija rada */}
      <section style={{ background: '#FAF8F4' }} className="py-20">
        <div className="container mx-auto px-6">

          {/* Header — narrow column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-14"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
              Dokumentacija rada
            </p>
            <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />
            <h2
              className="font-playfair font-semibold leading-[1.22] mb-6 text-[1.6rem] md:text-[1.85rem]"
              style={{ color: '#1F1D1A' }}
            >
              Klinički rad tijekom edukacije.
            </h2>
            <p className="text-[14px] leading-[1.72] font-normal" style={{ color: '#5F5A52' }}>
              Edukacija se ne gradi oko prezentacije, nego oko promatranja, korekcije i ponavljanja stvarnog rada rukama.
            </p>
          </motion.div>

          {/* Editorial image blocks — asymmetric composition */}
          <div className="max-w-4xl mx-auto">

            {/* Primary image — dominant, full width, cinematic ratio */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img width={427} height={640}
                  src="/lovable-uploads/atp-ante-palpacija.webp"
                  alt="Ante Antić — palpacija u radu"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="mt-4 flex items-start gap-4">
                <div className="w-4 h-px mt-2 flex-shrink-0" style={{ backgroundColor: 'rgba(0,0,0,0.18)' }} />
                <p className="text-[12px] leading-[1.65] font-normal" style={{ color: '#7A7570', letterSpacing: '0.025em' }}>
                  Preciznost ne dolazi iz sile pritiska, nego iz opažanja reakcije.
                </p>
              </div>
            </motion.div>

            {/* Secondary pair — asymmetric two-column */}
            <div className="grid grid-cols-5 gap-5 mt-5 items-end">

              {/* Left — slightly wider, 4/3 */}
              <motion.div
                className="col-span-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img width={480} height={640}
                    src="/lovable-uploads/atp-akupresurne-tocke-leda.webp"
                    alt="Akupresurne točke na leđima"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="mt-3 flex items-start gap-3">
                  <div className="w-3 h-px mt-2 flex-shrink-0" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }} />
                  <p className="text-[11px] leading-[1.65] font-normal" style={{ color: '#7A7570', letterSpacing: '0.025em' }}>
                    Kada prestaneš tražiti samo bolnu točku, počinješ vidjeti obrazac.
                  </p>
                </div>
              </motion.div>

              {/* Right — narrower, 1/1, offset upward */}
              <motion.div
                className="col-span-2 mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: '1/1' }}>
                  <img width={640} height={427}
                    src="/lovable-uploads/atp-rad-u-paru-demonstracija.webp"
                    alt="Rad u paru — klinička demonstracija"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="mt-3 flex items-start gap-3">
                  <div className="w-3 h-px mt-2 flex-shrink-0" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }} />
                  <p className="text-[11px] leading-[1.65] font-normal" style={{ color: '#7A7570', letterSpacing: '0.025em' }}>
                    Sigurnost se razvija kroz ponavljanje.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* O predavaču */}
      <section style={{ background: '#FAF8F4' }} className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

              {/* Left — photograph */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img width={1400} height={1867}
                    src="/lovable-uploads/ante-tretman-1400.webp"
                    srcSet="/lovable-uploads/ante-tretman-900.webp 900w, /lovable-uploads/ante-tretman-1400.webp 1400w"
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    alt="Ante Antić — cervikalna manualna terapija, klinička edukacija"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                    style={{ display: 'block' }}
                  />
                </div>
              </motion.div>

              {/* Right — editorial content */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="lg:pt-4"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                  O predavaču
                </p>
                <div className="w-10 h-px mb-7" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />

                <h2
                  className="font-playfair font-semibold leading-[1.2] mb-8 text-[1.85rem] md:text-[2.1rem]"
                  style={{ color: '#1F1D1A' }}
                >
                  Ante Antić
                </h2>

                <div className="space-y-4 mb-10" style={{ maxWidth: '62ch' }}>
                  <p className="text-[15px] leading-[1.75] font-normal" style={{ color: '#3D3A35' }}>
                    Više od 16 godina rada u manualnoj terapiji pretočeno je u sustav edukacije temeljen na kliničkom iskustvu, palpaciji i stvarnoj primjeni.
                  </p>
                  <p className="text-[15px] leading-[1.75] font-normal" style={{ color: '#3D3A35' }}>
                    Fokus edukacija nije na teorijskoj demonstraciji, nego na razvoju preciznosti, razumijevanja tkiva i sigurnosti u praktičnom radu.
                  </p>
                </div>

                {/* Separator */}
                <div className="mb-7" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }} />

                {/* Professional context */}
                <p className="text-[10px] uppercase tracking-[0.24em] font-normal mb-5" style={{ color: '#B89A4F' }}>
                  Profesionalni kontekst
                </p>

                <div className="mb-14">
                  {[
                    'Vice President za Hrvatsku — World Massage Federation',
                    'Organizator International Croatian Massage Championshipa',
                    'Međunarodni sudac za manualne i massage discipline',
                    'Više od 900 polaznika edukacija',
                    '16+ godina kliničkog i edukacijskog rada',
                  ].map((item, i) => (
                    <div key={i} className="py-3" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                      <p className="text-[13.5px] leading-[1.55] font-normal" style={{ color: '#5F5A52' }}>
                        {item}
                      </p>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
                </div>

                {/* CTA */}
                <button
                  className="text-[11px] uppercase tracking-[0.18em] font-normal py-3 px-8 transition-colors duration-300"
                  style={{ border: '1px solid rgba(0,0,0,0.28)', color: '#3D3A35', background: 'transparent', cursor: 'pointer' }}
                  onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#B89A4F'; b.style.borderColor = '#B89A4F'; b.style.color = '#fff'; }}
                  onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'transparent'; b.style.borderColor = 'rgba(0,0,0,0.28)'; b.style.color = '#3D3A35'; }}
                  onClick={() => { const el = document.getElementById('pricing'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  Pogledaj program
                </button>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Nakon edukacije — testimonials */}
      <section style={{ background: '#F7F3EE' }} className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Nakon edukacije
              </p>
              <div className="w-10 h-px mb-5" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />
              <p className="text-[14px] leading-[1.75] font-normal" style={{ color: '#7A7570', maxWidth: '48ch' }}>
                Kratka iskustva terapeuta koji su završili edukaciju.
              </p>
            </motion.div>

            <div>
              {[
                {
                  text: 'Velik dio edukacije temelji se na praktičnom radu koji se odmah može primijeniti u svakodnevnom radu.',
                  attr: 'Bruna Prnjak, fizioterapeutkinja',
                },
                {
                  text: 'Dobila sam puno više nego što sam očekivala od same edukacije.',
                  attr: 'Aleksandra Aleks, polaznica ATP edukacije',
                },
                {
                  text: 'Osjećam veću sigurnost u radu, a klijenti mi sve više poklanjaju povjerenje.',
                  attr: 'Irena Škarić, terapeutkinja',
                },
                {
                  text: 'Ante nesebično dijeli znanje i objašnjava kompleksne stvari na jasan način.',
                  attr: 'Alena Jurić, polaznica manualne terapije',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: i * 0.07, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className={i > 0 ? 'mt-8 pt-7' : ''}
                  style={i > 0 ? { borderTop: '1px solid rgba(0,0,0,0.07)' } : {}}
                >
                  <p
                    className="font-playfair mb-2"
                    style={{
                      fontSize: i === 0 ? '1.18rem' : '1.13rem',
                      lineHeight: i === 0 ? '1.55' : '1.65',
                      color: i === 0 ? '#1F1D1A' : 'rgba(31,29,26,0.80)',
                    }}
                  >
                    {item.text}
                  </p>
                  <p
                    className="text-[11px] uppercase tracking-[0.2em] font-normal"
                    style={{ color: 'rgba(31,29,26,0.40)' }}
                  >
                    {item.attr}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Kotizacija edukacije */}
      <section id="pricing" style={{ background: '#FAF8F4' }} className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

              {/* Left — Pricing */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                  Kotizacija edukacije
                </p>
                <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />

                <p className="text-[14px] leading-[1.75] font-normal mb-8" style={{ color: '#5F5A52', maxWidth: '46ch' }}>
                  Trodnevna praktična edukacija s fokusom na kliničku primjenu, palpaciju i integraciju terapijskih protokola.
                </p>

                <div className="flex items-baseline gap-3 mb-1">
                  <p
                    className="font-playfair font-semibold leading-none"
                    style={{ fontSize: '3.8rem', color: '#1F1D1A' }}
                  >
                    460 €
                  </p>
                  <p className="text-[12px] font-normal" style={{ color: '#B89A4F' }}>
                    Early Bird
                  </p>
                </div>
                <p className="text-[13px] font-normal mb-2" style={{ color: 'rgba(0,0,0,0.32)', textDecoration: 'line-through' }}>
                  Redovna cijena: 500 €
                </p>
                <p className="text-[11px] uppercase tracking-[0.16em] font-medium mb-8" style={{ color: '#B89A4F' }}>
                  Early Bird do 25.08.2026.
                </p>

                <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }} className="pt-7 space-y-4 mb-8">
                  {[
                    { bold: 'Akontacija 100 €', rest: ' potvrđuje rezervaciju mjesta.' },
                    { bold: 'Preostali iznos', rest: ' plaća se najkasnije 30 dana prije početka edukacije.' },
                    { bold: 'Broj mjesta', rest: ' ograničen je na maksimalno 12 polaznika.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="flex-shrink-0 mt-[3px]" style={{ color: '#B89A4F', fontSize: '11px' }}>—</span>
                      <p className="text-[13px] leading-[1.68] font-normal" style={{ color: '#5F5A52' }}>
                        <span style={{ color: '#1F1D1A', fontWeight: 500 }}>{item.bold}</span>{item.rest}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-[12px] leading-[1.65] font-normal mb-1" style={{ color: 'rgba(0,0,0,0.42)' }}>
                  Prijave se u pravilu zatvaraju 45 dana prije početka pojedine edukacije kako bismo na vrijeme organizirali održavanje tečaja.
                </p>
                <p className="text-[12px] leading-[1.65] font-normal mb-10" style={{ color: 'rgba(0,0,0,0.42)' }}>
                  Ako se javljaš nakon isteka tog roka, slobodno nas kontaktiraj na{' '}
                  <a href="mailto:info@uciliste-suprastudium.hr" style={{ color: '#B89A4F' }}>info@uciliste-suprastudium.hr</a>
                  {' '}ili nazovi{' '}
                  <a href="tel:+385958558953" style={{ color: '#B89A4F' }}>095 855 89 53</a>.
                  Ako postoji slobodno mjesto i organizacijske mogućnosti to dopuštaju, provjerit ćemo mogućnost naknadne prijave.
                </p>

                <button
                  className="text-[11px] uppercase tracking-[0.18em] font-normal py-3.5 px-12 transition-colors duration-300"
                  style={{ border: '1px solid rgba(0,0,0,0.28)', color: '#3D3A35', background: 'transparent', cursor: 'pointer' }}
                  onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#B89A4F'; b.style.borderColor = '#B89A4F'; b.style.color = '#fff'; }}
                  onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'transparent'; b.style.borderColor = 'rgba(0,0,0,0.28)'; b.style.color = '#3D3A35'; }}
                  onClick={() => window.open('https://tally.so/r/wA5kvD', '_blank', 'noopener,noreferrer')}
                >
                  Prijavi se
                </button>
              </motion.div>

              {/* Right — Included */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="lg:pt-2"
              >
                <p className="text-[10px] uppercase tracking-[0.24em] font-normal mb-5" style={{ color: '#B89A4F' }}>
                  Uključeno u edukaciju
                </p>
                <div>
                  {[
                    '24 sata praktične edukacije',
                    'PDF priručnik akupresure, 99 stranica',
                    'Anatomske ilustracije i trigger point materijali, 190 stranica',
                    '3 mjeseca mentorske podrške',
                    'Potvrda o edukaciji s mogućnošću upisa u e-radnu knjižicu',
                    'Pristup dodatnim stručnim materijalima',
                  ].map((item, i) => (
                    <div key={i} className="py-3.5" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                      <p className="text-[14px] leading-[1.55] font-normal" style={{ color: '#3D3A35' }}>
                        {item}
                      </p>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
                </div>

                <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                  <p className="text-[10px] uppercase tracking-[0.24em] font-normal mb-5" style={{ color: '#B89A4F' }}>
                    Termin i lokacija
                  </p>
                  <p className="text-[14px] leading-[1.75] font-normal mb-4" style={{ color: '#3D3A35' }}>
                    9.–11.10.2026. · Zagreb<br />
                    <span style={{ fontWeight: 500, color: '#1F1D1A' }}>Poliklinika Body Balance</span><br />
                    Frane Kesterčaneka 2b
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.14em] font-medium" style={{ color: '#B89A4F' }}>
                    Early Bird do 25.08.2026.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Bonus za prva 3 prijavljena */}
      <section style={{ background: '#FAF8F4', borderTop: '1px solid rgba(0,0,0,0.05)' }} className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Bonus za prva 3 prijavljena
              </p>
              <div className="w-10 h-px mb-9" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />
              <p className="text-[14px] leading-[1.85] font-normal" style={{ color: '#5F5A52', maxWidth: '54ch' }}>
                Prva 3 polaznika koja rezerviraju mjesto dobivaju dodatne resurse koji nisu dio standardnog programa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                {bonusi.map((bonus, i) => (
                  <div
                    key={i}
                    className="p-8"
                    style={{
                      background: 'white',
                      borderRight: i % 2 === 0 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                      borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                    }}
                  >
                    <p className="font-playfair font-normal leading-none mb-5" style={{ fontSize: '2rem', color: 'rgba(184,154,79,0.28)' }}>
                      {bonus.n}
                    </p>
                    <p className="text-[14.5px] leading-snug font-medium mb-3" style={{ color: '#1F1D1A' }}>
                      {bonus.title}
                    </p>
                    <p className="text-[12.5px] leading-[1.72] font-normal" style={{ color: '#8A8480' }}>
                      {bonus.note}
                    </p>
                    {bonus.bullets && (
                      <ul className="mt-4 space-y-2">
                        {bonus.bullets.map((b, j) => (
                          <li key={j} className="flex gap-3 text-[12.5px] leading-[1.6] font-normal" style={{ color: '#8A8480' }}>
                            <span className="flex-shrink-0" style={{ color: 'rgba(184,154,79,0.55)' }}>—</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {bonus.disclaimer && (
                      <p className="text-[12px] leading-[1.7] font-normal mt-5" style={{ color: 'rgba(0,0,0,0.42)', fontStyle: 'italic' }}>
                        {bonus.disclaimer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#FAF8F4' }} className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Pitanja i odgovori
              </p>
              <h2 className="font-playfair font-semibold text-[1.75rem] leading-[1.25]" style={{ color: '#1F1D1A' }}>
                Informacije o edukaciji.
              </h2>
            </motion.div>

            <Accordion type="single" collapsible defaultValue="item-0">

              <AccordionItem value="item-0" className="border-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <AccordionTrigger className="py-7 text-left hover:no-underline text-[14.5px] font-normal [&>svg]:opacity-20 [&>svg]:w-3 [&>svg]:h-3" style={{ color: '#1F1D1A' }}>
                  Kada i gdje se održava edukacija?
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <p className="text-[14px] leading-[1.85]" style={{ color: '#5F5A52' }}>
                    Termin: 9.–11. listopada 2026., Zagreb — Poliklinika Body Balance, Frane Kesterčaneka 2b.
                  </p>
                  <p className="text-[14px] leading-[1.8] mt-3" style={{ color: '#5F5A52' }}>
                    Edukacija se organizira jednom godišnje. Termine u drugim gradovima možeš pratiti na stranici rasporeda.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-1" className="border-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <AccordionTrigger className="py-7 text-left hover:no-underline text-[14.5px] font-normal [&>svg]:opacity-20 [&>svg]:w-3 [&>svg]:h-3" style={{ color: '#1F1D1A' }}>
                  Je li potrebno prethodno iskustvo?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-[14px] leading-[1.8] mb-3" style={{ color: '#5F5A52' }}>
                    Program je strukturiran tako da ga mogu pratiti:
                  </p>
                  <ul className="space-y-1 mb-3">
                    {['početnici bez prethodnog iskustva', 'terapeuti i zdravstveni djelatnici s praktičnim iskustvom'].map((item, i) => (
                      <li key={i} className="text-[14px] leading-[1.8] flex gap-3" style={{ color: '#5F5A52' }}>
                        <span style={{ color: 'rgba(0,0,0,0.22)' }}>—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[14px] leading-[1.8]" style={{ color: '#5F5A52' }}>
                    Fokus edukacije je na razumijevanju palpacije, procjene tkiva i kliničke primjene tehnika.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <AccordionTrigger className="py-7 text-left hover:no-underline text-[14.5px] font-normal [&>svg]:opacity-20 [&>svg]:w-3 [&>svg]:h-3" style={{ color: '#1F1D1A' }}>
                  Dobiva li se certifikat nakon edukacije?
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <p className="text-[14px] leading-[1.85]" style={{ color: '#5F5A52' }}>
                    Nakon završetka programa izdaje se potvrda o edukaciji koja se može evidentirati kao dodatno stručno obrazovanje u e-radnoj knjižici.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <AccordionTrigger className="py-7 text-left hover:no-underline text-[14.5px] font-normal [&>svg]:opacity-20 [&>svg]:w-3 [&>svg]:h-3" style={{ color: '#1F1D1A' }}>
                  Što je uključeno u kotizaciju?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-[14px] leading-[1.8] mb-3" style={{ color: '#5F5A52' }}>
                    Kotizacija uključuje:
                  </p>
                  <ul className="space-y-1">
                    {[
                      '24 sata praktične edukacije',
                      'PDF priručnik akupresure (99 stranica)',
                      'anatomske ilustracije i trigger point materijale (190 stranica)',
                      '3 mjeseca mentorske podrške',
                      'potvrdu o edukaciji s mogućnošću upisa u e-radnu knjižicu',
                      'pristup dodatnim stručnim materijalima',
                    ].map((item, i) => (
                      <li key={i} className="text-[14px] leading-[1.8] flex gap-3" style={{ color: '#5F5A52' }}>
                        <span style={{ color: 'rgba(0,0,0,0.22)' }}>—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <AccordionTrigger className="py-7 text-left hover:no-underline text-[14.5px] font-normal [&>svg]:opacity-20 [&>svg]:w-3 [&>svg]:h-3" style={{ color: '#1F1D1A' }}>
                  Što ako nisam u mogućnosti prisustvovati jednom dijelu edukacije?
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <p className="text-[14px] leading-[1.85]" style={{ color: '#5F5A52' }}>
                    Polaznicima ostaju dostupni edukacijski materijali i dodatne upute za samostalno ponavljanje gradiva nakon edukacije.
                  </p>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }} />

            <div className="mt-10">
              <p className="text-[13px] font-normal" style={{ color: '#7A7570' }}>
                Još pitanja?
              </p>
              <p className="text-[13px] mt-2 font-normal" style={{ color: '#9A9590' }}>
                Kontakt za informacije i prijave:{' '}
                <a href="mailto:info@uciliste-suprastudium.hr" style={{ color: '#5F5A52' }}>
                  info@uciliste-suprastudium.hr
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <CourseRecommendations currentCourse="akupresura-trigger-point" />



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
        }} className="relative w-full max-w-4xl aspect-video bg-black rounded-sm overflow-hidden" onClick={e => e.stopPropagation()}>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-10 bg-[#141311]/70 hover:bg-[#141311]/85 text-white" onClick={() => setVideoModalOpen(false)}>
                <X className="w-6 h-6" />
              </Button>
              
              <iframe src="https://www.youtube.com/embed/KV_BrRMPHi4?autoplay=1" className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen />
            </motion.div>
          </motion.div>}
      </AnimatePresence>

      <CourseFooter />
    </div>;
};
export default AkupresuraPage;