
"use client"

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import NavHeader from '@/components/ui/nav-header'

const menuItems = [
  { name: 'TEČAJEVI', href: '#courses' },
  { name: 'RASPORED', href: '/raspored' },
  { name: 'VIDEO AKADEMIJA', href: '#video-academy' },
  { name: 'KONTAKT', href: '#kontakt' }
]

const HeroHeader = () => {
  const [menuState, setMenuState] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuState(false)
    }
  }

  const handleMenuClick = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href
    } else {
      scrollToSection(href.replace('#', ''))
    }
  }

  return (
    <header>
      <nav data-state={menuState && 'active'} className="fixed z-20 w-full px-2 group">
        <div className={cn(
          'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
          isScrolled && 'bg-background/80 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5'
        )}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link 
                to="/" 
                aria-label="home" 
                className="flex items-center cursor-pointer"
              >
                <img 
                  src="/lovable-uploads/supra-studium-logo-desktop.png" 
                  alt="Supra Studium Logo" 
                  className="hidden md:block h-11 w-auto object-contain"
                  style={{ 
                    filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.25))',
                    display: 'block'
                  }}
                />
                {/* Mobile Logo */}
                <img 
                  src="/lovable-uploads/supra-studium-logo-desktop.png" 
                  alt="Supra Studium Logo" 
                  className="block md:hidden h-8 w-auto object-contain"
                  style={{ 
                    filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.25))',
                    display: 'block'
                  }}
                />
              </Link>

              <button 
                onClick={() => setMenuState(!menuState)} 
                aria-label={menuState ? 'Close Menu' : 'Open Menu'} 
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <NavHeader />
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => handleMenuClick(item.href)} 
                        className="text-muted-foreground hover:text-supra-golden block duration-150 relative group"
                      >
                        <span className="relative z-10">{item.name}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-supra-golden transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button 
                  size="sm" 
                  asChild
                >
                  <Link to="/prijava">
                    <span>Prijava</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default HeroHeader
