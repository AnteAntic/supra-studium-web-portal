import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
export const InstagramReels = () => {
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
          {/* Header */}
          <div className="text-center mb-16">
            {/* Gold Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full" style={{
          background: 'linear-gradient(135deg, #D4AF37 0%, #B9975B 100%)',
          boxShadow: '0 4px 12px rgba(212,175,55,0.25)'
        }}>
              <Instagram className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-xs md:text-sm uppercase tracking-wider">
                Pratite nas
              </span>
            </div>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6 leading-[1.1] tracking-tight" style={{
          background: 'linear-gradient(135deg, #D4AF37 0%, #B9975B 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>Supra Studium na društvenim mreżama</h2>
            
            {/* Underline accent */}
            
            
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pratite nas za dnevne uvide, tehnike i savjete. Naši reels sadržaji donose 
              autentičan pogled na terapiju, edukaciju i atmosferu Supra Studija.
            </p>
          </div>

          {/* Instagram Feed with Premium Glass Card */}
          

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[{
          icon: <Instagram className="w-6 h-6" />,
          title: 'Svakodnevni sadržaji',
          desc: 'Nova edukativna videa svaki dan'
        }, {
          icon: <span className="text-2xl">💡</span>,
          title: 'Praktični savjeti',
          desc: 'Korisni trikovi iz svakodnevne prakse'
        }, {
          icon: <span className="text-2xl">👥</span>,
          title: 'Zajednica',
          desc: 'Povežite se s drugim terapeutima'
        }].map((feature, idx) => <div key={idx} className="text-center p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 bg-white/5 backdrop-blur-md border border-white/10" style={{
          boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
        }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{
            background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(185,151,91,0.15) 100%)'
          }}>
                  <div style={{
              color: '#B9975B'
            }}>{feature.icon}</div>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 font-playfair">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>)}
          </div>
      </div>
    </section>;
};