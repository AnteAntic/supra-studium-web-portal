import React from 'react';
import { motion } from 'framer-motion';

interface Course {
  id: string;
  name: string;
  desc: string;
  href: string | null;
  status: 'active' | 'coming-soon';
}

const COURSES: Course[] = [
  {
    id: 'manualna-terapija',
    name: 'Manualna terapija',
    desc: 'Sveobuhvatan pristup biomehanici i rehabilitaciji tijela.',
    href: '/skola-manualne-terapije',
    status: 'active',
  },
  {
    id: 'akupresura',
    name: 'Akupresura i Trigger Point terapija',
    desc: 'Precizan rad s akupresurnim i miofascijalnim točkama boli.',
    href: '/akupresura-trigger-point',
    status: 'active',
  },
  {
    id: 'cross-friction',
    name: 'Cross Friction i funkcionalna masaža',
    desc: 'Precizan rad na fasciji, ožiljčima i funkcionalnim ograničenjima.',
    href: '/crossfriction-funkcionalna-masaza',
    status: 'active',
  },
  {
    id: 'cupping',
    name: 'Cupping terapija',
    desc: 'Vakuum terapija za rad s fascijom, cirkulacijom i mišićnom napetosti.',
    href: '/cupping-terapija',
    status: 'active',
  },
  {
    id: 'lomi-lomi',
    name: 'Lomi Lomi masaža',
    desc: 'Havajski pristup terapijskom radu kroz ritam, pokret i prisutnost.',
    href: '/lomi-lomi',
    status: 'active',
  },
  {
    id: 'kalabas',
    name: 'Kalabaš masaža',
    desc: 'Tradicionalni afrički terapijski pristup duboke relaksacije.',
    href: '/calabash-certifikacija',
    status: 'active',
  },
  {
    id: 'soulscan',
    name: 'Soulscan – intuitivno čitanje duše',
    desc: 'Intuitivni pristup radu s emocionalnim i energetskim obrascima.',
    href: null,
    status: 'coming-soon',
  },
];

interface CourseRecommendationsProps {
  currentCourse?: string;
  className?: string;
  id?: string;
}

export const CourseRecommendations: React.FC<CourseRecommendationsProps> = ({
  currentCourse,
  className = '',
  id,
}) => {
  const visible = COURSES.filter(c => c.id !== currentCourse);

  return (
    <section id={id} style={{ background: '#FAF8F4', borderTop: '1px solid rgba(0,0,0,0.05)' }} className={`pt-24 pb-40 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] font-normal mb-5" style={{ color: '#B89A4F' }}>
              Daljnje edukacije
            </p>
            <h2 className="font-playfair font-semibold text-[1.9rem] md:text-[2.4rem] leading-[1.2] mb-6" style={{ color: '#1F1D1A' }}>
              Specijalizirane edukacije Supra Studija.
            </h2>
            <p className="text-[13.5px] leading-[1.85] font-normal" style={{ color: '#7A7570', maxWidth: '52ch' }}>
              Edukacije usmjerene na praktičan rad, palpaciju i razumijevanje tijela kroz različite terapijske pristupe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {visible.map((course) =>
              course.status === 'coming-soon' ? (
                <div
                  key={course.id}
                  className="py-8 pr-4"
                  style={{ borderTop: '1px solid rgba(0,0,0,0.045)', cursor: 'default' }}
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <p className="text-[15px] font-medium leading-snug" style={{ color: '#1F1D1A' }}>
                      {course.name}
                    </p>
                    <span
                      className="text-[9px] uppercase tracking-[0.22em] font-normal"
                      style={{ color: '#B89A4F', opacity: 0.40 }}
                    >
                      U izradi
                    </span>
                  </div>
                  <p className="text-[13px] leading-[1.70] font-normal" style={{ color: '#9A9590', maxWidth: '58ch' }}>
                    {course.desc}
                  </p>
                </div>
              ) : (
                <a
                  key={course.id}
                  href={course.href!}
                  className="group block py-8 pr-4"
                  style={{
                    borderTop: '1px solid rgba(0,0,0,0.045)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.45s ease',
                    marginLeft: '-1.5rem',
                    marginRight: '-1.5rem',
                    paddingLeft: '1.5rem',
                    paddingRight: '1.5rem',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(184,154,79,0.025)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <p className="text-[15px] font-medium leading-snug transition-colors duration-[450ms] text-[#1F1D1A] group-hover:text-[#B89A4F]">
                          {course.name}
                        </p>
                      </div>
                      <p className="text-[13px] leading-[1.70] font-normal" style={{ color: '#9A9590', maxWidth: '58ch' }}>
                        {course.desc}
                      </p>
                    </div>
                    <span
                      className="text-[13px] flex-shrink-0 ml-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-[3px] transition-all duration-[450ms]"
                      style={{ color: '#B89A4F' }}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </a>
              )
            )}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.045)' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <button
              className="text-[10px] uppercase tracking-[0.20em] font-normal py-3 px-10"
              style={{
                border: '1px solid rgba(0,0,0,0.18)',
                color: '#4A4540',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.5s ease, border-color 0.5s ease, color 0.45s ease',
              }}
              onMouseEnter={e => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = 'rgba(184,154,79,0.08)';
                b.style.borderColor = 'rgba(184,154,79,0.45)';
                b.style.color = '#2A2522';
              }}
              onMouseLeave={e => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = 'transparent';
                b.style.borderColor = 'rgba(0,0,0,0.18)';
                b.style.color = '#4A4540';
              }}
              onClick={() => { window.location.href = '/raspored'; }}
            >
              Pogledaj raspored svih edukacija
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
