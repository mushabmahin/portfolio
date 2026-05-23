import React from 'react';
import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hoverable = true,
  glowColor = 'indigo', // 'indigo', 'cyan', 'emerald', or 'none'
  ...props
}) {
  const glowStyles = {
    indigo: 'hover:border-indigo-500/30 hover:shadow-indigo-500/5',
    cyan: 'hover:border-cyan-500/30 hover:shadow-cyan-500/5',
    emerald: 'hover:border-emerald-500/30 hover:shadow-emerald-500/5',
    none: ''
  };

  const Component = hoverable ? motion.div : 'div';
  const animationProps = hoverable ? {
    whileHover: { y: -2, scale: 1.005 },
    transition: { type: "spring", stiffness: 300, damping: 20 }
  } : {};

  return (
    <Component
      className={`glass-panel rounded-xl p-6 transition-all duration-300 ${
        hoverable ? `hover:bg-zinc-900/80 hover:shadow-lg ${glowStyles[glowColor]}` : ''
      } ${className}`}
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  );
}
