"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface PostcardCTAProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaUrl?: string;
  className?: string;
  variant?: "default" | "compact";
}

export const PostcardCTA = ({
  headline = "Start Planning Your Offsite",
  subheadline = "Let's create an unforgettable retreat experience together.",
  ctaText = "Get in Touch",
  ctaUrl = "https://meet-ting.com/to/driftawave",
  className,
  variant = "default",
}: PostcardCTAProps) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden section-sand",
        variant === "default" ? "py-24 md:py-32 lg:py-40" : "py-12 md:py-16",
        className
      )}
    >
      {/* Container */}
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "relative rounded-brand bg-white",
            "shadow-2xl ring-1 ring-sunset-black/5",
            "overflow-hidden",
            variant === "default" ? "p-10 md:p-16" : "p-6 md:p-10"
          )}
        >
          {/* Orange accent in corner */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-sunset-orange/20 to-transparent rounded-br-full" />

          {/* Pegasus watermark */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none">
            <Image
              src="/logos/pegasus.svg"
              alt=""
              width={400}
              height={400}
              className="w-64 md:w-96 h-auto"
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            {/* Headline */}
            <h2 className="font-display text-3xl md:text-5xl text-sunset-black tracking-tight mb-6">
              {headline}
            </h2>

            {/* Subheadline */}
            <p className="font-body font-light text-lg md:text-xl text-sunset-black/60 mb-10">
              {subheadline}
            </p>

            {/* CTA Button */}
            <Link
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2",
                "px-8 py-4 rounded-brand",
                "bg-sunset-orange hover:bg-sunset-rust",
                "text-white font-body font-bold text-lg",
                "shadow-lg shadow-sunset-orange/20",
                "hover:shadow-xl hover:-translate-y-0.5",
                "transition-all duration-300"
              )}
            >
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostcardCTA;
