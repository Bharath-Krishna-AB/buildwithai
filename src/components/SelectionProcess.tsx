"use client";

import { motion } from "framer-motion";

export function SelectionProcess() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl border-4 border-g-dark bg-g-light-gray p-12 relative overflow-hidden shadow-brutal-lg"
      >
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-g-dark">
          The Selection
        </h2>
        <p className="text-xl text-gray-700 font-medium mb-16">
          We are only selecting exactly <span className="bg-white px-2 py-1 rounded-sm border-2 border-g-dark text-g-dark font-bold">30 teams</span>.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl font-bold border-4 border-g-dark mb-4 shadow-brutal text-g-dark z-10 transition-transform hover:-translate-y-1">
              1
            </div>
            <span className="font-bold text-g-dark text-xl">Apply</span>
          </div>

          {/* Dotted Arrow */}
          <div className="hidden md:flex items-center text-g-dark">
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 4">
              <path d="M0 12h46m0 0l-10-10m10 10l-10 10"/>
            </svg>
          </div>
          <div className="md:hidden flex items-center justify-center h-12 text-g-dark my-2">
            <svg width="24" height="48" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 4">
              <path d="M12 0v46m0 0l-10-10m10 10l10-10"/>
            </svg>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-g-blue flex items-center justify-center text-2xl font-bold border-4 border-g-dark mb-4 shadow-brutal text-white z-10 transition-transform hover:-translate-y-1">
              2
            </div>
            <span className="font-bold text-g-dark text-xl">Shortlist</span>
          </div>

          {/* Dotted Arrow */}
          <div className="hidden md:flex items-center text-g-dark">
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 4">
              <path d="M0 12h46m0 0l-10-10m10 10l-10 10"/>
            </svg>
          </div>
          <div className="md:hidden flex items-center justify-center h-12 text-g-dark my-2">
            <svg width="24" height="48" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 4">
              <path d="M12 0v46m0 0l-10-10m10 10l10-10"/>
            </svg>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-g-green flex items-center justify-center text-2xl font-bold border-4 border-g-dark mb-4 shadow-brutal text-white z-10 transition-transform hover:-translate-y-1">
              3
            </div>
            <span className="font-bold text-g-dark text-xl">Confirm</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
