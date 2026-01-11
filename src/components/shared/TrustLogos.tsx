"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TrustLogosProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const trustLogos = [
  {
    name: "ANVR",
    description: "ANVR Certified Tour Operator",
    src: "/logos/trust/anvr.jpg",
    href: "https://www.anvr.nl/ledenoverzicht/05750",
  },
  {
    name: "VZR Garant",
    description: "VZR Payment Protection",
    src: "/logos/trust/vzr.jpg",
    href: "https://vzr-garant.nl/en/organisations/members/driftawave",
  },
  {
    name: "Calamiteitenfonds",
    description: "Calamiteitenfonds Protection",
    src: "/logos/trust/calamiteitenfonds.png",
    href: "https://www.calamiteitenfonds.nl/accounts/driftawave-b-v/",
  },
];

export const TrustLogos = ({
  variant = "light",
  className,
  size = "md",
}: TrustLogosProps) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-6 md:gap-8",
        variant === "dark" ? "bg-black/5" : "bg-white/5",
        className
      )}
    >
      {trustLogos.map((logo) => (
        <Link
          key={logo.name}
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center hover:opacity-80 transition-opacity"
          title={logo.description}
        >
          <Image
            src={logo.src}
            alt={logo.description}
            width={120}
            height={40}
            className={cn(
              "object-contain",
              sizeClasses[size],
              variant === "light" ? "brightness-100" : "brightness-0 invert"
            )}
          />
        </Link>
      ))}
    </div>
  );
};

export default TrustLogos;
