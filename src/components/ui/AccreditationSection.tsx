
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AccreditationSection = () => {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-gradient-to-br from-supra-ivory to-muted/30">
      {/* Diagonal Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #a58d4e 0px,
            #a58d4e 1px,
            transparent 1px,
            transparent 20px
          )`,
          opacity: 0.03
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm border border-border/30 p-6 sm:p-8 md:p-12 lg:p-16 shadow-lg">
          
          {/* Gold hairline separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-supra-golden/40 to-transparent mb-16 md:mb-20" />

          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 md:mb-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-supra-golden to-supra-navy flex items-center justify-center shadow-lg flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-4xl font-playfair font-semibold text-neutral-900 mb-6">
                  Međunarodna akreditacija, vaša ulaznica u svijet terapija bez granica.
                </h2>
                {/* Accent underline */}
                <div className="w-24 h-1 bg-gradient-to-r from-supra-golden to-supra-golden/60 rounded-full mx-auto sm:mx-0 mt-4 mb-4"></div>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-supra-gray max-w-4xl mx-auto leading-relaxed font-medium">
              Jedini u Hrvatskoj s ovakvom razinom priznanja. Naše diplome otvaraju vrata edukacijama i praksi na svjetskom tržištu.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-start">
            
            {/* Left Column - Text Content */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8 lg:space-y-10">
              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-supra-golden/20 shadow-md hover:shadow-xl hover:border-supra-golden/40 transition-all duration-300 group"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 rounded-full bg-supra-golden/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-supra-golden/30 transition-colors"
                  >
                    <span className="text-xl" role="img" aria-label="Svijet">🌍</span>
                  </motion.div>
                  <div>
                    <h4 className="text-2xl font-bold text-supra-navy mb-3">
                      Partnerstvo s World Federation
                    </h4>
                    <p className="text-supra-gray leading-relaxed text-lg">
                      Naši tečajevi su u partnerstvu s <span className="text-supra-golden font-semibold">World Federation of Massage and Manual Therapy (NUAD THAI)</span> – što znači da učite pod standardima koji se prepoznaju i cijene u cijelom svijetu.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-supra-golden/20 shadow-md hover:shadow-xl hover:border-supra-golden/40 transition-all duration-300 group"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 rounded-full bg-supra-golden/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-supra-golden/30 transition-colors"
                  >
                    <span className="text-xl" role="img" aria-label="Suradnja">🤝</span>
                  </motion.div>
                  <div>
                    <h4 className="text-2xl font-bold text-supra-navy mb-3">
                      Suradnja s Talijanskim Ministarstvom
                    </h4>
                    <p className="text-supra-gray leading-relaxed text-lg">
                      Kroz suradnju s <span className="text-supra-golden font-semibold">Ministarstvom zdravlja Italije</span> osiguravamo da naši programi budu u skladu s najvišim europskim kriterijima i profesionalnim zahtjevima.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-supra-golden/20 shadow-md hover:shadow-xl hover:border-supra-golden/40 transition-all duration-300 group"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 rounded-full bg-supra-golden/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-supra-golden/30 transition-colors"
                  >
                    <span className="text-xl" role="img" aria-label="Hrvatska">🇭🇷</span>
                  </motion.div>
                  <div>
                    <h4 className="text-2xl font-bold text-supra-navy mb-3">
                      Jedinstveni u Hrvatskoj
                    </h4>
                    <p className="text-supra-gray leading-relaxed text-lg">
                      Kao jedini u Hrvatskoj s ovom razinom <span className="text-supra-golden font-semibold">međunarodne akreditacije</span>, donosimo vam pristup edukacijama svjetskog standarda – iskustvo koje nitko drugi na tržištu ne nudi.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-supra-golden/20 shadow-md hover:shadow-xl hover:border-supra-golden/40 transition-all duration-300 group"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.0 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 rounded-full bg-supra-golden/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-supra-golden/30 transition-colors"
                  >
                    <span className="text-xl" role="img" aria-label="Europska unija">🇪🇺</span>
                  </motion.div>
                  <div>
                    <h4 className="text-2xl font-bold text-supra-navy mb-3">
                      EU priznato i certificirano
                    </h4>
                    <p className="text-supra-gray leading-relaxed text-lg">
                      Naše diplome vrijede u cijeloj EU. To znači da vaša karijera i znanje nisu ograničeni granicama – gdje god krenete, <span className="text-supra-golden font-semibold">Supra Studium ide s vama</span>.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Closing Statement */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-supra-golden/10 to-supra-navy/10 backdrop-blur-sm border border-supra-golden/30 shadow-lg"
              >
                <div className="w-8 h-8 rounded-full bg-supra-golden/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-lg" role="img" aria-label="Pokazuje">👉</span>
                </div>
                <p className="text-supra-gray leading-relaxed text-lg font-medium">
                  <span className="text-supra-golden font-bold">Naša akreditacija nije samo papir</span> – ona je most prema novim prilikama, sigurnosti i profesionalnom razvoju u cijeloj Europi i šire.
                </p>
              </motion.div>

              {/* Prominent Badge Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 pt-6 md:pt-8"
              >
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-supra-golden to-supra-golden/80 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group min-h-[48px] touch-manipulation">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center"
                  >
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <span className="font-bold text-base sm:text-lg">EU Priznato</span>
                </div>
                
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-supra-navy to-supra-navy/80 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group min-h-[48px] touch-manipulation">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center"
                  >
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <span className="font-bold text-base sm:text-lg">Certificirano</span>
                </div>

                <div className="inline-flex items-center gap-3 text-supra-gray w-full sm:w-auto justify-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0"
                  >
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <span className="font-semibold text-base sm:text-lg text-center sm:text-left">Europsko priznanje - naše diplome vrijede u cijeloj EU</span>
                </div>
              </motion.div>

              {/* e-Radna knjižica Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                viewport={{ once: true }}
                className="relative max-w-4xl mx-auto mt-10 p-6 md:p-8 lg:p-10 rounded-2xl bg-white/65 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-transparent"
                aria-label="Informacije o upisu u e-Radnu knjižicu (ERPS)"
              >
                {/* Golden rim overlay */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-[#d4af37]/40 to-transparent pointer-events-none" />
                
                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-xl md:text-2xl font-semibold text-supra-navy tracking-tight mb-4">
                    <span className="text-[#d4af37] font-medium">✅ Naše potvrde se upisuju u e-Radnu knjižicu (ERPS)</span>
                  </h4>
                  
                  <div className="space-y-4 text-supra-gray leading-relaxed text-[17px]">
                    <p>
                      Učilište Supra Studium je ovlaštena ustanova za obrazovanje odraslih, registrirana u skladu sa zakonima Republike Hrvatske. Kao takva, imamo zakonsko pravo izdavati potvrde o završenim programima neformalnog obrazovanja i stručnog usavršavanja, koje se mogu službeno evidentirati u elektroničku radnu knjižicu (ERPS).
                    </p>
                    
                    <div className="space-y-2">
                      <p className="text-[#d4af37] font-medium">
                        🔹 Što to znači za vas?
                      </p>
                      <p>
                        Po završetku edukacije (tečaja, seminara ili radionice), svaki polaznik dobiva potvrdu s urudžbenim brojem, klasom, OIB-om, potpisom i pečatom ustanove, koja zadovoljava sve formalne uvjete za upis u ERPS pod kategorijom "dodatno obrazovanje".
                      </p>
                    </div>

                    <p className="text-supra-navy font-medium">
                      📌 Ova mogućnost ne samo da povećava vaš profesionalni kredibilitet, već i službeno bilježi vaše dodatne kompetencije kod budućih poslodavaca i institucija.
                    </p>

                    <div className="pt-4 space-y-2">
                      <p className="font-semibold text-supra-navy">
                        📚 Pravno uporište:
                      </p>
                      <ul className="space-y-1 text-[15px]">
                        <li>• Pravilnik o elektroničkom zapisu podataka iz područja radnih odnosa (NN 79/2013), čl. 2</li>
                        <li>• Zakon o mirovinskom osiguranju, čl. 104. i 108.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <img 
                      src="/lovable-uploads/e-radna-knjizica.png" 
                      alt="Upisivo u e-Radnu knjižicu" 
                      className="mx-auto mt-8 w-[200px] md:w-[240px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-lg"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Visual Elements Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              
              {/* Enhanced Federation Logo Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/50 group hover:shadow-3xl hover:scale-[1.02] transition-all duration-500"
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-supra-golden to-supra-golden/90 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border border-white/20">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Međunarodno priznato
                  </span>
                </div>
                
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-supra-ivory/50 to-muted/10">
                  <img 
                    src="/lovable-uploads/94a3e24b-7ccc-4c9c-ac33-3f26d98fbc1e.png" 
                    alt="World Federation of Massage and Manual Therapy certificate logo" 
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg"
                    onLoad={() => console.log('World Federation logo loaded successfully')}
                    onError={(e) => {
                      console.error('Failed to load World Federation logo:', e);
                      console.log('Attempting to load from:', e.currentTarget.src);
                    }}
                    loading="eager"
                  />
                </div>
                
                {/* Content */}
                <div className="relative p-6 text-center bg-white/70 backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-supra-navy mb-2">
                    World Federation Partner
                  </h4>
                  <p className="text-sm text-supra-gray leading-relaxed">
                    Službeni partner World Federation of Massage and Manual Therapy (NUAD THAI) - najviši međunarodni standard u industriji.
                  </p>
                </div>
              </motion.div>

              {/* Enhanced Certificate Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Premium glow background */}
                <div className="absolute -inset-2 bg-gradient-to-r from-supra-golden/20 via-supra-navy/15 to-supra-golden/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main container with glassmorphism */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-3 border border-white/50 shadow-2xl group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-500">
                  {/* Inner glow */}
                  <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-2xl pointer-events-none" />
                  
                  <img 
                    src="/lovable-uploads/3c28eab8-79df-4481-969f-6c199cccafa1.png" 
                    alt="Međunarodna diploma i certifikat akreditacije" 
                    className="relative w-full h-auto rounded-2xl object-cover shadow-xl filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
