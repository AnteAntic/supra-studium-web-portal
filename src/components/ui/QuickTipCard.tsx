"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp } from 'lucide-react'

interface QuickTipCardProps {
  delay?: number
}

const QuickTipCard: React.FC<QuickTipCardProps> = ({ delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group cursor-pointer lg:col-span-3 md:col-span-2"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1)_0%,transparent_50%)] group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.15)_0%,transparent_60%)] transition-all duration-500" />
        
        {/* Floating light effect */}
        <motion.div
          className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative p-8 flex items-center gap-6">
          <div className="flex-shrink-0">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Lightbulb className="w-8 h-8 text-white" />
            </motion.div>
          </div>
          
          <div className="flex-1">
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: delay + 0.2 }}
            >
              <h3 className="font-inter font-bold text-xl text-gray-900">
                Dvostruki učinak, stvarni rezultati
              </h3>
              <TrendingUp className="w-5 h-5 text-amber-500" />
            </motion.div>
            
            <motion.p 
              className="text-gray-700 text-base leading-relaxed font-medium mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: delay + 0.3 }}
            >
              Ne nauči samo kako, već i <span className="text-amber-700 font-semibold">zašto kombinacija akupresure i trigger točaka</span> višestruko povećava učinkovitost terapije – s preciznošću i sigurnošću koju klijenti osjete već pri prvom tretmanu.
            </motion.p>
            
            <motion.div
              className="text-sm text-gray-600 bg-white/60 rounded-lg px-4 py-2 border border-amber-200/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.4 }}
            >
              💡 <span className="font-medium">Pro tip:</span> Nakon ove trodnevne edukacije, tvoja praksa više neće biti ista – tretmani postaju jasniji, ciljaniji i donose trajne rezultate.
            </motion.div>
          </div>
        </div>
        
        {/* Subtle animated border */}
        <div className="absolute inset-0 rounded-xl border border-amber-300/20 group-hover:border-amber-400/40 transition-colors duration-500" />
      </div>
    </motion.div>
  )
}

export default QuickTipCard