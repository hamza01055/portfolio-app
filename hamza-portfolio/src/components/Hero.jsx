import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from './common/Button';
import { LiquidGlassButton } from './common/LiquidGlassButton';
import { AnimatedSection } from './common/AnimatedSection';
import { TextRotator } from './common/TextRotator';
import { TechMarquee } from './common/TechMarquee';

export const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 flex-col justify-center z-10">
    {/* PDF background (uploaded resume) */}
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <object
        data="/Hamza_Shahzad_CV.pdf.pdf"
        type="application/pdf"
        className="w-full h-full opacity-10"
        aria-label="Background resume"
        style={{ filter: 'blur(2px) grayscale(20%)', transform: 'scale(1.02)' }}
      >
        {/* Fallback: nothing */}
      </object>
    </div>

    <div className="container mx-auto px-6 relative z-10 mt-auto pt-32">
      <AnimatedSection className="max-w-5xl">
        <div className="mb-10">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-zinc-900 border border-white/5 text-amber-400 text-sm font-semibold shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(255,255,255,0.02)] cursor-default">
            <div className="w-2 h-2 rounded-full bg-amber-400 mr-3 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
            Available for new AI/ML collaborations
          </div>
        </div>
        
        <h1 
          className="text-6xl md:text-8xl leading-[1.3] mb-8 flex flex-col items-start drop-shadow-2xl"
          style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, color: 'var(--text-primary)' }}
        >
          <span>I build</span>
          <TextRotator words={["AI & ML pipelines", "scalable backends", "computer vision", "advanced LLMs"]} />
          <span>that solve complex problems.</span>
        </h1>
        
        <p 
          className="text-3xl md:text-5xl mb-14 max-w-4xl leading-relaxed drop-shadow-md tracking-wide"
          style={{ fontFamily: '"Awesome Regular", "Awesome", "Great Vibes", cursive', color: 'var(--text-secondary)' }}
        >
          Results-driven AI/ML Engineer specializing in Computer Vision, NLP, and scalable Deep Learning systems.
        </p>
        
        <div className="flex flex-wrap gap-6">
          <LiquidGlassButton onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
            View My Work <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </LiquidGlassButton>
          <a href="/Hamza_Shahzad_CV.pdf.pdf" download="Hamza_Shahzad_CV.pdf" className="group">
            <Button variant="outline" className="group">
              <Download className="mr-3 w-5 h-5 text-amber-400 group-hover:-translate-y-1 transition-transform" /> Resume
            </Button>
          </a>
        </div>
      </AnimatedSection>
    </div>
    
    <div className="w-full mt-auto relative z-10">
      <AnimatedSection delay={300}>
        <TechMarquee />
      </AnimatedSection>
    </div>
  </section>
);
