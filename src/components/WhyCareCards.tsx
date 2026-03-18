"use client";

import { motion } from "framer-motion";
import { CodeXml, Sparkles, HeartHandshake, Zap } from "lucide-react";

const cards = [
  {
    title: "Practical Workshops",
    description: "Use Google's integrated AI stack to solve real-world challenges, following a practical path from your first API call to a fully deployed application.",
    icon: CodeXml,
    color: "text-g-green",
  },
  {
    title: "Modern AI Tech Stack",
    description: "Explore the full stack of Google AI. From the open-source power of Gemma to the enterprise scale of Vertex AI, see how the pieces fit together.",
    icon: Sparkles,
    color: "text-g-blue",
  },
  {
    title: "Peer-to-Peer Guidance",
    description: "Work alongside Google Developer Experts (GDEs) and local leads who share their honest experience building in the AI ecosystem.",
    icon: HeartHandshake,
    color: "text-g-red",
  },
  {
    title: "Exclusive Tech Access",
    description: "Get hands-on with the bleeding-edge of Google AI models. Don't just follow the technological trend—be the one to define it.",
    icon: Zap,
    color: "text-g-yellow",
  }
];

export function WhyCareCards() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-g-dark">Why You Should Care</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 relative">
        {/* Drawing slanted dividing lines for desktop between items. */}
        <div className="hidden lg:block absolute left-[25%] top-0 bottom-0 w-px bg-border z-0" />
        <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-border z-0" />
        <div className="hidden lg:block absolute left-[75%] top-0 bottom-0 w-px bg-border z-0" />

        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative p-6 text-center z-10 flex flex-col items-center bg-transparent rounded-2xl lg:rounded-none`}
            >
              <div className={`mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full border border-border transition-colors bg-white`}>
                <Icon className={`h-10 w-10 ${card.color}`} strokeWidth={2.5} />
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-g-dark">
                {card.title}
              </h3>
              <p className="text-g-dark/70 leading-relaxed font-medium">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
