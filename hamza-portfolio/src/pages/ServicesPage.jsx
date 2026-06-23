import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BrainCircuit, Eye, MessageSquare, Rocket, Code2, Database,
  ArrowLeft, ArrowRight, CheckCircle2, Zap, Shield, Clock
} from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { SectionTitle } from '../components/common/SectionTitle';
import { DATA } from '../data/portfolioData';

const serviceDetails = [
  {
    icon: BrainCircuit,
    title: 'Freelance AI Solutions',
    desc: 'End-to-end AI/ML model development from data collection to deployment.',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.25)',
    features: ['Custom ML model training', 'Data pipeline engineering', 'Model evaluation & tuning', 'Production deployment'],
    deliverables: 'Trained model + API endpoint + documentation',
  },
  {
    icon: Eye,
    title: 'Computer Vision Pipelines',
    desc: 'Real-time object detection and image classification systems using YOLOv8.',
    color: '#00D4FF',
    glow: 'rgba(0,212,255,0.2)',
    features: ['YOLOv8 custom training', 'Live video stream processing', 'Transfer learning (ResNet, VGG)', 'Roboflow dataset management'],
    deliverables: 'Trained detector + inference API + demo',
  },
  {
    icon: MessageSquare,
    title: 'NLP & LLM Prototyping',
    desc: 'Building RAG applications, text analysis, and candidate screening tools.',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.2)',
    features: ['RAG pipeline with LangChain', 'FAISS vector store integration', 'Hugging Face model fine-tuning', 'Resume screening systems'],
    deliverables: 'Working prototype + REST API + usage guide',
  },
  {
    icon: Rocket,
    title: 'Web API Integration',
    desc: 'Wrapping complex AI models into scalable FastAPI and Django backends.',
    color: '#22c55e',
    glow: 'rgba(34,197,94,0.2)',
    features: ['FastAPI / Django backend', 'Docker containerisation', 'REST API design', 'CI/CD ready setup'],
    deliverables: 'Containerised API + Swagger docs + deployment guide',
  },
];

const whyCards = [
  { icon: Zap, label: 'Fast Turnaround', desc: 'Rapid prototyping with production-grade quality.' },
  { icon: Shield, label: 'Research-Backed', desc: 'Every solution grounded in current AI/ML literature.' },
  { icon: Clock, label: 'Immediate Availability', desc: 'Open for new collaborations right now.' },
  { icon: CheckCircle2, label: 'End-to-End Ownership', desc: 'From data wrangling to live deployment.' },
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen font-sans antialiased relative overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      {/* Background blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] animate-blob" style={{ background: 'var(--blob-a)' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] animate-blob animation-delay-2000" style={{ background: 'var(--blob-b)' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">

        {/* Back button */}
        <AnimatedSection>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 mb-16 group"
            style={{ color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'var(--bg-secondary)',
                boxShadow: '4px 4px 8px rgba(0,0,0,0.4), -2px -2px 6px rgba(255,255,255,0.03)',
              }}
            >
              <ArrowLeft className="w-5 h-5 text-amber-500" />
            </span>
            <span className="font-semibold text-sm uppercase tracking-widest group-hover:text-amber-400 transition-colors">
              Back to Portfolio
            </span>
          </button>
        </AnimatedSection>

        {/* Hero header */}
        <AnimatedSection>
          <div className="mb-20">
            <SectionTitle
              title="Services"
              subtitle="AI/ML solutions built end-to-end — from raw data to deployed, production-ready systems."
            />
          </div>
        </AnimatedSection>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
          {serviceDetails.map((service, idx) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div
                  className="p-10 rounded-[2.5rem] border border-white/5 h-full flex flex-col transition-all duration-300 group cursor-default"
                  style={{
                    background: 'var(--bg-secondary)',
                    boxShadow: '12px 12px 24px rgba(0,0,0,0.4), -8px -8px 20px rgba(255,255,255,0.02)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = `12px 12px 24px rgba(0,0,0,0.5), -8px -8px 20px rgba(255,255,255,0.02), 0 0 40px ${service.glow}`;
                    e.currentTarget.style.borderColor = service.color + '33';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '12px 12px 24px rgba(0,0,0,0.4), -8px -8px 20px rgba(255,255,255,0.02)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  }}
                >
                  {/* Icon + title */}
                  <div className="flex items-center gap-5 mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: 'var(--bg-primary)',
                        boxShadow: `inset 4px 4px 8px rgba(0,0,0,0.5), 0 0 0 1px ${service.color}22`,
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: service.color, filter: `drop-shadow(0 0 8px ${service.color}99)` }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        {service.title}
                      </h3>
                      <p className="text-sm mt-1 font-light" style={{ color: 'var(--text-secondary)' }}>
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: service.color + '22' }}
                        >
                          <CheckCircle2 className="w-3 h-3" style={{ color: service.color }} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Deliverables tag */}
                  <div
                    className="mt-auto px-5 py-3 rounded-xl text-xs font-semibold"
                    style={{
                      background: service.color + '12',
                      border: `1px solid ${service.color}33`,
                      color: service.color,
                    }}
                  >
                    Deliverables: {service.deliverables}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Why work with me */}
        <AnimatedSection>
          <div className="mb-12">
            <SectionTitle title="Why Work With Me" />
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {whyCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <AnimatedSection key={idx} delay={idx * 80}>
                <div
                  className="p-8 rounded-3xl border border-white/5 text-center"
                  style={{
                    background: 'var(--bg-secondary)',
                    boxShadow: '8px 8px 16px rgba(0,0,0,0.35), -6px -6px 14px rgba(255,255,255,0.02)',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'var(--bg-primary)', boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.5)' }}
                  >
                    <Icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <h4 className="font-bold text-base mb-2" style={{ color: 'var(--text-primary)' }}>{card.label}</h4>
                  <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{card.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection>
          <div
            className="rounded-[3rem] p-14 text-center border border-white/5 relative overflow-hidden"
            style={{
              background: 'var(--bg-secondary)',
              boxShadow: '16px 16px 32px rgba(0,0,0,0.4), -12px -12px 32px rgba(255,255,255,0.02)',
            }}
          >
            <div className="absolute inset-0 rounded-[3rem] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.08) 0%, transparent 70%)' }} />
            <h3
              className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight relative z-10"
              style={{ fontFamily: '"Grindy Brush","Permanent Marker",cursive', color: 'var(--text-primary)' }}
            >
              Ready to build together?
            </h3>
            <p className="text-lg font-light mb-10 max-w-xl mx-auto relative z-10" style={{ color: 'var(--text-secondary)' }}>
              Reach out and let's turn your AI idea into a working system.
            </p>
            <div className="flex flex-wrap gap-4 justify-center relative z-10">
              <button
                onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
                className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                  color: '#000',
                  boxShadow: '0 6px 20px rgba(245,158,11,0.4)',
                }}
              >
                Get In Touch <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href={DATA.personal.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105"
                style={{
                  background: '#25D366',
                  color: '#fff',
                  boxShadow: '0 6px 20px rgba(37,211,102,0.35)',
                }}
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
