
"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedGroupProps {
  children: React.ReactNode
  className?: string
  variants?: any
}

function AnimatedGroup({
  children,
  className,
  variants
}: AnimatedGroupProps) {
  return (
    <motion.div 
      className={className} 
      variants={variants} 
      initial="hidden" 
      animate="visible"
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={variants?.item || variants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default AnimatedGroup
