
"use client"

import React, { useRef } from 'react'
import { useScroll, useTransform, useInView } from 'framer-motion'
import HeroBackground from './HeroBackground'
import HeroFloatingImage from './HeroFloatingImage'
import HeroContent from './HeroContent'
import HeroScrollIndicator from './HeroScrollIndicator'

interface HeroSectionProps {
  title?: string
  subtitle?: string
  description?: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  backgroundType?: 'image' | 'video' | 'gradient' | 'warm-gradient' | 'apple-gradient'
  backgroundSrc?: string
  overlayOpacity?: number
  theme?: 'light' | 'dark'
  showScrollIndicator?: boolean
  floatingImage?: string
  floatingImagePosition?: 'left' | 'right' | 'center'
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Think Different",
  subtitle = "Innovation at its finest",
  description = "Experience the future of technology with our revolutionary products designed to enhance your digital lifestyle and transform the way you work, create, and connect.",
  primaryCta = { text: "Learn More", href: "#" },
  secondaryCta = { text: "Watch Video", href: "#" },
  backgroundType = "gradient",
  backgroundSrc = "",
  overlayOpacity = 0.4,
  theme = "light",
  showScrollIndicator = true,
  floatingImage,
  floatingImagePosition = "right"
}) => {
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const backgroundClass = theme === 'dark' 
    ? 'bg-background text-foreground' 
    : 'bg-white text-gray-900'

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${backgroundClass}`}
      role="banner"
      aria-label="Hero section"
    >
      {/* Diagonal Background Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #a58d4e 0px,
            #a58d4e 1px,
            transparent 1px,
            transparent 20px
          )`,
          opacity: 0.03
        }}
      />

      <HeroBackground
        backgroundType={backgroundType}
        backgroundSrc={backgroundSrc}
        overlayOpacity={overlayOpacity}
        theme={theme}
        scrollY={y}
      />

      {floatingImage && (
        <HeroFloatingImage
          floatingImage={floatingImage}
          floatingImagePosition={floatingImagePosition}
        />
      )}

      <div ref={contentRef}>
        <HeroContent
          title={title}
          subtitle={subtitle}
          description={description}
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
          opacity={opacity}
          isInView={isInView}
        />
      </div>

      <HeroScrollIndicator showScrollIndicator={showScrollIndicator} />

      {/* Accessibility Enhancement */}
      <div className="sr-only">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={primaryCta.href}>{primaryCta.text}</a>
        <a href={secondaryCta.href}>{secondaryCta.text}</a>
      </div>
    </section>
  )
}

export default HeroSection
