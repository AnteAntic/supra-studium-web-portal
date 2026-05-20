import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CourseHero } from "@/components/CourseHero";
import { CourseStickyBar } from "@/components/ui/CourseStickyBar";
import { CourseFooter } from "@/components/CourseFooter";
import { CourseRecommendations } from "@/components/course/CourseRecommendations";

const pdfLinks = {
  1: "https://www.dropbox.com/scl/fi/hv3ggccj3bigoyxofngyf/raspored-1_stupanj.pdf?rlkey=8dhuv93b1aueor9438q4ngbve&st=8jkdb8g1&dl=1",
  2: "https://www.dropbox.com/scl/fi/s1peg49p41h6rj9iwywu1/raspored-2_stupanj.pdf?rlkey=ofw87spp5r6rr5umtada7vfax&st=c9vvlbxz&dl=1",
  3: "https://www.dropbox.com/scl/fi/4akk4tra87tjilms69dxp/raspored-3_stupanj.pdf?rlkey=2wqrsm3iy5rc7lplkh3j7s6w5&st=98yii60m&dl=1",
  4: "https://www.dropbox.com/scl/fi/bz93bt9daloo9mq0os52r/raspored-4_stupanj.pdf?rlkey=da0aa3adr8565p4picpncaugs&st=p02jdd4f&dl=1",
  5: "https://www.dropbox.com/scl/fi/l8xz55gi1u927casmxz1g/raspored-5-stupanj.pdf?rlkey=vlhmcvvjx8a1d5ymqo5fhpe63&st=2mm38cft&dl=1",
};

const stupnjevi = [
  {
    number: "01",
    label: "Stupanj I",
    title: "Slabinska kralješnica i sakroilijakalni zglob",
    body: "Dijagnostičko-terapijski postupnik za križobolju. Joint play torakalne i lumbalne kralješnice. SI zglob — mobilizacije i manipulacije. Neurodinamika ishijadičnog živca. Pincé roulé. Mulligan MWMs.",
    duration: "27 sati",
  },
  {
    number: "02",
    label: "Stupanj II",
    title: "Donji ud",
    body: "Kuk, koljeno, gležanj, stopalo. Dijagnostički pregled i patologija. Mobilizacijske tehnike (klasične + Mulligan). Cross-friction ligamenata. PIR / stretching. Manipulacija ivera.",
    duration: "18 sati",
  },
  {
    number: "03",
    label: "Stupanj III",
    title: "Gornji ud",
    body: "Rame — smrznuto rame (Niel-Asher), PIR/Mitchell, Mulligan. Neurodinamika (MNT1). Lakat — lateralni epikondilitis, radijalni živac. Ručni zglob i šaka — mobilizacije i manipulacije.",
    duration: "18 sati",
  },
  {
    number: "04",
    label: "Stupanj IV",
    title: "Prsna i vratna kralješnica",
    body: "Torakalna: repozicija rebara, fasetni zglobovi, manipulacija prvog rebra, Thoracic Outlet Sy. Cervikalna: fiziologija i biomehanika, sigurnosni testovi, trakcija, mobilizacije i manipulacije C1–C7.",
    duration: "18 sati",
  },
  {
    number: "05",
    label: "Stupanj V",
    title: "Napredni program",
    body: "Samo za polaznike koji su završili sva četiri prethodna stupnja. Svaki polaznik donosi vlastiti klinički slučaj. Q&A iz svih prethodnih tečajeva. Napredne tehnike. Opcijski ispit — uvjerenje i stručna kvalifikacija za manualnog terapeuta.",
    duration: "18 sati · max 12 polaznika",
  },
];

const metode = [
  "Joint play i mobilizacija zglobova",
  "Manipulacija fasetnih zglobova i SI zgloba",
  "Neurodinamika (ishijadični živac, MNT1)",
  "Funkcionalna masaža mekih tkiva",
  "Cross-friction ligamenata i tetiva",
  "PIR / Hold-relax / Mitchell tehnika",
  "Mulligan koncept (MWMs, NAGS, SNAGS)",
];

const termini = [
  { stupanj: "Stupanj I", datum: "Na upit", lokacija: "Zagreb", cijena: "390 €", pdf: pdfLinks[1] },
  { stupanj: "Stupanj II", datum: "Na upit", lokacija: "Zagreb", cijena: "390 €", pdf: pdfLinks[2] },
  { stupanj: "Stupanj III", datum: "Na upit", lokacija: "Zagreb", cijena: "390 €", pdf: pdfLinks[3] },
  { stupanj: "Stupanj IV", datum: "Na upit", lokacija: "Zagreb", cijena: "390 €", pdf: pdfLinks[4] },
  { stupanj: "Stupanj V", datum: "Na upit", lokacija: "Zagreb", cijena: "390 €", pdf: pdfLinks[5] },
];

