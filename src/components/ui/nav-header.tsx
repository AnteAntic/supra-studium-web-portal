"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PrijavaButton } from "@/components/ui/PrijavaButton";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const location = useLocation();

  const scrollToFooter = () => {
    const kontaktElement = document.getElementById('kontakt');
    if (kontaktElement) {
      kontaktElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center gap-4">
      <ul
        className="relative mx-auto flex w-fit rounded-full border-2 border-supra-navy bg-supra-ivory p-1"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        <TecajeviDropdown setPosition={setPosition} isActive={location.pathname.includes('/tecajevi') || location.pathname.includes('skola-manualne') || location.pathname.includes('crossfriction') || location.pathname.includes('akupresura') || location.pathname.includes('cupping') || location.pathname.includes('lomi-lomi') || location.pathname.includes('calabash')} />
        <Tab setPosition={setPosition} href="/raspored" isActive={location.pathname === '/raspored'}>RASPORED</Tab>
        <Tab setPosition={setPosition} href="/video-akademija" isActive={location.pathname === '/video-akademija'}>VIDEO AKADEMIJA</Tab>
        <Tab setPosition={setPosition} href="#kontakt" onClick={scrollToFooter} isActive={false}>KONTAKT</Tab>

        <Cursor position={position} />
      </ul>
      
      <PrijavaButton className="ml-4" />
    </div>
  );
}

const TecajeviDropdown = ({
  setPosition,
  isActive,
}: {
  setPosition: any;
  isActive?: boolean;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  const courses = [
    { title: "Škola manualne terapije", href: "/skola-manualne-terapije" },
    { title: "Crossfriction i funkcionalna masaža", href: "/crossfriction-funkcionalna-masaza" },
    { title: "Akupresura i trigger point terapija", href: "/akupresura-trigger-point" },
    { title: "Cupping terapija", href: "/cupping-terapija" },
    { title: "Lomi Lomi masaža", href: "/lomi-lomi" },
    { title: "Kalabaš masaža", href: "/calabash-certifikacija" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <li
          ref={ref}
          onMouseEnter={() => {
            if (!ref.current) return;

            const { width } = ref.current.getBoundingClientRect();
            setPosition({
              width,
              opacity: 1,
              left: ref.current.offsetLeft,
            });
          }}
          className={`relative z-10 flex items-center cursor-pointer px-3 py-1.5 text-xs uppercase transition-colors duration-200 md:px-5 md:py-3 md:text-base ${
            isActive 
              ? 'text-supra-navy' 
              : 'text-supra-navy hover:text-supra-navy'
          }`}
        >
          <span className="flex items-center gap-1">
            TEČAJEVI
            <ChevronDown className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </span>
        </li>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-72 bg-background border border-border shadow-lg z-50"
        align="start"
        sideOffset={5}
      >
        <div className="py-2">
          {courses.map((course, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link 
                to={course.href}
                className="flex items-center px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
              >
                {course.title}
              </Link>
            </DropdownMenuItem>
          ))}
          
          <DropdownMenuSeparator className="my-2 bg-border" />
          
          <DropdownMenuItem asChild>
            <Link 
              to="/"
              className="flex items-center px-4 py-3 text-base font-semibold text-primary hover:bg-primary/10 transition-colors duration-200 cursor-pointer"
            >
              Pregled svih tečajeva →
            </Link>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Tab = ({
  children,
  setPosition,
  href,
  isActive,
  external,
  onClick,
}: {
  children: React.ReactNode;
  setPosition: any;
  href: string;
  isActive?: boolean;
  external?: boolean;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase transition-colors duration-200 md:px-5 md:py-3 md:text-base ${
        isActive 
          ? 'text-supra-navy' 
          : 'text-supra-navy hover:text-supra-navy'
      }`}
    >
      {onClick ? (
        <button onClick={handleClick} className="block w-full h-full">
          {children}
        </button>
      ) : external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
          {children}
        </a>
      ) : (
        <Link to={href} className="block w-full h-full">
          {children}
        </Link>
      )}
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-[#a58d4e] md:h-12"
    />
  );
};

export default NavHeader;