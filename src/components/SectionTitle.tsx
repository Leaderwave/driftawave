"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function SectionTitle({ children, className = "", id }: SectionTitleProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      id={id}
      className={`relative py-20 md:py-28 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-coral/5 to-brand-orange/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-brand-mint/3 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-brand-coral/4 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Animated border lines */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-brand-coral/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      <div className="relative z-10">
        <motion.h2
          className="font-brush text-6xl md:text-8xl lg:text-9xl font-black text-center bg-gradient-to-r from-brand-ink via-brand-charcoal to-brand-ink bg-clip-text text-transparent leading-[0.8] tracking-tight"
          initial={{ y: 60, opacity: 0, rotateX: -15 }}
          animate={isVisible ? { y: 0, opacity: 1, rotateX: 0 } : { y: 60, opacity: 0, rotateX: -15 }}
          transition={{
            duration: 1.2,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {children}
        </motion.h2>

        {/* Decorative underline */}
        <motion.div
          className="mx-auto mt-8 w-24 h-1 bg-gradient-to-r from-brand-coral to-brand-orange rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isVisible ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        />

        {/* Subtle text shadow effect */}
        <motion.div
          className="absolute inset-0 font-brush text-6xl md:text-8xl lg:text-9xl font-black text-center text-brand-ink/5 leading-[0.8] tracking-tight select-none pointer-events-none"
          initial={{ y: 4, opacity: 0 }}
          animate={isVisible ? { y: 4, opacity: 0.3 } : { y: 4, opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ transform: 'translateZ(0)' }}
        >
          {children}
        </motion.div>
      </div>

      {/* Floating particles effect */}
      {isVisible && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-brand-coral/40 to-brand-orange/40 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              initial={{ y: 0, opacity: 0, scale: 0 }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  )
}
