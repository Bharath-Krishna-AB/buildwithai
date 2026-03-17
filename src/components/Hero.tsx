"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Lanyard } from "./ui/Lanyard";

export function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize(); // set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Center the Lanyard vertically and horizontally. Scale it down further.
  // Z = 28 pushes the camera further back, making the lanyard look smaller and fit better.
  const cameraPos: [number, number, number] = isDesktop ? [0, -1, 28] : [0, -1, 36];

  return (
    <section className="relative min-h-[100dvh] bg-[#fdfdfd] overflow-hidden flex items-center pt-20 pb-16 border-b-4 border-g-dark">
      
      {/* 
        Brutalist Grid Background 
      */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="brutal-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-g-dark)" strokeWidth="2.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#brutal-grid)" />
        </svg>
      </div>

      {/* Central Background Typography */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none opacity-10 mix-blend-multiply">
        <h1 className="text-[15vw] leading-none font-black text-g-dark tracking-tighter whitespace-nowrap text-center">
          MAKE <br/> WITH <br/> AI.
        </h1>
      </div>

      {/* The Infinity Lanyard (Layered Over Text) */}
      <div className="absolute inset-0 top-[-30%] h-[150%] z-20 pointer-events-auto flex items-center justify-center mix-blend-normal">
        <Lanyard position={cameraPos} gravity={[0, -40, 0]} fov={isDesktop ? 16 : 22} transparent={true} />
      </div>

      {/* Foreground Interface (Layered over everything) */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-30 relative h-[80dvh] pointer-events-none flex flex-col justify-between pt-8 pb-4">
        
        {/* Top Header Row */}
        <div className="flex justify-between items-start w-full">
          {/* Top Left: Logo / Branding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <div className="bg-white border-2 border-g-dark px-4 py-2 font-black text-g-dark tracking-widest text-sm shadow-brutal pointer-events-auto">
              μLEARN × GOOGLE
            </div>
          </motion.div>

          {/* Top Right: Status & Hint */}
          <div className="flex flex-col items-end gap-4 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="flex items-center gap-2 bg-g-yellow border-2 border-g-dark px-4 py-2 font-bold text-g-dark text-xs sm:text-sm shadow-brutal uppercase tracking-wider"
            >
              <span className="w-2.5 h-2.5 bg-g-red border-2 border-g-dark animate-pulse"></span>
              Registrations Open
            </motion.div>
            
            {/* Interaction Hint (Moved to top right to avoid overlapping the centered card) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="hidden lg:flex bg-white border-2 border-g-dark px-4 py-2 shadow-brutal text-xs font-bold text-g-dark items-center justify-center gap-2 uppercase tracking-widest"
            >
              <svg className="w-4 h-4 text-g-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              Drag the ID
            </motion.div>
          </div>
        </div>

        {/* Bottom UI Area */}
        <div className="flex flex-col lg:flex-row justify-between items-end w-full gap-8">
          
          {/* Bottom Left: Event Hook */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-md pointer-events-auto bg-white border-4 border-g-dark p-6 shadow-brutal-lg"
          >
            <h2 className="text-3xl font-black text-g-dark tracking-tight mb-2 uppercase">Build the <br/><span className="text-g-blue text-4xl">Future.</span></h2>
            <p className="text-base text-g-dark font-bold leading-relaxed border-l-4 border-g-red pl-3">
              An intensive 8-hour hackathon bringing together creative minds and cutting-edge Google technologies. Experience building with AI offline.
            </p>
          </motion.div>

          {/* Bottom Right: Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-4 w-full sm:w-auto pointer-events-auto"
          >
            <Button 
              href="https://makemypass.com" 
              variant="blue"
              className="text-lg sm:text-xl px-10 py-5 w-full uppercase tracking-widest shadow-brutal-lg"
            >
              Secure Spot
            </Button>
            <Button 
              href="#about" 
              variant="secondary"
              className="text-lg sm:text-xl px-10 py-5 w-full uppercase tracking-widest shadow-brutal"
            >
              Learn More
            </Button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
