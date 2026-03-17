"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Initializing builders...";

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) {
        clearInterval(intervalId);
        setTimeout(() => setLoading(false), 800);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center">
            {/* Pulsing AI node effect */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 bg-linear-to-tr from-g-red via-g-yellow to-g-blue opacity-80 mix-blend-multiply" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent)] mix-blend-overlay" />
            </motion.div>
          </div>

          {/* Clean Typewriter Text */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-g-dark mb-4 h-10 flex items-center">
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-4 h-8 bg-g-blue ml-2"
              />
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-g-dark font-medium font-mono text-sm uppercase tracking-widest bg-g-light-gray px-3 py-1 rounded-sm border border-g-dark">
                Status
              </span>
              <span className="text-g-dark text-sm font-medium">Booting workspace...</span>
            </div>
          </div>
          
          {/* Futuristic subtle loading bar */}
          <div className="w-64 h-1 bg-g-light-gray mt-12 overflow-hidden border border-g-dark rounded-full">
            <motion.div 
              className="h-full bg-linear-to-r from-g-red via-g-yellow to-g-blue"
              initial={{ x: "-100%" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
