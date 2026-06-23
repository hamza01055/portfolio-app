import React from 'react';

export const LiquidGlassButton = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-4 rounded-2xl font-bold text-lg tracking-wide overflow-hidden group cursor-pointer transition-all duration-300 ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1.5px solid rgba(255, 255, 255, 0.25)',
        color: 'var(--text-primary)',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37), inset 0 0 0 rgba(255, 255, 255, 0.1)',
      }}
      {...props}
    >
      {/* Liquid glass animated background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(236, 72, 153, 0.3), rgba(96, 165, 250, 0.3))',
          animation: 'liquidFlow 3s ease-in-out infinite',
        }}
      />

      {/* Shimmer effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
          animation: 'shimmer 2s infinite',
          borderRadius: '1rem',
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Animated border */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          border: '1.5px solid rgba(255, 255, 255, 0.25)',
          animation: 'borderGlow 3s ease-in-out infinite',
          opacity: 0.5,
        }}
      />

      <style>{`
        @keyframes liquidFlow {
          0%, 100% {
            background: linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(236, 72, 153, 0.3), rgba(96, 165, 250, 0.3));
          }
          50% {
            background: linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.3));
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes borderGlow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.2);
          }
        }
      `}</style>
    </button>
  );
};
