import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { AnimatedSection } from './common/AnimatedSection';
import { SectionTitle } from './common/SectionTitle';
import { useTheme } from '../context/ThemeContext';
import { DATA } from '../data/portfolioData';

export const AboutPreview = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const cardClasses = isDark
    ? 'md:w-1/2 p-10 md:p-14 rounded-[3rem] bg-zinc-900/60 backdrop-blur-2xl border border-white/5 shadow-[16px_16px_32px_rgba(0,0,0,0.4),-12px_-12px_32px_rgba(255,255,255,0.02)]'
    : 'md:w-1/2 p-10 md:p-14 rounded-[3rem] bg-zinc-900/90 backdrop-blur-2xl border border-black/10 shadow-[16px_16px_32px_rgba(0,0,0,0.4),-12px_-12px_32px_rgba(255,255,255,0.02)]';

  return (
    <section className="py-32 container mx-auto px-6 relative z-10" id="about">
      <AnimatedSection className="flex flex-col md:flex-row gap-16 items-center">
        <div className={cardClasses}>
          <SectionTitle title="About Me" />
          <p className="text-zinc-300 text-lg leading-relaxed mb-10 font-light drop-shadow-sm">
            {DATA.personal.bio}
          </p>
        <div className="flex flex-col gap-6 text-zinc-300 font-medium">
          <div className="flex items-center gap-5 p-4 rounded-2xl bg-zinc-950/50 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4)]"><MapPin className="text-amber-500 w-6 h-6 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" /> {DATA.personal.location}</div>
          <div className="flex items-center gap-5 p-4 rounded-2xl bg-zinc-950/50 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4)]"><Mail className="text-amber-500 w-6 h-6 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" /> {DATA.personal.email}</div>
          <div className="flex items-center gap-5 p-4 rounded-2xl bg-zinc-950/50 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4)]"><Phone className="text-amber-500 w-6 h-6 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" /> {DATA.personal.phone}</div>
        </div>
      </div>
      <div className="md:w-1/2 relative w-full flex justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-yellow-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        {/* Neumorphic Image Frame */}
        <div className="aspect-[4/5] max-w-md w-full rounded-[3rem] p-4 bg-zinc-900 border border-white/5 shadow-[20px_20px_40px_rgba(0,0,0,0.5),-15px_-15px_40px_rgba(255,255,255,0.03)] relative group">
          <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-[inset_8px_8px_16px_rgba(0,0,0,0.6)] relative">
            <img 
              src="/profile_img.jpeg" 
              alt={DATA.personal.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  </section>
);
}
