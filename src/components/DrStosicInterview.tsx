import { Play } from "lucide-react";
export const DrStosicInterview = () => {
  return <section className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50/30 relative overflow-hidden">
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
              <span className="text-white font-bold text-xs md:text-sm uppercase tracking-wider">
                🎙️ Ekskluzivni intervju
              </span>
            </div>

            <h2 style={{
            background: 'linear-gradient(135deg, #111 0%, #2a2a2a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }} className="font-playfair text-3xl md:text-5xl font-bold mb-6 leading-[1.1] tracking-tight">
              Stručni uvid: Zašto <span className="font-playfair" style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #B9975B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Manualna terapija</span> čini razliku?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              U ekskluzivnom intervjuu, dr. Aleksandar Stošić, voditelj edukacije iz manualne terapije, otkriva zašto pravi pristup terapiji mijenja sve – od načina rada do rezultata kod pacijenata.
            </p>
          </div>

          {/* Featured Video with Premium Glass Card */}
          <div 
            className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 group transition-all duration-300 ease-out hover:-translate-y-1.5"
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
                src="https://www.youtube.com/embed/y3OMngp9MRg" 
                title="Stručni uvid: Dr. Aleksandar Stošić o Manualnoj terapiji" 
                className="w-full h-full" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                loading="lazy" 
              />
            </div>
            
            {/* Video info inside card */}
            <div className="p-5 md:p-6 text-center">
              <h3 className="font-playfair text-2xl md:text-3xl text-gray-900 font-semibold leading-snug mb-2">
                Ekskluzivni intervju s <span style={{ color: '#B9975B' }}>dr. Aleksandrom Stošićem</span>
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Stručni voditelj edukacije iz manualne terapije otkriva što čini ovaj program posebnim – iznutra
              </p>
            </div>
          </div>
      </div>
    </section>;
};