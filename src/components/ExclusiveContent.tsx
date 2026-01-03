import { Button } from "@/components/ui/button";
import { GraduationCap, Play } from "lucide-react";
export const ExclusiveContent = () => {
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
          {/* Premium CTA Floating Banner */}
          <div className="rounded-2xl py-12 md:py-16 text-center relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10" style={{
        boxShadow: '0 10px 30px rgba(0,0,0,0.25), inset 0 0 40px rgba(212,175,55,0.05)'
      }}>
            {/* Decorative golden accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-12 rounded-full" style={{
          background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)'
        }} />

            <div className="px-6 md:px-12">
              <h3 className="font-playfair text-2xl md:text-3xl text-gray-900 font-semibold mb-3 leading-tight">
                Želite više ?
              </h3>
              <p className="text-gray-600 text-base md:text-lg mt-3 mb-8 max-w-2xl mx-auto leading-relaxed">Pretplatite se na Supra Studium YouTube kanal i istražite našu arhivu besplatnih edukativnih videa.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                
                <Button size="lg" asChild className="w-full sm:w-auto rounded-full bg-transparent text-[#B9975B] px-6 py-3 font-medium transition-all duration-300 border-2" style={{
              borderColor: 'rgba(185,151,91,0.5)'
            }} onMouseEnter={e => {
              e.currentTarget.style.background = '#B9975B';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = '#B9975B';
            }} onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#B9975B';
              e.currentTarget.style.borderColor = 'rgba(185,151,91,0.5)';
            }}>
                  <a href="https://youtube.com/@anteantic7905?si=Wm2p1mXw8xcU1eT9" target="_blank" rel="noopener noreferrer">
                    <Play className="w-5 h-5 mr-2" />
                    Pogledajte sve videe
                  </a>
                </Button>
              </div>
            </div>
          </div>
      </div>
    </section>;
};