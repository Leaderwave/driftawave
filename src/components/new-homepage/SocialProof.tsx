
"use client";

import { useEffect, useRef } from "react";

const logos = [
  { name: "Intel", src: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%2C_dark_blue%29.svg" },
  { name: "SurePay", src: "https://www.surepay.nl/wp-content/uploads/2021/02/logo-surepay.svg" },
  { name: "TravMagazine", src: "https://www.travmagazine.nl/wp-content/uploads/2020/09/logo-travmagazine.svg" },
  { name: "LinkedIn", src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
];

export const SocialProof = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerRef.current?.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <section className="bg-canvas-light py-20">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-2xl font-bold text-text-dark">
          TRUSTED BY INNOVATIVE TEAMS
        </h2>
        <div
          ref={scrollerRef}
          className="scroller group relative z-0 flex w-full flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <div className="flex w-max animate-scroll items-center justify-center group-hover:[animation-play-state:paused] md:justify-start [&_img]:max-w-none">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                className="mx-8 h-12 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
