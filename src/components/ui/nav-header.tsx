"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// onLight=true  → opaque light background (scrolled) → dark text
// onLight=false → transparent over hero              → white text
function NavHeader({ onLight = false }: { onLight?: boolean }) {
  const location = useLocation();

  const scrollToFooter = () => {
    const el = document.getElementById('kontakt');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex items-center">
      <ul className="flex items-center">
        <TecajeviDropdown
          onLight={onLight}
          isActive={
            location.pathname.includes('/tecajevi') ||
            location.pathname.includes('skola-manualne') ||
            location.pathname.includes('crossfriction') ||
            location.pathname.includes('akupresura') ||
            location.pathname.includes('cupping') ||
            location.pathname.includes('lomi-lomi') ||
            location.pathname.includes('calabash') ||
            location.pathname.includes('3d-advanced')
          }
        />
        <Tab href="/raspored" isActive={location.pathname === '/raspored'} onLight={onLight}>RASPORED</Tab>
        <Tab href="/o-ucilistu" isActive={location.pathname === '/o-ucilistu'} onLight={onLight}>O UČILIŠTU</Tab>
        <Tab href="#kontakt" onClick={scrollToFooter} isActive={false} onLight={onLight}>KONTAKT</Tab>
      </ul>
    </div>
  );
}

// Colour values as plain strings — never passed as Tailwind class names
const COLOR = {
  inactive: (onLight: boolean) => onLight ? 'rgba(31,29,26,0.55)' : 'rgba(255,255,255,0.75)',
  active:   (onLight: boolean) => onLight ? '#1F1D1A'             : '#ffffff',
};

const LABEL = 'text-[13px] uppercase tracking-[0.12em] font-medium';

// ─── Tečajevi dropdown ───────────────────────────────────────────────────────
const TecajeviDropdown = ({
  isActive = false,
  onLight = false,
}: {
  isActive?: boolean;
  onLight?: boolean;
}) => {
  const location = useLocation();
  const courses = [
    { title: "Škola manualne terapije",            href: "/skola-manualne-terapije" },
    { title: "Crossfriction i funkcionalna masaža", href: "/crossfriction-funkcionalna-masaza" },
    { title: "Akupresura i trigger point terapija", href: "/akupresura-trigger-point" },
    { title: "Cupping terapija",                   href: "/cupping-terapija" },
    { title: "Lomi Lomi masaža",                   href: "/lomi-lomi" },
    { title: "Kalabaš masaža",                     href: "/calabash-certifikacija" },
    { title: "3D Advanced Therapeutic Stretching", href: "/3d-advanced-therapeutic-stretching" },
  ];

  const defaultColor = isActive ? COLOR.active(onLight) : COLOR.inactive(onLight);
  const hoverColor   = COLOR.active(onLight);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Color lives on the <li> so the inner <span> inherits it */}
        <li
          className="relative group list-none cursor-pointer outline-none select-none"
          style={{ color: defaultColor, transition: 'color 200ms' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = hoverColor; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = defaultColor; }}
        >
          <span className={`flex items-center gap-1 px-4 py-2.5 ${LABEL}`}>
            TEČAJEVI
            <ChevronDown className="w-3 h-3 opacity-70 mt-px" />
          </span>
          {/* Active underline */}
          {isActive && (
            <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#B89A4F]" />
          )}
          {/* Hover underline */}
          {!isActive && (
            <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#B89A4F] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
          )}
        </li>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-52 border z-50 rounded-none p-0"
        style={{
          background: 'rgba(243,238,230,0.92)',
          borderColor: 'rgba(184,154,79,0.10)',
          boxShadow: '0 6px 20px rgba(20,18,16,0.07)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
        align="start"
        sideOffset={12}
      >
        <div className="py-1.5">
          {courses.map((course, index) => {
            const itemActive = location.pathname === course.href;
            return (
              <DropdownMenuItem key={index} asChild>
                <Link
                  to={course.href}
                  className="flex items-center px-4 py-3 text-[13px] font-normal cursor-pointer focus:outline-none"
                  style={{
                    color: itemActive ? '#1F1D1A' : '#3D3A35',
                    background: itemActive ? 'rgba(184,154,79,0.14)' : 'transparent',
                    boxShadow: itemActive ? 'inset 2px 0 0 #B89A4F' : 'none',
                    transition: 'background 180ms ease, color 180ms ease, box-shadow 180ms ease',
                  }}
                  onMouseEnter={e => {
                    if (itemActive) return;
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(184,154,79,0.10)';
                    el.style.color = '#1F1D1A';
                    el.style.boxShadow = 'inset 1px 0 0 rgba(184,154,79,0.7)';
                  }}
                  onMouseLeave={e => {
                    if (itemActive) return;
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'transparent';
                    el.style.color = '#3D3A35';
                    el.style.boxShadow = 'none';
                  }}
                  onFocus={e => {
                    if (itemActive) return;
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(184,154,79,0.10)';
                    el.style.color = '#1F1D1A';
                    el.style.boxShadow = 'inset 1px 0 0 rgba(184,154,79,0.7)';
                    el.style.outline = 'none';
                  }}
                  onBlur={e => {
                    if (itemActive) return;
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'transparent';
                    el.style.color = '#3D3A35';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {course.title}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// ─── Regular tab ─────────────────────────────────────────────────────────────
const Tab = ({
  children,
  href,
  isActive = false,
  onLight = false,
  external,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
  onLight?: boolean;
  external?: boolean;
  onClick?: () => void;
}) => {
  const defaultColor = isActive ? COLOR.active(onLight) : COLOR.inactive(onLight);
  const hoverColor   = COLOR.active(onLight);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) { e.preventDefault(); onClick(); }
  };

  // Color on <li> — inner link inherits; onMouseEnter/Leave on <li> to update it
  return (
    <li
      className="relative group list-none"
      style={{ color: defaultColor, transition: 'color 200ms' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = hoverColor; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = defaultColor; }}
    >
      {onClick ? (
        <button onClick={handleClick} className={`block px-4 py-2.5 ${LABEL}`}>
          {children}
        </button>
      ) : external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`block px-4 py-2.5 ${LABEL}`}>
          {children}
        </a>
      ) : (
        <Link to={href} className={`block px-4 py-2.5 ${LABEL}`}>
          {children}
        </Link>
      )}

      {/* Active: permanent gold underline */}
      {isActive && (
        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#B89A4F]" />
      )}
      {/* Inactive: slide-in on hover */}
      {!isActive && (
        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#B89A4F] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
      )}
    </li>
  );
};

export default NavHeader;
