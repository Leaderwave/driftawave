"use client"

import { useEffect } from "react";

// TypeScript declaration for Unicorn Studio
declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

export default function Hero() {
  useEffect(() => {
    // Execute the Unicorn Studio script as provided
    (function(){
      if(!window.UnicornStudio){
        window.UnicornStudio = {isInitialized: false, init: () => {}};
        var i = document.createElement("script");
        i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
        i.onload = function(){
          if (!window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
          }
        };
        (document.head || document.body).appendChild(i);
      }
    })();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90svh] md:min-h-screen"
    >
      {/* HERO BACKGROUND - Unicorn Studio Interactive Background Element */}
      <div
        className="hero-background absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      >
        <div data-us-project="OBTuuyyiW02QpaEgl2Or" style={{width: '100%', height: '100%'}}></div>
      </div>

      {/* Additional overlay to block any bottom elements */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-transparent pointer-events-none"
        style={{ zIndex: 9999 }}
      />
    </section>
  )
}
