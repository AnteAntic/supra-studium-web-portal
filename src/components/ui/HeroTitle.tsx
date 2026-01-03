"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface HeroTitleProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  style?: React.CSSProperties
}

function HeroTitle({
  children,
  className,
  as: Component = 'h1',
  style
}: HeroTitleProps) {
  return (
    <Component 
      className={cn(
        // Typography hierarchy - Hero title (H1)
        'text-[clamp(38px,6vw,64px)]',
        'leading-tight tracking-[0.02em] font-bold',
        // Shimmer effect only on key words
        'hero-shimmer hero-readable',
        // Uppercase for brand emphasis
        'uppercase',
        className
      )}
      style={style}
    >
      {children}
    </Component>
  )
}

export default HeroTitle