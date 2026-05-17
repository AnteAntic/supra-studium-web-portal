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
    id: 'cross-friction',
    name: 'Cross Friction i funkcionalna masaža',
    desc: 'Precizan rad na fasciji, ožiljčima i funkcionalnim ograničenjima.',
    href: '/crossfriction-funkcionalna-masaza',
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
    <section id={id} style={{ background: '#F8F6F1' }} className={`py-24 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] font-normal mb-5" style={{ color: '#B89B5E' }}>
              Daljnje edukacije
            </p>
            <h2 className="font-playfair font-semibold text-[1.9rem] md:text-[2.4rem] leading-[1.2] mb-6" style={{ color: '#1F1D1A' }}>
              Specijalizirane edukacije Supra Studija.
            </h2>
            <p className="text-[14px] leading-[1.8] font-normal" style={{ color: '#7A7570', maxWidth: '52ch' }}>
              Edukacije usmjerene na praktičan rad, palpaciju i razumijevanje tijela kroz različite terapijske pristupe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {visible.map((course) =>
                course.status === 'coming-soon' ? (
                  <div
                    key={course.id}
                    className="py-7 pr-8"
                    style={{ borderTop: '1px solid rgba(0,0,0,0.08)', cursor: 'default' }}
                  >
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <p className="text-[15px] font-medium leading-snug" style={{ color: '#1F1D1A' }}>
                        {course.name}
                      </p>
                      <span
                        className="text-[10px] uppercase tracking-[0.18em] font-normal"
                        style={{ color: '#B89B5E', opacity: 0.55 }}
                      >
                        U izradi
                      </span>
                    </div>
                    <p className="text-[12.5px] leading-[1.65] font-normal" style={{ color: '#9A9590' }}>
                      {course.desc}
                    </p>
                  </div>
                ) : (
                  <a
                    key={course.id}
                    href={course.href!}
                    className="group block py-7 pr-8"
                    style={{ borderTop: '1px solid rgba(0,0,0,0.08)', textDecoration: 'none', cursor: 'pointer' }}
                  >
                    <div className="flex items-baseline gap-2 mb-1.5">
                      <p className="text-[15px] font-medium leading-snug text-[#1F1D1A] group-hover:text-[#B89B5E] transition-colors duration-[160ms]">
                        {course.name}
                      </p>
                      <span
                        className="text-[11px] text-[#B89B5E] opacity-0 group-hover:opacity-100 transition-opacity duration-[160ms]"
                        aria-hidden="true"
                      >
                        &rarr;
                      </span>
                    </div>
                    <p className="text-[12.5px] leading-[1.65] font-normal" style={{ color: '#9A9590' }}>
                      {course.desc}
                    </p>
                  </a>
                )
              )}
            </div>
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-14"
          >
            <button
              className="text-[10.5px] uppercase tracking-[0.2em] font-normal py-3 px-10 transition-colors duration-300"
              style={{ border: '1px solid rgba(0,0,0,0.28)', color: '#3D3A35', background: 'transparent', cursor: 'pointer' }}
              onMouseEnter={e => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = '#B89B5E';
                b.style.borderColor = '#B89B5E';
                b.style.color = '#fff';
              }}
              onMouseLeave={e => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = 'transparent';
                b.style.borderColor = 'rgba(0,0,0,0.28)';
                b.style.color = '#3D3A35';
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
