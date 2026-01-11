"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export const VideoTeaserSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-24 md:py-32 lg:py-40 section-warm">
      <div className="container mx-auto px-4">
        {/* Elegant video container with shadow */}
        <div className="relative max-w-5xl mx-auto rounded-brand overflow-hidden shadow-2xl ring-1 ring-sunset-black/5">
          {/* Subtle inner shadow for depth */}
          <div className="absolute inset-0 shadow-inner pointer-events-none z-10 rounded-brand" />

          <div className="aspect-video">
            {isPlaying ? (
              <video
                src="/video/driftawave-promo.mp4"
                className="w-full h-full object-cover"
                controls
                autoPlay
              />
            ) : (
              <>
                {/* Placeholder/Thumbnail */}
                <Image
                  src="/hero/hero-vineyard.jpg"
                  alt="Driftawave team retreat video preview"
                  fill
                  className="object-cover"
                />

                {/* Refined overlay */}
                <div className="absolute inset-0 bg-sunset-black/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-sunset-orange/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-sunset-orange/30 hover:bg-sunset-orange hover:scale-105 transition-all duration-300"
                    aria-label="Play video"
                  >
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" fill="white" />
                  </button>
                </div>

                {/* Refined badge */}
                <div className="absolute top-6 right-6">
                  <span className="font-body text-sm text-white/90 bg-sunset-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                    Video Coming Soon
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTeaserSection;
