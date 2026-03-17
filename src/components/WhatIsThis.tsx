"use client";

import { motion } from "framer-motion";

export function WhatIsThis() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        {/* Decorative Pill like the reference */}
        <div className="absolute -top-12 -left-4 md:-left-12 inline-flex items-center gap-4 bg-g-yellow border-2 border-g-dark rounded-full px-8 py-4 shadow-brutal z-10 -rotate-2">
          <svg className="w-8 h-8 text-g-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="2" x2="12" y2="22"></line>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <line x1="5" y1="5" x2="19" y2="19"></line>
            <line x1="5" y1="19" x2="19" y2="5"></line>
          </svg>
          <span className="text-2xl font-bold text-g-dark">What to expect</span>
        </div>

        <div className="text-center bg-white rounded-3xl p-12 sm:p-24 border-2 border-g-dark shadow-brutal-lg">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8 text-g-dark leading-tight mt-6">
            A one-day AI hackathon.
          </h2>
          <p className="text-xl sm:text-2xl text-g-dark max-w-4xl mx-auto leading-relaxed font-medium">
            Selected teams build real-world solutions using state-of-the-art Google AI tools. 
            <span className="block mt-8 text-2xl sm:text-3xl font-bold underline decoration-4 decoration-g-red underline-offset-4">
              8 hours. 30 teams. Hands-on. Mentored.
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
