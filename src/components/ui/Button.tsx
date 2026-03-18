"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "yellow" | "blue" | "red" | "green";
  className?: string;
  href?: string;
  [key: string]: any; // Allow spreading standard HTML attributes safely
};

export function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 rounded-full font-bold tracking-wide transition-colors duration-200 border border-border flex-shrink-0 cursor-pointer text-center";
  
  const variants = {
    primary: "bg-g-dark text-white hover:bg-[#1a1a1a]",
    secondary: "bg-white text-g-dark hover:bg-g-light-gray",
    yellow: "bg-g-yellow text-g-dark hover:bg-[#eab308]",
    blue: "bg-g-blue text-white hover:bg-[#2563eb] text-lg",
    red: "bg-g-red text-white hover:bg-[#dc2626]",
    green: "bg-g-green text-white hover:bg-[#16a34a]",
  };

  const content = (
    <span className="relative z-10">{children}</span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
