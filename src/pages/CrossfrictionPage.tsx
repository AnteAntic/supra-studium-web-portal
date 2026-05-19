import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CourseStickyBar } from '@/components/ui/CourseStickyBar';
import { CFMHero } from '@/components/CFMHero';
import { CourseFooter } from '@/components/CourseFooter';
import { CourseRecommendations } from '@/components/course/CourseRecommendations';

const CrossfrictionPage = () => {
  const scrollToProgram = () => {
    const el = document.getElementById('program');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLocations = () => {
    const el = document.getElementById('lokacije');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">

      <CFMHero
        onScrollToProgram={scrollToProgram}
        onScrollToLocations={scrollToLocations}
      />

      <CourseStickyBar
        locations={[
          { city: "Zagreb", dates: "termin u pripremi" },
          { city: "Split", dates: "termin u pripremi" },
          { city: "Rijeka", dates: "termin u pripremi" },
        ]}
        price=""
        ctaText="Rezerviraj mjesto"
        ctaHref="https://tally.so/r/wA5kvD"
      />

      {/* CFM Four Systems — Methodology Framework */}
      <section style={{ background: '#F4F1EA' }} className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.25fr] gap-16 lg:gap-24 items-start">

              {/* Left — Editorial anchor */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-32"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-5" style={{ color: '#B89A4F' }}>
                  Metodologija rada
                </p>
                <div className="w-10 h-px mb-9" style={{ backgroundColor: 'rgba(184,154,79,0.30)' }} />
                <h2
                  className="font-playfair font-semibold leading-[1.18] mb-10 text-[1.85rem] md:text-[2.05rem]"
                  style={{ color: '#1F1D1A' }}
                >
                  Terapija počinje<br />
                  kada simptom postane<br />
                  dio obrasca.
                </h2>
                <p className="text-[14px] leading-[1.82] font-normal mb-10" style={{ color: '#5F5A52', maxWidth: '38ch' }}>
                  CFM Body Reset Method nije skup tehnika. To je okvir kliničkog razmišljanja koji palpatorni nalaz, tkivnu napetost i funkcionalne odnose pretvara u jednu terapijsku odluku.
                </p>
                <p className="text-[13px] leading-[1.72] font-normal" style={{ color: '#8A8580', maxWidth: '36ch' }}>
                  Četiri sustava. Jedan okvir. Svaki tretman počinje ovdje.
                </p>
              </motion.div>

              {/* Right — Four Systems */}
              <div>
                {[
                  {
                    num: '01',
                    name: 'Palpacija',
                    quote: 'Terapijska preciznost počinje kvalitetom dodira.',
                    body: 'Palpacija u CFM-u nije samo provjera bolnog mjesta. To je način slušanja tkiva. Razlika između fibroznog i zdravog klizanja fascije, između adherencije i normalnog otpora, između napete trake i reaktivne zaštite, čita se rukom, ne samo anatomijom.',
                  },
                  {
                    num: '02',
                    name: 'Fascijalni odgovor',
                    quote: 'Tkivo ne reagira lokalno. Reagira kroz obrazac.',
                    body: 'Fascija nema lokalne odgovore. Svaka restrikcija u lancu mijenja mehaniku segmenata koji nisu ni blizu mjesta tretmana. CFM metodologija uči terapeuta prepoznati gdje obrazac počinje, a ne samo gdje boli.',
                  },
                  {
                    num: '03',
                    name: 'Funkcionalna integracija',
                    quote: 'Tretman mora promijeniti funkciju, ne samo osjećaj.',
                    body: 'Uspješan tretman nije onaj koji smanjuje bol za sat vremena. Uspješan tretman mijenja obrazac kretanja, kvalitetu tkiva i klijentovu sposobnost da se vrati u funkciju. CFM procjenjuje promjenu funkcije, ne samo simptoma.',
                  },
                  {
                    num: '04',
                    name: 'Terapijsko razmišljanje',
                    quote: 'Najvažnija tehnika je sposobnost donošenja odluke.',
                    body: 'Znati tehniku je početak. Znati kada je primijeniti, na koje tkivo, u kojoj fazi tretmana i u kom smjeru, to je klinička kompetencija. CFM gradi strukturu donošenja odluke, a ne samo repertoar tehnika.',
                  },
                ].map((system, i) => (
                  <motion.div
                    key={system.num}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: i * 0.1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="py-8"
                    style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}
                  >
                    <div className="flex items-baseline gap-4 mb-3">
                      <span
                        className="font-normal shrink-0"
                        style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'rgba(0,0,0,0.28)' }}
                      >
                        {system.num}
                      </span>
                      <span
                        className="font-normal uppercase"
                        style={{ fontSize: '10px', letterSpacing: '0.22em', color: '#B89A4F' }}
                      >
                        {system.name}
                      </span>
                    </div>
                    <p
                      className="font-playfair font-normal leading-[1.55] mb-4"
                      style={{ fontSize: '15px', fontStyle: 'italic', color: '#1F1D1A' }}
                    >
                      {system.quote}
                    </p>
                    <p
                      className="font-normal leading-[1.72]"
                      style={{ fontSize: '13px', color: '#5F5A52' }}
                    >
                      {system.body}
                    </p>
                  </motion.div>
                ))}
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }} />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CFM Thinking Shift — Observational manifesto */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: '#1A1814' }}>

        {/* Documentary grain — matches hero grain language */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '300px 300px',
            opacity: 0.025,
            mixBlendMode: 'screen',
          }}
        />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.35fr] gap-16 lg:gap-24 items-start">

              {/* Left — Sticky editorial anchor */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-32"
              >
                <p
                  className="text-[10px] uppercase tracking-[0.28em] font-normal mb-5"
                  style={{ color: 'rgba(184,154,79,0.65)' }}
                >
                  Klinički pomak
                </p>
                <div
                  className="w-10 h-px mb-9"
                  style={{ backgroundColor: 'rgba(184,154,79,0.22)' }}
                />
                <h2
                  className="font-playfair font-semibold leading-[1.17] mb-10 text-[1.85rem] md:text-[2.05rem]"
                  style={{ color: 'rgba(255,255,255,0.92)' }}
                >
                  Kliničko razmišljanje<br />
                  počinje kada simptom<br />
                  prestane biti jedina informacija.
                </h2>
                <p
                  className="text-[14px] leading-[1.82] font-normal"
                  style={{ color: 'rgba(255,255,255,0.56)', maxWidth: '36ch' }}
                >
                  CFM ne mijenja samo način rada. Mijenja način na koji terapeut interpretira ono što vidi, osjeća i povezuje tijekom tretmana.
                </p>
              </motion.div>

              {/* Right — Observational statements */}
              <div>
                {[
                  {
                    a: 'Ne tražiš više samo bolno mjesto.',
                    b: 'Tražiš segment koji mijenja obrazac.',
                    py: 'py-9',
                  },
                  {
                    a: 'Tretman nije gotov kada bol padne.',
                    b: 'Gotov je kada se promijeni funkcija.',
                    py: 'py-8',
                  },
                  {
                    a: 'Palpacija nije pritisak.',
                    b: 'Palpacija je interpretacija odgovora tkiva.',
                    py: 'py-10',
                  },
                  {
                    a: 'Pitanje nije što je napeto.',
                    b: 'Pitanje je zašto tijelo ne može pustiti.',
                    py: 'py-8',
                  },
                  {
                    a: 'Protokol ti daje strukturu.',
                    b: 'Klinički sud ti daje smjer.',
                    py: 'py-9',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.0, delay: i * 0.12, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className={item.py}
                    style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <p
                      className="font-playfair font-normal leading-[1.52]"
                      style={{ fontSize: '18px', color: 'rgba(255,255,255,0.88)' }}
                    >
                      {item.a}
                    </p>
                    <p
                      className="font-playfair font-normal leading-[1.52] mt-1"
                      style={{ fontSize: '18px', color: 'rgba(255,255,255,0.38)', fontStyle: 'italic' }}
                    >
                      {item.b}
                    </p>
                  </motion.div>
                ))}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Body Reset Method — Three Procedural Phases */}
      <section style={{ background: '#F4F1EA' }} className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start">

              {/* Left — Sticky anchor */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-32"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-5" style={{ color: '#B89A4F' }}>
                  Body Reset Method
                </p>
                <div className="w-10 h-px mb-9" style={{ backgroundColor: 'rgba(184,154,79,0.30)' }} />
                <h2
                  className="font-playfair font-semibold leading-[1.18] mb-12 text-[1.85rem] md:text-[2.05rem]"
                  style={{ color: '#1F1D1A' }}
                >
                  Tri faze jednog<br />
                  terapijskog okvira.
                </h2>
                <p
                  className="text-[14.5px] leading-[1.82] font-normal mb-5"
                  style={{ color: '#5F5A52', maxWidth: '42ch' }}
                >
                  Body Reset nije skup tehnika koje se dodaju jedna na drugu. To je redoslijed odluka: prvo procjena, zatim terapijski reset, zatim provjera funkcije.
                </p>
              </motion.div>

              {/* Right — Three phases */}
              <div>
                {[
                  {
                    num: '01',
                    phase: 'Procjena',
                    statement: 'Ne počinješ tehnikom.\nPočinješ pitanjem što tijelo pokušava zaštititi.',
                    body: 'Palpacija, funkcionalni test, kvaliteta pokreta i reakcija tkiva daju smjer prije nego što odabereš tehniku.',
                    py: 'py-8',
                  },
                  {
                    num: '02',
                    phase: 'Reset',
                    statement: 'Ne tretiraš samo mjesto boli.\nResetiraš tkivni odgovor, ne samo simptom.',
                    body: 'Manualni rad, cross friction, fascijalna obrada i funkcionalna masaža biraju se prema palpatornom nalazu — ne prema rutini.',
                    py: 'py-12',
                  },
                  {
                    num: '03',
                    phase: 'Provjera promjene',
                    statement: 'Tretman ne završava kada se bol smanji.\nZavršava kada kretanje potvrdi da je sustav prihvatio promjenu.',
                    body: 'Funkcionalni retest i procjena kvalitete pokreta verificiraju je li živčani i motorički sustav integrirao terapijsku intervenciju, a ne samo privremeno smanjio zaštitni odgovor.',
                    py: 'py-9',
                  },
                ].map((item, i) => {
                  const lines = item.statement.split('\n');
                  return (
                    <motion.div
                      key={item.num}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1.0, delay: i * 0.12, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className={item.py}
                      style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}
                    >
                      <div className="flex items-baseline gap-4 mb-4">
                        <span
                          className="font-normal shrink-0"
                          style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'rgba(0,0,0,0.25)' }}
                        >
                          {item.num}
                        </span>
                        <span
                          className="font-normal uppercase"
                          style={{ fontSize: '10px', letterSpacing: '0.22em', color: '#B89A4F' }}
                        >
                          {item.phase}
                        </span>
                      </div>
                      <p
                        className="font-playfair font-normal leading-[1.52] mb-1"
                        style={{ fontSize: '17px', color: '#1F1D1A' }}
                      >
                        {lines[0]}
                      </p>
                      {lines[1] && (
                        <p
                          className="font-playfair font-normal leading-[1.52] mb-5"
                          style={{ fontSize: '17px', color: '#1F1D1A', fontStyle: 'italic', opacity: 0.55 }}
                        >
                          {lines[1]}
                        </p>
                      )}
                      {!lines[1] && <div className="mb-5" />}
                      <p
                        className="font-normal leading-[1.72]"
                        style={{ fontSize: '13px', color: '#5F5A52' }}
                      >
                        {item.body}
                      </p>
                    </motion.div>
                  );
                })}
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }} />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Klinička observacija */}
      <section className="bg-white pt-24 pb-0">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start max-w-5xl mx-auto">

            {/* Left: Editorial text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
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
                Procjena i tretman<br />
                prestaju biti<br />
                odvojeni procesi.
              </h2>
              <p className="text-[14px] leading-[1.82] font-normal mb-12" style={{ color: '#5F5A52' }}>
                Terapijska informacija više ne dolazi samo iz simptoma. Dolazi iz odnosa između pokreta, zaštite i odgovora tijela tijekom tretmana.
              </p>

              <p className="text-[14.5px] leading-[1.78] font-normal mb-7" style={{ color: '#3D3A35' }}>
                Cross friction i funkcionalna masaža nisu dvije zasebne metode. To je jedan klinički pristup s dva ulaza: tkivna restrikcija i funkcionalno ograničenje kretanja.
              </p>

              <p className="text-[14.5px] leading-[1.78] font-normal mb-14" style={{ color: '#5F5A52' }}>
                Palpatorni nalaz počinje određivati smjer tretmana — ne anatomska lokalizacija simptoma.
              </p>

              <div className="w-6 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.25)' }} />

              <p className="text-[10px] uppercase tracking-[0.22em] font-normal mb-5" style={{ color: '#B89A4F' }}>
                Što počinješ primjećivati
              </p>
              <div>
                {[
                  'Razliku između lokalne zaštite i sistemskog obrasca kompenzacije',
                  'Kada palpatorni nalaz odgovara funkcionalnom ograničenju u pokretu',
                  'Znakove tkivnog odgovora koji ukazuju na promjenu ili rezistenciju',
                  'Granicu između mehaničke restrikcije i regulatornog odgovora tkiva',
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
              transition={{ duration: 1.0, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="lg:pt-16"
            >
              <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                <img
                  src="/cfm-clinical-observation.jpg"
                  alt="Klinička procjena — terapeutska pažnja"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'grayscale(8%) contrast(1.02)',
                    display: 'block',
                    objectPosition: 'center 30%',
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
        <div style={{ background: 'linear-gradient(to bottom, #ffffff, #F4F1EA)', height: '5rem' }} />
      </section>

      {/* Intermezzo */}
      <section style={{ background: '#F4F1EA' }} className="py-16 md:py-20">
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
              Fascija pamti.
            </p>
            <p className="text-[14px] leading-[1.85] font-normal mt-6" style={{ color: '#5F5A52' }}>
              Svaka adherencija je trag:<br />
              ozljede, kompenzacije, ponavljanja.
            </p>
            <p className="text-[14px] leading-[1.85] font-normal mt-6" style={{ color: '#5F5A52' }}>
              Razlika nije u jačini pritiska,<br />
              nego u preciznosti lociranja i čitanja odgovora.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Moduli kliničkog razvoja */}
      <section id="program" style={{ background: '#F4F1EA' }} className="pt-4 pb-0">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Edukacijski program
              </p>
              <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />
              <h2
                className="font-playfair font-semibold leading-[1.22] text-[1.9rem] md:text-[2.2rem]"
                style={{ color: '#1F1D1A' }}
              >
                Tri razine kliničke<br />
                kompetencije.
              </h2>
              <p className="text-[14px] leading-[1.82] font-normal mt-8" style={{ color: '#7A7570', maxWidth: '52ch' }}>
                Program ne gradi samo tehnički repertoar — gradi sposobnost prepoznavanja kako tijelo kompenzira, reagira i može se terapijski resetirati kao cjelina.
              </p>
            </motion.div>

            {[
              {
                label: 'Modul I',
                title: 'Križobolja, neurodinamika i odgovor tkiva',
                desc: 'Polazna točka kliničke prakse. Lumbalna regija kao prostor u kojemu se susreću lokalni tkivni nalaz i sistemska kompenzacija — i gdje terapeut počinje razvijati sposobnost razlikovanja jednog od drugog.',
                items: [
                  'Lokalna restrikcija nasuprot kompenzacijskog obrasca — palpacijska razlika',
                  'Neurodinamička procjena i neuralna napetost u lumbalnoj prezentaciji',
                  'Cross friction protokol za lumbalnu regiju — fascija, duboki slojevi, odgovor tkiva',
                  'Tkivni odgovor kao klinička informacija, ne samo potvrda tehnike',
                ],
                note: 'Modul I nudi potpunu kliničku sliku najčešćih lumbalnih prezentacija i može se pohađati kao samostalna edukacija.',
              },
              {
                label: 'Modul II',
                title: 'Rameni pojas, cervikalna regija i kompenzacijski obrasci',
                desc: 'Simptomi u ramenskom pojasu i cervikalnoj regiji rijetko su lokalni. Gotovo uvijek odražavaju kompenzacijski obrazac iz šire funkcionalne cjeline.',
                items: [
                  'Palpacijska dijagnostika ramenskog pojasa — rotatorska manšeta, periartikularna fascija',
                  'Cervikalna regija: neuralna napetost, fascijalni sustav i kompenzacijska logika',
                  'Prepoznavanje kada je simptom lokalni nalaz i kada je kompenzacijski odgovor',
                  'Integracija cross friction i funkcionalne masaže u protokolu gornjeg dijela tijela',
                ],
                note: null,
              },
              {
                label: 'Modul III',
                title: 'Klinička integracija i terapijsko razmišljanje u realnom vremenu',
                desc: 'Treći modul nije o više tehnika. On je o sposobnosti donošenja kliničke odluke u tijeku tretmana — integraciji palpacijskog nalaza, funkcionalnog obrasca i tkivnog odgovora u jedan koherentan terapijski dijalog.',
                items: [
                  'Složene prezentacije: višestruka restrikcija, kronični obrazac, nelinearna logika simptoma',
                  'Terapijsko razmišljanje u pokretu — palpatorni nalaz određuje smjer, ne unaprijed zadani redoslijed',
                  'Cross Friction i funkcionalna masaža kao kontinuirani klinički odgovor — slijed određuje nalaz, ne pozicija u shemi',
                  'Procjena, intervencija i provjera promjene kao jedan integrirani klinički čin',
                ],
                note: null,
              },
            ].map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.85, delay: i * 0.06, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="py-14"
                style={{ borderTop: '1px solid rgba(0,0,0,0.09)' }}
              >
                <div className="grid lg:grid-cols-[13rem_1fr] gap-10 lg:gap-16">

                  <div className="lg:pt-1">
                    <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-4" style={{ color: '#B89A4F' }}>
                      {mod.label}
                    </p>
                    {mod.note && (
                      <p className="text-[12px] leading-[1.72] font-normal mt-6 hidden lg:block" style={{ color: 'rgba(0,0,0,0.38)', maxWidth: '17ch' }}>
                        {mod.note}
                      </p>
                    )}
                  </div>

                  <div>
                    <h3
                      className="font-playfair font-semibold leading-[1.26] mb-5 text-[1.35rem] md:text-[1.52rem]"
                      style={{ color: '#1F1D1A' }}
                    >
                      {mod.title}
                    </h3>
                    <p className="text-[14px] leading-[1.78] font-normal mb-10" style={{ color: '#5F5A52' }}>
                      {mod.desc}
                    </p>
                    {mod.note && (
                      <p className="text-[12px] leading-[1.72] font-normal mb-8 lg:hidden" style={{ color: 'rgba(0,0,0,0.42)' }}>
                        {mod.note}
                      </p>
                    )}
                    <div>
                      {mod.items.map((item, j) => (
                        <div key={j} className="py-4" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                          <p className="text-[13.5px] leading-[1.65] font-normal" style={{ color: '#3D3A35' }}>{item}</p>
                        </div>
                      ))}
                      <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Weekend Intensive Structure */}
      <section style={{ background: '#F4F1EA' }} className="pt-20 pb-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Modul I · Struktura vikenda
              </p>
              <h2
                className="font-playfair font-semibold leading-[1.22] text-[1.6rem] md:text-[1.85rem]"
                style={{ color: '#1F1D1A' }}
              >
                Dva dana kliničke integracije.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-0">
              {[
                {
                  day: 'Dan 1 · Subota',
                  title: 'Cross friction i kliničko čitanje tkiva',
                  desc: 'Anatomija fascije kao terapijski kontekst. Palpacijska lokalizacija restrikcija, odgovor tkiva i razlikovanje lokalnog nalaza od kompenzacijskog obrasca.',
                  items: [
                    'Fascijalna anatomija u kliničkom kontekstu',
                    'Cross friction — mehanizam, indikacije, apliciranje',
                    'Palpacijska lokalizacija fibroznih restrikcija',
                    'Regionalni protokoli: lumbalna i cervikalna regija',
                    'Čitanje tkivnog odgovora između aplikacija',
                  ],
                },
                {
                  day: 'Dan 2 · Nedjelja',
                  title: 'Funkcionalna integracija i terapijska odluka',
                  desc: 'Funkcionalna masaža kao nastavak kliničkog nalaza. Integracija tehnika u jedinstven tretman koji se prilagođava odgovoru tijela u realnom vremenu.',
                  items: [
                    'Principi funkcionalne masaže i razlika od klasičnog pristupa',
                    'Kombiniranje tehnika prema onome što tijelo pokazuje',
                    'Protokoli za ramenski pojas, kuk i periferiju',
                    'Klinička adaptacija u tijeku tretmana — kada plan ustupa mjesto nalazu',
                    'Klinički Q&A: konkretne prezentacije iz prakse',
                  ],
                },
              ].map((day, dayIdx) => (
                <motion.div
                  key={dayIdx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.85, delay: dayIdx * 0.08, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className={`py-10 ${dayIdx === 0 ? 'md:pr-14' : 'md:pl-14'}`}
                  style={{ borderTop: '1px solid rgba(0,0,0,0.09)' }}
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] font-normal mb-4" style={{ color: 'rgba(0,0,0,0.38)' }}>
                    {day.day}
                  </p>
                  <h3
                    className="font-playfair font-semibold leading-[1.28] mb-4 text-[1.15rem] md:text-[1.28rem]"
                    style={{ color: '#1F1D1A' }}
                  >
                    {day.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.72] font-normal mb-8" style={{ color: '#5F5A52' }}>
                    {day.desc}
                  </p>
                  <div>
                    {day.items.map((item, i) => (
                      <div
                        key={i}
                        className="grid gap-5 py-4"
                        style={{ borderTop: '1px solid rgba(0,0,0,0.07)', gridTemplateColumns: '1.6rem 1fr' }}
                      >
                        <span className="text-[11px] font-normal tabular-nums pt-0.5" style={{ color: '#B89A4F' }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-[13.5px] leading-[1.6] font-normal" style={{ color: '#3D3A35' }}>{item}</p>
                      </div>
                    ))}
                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Klinički rad */}
      <section style={{ background: '#FAF8F4' }} className="pt-20 pb-0">
        <div className="container mx-auto px-6">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
              Edukacijska praksa
            </p>
            <div className="w-10 h-px mb-7" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />
            <h2
              className="font-playfair font-semibold leading-[1.22] mb-5 text-[1.6rem] md:text-[1.85rem]"
              style={{ color: '#1F1D1A' }}
            >
              Klinički rad tijekom edukacije.
            </h2>
            <p className="text-[14px] leading-[1.72] font-normal" style={{ color: '#5F5A52' }}>
              Edukacija se gradi oko promatranja, korekcije i ponavljanja stvarnog rada rukama.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">

            {/* Image 1 — cinematic hero, full width */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/cfm-hero-documentation.jpg"
                  alt="Klinička koncentracija — terapijsko promatranje"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ display: 'block', objectPosition: 'center 30%' }}
                />
              </div>
              <div className="mt-3 flex items-start gap-3">
                <div className="w-4 h-px mt-[9px] flex-shrink-0" style={{ backgroundColor: 'rgba(0,0,0,0.14)' }} />
                <p className="text-[11.5px] leading-[1.6] font-normal" style={{ color: '#9A9590', letterSpacing: '0.02em' }}>
                  Preciznost nastaje kroz promatranje odgovora, ne kroz silu.
                </p>
              </div>
            </motion.div>

            {/* Image 2 — close-up pressure, narrower, right-offset */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.95, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mt-8 md:mt-10"
            >
              <div className="md:ml-auto md:max-w-[52%]">
                <div className="overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <img
                    src="/cfm-closeup-pressure.jpg"
                    alt="Primjena tlaka — tkivni odgovor u fokusu"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ display: 'block', objectPosition: 'center 20%' }}
                  />
                </div>
                <div className="mt-3 flex items-start gap-3">
                  <div className="w-4 h-px mt-[9px] flex-shrink-0" style={{ backgroundColor: 'rgba(0,0,0,0.14)' }} />
                  <p className="text-[11.5px] leading-[1.6] font-normal" style={{ color: '#9A9590', letterSpacing: '0.02em' }}>
                    Klinička sigurnost dolazi iz razumijevanja promjene.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image 3 — guided clinical learning, left-anchored */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.95, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mt-8 md:mt-10"
            >
              <div className="md:max-w-[74%]">
                <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img
                    src="/cfm-mentor-guidance.jpg"
                    alt="Mentorski rad — vođena klinička korekcija"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ display: 'block', objectPosition: 'center top' }}
                  />
                </div>
                <div className="mt-3 flex items-start gap-3">
                  <div className="w-4 h-px mt-[9px] flex-shrink-0" style={{ backgroundColor: 'rgba(0,0,0,0.14)' }} />
                  <p className="text-[11.5px] leading-[1.6] font-normal" style={{ color: '#9A9590', letterSpacing: '0.02em' }}>
                    Terapijska odluka nastaje tijekom rada, ne prije njega.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Dark manifesto */}
      <section style={{ background: '#1A1814' }} className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2
              className="font-playfair font-semibold leading-[1.30]"
              style={{ fontSize: 'clamp(1.65rem, 3.2vw, 2.15rem)', color: 'rgba(255,255,255,0.88)' }}
            >
              Terapijska odluka ne nastaje iz protokola.
              <br />
              Nastaje iz onoga što tijelo pokaže.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Metodološki pristup — manifesto */}
      <section style={{ background: '#FAF8F4' }} className="relative py-28 md:py-32 overflow-hidden">

        {/* Parchment grain — tactile surface depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='280' height='280' filter='url(%23g)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '280px 280px',
            opacity: 0.018,
            mixBlendMode: 'multiply',
          }}
        />

        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">

            <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-16 items-start">

              {/* Left — manifesto portrait, bleeds slightly */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="lg:-ml-6 xl:-ml-10 relative group"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img
                    src="/cfm-manifesto-portrait.jpg"
                    alt="Klinička prisutnost — terapijsko razmišljanje"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{
                      display: 'block',
                      objectPosition: 'center 12%',
                      filter: 'contrast(1.04) brightness(0.94)',
                      transition: 'transform 1.1s cubic-bezier(0.25, 0.1, 0.25, 1), filter 1.1s ease',
                    }}
                    onMouseEnter={e => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.transform = 'scale(1.018)';
                      img.style.filter = 'contrast(1.04) brightness(0.97)';
                    }}
                    onMouseLeave={e => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.transform = 'scale(1)';
                      img.style.filter = 'contrast(1.04) brightness(0.94)';
                    }}
                  />
                  {/* Warm atmospheric overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'rgba(14,10,6,0.13)', mixBlendMode: 'multiply' }}
                  />
                  {/* Cinematic bottom grounding */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(10,7,4,0.28) 100%)' }}
                  />
                </div>
              </motion.div>

              {/* Right — editorial methodology statement */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.95, delay: 0.18, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="lg:pt-10 lg:sticky lg:top-32"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                  Metodološki pristup
                </p>
                <div className="w-10 h-px mb-11" style={{ backgroundColor: 'rgba(184,154,79,0.32)' }} />

                <h2
                  className="font-playfair font-semibold leading-[1.22] mb-14"
                  style={{ fontSize: 'clamp(1.65rem, 2.6vw, 2.05rem)', color: '#1F1D1A' }}
                >
                  CFM Body Reset<br />
                  nije tehnika.<br />
                  To je način kliničkog<br />
                  razmišljanja.
                </h2>

                <div className="mb-10" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />

                <div style={{ maxWidth: '42ch' }}>
                  <p className="text-[13.5px] leading-[1.95] font-normal mb-8" style={{ color: '#6B6560' }}>
                    Razvijen iz višegodišnjeg rada s prezentacijama gdje tkivni nalaz nije odgovarao predviđenom redoslijedu. Gdje je funkcionalni odgovor bio jedini pouzdan vodič.
                  </p>
                  <p className="text-[13.5px] leading-[1.95] font-normal mb-16" style={{ color: '#6B6560' }}>
                    Spaja cross friction, palpacijsku preciznost i razumijevanje tkivnih odnosa u jedan klinički dijalog s tijelom.
                  </p>

                  {/* Manifesto quote — refined vertical accent */}
                  <div className="relative pl-7">
                    <div
                      className="absolute left-0 top-[3px] bottom-[3px]"
                      style={{ width: '1px', backgroundColor: 'rgba(184,154,79,0.28)' }}
                    />
                    <p
                      className="font-playfair font-normal"
                      style={{
                        fontSize: 'clamp(1.12rem, 1.9vw, 1.3rem)',
                        lineHeight: '1.60',
                        color: '#1F1D1A',
                        fontStyle: 'italic',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      Terapeut ne uči protokol.<br />
                      Uči čitati tijelo.
                    </p>
                  </div>
                </div>

                <p
                  className="text-[12.5px] leading-[1.75] font-normal mt-14"
                  style={{ color: 'rgba(0,0,0,0.36)', maxWidth: '42ch', fontStyle: 'italic' }}
                >
                  Taj proces odvija se vikendom, u parovima — u jednakom kliničkom formatu na svakoj lokaciji.
                </p>
                <div className="mt-8" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
                <p
                  className="text-[10px] uppercase tracking-[0.22em] font-normal mt-5"
                  style={{ color: 'rgba(0,0,0,0.20)' }}
                >
                  Ante Antić · CFM Body Reset Method
                </p>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Kotizacija edukacije */}
      <section
        id="pricing"
        style={{ background: '#FAF8F4', borderTop: '1px solid rgba(0,0,0,0.05)' }}
        className="pt-24 pb-36"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

              {/* Left — Pricing + locations */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                  Kotizacija edukacije
                </p>
                <div className="w-10 h-px mb-9" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />

                <p className="text-[14px] leading-[1.82] font-normal mb-12" style={{ color: '#5F5A52', maxWidth: '44ch' }}>
                  Dvodnevna klinička edukacija. Teorija, palpacija i primjena u jednom kontinuiranom procesu učenja.
                </p>

                {/* Price — ceremonial block */}
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '2.8rem', paddingBottom: '0.6rem' }}>
                  <p
                    className="font-playfair font-semibold leading-none"
                    style={{ fontSize: '4.4rem', color: '#1F1D1A', letterSpacing: '-0.02em' }}
                  >
                    460 €
                  </p>
                </div>
                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '2.2rem', marginBottom: '2.4rem' }}>
                  <p className="text-[13px] leading-[1.72] font-normal mt-4" style={{ color: '#7A7570' }}>
                    Kotizacija uključuje sve materijale, priručnik i mentorsku podršku.
                    <br />Uplata i rezervacija po dogovoru.
                  </p>
                </div>

                {/* Emotional anchor */}
                <p
                  className="font-playfair font-normal mb-6"
                  style={{
                    fontSize: 'clamp(0.9rem, 1.1vw, 0.97rem)',
                    lineHeight: '1.75',
                    color: '#3D3935',
                    fontStyle: 'italic',
                    maxWidth: '40ch',
                  }}
                >
                  Broj mjesta ograničen je kvalitetom praktičnog rada — ne kapacitetom dvorane.
                </p>

                {/* Editorial note — column balance */}
                <p
                  className="font-normal mb-14"
                  style={{
                    fontSize: '12.5px',
                    lineHeight: '1.78',
                    color: 'rgba(0,0,0,0.50)',
                    maxWidth: '40ch',
                  }}
                >
                  Edukacija je organizirana u malim grupama s fokusom na individualni feedback i praktičnu korekciju rada.
                </p>

                {/* Locations */}
                <p className="text-[10px] uppercase tracking-[0.24em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                  Termini i lokacije
                </p>
                <div>
                  {[
                    { city: 'Zagreb', date: 'termin u pripremi' },
                    { city: 'Split', date: 'termin u pripremi' },
                    { city: 'Rijeka', date: 'termin u pripremi' },
                  ].map((loc, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-6"
                      style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
                    >
                      <div>
                        <p
                          className="font-playfair font-medium leading-tight mb-1.5"
                          style={{ fontSize: '1.22rem', color: '#1F1D1A' }}
                        >
                          {loc.city}
                        </p>
                        <p
                          className="text-[10px] uppercase tracking-[0.20em] font-normal"
                          style={{ color: 'rgba(0,0,0,0.26)' }}
                        >
                          {loc.date}
                        </p>
                      </div>
                      <button
                        className="text-[10px] uppercase tracking-[0.16em] font-normal py-2.5 px-7 flex-shrink-0"
                        style={{
                          border: '1px solid rgba(0,0,0,0.18)',
                          color: '#4A4540',
                          background: 'transparent',
                          cursor: 'pointer',
                          transition: 'background-color 0.55s ease, border-color 0.55s ease, color 0.45s ease',
                          outline: 'none',
                        }}
                        onMouseEnter={e => {
                          const b = e.currentTarget as HTMLButtonElement;
                          b.style.background = 'rgba(184,154,79,0.10)';
                          b.style.borderColor = 'rgba(184,154,79,0.50)';
                          b.style.color = '#2A2522';
                        }}
                        onMouseLeave={e => {
                          const b = e.currentTarget as HTMLButtonElement;
                          b.style.background = 'transparent';
                          b.style.borderColor = 'rgba(0,0,0,0.18)';
                          b.style.color = '#4A4540';
                        }}
                        onClick={() => window.open('https://tally.so/r/wA5kvD', '_blank', 'noopener,noreferrer')}
                      >
                        Prijavi se
                      </button>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
                </div>
              </motion.div>

              {/* Right — What's included */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.14, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="lg:pt-2"
              >
                <p className="text-[10px] uppercase tracking-[0.24em] font-normal mb-8" style={{ color: '#B89A4F' }}>
                  Što uključuje edukacija
                </p>
                <div>
                  {[
                    {
                      title: '16 sati kliničke prakse',
                      note: 'Palpacija, protokoli i klinička procjena u kontinuiranom radu s partnerom.',
                    },
                    {
                      title: 'Digitalni priručnik',
                      note: 'Protokoli, anatomske ilustracije i referentni materijali za nastavak samostalnog rada.',
                    },
                    {
                      title: 'Mentorska podrška — 3 mjeseca',
                      note: 'Pitanja iz prakse, klinički kontekst i individualni feedback nakon edukacije.',
                    },
                    {
                      title: 'Certifikat i e-radna knjižica',
                      note: 'Potvrda o završenoj edukaciji s upisom sati u e-radnu knjižicu.',
                    },
                    {
                      title: 'Trajni pristup materijalima',
                      note: 'Svi edukacijski materijali dostupni bez vremenskog ograničenja.',
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="py-6"
                      style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
                    >
                      <p className="text-[14.5px] leading-snug font-medium mb-2" style={{ color: '#1F1D1A' }}>
                        {item.title}
                      </p>
                      <p className="text-[12.5px] leading-[1.70] font-normal" style={{ color: '#8A8480' }}>
                        {item.note}
                      </p>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ — editorial closing chapter */}
      <section
        style={{ background: '#FAF8F4', borderTop: '1px solid rgba(0,0,0,0.05)' }}
        className="pt-28 pb-36"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Pitanja i odgovori
              </p>
              <h2
                className="font-playfair font-semibold leading-[1.20] mb-8"
                style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: '#1F1D1A' }}
              >
                Informacije o edukaciji.
              </h2>
              <p className="text-[13.5px] leading-[1.85] font-normal" style={{ color: '#7A7570', maxWidth: '52ch' }}>
                Sve ključne informacije o organizaciji, prijavi i praktičnom radu.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible>

                <AccordionItem value="item-0" className="border-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <AccordionTrigger
                    className="py-7 text-left hover:no-underline text-[15px] font-normal leading-snug transition-colors duration-500 hover:text-[#5F5A52] [&>svg]:h-3 [&>svg]:w-3 [&>svg]:opacity-30 [&>svg]:duration-500"
                    style={{ color: '#1F1D1A' }}
                  >
                    Na kojoj lokaciji se održava edukacija?
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <p className="text-[13.5px] leading-[1.92] font-normal" style={{ color: '#5F5A52', maxWidth: '56ch' }}>
                      Edukacije se održavaju u Zagrebu, Splitu i Rijeci. Svaka lokacija provodi isti dvodnevni program, vikendom od 9:00 do 16:00. Točni datumi objavljuju se u rasporedu edukacija.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1" className="border-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <AccordionTrigger
                    className="py-7 text-left hover:no-underline text-[15px] font-normal leading-snug transition-colors duration-500 hover:text-[#5F5A52] [&>svg]:h-3 [&>svg]:w-3 [&>svg]:opacity-30 [&>svg]:duration-500"
                    style={{ color: '#1F1D1A' }}
                  >
                    Je li potrebno prethodno iskustvo?
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <p className="text-[13.5px] leading-[1.92] font-normal mb-4" style={{ color: '#5F5A52', maxWidth: '56ch' }}>
                      Program je namijenjen polaznicima s osnovnim poznavanjem anatomije i fiziologije:
                    </p>
                    <ul className="space-y-2">
                      {['fizioterapeuti, maseri i kineziolozi', 'studenti i terapeuti s praktičnim iskustvom u radu s tijelom'].map((item, i) => (
                        <li key={i} className="text-[13.5px] leading-[1.85] flex gap-3" style={{ color: '#5F5A52' }}>
                          <span style={{ color: 'rgba(0,0,0,0.18)', flexShrink: 0 }}>—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <AccordionTrigger
                    className="py-7 text-left hover:no-underline text-[15px] font-normal leading-snug transition-colors duration-500 hover:text-[#5F5A52] [&>svg]:h-3 [&>svg]:w-3 [&>svg]:opacity-30 [&>svg]:duration-500"
                    style={{ color: '#1F1D1A' }}
                  >
                    Dobiva li se certifikat nakon edukacije?
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <p className="text-[13.5px] leading-[1.92] font-normal" style={{ color: '#5F5A52', maxWidth: '56ch' }}>
                      Nakon završetka programa izdaje se potvrda o edukaciji koja se može evidentirati u e-radnoj knjižici kao dodatno stručno obrazovanje. Program je priznat od strane World Massage Federation.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <AccordionTrigger
                    className="py-7 text-left hover:no-underline text-[15px] font-normal leading-snug transition-colors duration-500 hover:text-[#5F5A52] [&>svg]:h-3 [&>svg]:w-3 [&>svg]:opacity-30 [&>svg]:duration-500"
                    style={{ color: '#1F1D1A' }}
                  >
                    Što je uključeno u kotizaciju?
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <ul className="space-y-2">
                      {[
                        '16 sati praktične edukacije',
                        'PDF priručnik i materijali',
                        'Mentorska podrška nakon edukacije',
                        'Pristup materijalima za ponavljanje gradiva',
                        'Potvrda o edukaciji',
                      ].map((item, i) => (
                        <li key={i} className="text-[13.5px] leading-[1.85] flex gap-3" style={{ color: '#5F5A52' }}>
                          <span style={{ color: 'rgba(0,0,0,0.18)', flexShrink: 0 }}>—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <AccordionTrigger
                    className="py-7 text-left hover:no-underline text-[15px] font-normal leading-snug transition-colors duration-500 hover:text-[#5F5A52] [&>svg]:h-3 [&>svg]:w-3 [&>svg]:opacity-30 [&>svg]:duration-500"
                    style={{ color: '#1F1D1A' }}
                  >
                    Po čemu se razlikuje ovaj program?
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <p className="text-[13.5px] leading-[1.92] font-normal" style={{ color: '#5F5A52', maxWidth: '56ch' }}>
                      Program kombinira cross friction (Cyriax metoda rada na fasciji, adherencijama i ožiljcima) s funkcionalnom masažom u jedan klinički protokol. Fokus nije samo na tehnici, nego na palpacijskoj preciznosti i kliničkoj odluci o metodi i redoslijedu intervencije.
                    </p>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }} />
            </motion.div>

            {/* Closing contact */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mt-24 pt-12"
              style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Kontakt
              </p>
              <p
                className="font-playfair font-semibold leading-[1.30] mb-6"
                style={{ fontSize: '1.4rem', color: '#1F1D1A' }}
              >
                Imate dodatnih pitanja?
              </p>
              <p className="text-[13.5px] leading-[1.85] font-normal mb-10" style={{ color: '#7A7570', maxWidth: '46ch' }}>
                Za sve informacije o edukaciji, prijavi i organizaciji slobodno nam se obratite direktno.
              </p>
              <a
                href="mailto:info@uciliste-suprastudium.hr"
                className="text-[14px] font-normal"
                style={{
                  color: '#3D3935',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(0,0,0,0.16)',
                  paddingBottom: '2px',
                  transition: 'border-color 0.45s ease, color 0.45s ease',
                }}
                onMouseEnter={e => {
                  const a = e.currentTarget as HTMLAnchorElement;
                  a.style.color = '#B89A4F';
                  a.style.borderColor = 'rgba(184,154,79,0.50)';
                }}
                onMouseLeave={e => {
                  const a = e.currentTarget as HTMLAnchorElement;
                  a.style.color = '#3D3935';
                  a.style.borderColor = 'rgba(0,0,0,0.16)';
                }}
              >
                info@uciliste-suprastudium.hr
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      <CourseRecommendations currentCourse="cross-friction" />

      <CourseFooter />
    </div>
  );
};

export default CrossfrictionPage;
