import React from 'react';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  className = '',
  align = 'left', // 'left' or 'center'
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center justify-center'
  };

  return (
    <div className={`flex flex-col mb-12 ${alignClasses[align]} ${className}`}>
      {badge && (
        <span className="text-[10px] tracking-[0.2em] font-mono text-indigo-400/90 uppercase font-semibold mb-2">
          {badge}
        </span>
      )}
      <h2 className="font-outfit text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
