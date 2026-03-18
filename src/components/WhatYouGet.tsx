
"use client";

import { motion } from "framer-motion";
import { Gift, Cloud, CodeXml, Trophy } from "lucide-react";

const perks = [
  { icon: Gift, text: "Exclusive Event Stickers & Goodies", bg: "bg-g-yellow", iconColor: "text-g-yellow", textColor: "text-g-dark" },
  { icon: Cloud, text: "$5 Google AI Credits for Every Team", bg: "bg-g-blue", iconColor: "text-g-blue", textColor: "text-white" },
  { icon: CodeXml, text: "Intensive Hands-on Building", bg: "bg-g-green", iconColor: "text-g-green", textColor: "text-white" },
  { icon: Trophy, text: "Recognition from Ecosystem", bg: "bg-g-red", iconColor: "text-g-red", textColor: "text-white" },
];

export function WhatYouGet() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-y border-border bg-white relative overflow-hidden">
      
      {/* Decorative arrow pointing right */}
      <div className="absolute -right-20 top-20 opacity-10 hidden lg:block">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-[400px] text-g-dark">
          <path d="M4 11h11.586l-5.293-5.293a1 1 0 1 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L15.586 13H4a1 1 0 1 1 0-2z"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center z-10 relative">
        <div className="flex-1 bg-g-blue border border-border p-12 rounded-2xl">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-white leading-tight"
          >
            What You Get
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-xl leading-relaxed font-medium"
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
                className={`flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-border ${perk.bg} hover:brightness-110 transition-all group`}
              >
                <div className="shrink-0 w-16 h-16 rounded-full border border-border bg-white flex items-center justify-center">
                  <Icon className={`w-8 h-8 ${perk.iconColor}`} strokeWidth={2.5} />
                </div>
                <span className={`font-bold text-lg ${perk.textColor}`}>{perk.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
