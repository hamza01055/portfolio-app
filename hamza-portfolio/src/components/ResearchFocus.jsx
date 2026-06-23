import React from 'react';
import { Monitor, MessageSquare, BrainCircuit, MapPin } from 'lucide-react';
import { AnimatedSection } from './common/AnimatedSection';
import { SectionTitle } from './common/SectionTitle';
import { SpotlightCard } from './common/SpotlightCard';

const iconMap = {
  Monitor: Monitor,
  MessageSquare: MessageSquare,
  BrainCircuit: BrainCircuit,
  MapPin: MapPin
};

export const ResearchFocus = () => {
  const researchFocus = [
    { id: 1, title: "Computer Vision", icon: "Monitor", desc: "Real-time object detection, CNNs, and transfer learning using YOLOv8, ResNet, and VGG." },
    { id: 2, title: "NLP & LLMs", icon: "MessageSquare", desc: "Sentiment analysis, TF-IDF vectorization, and language processing pipelines." },
    { id: 3, title: "Generative AI (RAG)", icon: "BrainCircuit", desc: "Document Q&A pipelines using LangChain, FAISS vector stores, and Hugging Face." },
    { id: 4, title: "Smart Cities", icon: "MapPin", desc: "Automated urban issue detection systems integrating AI models with full-stack deployments." }
  ];

  return (
    <section className="py-32 relative z-10" id="research">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionTitle title="AI Expertise" subtitle="Key areas of academic and practical exploration." />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {researchFocus.map((focus, idx) => {
            const IconComponent = iconMap[focus.icon];
            return (
              <AnimatedSection key={focus.id} delay={idx * 100}>
                <SpotlightCard className="p-10 flex flex-col items-start group">
                  <div className="relative w-20 h-20 rounded-full bg-zinc-950 shadow-[8px_8px_16px_rgba(0,0,0,0.6),-8px_-8px_16px_rgba(255,255,255,0.03)] flex items-center justify-center mb-8 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.3),inset_4px_4px_8px_rgba(0,0,0,0.6)] transition-all duration-500">
                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-amber-500/40 transition-colors duration-500 scale-110"></div>
                    <IconComponent className="text-amber-500 w-8 h-8 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="relative z-20 text-2xl font-bold text-zinc-100 mb-4 tracking-tight">{focus.title}</h3>
                  <p className="relative z-20 text-zinc-400 font-light leading-relaxed">{focus.desc}</p>
                </SpotlightCard>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
