"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import SectionTitle from "./SectionTitle"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, TrendingUp } from "lucide-react"

const featuredItems = [
  {
    source: "IRK Magazine – Living",
    title: "Oceans of Opportunity: Educational Ocean Travel & Eco-Conscious Exploration",
    link: "https://www.irkmagazine.com/post/oceans-of-opportunity-educational-ocean-travel-eco-conscious-exlporation/",
    image: "/placeholder.svg",
    type: "image",
    category: "Ocean Travel",
    featured: true
  },
  {
    source: "Realistic Happiness",
    title: "How To Travel Full-Time AND Have A Career | Gina Schinkel, S2 Ep18",
    link: "#",
    image: "/placeholder.svg",
    type: "logo",
    category: "Podcast",
    platform: "YouTube"
  },
  {
    source: "IRK Magazine – Living",
    title: "Ditch the Cubicle, Embrace the Globe…",
    link: "#",
    image: "/placeholder.svg",
    type: "image",
    category: "Lifestyle",
    featured: false
  },
  {
    source: "WeAreDevelopers — HR Leaders Summit",
    title: "New world: New Approach…",
    link: "#",
    image: "/placeholder.svg",
    type: "image",
    category: "Conference",
    featured: true
  },
  {
    source: "Web Summit",
    title: "Web Summit Appearance",
    link: "#",
    image: "/placeholder.svg",
    type: "image",
    category: "Tech Conference",
    featured: true
  },
  {
    source: "Her Expat Life",
    title: "365 Days from Dream to Pitch…",
    link: "#",
    image: "/placeholder.svg",
    type: "logo",
    category: "Entrepreneurship",
    platform: "Blog"
  },
  {
    source: "Her Expat Life",
    title: "Work & Wanderlust: The Rise of the Workation Revolution",
    link: "#",
    image: "/placeholder.svg",
    type: "logo",
    category: "Workation",
    platform: "YouTube"
  },
  {
    source: "Her Expat Life",
    title: "Meet The Talented Gina Schinkel…",
    link: "#",
    image: "/placeholder.svg",
    type: "logo",
    category: "Profile",
    platform: "Blog"
  },
  {
    source: "Sprints & Sneakers",
    title: "Speakers listing",
    link: "#",
    image: "/placeholder.svg",
    type: "image",
    category: "Conference",
    featured: false
  },
  {
    source: "Remote.com",
    title: "The Era of Human Capital | Stop and Chat…",
    link: "#",
    image: "/placeholder.svg",
    type: "logo",
    category: "Podcast",
    platform: "YouTube"
  },
  {
    source: "Lifestyle Solopreneur",
    title: "Unlock your inner adventurer…",
    link: "#",
    image: "/placeholder.svg",
    type: "logo",
    category: "Podcast",
    platform: "Apple Podcasts"
  }
]

const upcomingFeatures = [
  { name: "Magnaris Magazine", date: "Oct 15", status: "confirmed" },
  { name: "Remotive Podcast", date: "Oct 22", status: "scheduled" },
  { name: "Women Disrupting Tech Podcast", date: "Nov 5", status: "scheduled" }
]

export default function FeaturedBy() {
  return (
    <section id="resources" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-brand-mint/6 to-brand-coral/6 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-brand-orange/5 to-brand-coral/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle>Featured By</SectionTitle>

        {/* Featured stats */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Publications", icon: "📊" },
              { number: "25+", label: "Podcasts", icon: "🎙️" },
              { number: "15+", label: "Conferences", icon: "🎤" },
              { number: "2M+", label: "Reach", icon: "👁️" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-coral to-brand-orange bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-brand-ink/70 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured items grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {featuredItems.map((item, index) => (
            <motion.article
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -8, rotateY: 2 }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                {/* Featured badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-gradient-to-r from-brand-coral to-brand-orange text-white border-0 shadow-lg">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Platform badge */}
                {item.platform && (
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-white/90 text-brand-ink border-0 shadow-lg backdrop-blur-sm">
                      {item.platform}
                    </Badge>
                  </div>
                )}

                {/* Image/Media section */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category badge on image */}
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/90 text-brand-ink border-0 shadow-lg backdrop-blur-sm">
                      {item.category}
                    </Badge>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 relative z-10">
                  <div className="text-sm text-brand-ink/60 font-medium mb-2 uppercase tracking-wide">
                    {item.source}
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-brand-ink mb-4 leading-tight group-hover:text-brand-coral transition-colors duration-300">
                    {item.title}
                  </h3>

                  {item.link !== "#" && (
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-coral hover:text-brand-orange transition-colors duration-300 group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read more
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </motion.div>
                  )}
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-brand-coral/0 via-brand-coral/30 to-brand-orange/30"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-coral to-brand-orange group-hover:w-full transition-all duration-500 rounded-bl-3xl" />
              </div>

              {/* Shadow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-coral/20 to-brand-orange/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 transform translate-y-4" />
            </motion.article>
          ))}
        </motion.div>

        {/* Upcoming Features */}
        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/40 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-coral/10 to-brand-orange/10 rounded-full px-6 py-3 mb-4">
              <Calendar className="w-5 h-5 text-brand-coral" />
              <span className="font-semibold text-brand-coral">Coming Soon</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-ink mb-2">
              Upcoming Features & Mentions
            </h3>
            <p className="text-brand-ink/70 max-w-2xl mx-auto">
              We&apos;re excited about these upcoming opportunities to share the Driftawave story with the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingFeatures.map((item, index) => (
              <motion.div
                key={item.name}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 border border-white/30"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-lg font-bold text-brand-ink mb-1">{item.name}</div>
                <div className="text-sm text-brand-coral font-medium mb-2">{item.date}</div>
                <Badge
                  className={`${
                    item.status === 'confirmed'
                      ? 'bg-green-100 text-green-800 border-green-200'
                      : 'bg-blue-100 text-blue-800 border-blue-200'
                  } border-0`}
                >
                  {item.status}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
