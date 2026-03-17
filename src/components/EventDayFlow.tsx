"use client";

import { motion } from "framer-motion";

const agendaItems = [
  {
    id: "01",
    time: "09:00 AM",
    title: "The Briefing & Architecture",
    description: "Kickoff. Unpack real-world problem constraints. Deep dive into designing robust, enterprise-grade AI systems for scale.",
    bg: "bg-g-yellow",
    colSpan: "md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1",
  },
  {
    id: "02",
    time: "11:00 AM",
    title: "Multi-Agent Orchestration",
    description: "Hands-on coding. Build complex systems where multiple AI agents collaborate to solve tasks, manage state, and execute logic.",
    bg: "bg-g-blue",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: "03",
    time: "02:00 PM",
    title: "System Hardening",
    description: "Defend your agents. Implement prompt injection defenses, data privacy checks, and safety guardrails for agentic workflows.",
    bg: "bg-g-red",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "row-span-2",
  },
  {
    id: "04",
    time: "04:30 PM",
    title: "Production-Ready Deployment",
    description: "Bridge the 'Proof-of-Concept Gap'. Move your successful local demo to a live, enterprise-grade application ready for pitch.",
    bg: "bg-g-green",
    colSpan: "md:col-span-2 lg:col-span-3",
    rowSpan: "row-span-1",
  }
];

export function EventDayFlow() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-8">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl font-black tracking-tighter text-g-dark uppercase mb-4"
            style={{ textShadow: '4px 4px 0px var(--color-g-light-gray)' }}
          >
            The Agenda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl font-bold text-g-dark max-w-2xl border-l-8 border-g-dark pl-4"
          >
            Modeled after official Google "Build with AI" events. A hands-on, multi-agent orchestration intensive.
          </motion.p>
        </div>
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
              relative flex flex-col justify-between group
              border-4 border-g-dark p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(32,33,36,1)] 
              ${item.bg} ${item.colSpan} ${item.rowSpan}
              transition-transform hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_0px_rgba(32,33,36,1)]
            `}
          >
            {/* Top Row: Phase + Time */}
            <div className="flex justify-between items-start mb-12">
              <span className="text-4xl font-black text-g-dark opacity-50">
                {item.id}
              </span>
              <span className="px-3 py-1 border-2 border-g-dark bg-white text-g-dark font-bold text-sm shadow-brutal-sm uppercase">
                {item.time}
              </span>
            </div>

            {/* Bottom Row: Content */}
            <div>
              <h3 className={`text-2xl sm:text-3xl font-black tracking-tight mb-3 uppercase ${item.bg === 'bg-g-yellow' ? 'text-g-dark' : 'text-white'}`}>
                {item.title}
              </h3>
              <p className={`text-base sm:text-lg font-medium leading-snug ${item.bg === 'bg-g-yellow' ? 'text-g-dark/80' : 'text-white/90'}`}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
