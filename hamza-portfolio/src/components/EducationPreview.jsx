import React from 'react';
import { BookMarked, Briefcase } from 'lucide-react';
import { AnimatedSection } from './common/AnimatedSection';
import { SectionTitle } from './common/SectionTitle';
import { SpotlightCard } from './common/SpotlightCard';
import { DATA } from '../data/portfolioData';

export const EducationPreview = () => (
  <section className="py-32 container mx-auto px-6 relative z-10" id="education">
    <AnimatedSection>
      <SectionTitle title="Academic Journey" subtitle="My foundation in Artificial Intelligence." />
    </AnimatedSection>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      
      {/* Education */}
      <div className="space-y-8">
        {DATA.education.map((edu, idx) => (
          <AnimatedSection key={edu.id} delay={idx * 150}>
            <SpotlightCard className="p-10 group">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-950 text-amber-500 text-xs font-bold tracking-wider uppercase mb-6 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5)]">
                <BookMarked className="w-3.5 h-3.5 mr-2" /> {edu.date}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-3 tracking-tight">{edu.degree}</h3>
              <h4 className="text-lg font-medium text-yellow-500 mb-6 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">{edu.university}</h4>
              <p className="text-zinc-400 leading-relaxed font-light p-6 rounded-2xl bg-zinc-950/50 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4)]">
                {edu.details}
              </p>
            </SpotlightCard>
          </AnimatedSection>
        ))}
      </div>

      {/* Experience */}
      <div className="space-y-8">
        {DATA.certifications.map((cert, i) => (
          <AnimatedSection key={i} delay={300 + (i * 100)}>
            <SpotlightCard className="p-10 flex items-start gap-8 group">
              <div className="w-16 h-16 rounded-2xl bg-zinc-950 shadow-[8px_8px_16px_rgba(0,0,0,0.4)] flex items-center justify-center flex-shrink-0 group-hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5)] transition-all duration-300">
                <Briefcase className="text-amber-500 w-8 h-8 group-hover:scale-95 transition-transform" />
              </div>
              <div>
                <h4 className="text-zinc-100 font-bold text-2xl mb-2">{cert.title}</h4>
                <div className="text-sm font-semibold text-yellow-500/80 mb-4">{cert.issuer}</div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-950 text-zinc-400 text-xs font-bold shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5)]">
                   {cert.date}
                </div>
              </div>
            </SpotlightCard>
          </AnimatedSection>
        ))}
      </div>

    </div>
  </section>
);
