"use client";

import { motion } from "framer-motion";

const timeline = [
  { time: "0:00", title: "Kickoff", desc: "Briefing, rules, and APIs introduction.", color: "bg-g-red" },
  { time: "1:00", title: "Idea + Sync", desc: "Finalize your architecture and problem.", color: "bg-g-yellow" },
  { time: "6:00", title: "Build", desc: "Deep work. Mentors unblock you.", color: "bg-g-green" },
  { time: "8:00", title: "Demo", desc: "Ship your product to judges.", color: "bg-g-blue" },
];

export function EventFormat() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-g-dark inline-block border-b-2 border-g-red pb-2">The 8-Hour Sprint</h2>
        <p className="text-xl text-g-dark font-medium mt-4">Zero fluff. Pure execution.</p>
      </div>

      <div className="relative">
        {/* Continuous bold line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row md:items-center gap-8 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Distinct Google Colored Dots */}
              <div className={`absolute left-6 md:left-1/2 w-8 h-8 rounded-full border border-border bg-white -translate-x-1/2 mt-3 md:mt-0 z-10 flex items-center justify-center`}>
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
              </div>

              <div className={`flex-1 pl-16 md:pl-0 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <motion.div 
                  className="bg-white p-8 rounded-2xl border border-border inline-block w-full md:w-auto transition-colors hover:bg-g-light-gray"
                >
                  <span className={`inline-block px-4 py-1.5 rounded-full text-white font-mono font-bold text-sm mb-4 bg-g-dark`}>
                    T+{item.time}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-g-dark">{item.title}</h3>
                  <p className="text-g-dark/70 text-lg leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