const faq = [
  {
    q: "Treba li određeni redosljed pohađanja stupnjeva?",
    a: "Da. Svaki stupanj pretpostavlja znanje prethodnog. Stupanj II ne može se pohađati bez završenog Stupnja I. Stupanj V dostupan je isključivo polaznicima koji su završili sve četiri prethodne razine.",
  },
  {
    q: "Tko može pohađati program?",
    a: "Licencirani fizioterapeuti, masažni terapeuti i terapeuti s aktivnom kliničkom praksom. Program nije namijenjen početnicima bez kliničkog iskustva.",
  },
  {
    q: "Što je uključeno u kotizaciju?",
    a: "Program, prateći materijali i potvrda o pohađanju. Stupanj V uključuje ispitni postupak i mogućnost stjecanja stručne kvalifikacije upisive u e-radnu knjižicu.",
  },
  {
    q: "Koliko polaznika prima svaki stupanj?",
    a: "Male grupe — kako bi svaki polaznik imao dovoljno vremena za hands-on rad s voditeljem. Stupanj V prima maksimalno 12 polaznika.",
  },
  {
    q: "Gdje se program odvija?",
    a: "U kliničkom prostoru u Zagrebu. Točna lokacija i parkiralište dostavljaju se pri prijavi.",
  },
  {
    q: "Što je 'Postupnik manualnog terapeuta'?",
    a: "Algoritam koji svaki polaznik prolazi pri kliničkoj procjeni: anamneza → red flags → klinički pregled → traženje uzroka → specifična manualna terapija. Razvio ga je Mr.sc. A. Stošić, dr.med, kao okosnicu programa.",
  },
];

const fadeUp = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

