"use client";

import { motion } from "framer-motion";

export function Partners() {
  return (
    <section className="py-24 px-4 border-y border-border bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-6 py-2 bg-g-light-gray border border-border rounded-full font-bold text-sm tracking-widest uppercase mb-12">
          In Collaboration With
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-24 opacity-80 hover:opacity-100 transition-all duration-300">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black tracking-tighter text-g-dark"
          >
            µLearn
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center font-bold text-4xl sm:text-5xl tracking-tighter text-g-dark"
          >
            <span className="text-g-blue">G</span>
            <span className="text-g-red">o</span>
            <span className="text-g-yellow">o</span>
            <span className="text-g-blue">g</span>
            <span className="text-g-green">l</span>
            <span className="text-g-red">e</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
