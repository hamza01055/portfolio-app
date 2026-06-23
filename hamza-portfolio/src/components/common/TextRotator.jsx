import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const TextRotator = ({ words }) => {
  const [index, setIndex] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const gradientClasses = isDark
    ? 'from-amber-400 via-yellow-300 to-amber-500 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]'
    : 'from-sky-500 via-fuchsia-500 to-cyan-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]';

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <span className="inline-grid grid-cols-1 grid-rows-1 justify-items-start">
      {words.map((word, i) => (
        <span
          key={word}
          style={{ gridArea: '1 / 1 / 2 / 2' }}
          className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] text-transparent bg-clip-text bg-gradient-to-r ${gradientClasses} animate-gradient-x ${
            i === index 
              ? 'opacity-100 translate-y-0 blur-0 scale-100 pointer-events-auto' 
              : 'opacity-0 translate-y-10 blur-md scale-95 pointer-events-none'
          }`}
        >
          {word}
        </span>
      ))}
    </span>
  );
};
