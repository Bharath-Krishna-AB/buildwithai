"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
}

export function MagneticButton({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Content = (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative z-10 font-semibold tracking-wide"
    >
      {children}
    </motion.div>
  );

  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 rounded-full overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md";
  
  const variants = {
    primary: "bg-g-blue text-white hover:bg-blue-700",
    secondary: "bg-white text-g-dark hover:bg-g-light-gray border border-gray-200"
  };

  if (href) {
    return (
      <a
        ref={ref as any}
        href={href}
        className={cn(baseStyles, variants[variant], className)}
        onMouseMove={handleMouse as any}
        onMouseLeave={reset}
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-full" />
        {Content}
      </a>
    );
  }

  return (
    <button
      ref={ref as any}
      className={cn(baseStyles, variants[variant], className)}
      onMouseMove={handleMouse as any}
      onMouseLeave={reset}
      {...props}
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-full" />
      {Content}
    </button>
  );
}