export default function ManualTherapySchoolPage() {
  return (
    <div className="bg-[#F4F1EA] min-h-screen">
      <CourseHero
        category="Škola Manualne Terapije · Zagreb"
        headline={
          <>
            Terapija koja
            <br />
            zna zašto.
          </>
        }
        subheadline="Pet stupnjeva dijagnostičkog razmišljanja — od lumbalne kralješnice do cervikalnih manipulacija. Ne tehnika bez osnove."
        videoSrc="/videos/hero-MT.mp4"
        videoPoster="/lovable-uploads/mt-palpacija-lumbalna.jpg"
        primaryCTA={{ label: "Pošalji upit", onClick: () => window.open("https://tally.so/r/wA5kvD", "_blank", "noopener,noreferrer") }}
        secondaryCTA={{ label: "Pogledaj video", onClick: () => {} }}
        facts={[
          { field: "Razine", value: "5 stupnjeva", detail: "progresivan program" },
          { field: "Opseg", value: "99 sati", detail: "edukacije" },
          { field: "Format", value: "Rad u paru", detail: "demonstracija i korekcija" },
          { field: "Završetak", value: "Certifikat", detail: "upis u e-radnu knjižicu" },
        ]}
      />

      <CourseStickyBar
        locations={[{ city: "Zagreb", dates: "Na upit" }]}
        price=""
        ctaText="Pošalji upit"
        ctaHref="https://tally.so/r/wA5kvD"
        theme="light"
      />

      {/* Klinička observacija */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
              Klinička perspektiva
            </p>
            <h2 className="font-playfair text-3xl text-[#1F1D1A] leading-snug">
              Većina terapeuta naučila je dovoljno tehnika.
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.15}
            viewport={{ once: true }}
          >
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-6">
              Problem koji se ponavlja u praksi nije nedostatak tehnika — nego znati kada, na koga i u
              kojem redoslijedu ih primijeniti. Terapeut koji skuplja zahvate bez dijagnostičke osnove
              radi dobre tretmane slučajno, a ne sustavno.
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed">
              Škola manualne terapije počinje tamo gdje se obično staje — dijagnozom. Svaki stupanj
              gradi na prethodnom. Nema prečaca.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Observation cards */}
      <section className="py-16 px-6 bg-[#FAF8F4]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-[#e3e3e3]">
            {[
              {
                text: "Bol u leđima koja se ne poboljšava — i terapeut koji ne zna zašto.",
              },
              {
                text: "Tehnika koja radi kod jednog pacijenta, pa ne radi kod sljedećeg.",
              },
              {
                text: "Pregled koji ti govori gdje početi — ne gdje pretpostaviti.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.1}
                viewport={{ once: true }}
                className="bg-[#FAF8F4] px-8 py-10"
              >
                <p className="text-sm text-[#1F1D1A] leading-relaxed font-playfair italic">
                  "{card.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical snapshot */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
              Klinička situacija
            </p>
            <div className="w-10 h-px bg-[#a58d4e]/30 mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              viewport={{ once: true }}
              className="border-l border-[#a58d4e]/30 pl-8"
            >
              <p className="text-sm text-[#3b3b3b] leading-relaxed mb-4">
                Pacijentica s kroničnom lumbalnom boli, prethodno tretirana 6 tjedana bez
                poboljšanja. Slump test negativan. Pregled SI zgloba pokazuje hipomobilnost desno.
              </p>
              <p className="text-sm text-[#1F1D1A] leading-relaxed font-medium">
                Uzrok boli bio je izvan lumbalne kralješnice — tamo gdje nitko nije tražio.
              </p>
            </motion.blockquote>

            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: true }}
              className="border-l border-[#a58d4e]/30 pl-8"
            >
              <p className="text-sm text-[#3b3b3b] leading-relaxed mb-4">
                Terapeut koji završi školu ne zna više tehnika — zna kada i zašto primijeniti
                koju. Razlika nije u katalogu zahvata. Razlika je u dijagnostičkom algoritmu koji
                prethodi svakom kontaktu.
              </p>
              <p className="text-sm text-[#1F1D1A] leading-relaxed font-medium">
                To je Stošićev Postupnik manualnog terapeuta.
              </p>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* Photo intermezzo */}
      <section className="relative h-[55vh] overflow-hidden">
        <img
          src="/lovable-uploads/mt-practicni-rad-kral.jpg"
          alt="Praktični rad — manualna terapija kralješnice"
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ filter: "grayscale(8%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e]/55 via-[#0e0e0e]/20 to-transparent" />
        <div className="absolute bottom-10 left-8 md:left-16">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">
            Praktični rad · Stupanj I
          </p>
        </div>
      </section>

      {/* Metoda */}
      <section className="py-24 px-6 bg-[#0e0e0e]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
              Metoda
            </p>
            <h2 className="font-playfair text-3xl text-white leading-snug">
              Što je manualna terapija na ovoj školi.
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.15}
            viewport={{ once: true }}
          >
            <p className="text-sm text-white/55 leading-relaxed mb-8">
              Svaka tehnika je klinički alat s indikacijom i kontraindikacijom. Program ih ne
              predaje kao kolekciju — predaje ih kroz dijagnostičko razmišljanje.
            </p>
            <ul className="space-y-3">
              {metode.map((m, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-1 w-1 h-1 rounded-full bg-[#a58d4e] flex-shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Program — 5 stupnjeva */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
              Program
            </p>
            <h2 className="font-playfair text-3xl text-[#1F1D1A] leading-snug max-w-lg">
              Pet stupnjeva. Progresivno.
            </h2>
          </motion.div>

          <div className="space-y-px bg-[#e3e3e3]">
            {stupnjevi.map((s, i) => (
              <motion.div
                key={s.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.07}
                viewport={{ once: true }}
                className="bg-[#F4F1EA] grid md:grid-cols-[96px_1fr_auto] gap-8 px-8 py-10 items-start"
              >
                <div>
                  <span className="font-playfair text-4xl text-[#a58d4e]/25 leading-none">
                    {s.number}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#3b3b3b]/50 mb-2">
                    {s.label}
                  </p>
                  <h3 className="text-base font-medium text-[#1F1D1A] mb-3">{s.title}</h3>
                  <p className="text-sm text-[#3b3b3b] leading-relaxed max-w-xl">{s.body}</p>
                </div>
                <div className="flex flex-col items-end gap-3 md:pt-1">
                  <span className="text-xs text-[#3b3b3b]/50 whitespace-nowrap">{s.duration}</span>
                  <a
                    href={pdfLinks[i + 1 as keyof typeof pdfLinks]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-[0.2em] text-[#a58d4e] hover:text-[#1F1D1A] transition-colors duration-300 whitespace-nowrap"
                  >
                    PDF Program →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dokumentacija rada — 3 slike */}
      <section className="py-16 px-6 bg-[#FAF8F4]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                src: "/lovable-uploads/mt-stosic-anatomija.jpg",
                caption: "Mr.sc. A. Stošić · anatomska demonstracija",
              },
              {
                src: "/lovable-uploads/mt-parovi-rada.jpg",
                caption: "Parovi u praktičnom radu",
              },
              {
                src: "/lovable-uploads/mt-palpacija-lumbalna.jpg",
                caption: "Palpacija lumbalne regije",
              },
            ].map((img, i) => (
              <motion.figure
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.08}
                viewport={{ once: true }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ filter: "grayscale(8%)" }}
                  />
                </div>
                <figcaption className="mt-2 text-[10px] text-[#3b3b3b]/50 uppercase tracking-[0.18em]">
                  {img.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* O predavaču */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <img
              src="/lovable-uploads/mt-stosic-demonstracija.jpg"
              alt="Mr.sc. A. Stošić — voditelj škole"
              className="w-full object-cover aspect-[4/5]"
              loading="lazy"
              style={{ filter: "grayscale(8%)", objectPosition: "72% 4%", transform: "scale(1.12)", transformOrigin: "right top" }}
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.15}
            viewport={{ once: true }}
            className="md:pt-8"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
              Voditelj škole
            </p>
            <div className="w-10 h-px bg-[#a58d4e]/30 mb-8" />
            <h2 className="font-playfair text-2xl text-[#1F1D1A] mb-2 leading-snug">
              Mr.sc. A. Stošić, dr.med
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[#3b3b3b]/60 mb-8">
              OMT · DO · Licencirani manualni terapeut
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-5">
              Liječnik specijaliziran za ortopedsku manualnu terapiju i osteopatiju. Razvio je
              vlastiti dijagnostičko-terapijski Postupnik za manualnog terapeuta u pacijenata s
              križoboljom — algoritam koji čini okosnicu ovog programa.
            </p>
            <p className="text-sm text-[#3b3b3b] leading-relaxed mb-5">
              Predaje u malim grupama. Program nije namijenjen masovnoj edukaciji — namijenjen
              je terapeutima koji žele razumjeti uzrok, ne samo tretirati simptom.
            </p>
            <p className="text-sm text-[#3b3b3b]/60 leading-relaxed">
              Ante Antić — organizator i koordinator škole.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kotizacija */}
      <section className="py-24 px-6 bg-[#141311]" id="kotizacija">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#9e8a46] mb-6">
              Termini i kotizacija
            </p>
            <h2 className="font-playfair text-3xl text-[#ede9e3] leading-snug">
              Pet razina. Vlastiti tempo.
            </h2>
          </motion.div>

          <div className="space-y-px bg-[#201e1a]">
            {termini.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.07}
                viewport={{ once: true }}
                className="bg-[#141311] grid grid-cols-[1fr_auto_auto_auto] gap-6 px-8 py-6 items-center"
              >
                <div>
                  <p className="text-sm text-[#ede9e3] font-medium">{t.stupanj}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(237,233,227,0.32)' }}>{t.lokacija}</p>
                </div>
                <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(237,233,227,0.38)' }}>{t.datum}</p>
                <p className="text-sm text-[#ede9e3]">{t.cijena}</p>
                <a
                  href={t.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.2em] transition-colors duration-300"
                  style={{ color: '#9e8a46' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#ede9e3')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9e8a46')}
                >
                  PDF Program →
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            viewport={{ once: true }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://tally.so/r/wA5kvD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#c9a832]/90 hover:bg-[#c9a832] text-[#1F1D1A] text-xs uppercase tracking-[0.1em] font-medium px-5 py-2 rounded-sm transition-colors duration-500"
            >
              Pošalji upit
            </a>
            <a
              href="https://wa.me/385958558953"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-[#ede9e3]/50 hover:text-[#ede9e3]/85 text-xs uppercase tracking-[0.1em] transition-colors duration-300"
            >
              — Pitanja na WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6" id="faq">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89A4F] mb-6">
              Česta pitanja
            </p>
            <h2 className="font-playfair text-3xl text-[#1F1D1A]">Najčešća pitanja prije početka.</h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-[#e3e3e3]"
                >
                  <AccordionTrigger className="text-sm font-medium text-[#1F1D1A] hover:no-underline py-5 text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-[#3b3b3b] leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <CourseRecommendations currentCourse="manualna-terapija" />
      <CourseFooter />
    </div>
  );
}
