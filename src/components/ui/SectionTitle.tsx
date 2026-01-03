"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  style?: React.CSSProperties
}

function SectionTitle({
  children,
  className,
  as: Component = 'h2',
  style
}: SectionTitleProps) {
  return (
    <Component 
      className={cn(
        // Typography hierarchy - Secondary section titles (H2/H3)
        'text-[clamp(26px,4vw,40px)]',
        'leading-tight tracking-tight font-bold',
        // Margins
        'mt-8 md:mt-12',
        className
      )}
      style={style}
    >
      {children}
    </Component>
  )
}

export default SectionTitle