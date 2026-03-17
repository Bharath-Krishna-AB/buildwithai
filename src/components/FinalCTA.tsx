"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-g-yellow border-t-4 border-g-dark py-32 px-4 relative overflow-hidden">
      
      {/* Decorative stars */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-24 h-24 hidden md:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-g-dark" fill="none" stroke="currentColor" strokeWidth="4">
          <path d="M50 0L50 100M0 50L100 50M15 15L85 85M15 85L85 15" strokeLinecap="round"/>
        </svg>
      </motion.div>

      <div className="absolute bottom-10 right-10 w-32 h-32 hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-g-dark" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="20" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-white border-4 border-g-dark p-12 sm:p-20 rounded-3xl shadow-brutal-lg inline-block w-full"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 text-g-dark">
            Join us!
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 mb-12 font-medium">
            Applications close soon. Only 30 teams out of all applicants will be selected to build the future.
          </p>

          <Button href="https://makemypass.com" variant="blue" className="px-12 py-6 text-2xl border-4 shadow-brutal">
            Apply Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
