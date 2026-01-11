"use client";

import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="bg-[#F3F0EB] py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          {/* Placeholder for video */}
          <div className="relative h-[400px] md:h-[600px] bg-gray-800 rounded-[32px] overflow-hidden group cursor-pointer">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-brand-coral rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Play className="h-10 w-10 text-white ml-1" fill="white" />
              </div>
            </div>

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3 className="font-sans font-bold text-white text-2xl md:text-4xl mb-3">
                See Driftawave in Action
              </h3>
              <p className="font-serif text-white/90 text-base md:text-lg">
                Watch how we create unforgettable team experiences around the world.
              </p>
            </div>

            {/* Note for developer */}
            <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded text-xs font-bold">
              VIDEO PLACEHOLDER
            </div>
          </div>

          {/* Caption */}
          <p className="text-center mt-6 font-serif text-sm text-gray-600 italic">
            Video content coming soon
          </p>
        </div>
      </div>
    </section>
  );
};
