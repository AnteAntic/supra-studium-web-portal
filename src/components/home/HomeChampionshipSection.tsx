import { motion } from 'framer-motion';
import { YouTubeFacade } from '@/components/ui/YouTubeFacade';
import { reveal } from './reveal';

const YOUTUBE_DAY1_ID = '-oBdblqBztk';
const YOUTUBE_DAY2_ID = 'HCA6DKciCoM';

const videos = [
  { id: YOUTUBE_DAY1_ID, label: 'Day 1 Recap' },
  { id: YOUTUBE_DAY2_ID, label: 'Day 2 — Championship' },
];

const strip = [
  { src: '/lovable-uploads/cmc-2026-ruke-closeup.webp', alt: 'Natjecanje — ruke natjecateljice na leđima', width: 1600, height: 1066, objectPosition: 'center center' },
  { src: '/lovable-uploads/cmc-2026-suci-dvorana.webp', alt: 'Natjecanje — suci promatraju rad u dvorani', width: 1600, height: 1066, objectPosition: 'center center' },
  { src: '/lovable-uploads/cmc-pobjednici-banner-v2.webp', alt: 'Pobjednici — trofeje i medalje uz CMC banner', width: 1365, height: 2048, objectPosition: 'center 20%' },
];

/**
 * The Championship is a separate brand from the school's education programs.
 * It gets the only dark "edition" on the home page, its own official seal and
 * Championship Red as a graphic line. Brass stays with education.
 */
export function HomeChampionshipSection() {
  return (
    <section className="on-dark py-20 md:py-32" style={{ background: '#141311', color: '#ede9e3' }}>
      <div className="container mx-auto px-6">

        {/* Masthead: red rule, heading, official seal */}
        <div className="h-px mb-10 md:mb-14" style={{ backgroundColor: '#C4161C' }} aria-hidden="true" />

        <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-8 items-start mb-14 md:mb-20">
          <motion.div {...reveal()} className="md:col-span-9 lg:col-span-8">
            <p className="text-label uppercase tracking-[0.28em] font-normal mb-6" style={{ color: 'rgba(237,233,227,0.72)' }}>
              Hrvatsko prvenstvo
            </p>
            <div className="w-10 h-px mb-8" style={{ backgroundColor: '#C4161C' }} />
            <h2
              className="font-playfair font-semibold text-h2"
              style={{ color: '#ede9e3', textWrap: 'balance' } as React.CSSProperties}
            >
              Croatian International Massage, Manual Therapy &amp; Nuad Thai Championship
            </h2>
          </motion.div>

          <motion.div {...reveal(0.1)} className="md:col-span-3 md:justify-self-end lg:col-start-10 order-first md:order-none">
            <img
              src="/lovable-uploads/cmc-official-seal.webp"
              alt="Official Croatian Massage Championship"
              width={480}
              height={480}
              loading="lazy"
              className="w-36 h-36 md:w-48 md:h-48"
            />
          </motion.div>
        </div>

        {/* Statement + lead frame */}
        <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-8 items-end mb-6 md:mb-8">
          <motion.div {...reveal()} className="md:col-span-5 lg:col-span-4">
            <p className="text-body-l font-normal mb-9" style={{ color: 'rgba(237,233,227,0.82)' }}>
              Učilište Supra Studium sudjeluje u organizaciji međunarodnog hrvatskog prvenstva
              iz masaže i manualne terapije kroz edukacijski, stručni i organizacijski rad
              Ante Antića i Awudija, edukatora Supra Studium programa Lomi Lomi i Kalabaš masaže.
            </p>
            <a
              href="https://fh-participants-7z477wy.gamma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block whitespace-nowrap text-label uppercase tracking-[0.22em] font-normal py-3.5 px-8 rounded-none border border-[#ede9e3]/35 text-[#ede9e3] transition-colors duration-300 hover:bg-[#ede9e3] hover:text-[#141311] focus-visible:bg-[#ede9e3] focus-visible:text-[#141311] active:bg-[#d8d3ca]"
            >
              Pogledaj prvenstvo
            </a>
          </motion.div>

          <motion.div {...reveal(0.1)} className="md:col-span-7 lg:col-span-8 lg:col-start-5">
            <div className="frame" style={{ aspectRatio: '3/2' }}>
              <img
                src="/lovable-uploads/cmc-2026-duo-masaza.webp"
                alt="Natjecanje — duo masaža leđa pred publikom"
                width={1920}
                height={1280}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Supporting frames — one ratio */}
        <div className="grid grid-cols-3 gap-3 md:gap-8 mb-14 md:mb-20">
          {strip.map((img, i) => (
            <motion.div key={img.src} {...reveal(i * 0.06)}>
              <div className="frame" style={{ aspectRatio: '3/2' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  style={{ objectPosition: img.objectPosition }}
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Film — loads from YouTube only when asked */}
        <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-8 pt-10 md:pt-12" style={{ borderTop: '1px solid #2a2722' }}>
          {videos.map(({ id, label }, i) => (
            <motion.div key={id} {...reveal(i * 0.08)}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <YouTubeFacade id={id} title={label} />
              </div>
              <p className="mt-4 text-label uppercase tracking-[0.18em] font-normal" style={{ color: 'rgba(237,233,227,0.72)' }}>
                {label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
