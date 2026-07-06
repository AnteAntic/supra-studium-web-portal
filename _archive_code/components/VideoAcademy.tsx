import { Play, Clock, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PremiumVideoCard } from "@/components/ui/PremiumVideoCard";
const promoVideos = [{
  title: "Crossfriction 1 – Snaga funkcionalnog pristupa",
  description: "Najbolji video o funkcionalnom pristupu crossfriction tehnikama",
  embed: "https://www.youtube.com/embed/KiDLo2J4CjA",
  category: "Crossfriction",
  featured: true
}, {
  title: "Crossfriction 2 – Napredni pristup",
  description: "Suvremeni pristupi terapiji vrata, ramena i ruke",
  embed: "https://www.youtube.com/embed/5mOaGUuDrWU",
  category: "CFM - Modul 2"
}, {
  title: "Akupresura & Trigger Point terapija",
  description: "Spoj istočnjačke mudrosti i moderne tehnike za precizno otpuštanje boli i napetosti.",
  embed: "https://www.youtube.com/embed/KV_BrRMPHi4",
  category: "Dvostruki pristup boli"
}, {
  title: "Cupping s uvodom u kinesku medicinu",
  description: "Naučite kombinirati klizni i statični cupping s tehnikama TKM-a za ciljani tretman boli, cirkulacije i ravnoteže energije.",
  embed: "https://www.youtube.com/embed/0nyxaDct2Mw",
  category: "Cupping terapija · TKM radionica"
}, {
  title: "Ancient Wave Lomi Lomi masaža",
  description: "Naučite originalnu havajsku tehniku koja povezuje tijelo, um i dah u ritmičnom, transformativnom tretmanu.",
  embed: "https://www.youtube.com/embed/kFwF-gqKgyI",
  category: "Lomi Lomi certificirani tečaj"
}];
export const VideoAcademy = () => {
  return <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
      {/* Subtle section divider gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />
      
      {/* Diagonal pattern background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `repeating-linear-gradient(
            45deg,
            #D4AF37 0px,
            #D4AF37 1px,
            transparent 1px,
            transparent 20px
          )`
    }} />
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
          {/* Header with Premium Typography */}
          <div className="text-center mb-16">
            {/* Gold Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full" style={{
            background: 'linear-gradient(135deg, #D4AF37 0%, #B9975B 100%)',
            boxShadow: '0 4px 12px rgba(212,175,55,0.25)'
          }}>
              <GraduationCap className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-xs md:text-sm uppercase tracking-wider">
                Certificirani programi
              </span>
            </div>

            <h2 style={{
            background: 'linear-gradient(135deg, #111 0%, #2a2a2a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }} className="font-playfair text-3xl md:text-5xl font-bold mb-6 leading-[1.1] tracking-tight">
              Vizualni vodič kroz naše <span className="font-playfair" style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #B9975B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>certificirane programe</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Zavirite u profesionalno producirane promo video materijale i doživite atmosferu naših najtraženijih tečajeva.
            </p>
          </div>

          {/* Featured Video (Crossfriction 1) - Premium Card */}
          <div className="mb-16">
            <PremiumVideoCard videoId="KiDLo2J4CjA" />
          </div>

          {/* Video Grid with Premium Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promoVideos.slice(1).map((video, index) => (
              <div 
                key={index} 
                className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 ease-out hover:-translate-y-1.5"
                style={{
                  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.35), 0 0 40px rgba(212,175,55,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.25)';
                }}
              >
                <div className="aspect-video bg-black overflow-hidden">
                  <iframe 
                    src={video.embed} 
                    title={video.title} 
                    className="w-full h-full" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen 
                    loading="lazy" 
                  />
                </div>
                <div className="p-5 md:p-6 text-center">
                  <div className="inline-flex items-center bg-[#B9975B]/15 text-[#B9975B] uppercase font-semibold text-xs tracking-wider rounded-full px-3 py-1 mb-3">
                    {video.category}
                  </div>
                  <h3 className="text-xl md:text-2xl font-playfair text-gray-900 font-semibold leading-snug mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>;
};