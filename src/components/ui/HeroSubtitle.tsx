"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface HeroSubtitleProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  style?: React.CSSProperties
}

function HeroSubtitle({
  children,
  className,
  as: Component = 'h2',
  style
}: HeroSubtitleProps) {
  return (
    <Component 
      className={cn(
        // Typography hierarchy - Hero subtitle/tagline (H2)
        'text-[clamp(20px,3vw,28px)]',
        'leading-relaxed tracking-wide font-normal',
        // Gold color for emphasis
        'text-[#d4af37]',
        className
      )}
      style={style}
    >
      {children}
    </Component>
  )
}

export default HeroSubtitle