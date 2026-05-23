import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  onClick,
  href,
  download,
  variant = 'primary',
  className = '',
  icon: Icon,
  ...props
}) {
  const baseStyle = "inline-flex items-center justify-center gap-2 font-medium text-sm rounded-lg px-4 py-2.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20";
  
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm shadow-indigo-600/10 hover:shadow-indigo-600/20 border border-indigo-500/20",
    secondary: "bg-zinc-900/60 hover:bg-zinc-900/90 text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-700 backdrop-blur-sm",
    outline: "border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/30",
    text: "text-zinc-400 hover:text-indigo-400 hover:bg-indigo-500/5"
  };

  const Component = href ? motion.a : motion.button;
  const extraProps = href ? { href, download, target: href.startsWith('#') ? undefined : "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    <Component
      className={`${baseStyle} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...extraProps}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </Component>
  );
}
