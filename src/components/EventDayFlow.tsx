"use client";

import { motion } from "framer-motion";

const agendaItems = [
  {
    id: "01",
    time: "09:00 AM",
    title: "Briefing",
    description: "Kickoff and problem constraints.",
    bg: "bg-g-yellow",
    colSpan: "md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1",
    textColor: "text-g-dark",
    subTextColor: "text-g-dark/80",
  },
  {
    id: "02",
    time: "11:00 AM",
    title: "Multi-Agent Systems",
    description: "Hands-on collaborative AI coding.",
    bg: "bg-g-blue",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "row-span-1",
    textColor: "text-white",
    subTextColor: "text-white/80",
  },
  {
    id: "03",
    time: "02:00 PM",
    title: "Hardening",
    description: "Implement privacy & safety guardrails.",
    bg: "bg-g-red",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "row-span-2",
    textColor: "text-white",
    subTextColor: "text-white/80",
  },
  {
    id: "04",
    time: "04:30 PM",
    title: "Deployment",
    description: "Ship an enterprise-ready app.",
    bg: "bg-g-green",
    colSpan: "md:col-span-2 lg:col-span-3",
    rowSpan: "row-span-1",
    textColor: "text-white",
    subTextColor: "text-white/80",
  }
];

export function EventDayFlow() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16 text-center lg:text-left flex flex-col items-start gap-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-7xl font-black tracking-tighter text-g-dark uppercase"
        >
          Agenda
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
        {agendaItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`
              relative flex flex-col justify-between group rounded-2xl
              border border-border p-6 sm:p-8
              ${item.bg} ${item.colSpan} ${item.rowSpan}
              transition-colors
            `}
          >
            {/* Top Row: Phase + Time */}
            <div className="flex justify-between items-start mb-12">
              <span className={`text-4xl font-black opacity-30 ${item.textColor}`}>
                {item.id}
              </span>
              <span className="px-4 py-1.5 rounded-full border border-border bg-white text-g-dark font-bold text-sm uppercase tracking-wide">
                {item.time}
              </span>
            </div>

            {/* Bottom Row: Content */}
            <div>
              <h3 className={`text-2xl sm:text-3xl font-black tracking-tight mb-2 uppercase ${item.textColor}`}>
                {item.title}
              </h3>
              <p className={`text-base sm:text-lg font-medium leading-snug ${item.subTextColor}`}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
