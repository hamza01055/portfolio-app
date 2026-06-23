import { useTheme } from '../../context/ThemeContext';

export const SectionTitle = ({ title, subtitle }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className="mb-12 relative z-10">
      <h2 
        className="text-4xl md:text-6xl font-extrabold mb-4 flex items-center tracking-tight drop-shadow-xl"
        style={{
          fontFamily: '"Grindy Brush", "Permanent Marker", cursive',
          color: isDark ? '#f4f4f5' : '#111827',
          backgroundImage: isDark ? 'none' : 'linear-gradient(to right, #3b82f6, #ec4899)',
          WebkitBackgroundClip: isDark ? 'unset' : 'text',
          WebkitTextFillColor: isDark ? 'unset' : 'transparent',
          backgroundClip: isDark ? 'unset' : 'text',
        }}
      >
        <span 
          className="w-12 h-1.5 mr-6 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"
          style={{
            backgroundImage: isDark 
              ? 'linear-gradient(to right, #f59e0b, #fcd34d)' 
              : 'linear-gradient(to right, #3b82f6, #ec4899)',
            boxShadow: isDark
              ? '0 0 15px rgba(245,158,11,0.5)'
              : '0 0 15px rgba(59,130,246,0.5)'
          }}
        ></span>
        {title}
      </h2>
      {subtitle && (
        <p 
          className="max-w-2xl text-lg font-light leading-relaxed drop-shadow-sm"
          style={{ color: 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
