"use client"

import { ComponentPropsWithoutRef, FC, ReactNode, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false)
  const targetRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current)
      }
    }
  }, [])

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <span className="flex flex-wrap justify-center">
        {words.map((word, i) => (
          <Word key={i} isVisible={isVisible} delay={i * 0.15}>
            {word}
          </Word>
        ))}
      </span>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  isVisible: boolean
  delay: number
}

const Word: FC<WordProps> = ({ children, isVisible, delay }) => {
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-20">{children}</span>
      <motion.span
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.34, 1.56, 0.64, 1], // More bouncy for impact
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        className="relative inline-block"
      >
        {children}
      </motion.span>
    </span>
  )
}
