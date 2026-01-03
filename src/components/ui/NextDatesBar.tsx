import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Plus, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface CourseEvent {
  date: string;
  city: string;
  courseName: string;
  price: string;
  rawDates: string;
  sortDate: Date;
  location?: string;
}
interface NextDatesBarProps {
  events: CourseEvent[];
  onAddToCalendar: (courseName: string, dates: string) => void;
  onRegisterClick: () => void; // This is kept for backward compatibility but overridden
}
export default function NextDatesBar({
  events,
  onAddToCalendar,
  onRegisterClick
}: NextDatesBarProps) {
  // Take only the first 4-5 upcoming events for quick access
  const upcomingEvents = events.slice(0, 5);

  const handleRegister = (courseName: string) => {
    // Praktična radionica goes to email, all others to Tally
    if (courseName.toLowerCase().includes('praktična radionica')) {
      window.location.href = 'mailto:ante.a@web.de';
    } else {
      window.open('https://tally.so/r/wA5kvD', '_blank');
    }
  };
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.8
  }} viewport={{
    once: true
  }} className="mb-20 rounded-3xl bg-gradient-to-br from-[#FAF7F2] to-[#FDFBF8] dark:from-background/60 dark:to-background/40 p-10 md:p-12 border border-supra-golden/10 shadow-xl">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h3 className="font-playfair text-3xl md:text-4xl font-bold uppercase tracking-[0.02em] mb-4 text-foreground">
          Sljedeći termini
        </h3>
        
      </div>

      {/* Cards Container - Horizontal Scroll on Desktop, Stacked on Mobile */}
      <div className="relative">
        {/* Desktop: Horizontal Carousel */}
        <div className="hidden md:flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-supra-golden/40 scrollbar-track-transparent hover:scrollbar-thumb-supra-golden/60 transition-colors">
          {upcomingEvents.map((event, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.08
        }} viewport={{
          once: true
        }} className="flex-shrink-0 w-[320px] snap-center">
              <EventCard event={event} onAddToCalendar={onAddToCalendar} onRegisterClick={() => handleRegister(event.courseName)} isFirst={index === 0} />
            </motion.div>)}
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden space-y-6">
          {upcomingEvents.map((event, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.08
        }} viewport={{
          once: true
        }}>
              <EventCard event={event} onAddToCalendar={onAddToCalendar} onRegisterClick={() => handleRegister(event.courseName)} isFirst={index === 0} />
            </motion.div>)}
        </div>
      </div>
    </motion.div>;
}

// Event Card Component
function EventCard({
  event,
  onAddToCalendar,
  onRegisterClick,
  isFirst = false
}: {
  event: CourseEvent;
  onAddToCalendar: (courseName: string, dates: string) => void;
  onRegisterClick: () => void;
  isFirst?: boolean;
}) {
  return <div className="group relative h-full">
      {/* Glassmorphism Card with Apple-style shadow */}
      <div className={`relative h-full backdrop-blur-xl rounded-3xl transition-all duration-500 overflow-hidden ${isFirst ? 'bg-gradient-to-br from-supra-golden/15 to-yellow-500/10 border-2 border-supra-golden/40 shadow-[0_10px_40px_rgba(212,175,55,0.25)]' : 'bg-white/95 dark:bg-background/90 border border-border/40 hover:border-supra-golden/40 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]'}`} style={{
      contentVisibility: 'auto'
    }}>
        {/* Gold Accent Glow */}
        <div className={`absolute inset-0 rounded-3xl transition-all duration-500 pointer-events-none ${isFirst ? 'opacity-100 shadow-[0_0_30px_rgba(212,175,55,0.3)]' : 'opacity-0 group-hover:opacity-100 shadow-[0_0_20px_rgba(212,175,55,0.2)]'}`} />
        
        {/* Content */}
        <div className="relative p-7 space-y-5">
          {/* Date - Most Prominent */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-supra-golden" />
              <span className="text-[10px] uppercase tracking-[0.08em] text-muted-foreground font-bold">
                Datum
              </span>
            </div>
            <p className="text-3xl font-bold font-playfair text-foreground leading-tight mb-3">
              {event.date}
            </p>
            
            {/* Price Badge - Right under date */}
            <div className="inline-flex items-center bg-supra-golden/15 border border-supra-golden/40 rounded-lg px-3 py-1.5">
              <p className="text-sm font-bold text-supra-golden">
                {event.price}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-60" />

          {/* City & Location */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-supra-golden" />
              <span className="text-[10px] uppercase tracking-[0.08em] text-muted-foreground font-bold">
                Lokacija
              </span>
            </div>
            <p className="text-lg font-bold text-foreground">
              {event.city}
            </p>
            {event.location && <p className="text-xs text-muted-foreground mt-1">
                {event.location}
              </p>}
          </div>

          {/* Course Name - Serif Bold with Icon */}
          <div className="bg-muted/30 rounded-xl p-4 border border-border/30">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-supra-golden/20 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-supra-golden" />
              </div>
              <p className="text-sm font-bold font-playfair text-foreground leading-relaxed flex-1">
                {event.courseName}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-3 space-y-3">
            <Button onClick={onRegisterClick} className="w-full bg-gradient-to-r from-supra-golden to-yellow-500 hover:from-yellow-500 hover:to-supra-golden text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 py-6" size="lg">
              Prijavi se
            </Button>
            
            <Button onClick={() => onAddToCalendar(event.courseName, event.rawDates)} variant="ghost" className="w-full text-muted-foreground hover:text-supra-golden rounded-xl transition-all duration-300 font-medium text-sm" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Dodaj u kalendar
            </Button>
          </div>
        </div>
      </div>
    </div>;
}