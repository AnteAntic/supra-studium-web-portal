'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import NavHeader from '@/components/ui/nav-header';
import supaStudiumLogo from '@/assets/supra-studium-logo.png';

const menuItems = [{
  name: 'TEČAJEVI',
  href: '/skola-manualne-terapije',
  submenu: [{
    name: 'Škola manualne terapije',
    href: '/skola-manualne-terapije'
  }, {
    name: 'Crossfriction i funkcionalna masaža',
    href: '/crossfriction-funkcionalna-masaza'
  }, {
    name: 'Akupresura i trigger point terapija',
    href: '/akupresura-trigger-point'
  }, {
    name: 'Cupping terapija',
    href: '/cupping-terapija'
  }, {
    name: 'Lomi Lomi masaža',
    href: '/lomi-lomi'
  }, {
    name: 'Kalabaš masaža',
    href: '/calabash-certifikacija'
  }, {
    name: '3D Advanced Therapeutic Stretching',
    href: '/3d-advanced-therapeutic-stretching'
  }]
}, {
  name: 'RASPORED',
  href: '/raspored'
}, {
  name: 'O UČILIŠTU',
  href: '/o-ucilistu'
}, {
  name: 'KONTAKT',
  href: '#kontakt'
}];

const GlobalHeader = () => {
  const [menuState, setMenuState] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuState(false);
    }
  };

  // onLight: header is showing its opaque background (scrolled or mobile menu open)
  // When false = transparent over hero = use white text
  // When true  = light background     = use dark text
  const onLight = isScrolled || menuState;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        onLight ? 'border-b border-black/[0.08]' : 'border-b border-transparent'
      )}
      style={onLight ? {
        background: 'rgba(250,248,244,0.97)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      } : {
        background: 'transparent',
      }}
    >
      <nav data-state={menuState && 'active'} className="group">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">

            {/* Logo + hamburger */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link to="/" aria-label="home" className="flex items-center cursor-pointer">
                <img
                  src={supaStudiumLogo}
                  alt="Supra Studium Logo"
                  className="hidden md:block max-h-12 w-auto object-contain"
                  style={!onLight ? { filter: 'brightness(0) invert(1)' } : undefined}
                />
                <img
                  src={supaStudiumLogo}
                  alt="Supra Studium Logo"
                  className="block md:hidden max-h-8 w-auto object-contain"
                  style={!onLight ? { filter: 'brightness(0) invert(1)' } : undefined}
                />
              </Link>

              <button
                onClick={() => { setMenuState(m => { if (m) setExpandedMobile(null); return !m; }); }}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className={cn(
                  'relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden transition-colors duration-300',
                  onLight ? 'text-[#1F1D1A]' : 'text-white'
                )}
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            {/* Desktop nav (centered) */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <NavHeader onLight={onLight} />
            </div>

            {/* Mobile panel */}
            <div className="group-data-[state=active]:block hidden w-full lg:hidden mb-2 pt-5 pb-5 border-t border-black/[0.08]">
              <ul className="space-y-5">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.name === 'KONTAKT' ? (
                      <button
                        onClick={() => { scrollToSection('kontakt'); }}
                        className="relative inline-block text-[13px] uppercase tracking-[0.14em] font-medium text-[#1F1D1A]/60 hover:text-[#1F1D1A] transition-colors duration-200 group/mitem"
                      >
                        {item.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#B89A4F] transition-all duration-300 group-hover/mitem:w-full" />
                      </button>
                    ) : item.submenu ? (
                      <div>
                        <button
                          onClick={() => setExpandedMobile(expandedMobile === item.name ? null : item.name)}
                          className="relative inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] font-medium text-[#1F1D1A]/60 hover:text-[#1F1D1A] transition-colors duration-200 group/mitem"
                        >
                          {item.name}
                          <ChevronDown
                            className={cn(
                              'w-3 h-3 transition-transform duration-200 flex-shrink-0',
                              expandedMobile === item.name ? 'rotate-180' : 'rotate-0'
                            )}
                          />
                          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#B89A4F] transition-all duration-300 group-hover/mitem:w-full" />
                        </button>
                        {expandedMobile === item.name && (
                          <ul className="mt-3.5 ml-0.5 space-y-3 border-l border-[#B89A4F]/20 pl-4">
                            {item.submenu.map((sub, si) => (
                              <li key={si}>
                                <Link
                                  to={sub.href}
                                  onClick={() => { setMenuState(false); setExpandedMobile(null); }}
                                  className="text-[12px] tracking-[0.06em] font-normal text-[#1F1D1A]/55 hover:text-[#B89A4F] transition-colors duration-200"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setMenuState(false)}
                        className="relative inline-block text-[13px] uppercase tracking-[0.14em] font-medium text-[#1F1D1A]/60 hover:text-[#1F1D1A] transition-colors duration-200 group/mitem"
                      >
                        {item.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#B89A4F] transition-all duration-300 group-hover/mitem:w-full" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default GlobalHeader;
