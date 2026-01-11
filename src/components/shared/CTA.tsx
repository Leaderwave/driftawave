"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export function CTA({
  title = "Ready to Transform Your Team?",
  subtitle = "Join the leading companies that trust Driftawave to design their most impactful offsites.",
  buttonText = "Schedule a Call",
  buttonLink = "https://calendly.com/driftawave", // Default link
  className,
}: CTAProps) {
  return (
    <section className={cn("py-20 px-6 bg-brand-charcoal relative overflow-hidden", className)}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-ink to-black opacity-90 z-0" />
      
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-ocean/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-brush text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        
        <motion.p 
          className="text-xl text-white/80 font-serif max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full bg-brand-coral hover:bg-brand-coral/90 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onClick={() => window.open(buttonLink, '_blank')}
          >
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
