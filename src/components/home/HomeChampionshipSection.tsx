import { motion } from 'framer-motion';

// TODO: Upload DAY 1 RECAP FINAL.mp4 and DAY 2 RECAP CHAMPIONSHIP.mp4 to YouTube
// Then replace these placeholder strings with the actual YouTube video IDs
const YOUTUBE_DAY1_ID = '-oBdblqBztk';
const YOUTUBE_DAY2_ID = 'HCA6DKciCoM';

export function HomeChampionshipSection() {
  return (
    <section style={{ background: '#F4F1EA' }} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Hrvatsko prvenstvo
              </p>
              <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />
              <h2
                className="font-playfair font-semibold leading-[1.22] text-[1.3rem] md:text-[1.75rem]"
                style={{ color: '#1F1D1A', textWrap: 'balance' } as React.CSSProperties}
              >
                Croatian International Massage, Manual Therapy &amp; Nuad Thai Championship
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="pt-2 md:pt-16"
            >
              <p className="text-[14px] leading-[1.75] font-normal mb-8" style={{ color: '#3D3A35' }}>
                Učilište Supra Studium sudjeluje u organizaciji međunarodnog hrvatskog prvenstva
                iz masaže i manualne terapije kroz edukacijski, stručni i organizacijski rad
                Ante Antića i Awudija, edukatora Supra Studium programa Lomi Lomi i Kalabaš masaže.
              </p>
              <a
                href="https://fh-participants-7z477wy.gamma.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.22em] font-normal py-3 px-8 rounded-none inline-block transition-colors duration-300"
                style={{ border: '1px solid rgba(0,0,0,0.14)', color: '#3D3A35' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(184,154,79,0.10)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,154,79,0.40)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.14)';
                }}
              >
                Pogledaj prvenstvo
              </a>
            </motion.div>
          </div>

          {/* Videos (YouTube embeds) or image fallback */}
          {YOUTUBE_DAY1_ID && YOUTUBE_DAY2_ID ? (
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {[
                { id: YOUTUBE_DAY1_ID, label: 'Day 1 Recap' },
                { id: YOUTUBE_DAY2_ID, label: 'Day 2 — Championship' },
              ].map(({ id, label }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                      title={label}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] font-normal" style={{ color: '#7A7570' }}>
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Image grid fallback until YouTube IDs are provided */
            <div className="grid grid-cols-5 gap-4 mb-8">
              <motion.div
                className="col-span-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img width={1920} height={1280}
                    src="/lovable-uploads/cmc-ceremonija.webp"
                    alt="Feel & Heal Festival — ceremonija proglašenja"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <div className="col-span-2 flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img width={1365} height={2048}
                      src="/lovable-uploads/cmc-proslava-trofej.webp"
                      alt="Proslava — pobjednici s trofejima"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.18 }}
                  viewport={{ once: true }}
                >
                  <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img width={1365} height={2048}
                      src="/lovable-uploads/cmc-pobjednici.webp"
                      alt="Pobjednici — tri trofeja"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* Bottom image strip */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: '/lovable-uploads/cmc-sajo-dry-ice-v2.webp', alt: 'Natjecanje — Sajo dry ice duo masaža', objectPosition: 'center center' },
              { src: '/lovable-uploads/cmc-dvorana-panorama.webp', alt: 'Natjecanje — dvorana i publika', objectPosition: 'center center' },
              { src: '/lovable-uploads/cmc-pobjednici-banner-v2.webp', alt: 'Pobjednici — trofeje i medalje uz CMC banner', objectPosition: 'center 20%' },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: i * 0.06 }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: img.objectPosition }}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
