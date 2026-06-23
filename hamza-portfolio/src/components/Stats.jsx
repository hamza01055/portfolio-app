import React from 'react';
import { AnimatedSection } from './common/AnimatedSection';
import { DATA } from '../data/portfolioData';

export const Stats = () => (
  <section className="py-20 relative z-10">
    <div className="container mx-auto px-6">
      <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {DATA.stats.map((stat, idx) => (
          <div key={idx} className="p-8 rounded-[2rem] bg-zinc-900/80 border border-white/5 shadow-[10px_10px_20px_rgba(0,0,0,0.3),-8px_-8px_20px_rgba(255,255,255,0.02)] text-center">
            <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-yellow-600 mb-3 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">{stat.value}</div>
            <div className="text-zinc-400 text-sm md:text-base uppercase tracking-widest font-bold">{stat.label}</div>
          </div>
        ))}
      </AnimatedSection>
    </div>
  </section>
);
