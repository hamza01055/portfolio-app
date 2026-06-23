import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { AnimatedSection } from './common/AnimatedSection';
import { SectionTitle } from './common/SectionTitle';
import { SpotlightCard } from './common/SpotlightCard';
import { DATA } from '../data/portfolioData';

export const ProjectGallery = () => (
  <section className="py-32 container mx-auto px-6 relative z-10" id="projects">
    <AnimatedSection>
      <SectionTitle title="Featured Systems" subtitle="A selection of recent AI architectures I've built and deployed." />
    </AnimatedSection>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {DATA.featuredProjects.map((project, idx) => (
        <AnimatedSection key={project.id} delay={idx * 100}>
          <SpotlightCard className="group p-0 h-full flex flex-col border-none shadow-[16px_16px_32px_rgba(0,0,0,0.4),-12px_-12px_32px_rgba(255,255,255,0.02)] hover:shadow-[0_0_40px_rgba(245,158,11,0.15),12px_12px_24px_rgba(0,0,0,0.5)]">
            <div className="aspect-[16/10] relative overflow-hidden flex-shrink-0 p-4 pb-0">
               <div className="w-full h-full rounded-t-3xl overflow-hidden shadow-[inset_0_-10px_20px_rgba(0,0,0,0.5)] relative">
                 <div className="absolute inset-0 bg-zinc-950/60 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
                 <img
                   src={project.image}
                   alt={project.title}
                   loading="lazy"
                   onError={(e) => {
                     e.currentTarget.onerror = null;
                     e.currentTarget.src = 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=800&q=80';
                     e.currentTarget.className = 'w-full h-full object-cover transition-transform duration-700 ease-out opacity-80';
                   }}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                 />
               </div>
            </div>
            <div className="p-10 flex-grow flex flex-col relative z-20">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-950 text-amber-500 text-xs font-bold tracking-wider uppercase mb-5 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5)] w-max">
                {project.category}
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-5 tracking-tight leading-snug">{project.title}</h3>
              <p className="text-zinc-400 mb-8 text-sm line-clamp-3 leading-relaxed font-light flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-3 mb-10 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-2 text-xs font-semibold rounded-xl bg-zinc-950 text-zinc-300 shadow-[4px_4px_8px_rgba(0,0,0,0.3)]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-amber-500 flex items-center gap-2 text-sm font-bold transition-colors group/link">
                  <Github className="w-5 h-5 group-hover/link:drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" /> Source
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-amber-500 flex items-center gap-2 text-sm font-bold transition-colors group/link">
                  <ExternalLink className="w-5 h-5 group-hover/link:drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" /> Demo
                </a>
              </div>
            </div>
          </SpotlightCard>
        </AnimatedSection>
      ))}
    </div>
  </section>
);
