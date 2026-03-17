
"use client";

import { motion } from "framer-motion";
import { Gift, Cloud, CodeXml, Trophy } from "lucide-react";

const perks = [
  { icon: Gift, text: "Exclusive Event Stickers & Goodies", bg: "bg-g-light-yellow" },
  { icon: Cloud, text: "$5 Google AI Credits for Every Team", bg: "bg-g-light-blue" },
  { icon: CodeXml, text: "Intensive Hands-on Building", bg: "bg-g-light-green" },
  { icon: Trophy, text: "Recognition from Ecosystem", bg: "bg-g-light-red" },
];

export function WhatYouGet() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-y-4 border-g-dark bg-white relative overflow-hidden">
      
      {/* Decorative arrow pointing right */}
      <div className="absolute -right-20 top-20 opacity-10 hidden lg:block">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-[400px] text-g-dark">
          <path d="M4 11h11.586l-5.293-5.293a1 1 0 1 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L15.586 13H4a1 1 0 1 1 0-2z"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center z-10 relative">
        <div className="flex-1 bg-g-light-blue border-4 border-g-dark p-12 rounded-4xl shadow-brutal-lg">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-g-dark leading-tight"
          >
            What You Get
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-g-dark text-xl leading-relaxed font-medium"
          >
            Google pushes dev-first AI tooling heavily. We provide the resources, you bring the execution. Jumpstart your AI journey instantly.
          </motion.p>
        </div>

        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`flex flex-col items-center text-center gap-4 p-8 rounded-2xl border-2 border-g-dark ${perk.bg} hover:shadow-brutal transition-all hover:-translate-y-1 group`}
              >
                <div className="shrink-0 w-16 h-16 rounded-full border-2 border-g-dark bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-g-dark" strokeWidth={2.5} />
                </div>
                <span className="font-bold text-lg text-g-dark">{perk.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
