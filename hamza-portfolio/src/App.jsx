import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { AboutPreview } from './components/AboutPreview';
import { ResearchFocus } from './components/ResearchFocus';
import { ProjectGallery } from './components/ProjectGallery';
import { SkillsAndServices } from './components/SkillsAndServices';
import { EducationPreview } from './components/EducationPreview';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import './App.css';

function HomePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className="min-h-screen font-sans antialiased overflow-x-hidden relative"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      {/* Ambient background blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] animate-blob"
          style={{ background: 'var(--blob-a)' }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] animate-blob animation-delay-2000"
          style={{ background: 'var(--blob-b)' }}
        />
        <div
          className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full blur-[120px] animate-blob animation-delay-4000"
          style={{ background: 'var(--blob-c)' }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: isDark
              ? 'linear-gradient(to right,#ffffff03 1px,transparent 1px),linear-gradient(to bottom,#ffffff03 1px,transparent 1px)'
              : 'linear-gradient(to right,#00000008 1px,transparent 1px),linear-gradient(to bottom,#00000008 1px,transparent 1px)',
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%,#000 20%,transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%,#000 20%,transparent 100%)',
          }}
        />
      </div>

      <Navbar />

      <main className="w-full relative z-10">
        <Hero />
        <Stats />
        <AboutPreview />
        <ResearchFocus />
        <ProjectGallery />
        <SkillsAndServices />
        <EducationPreview />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

function AppInner() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppInner />
      </ThemeProvider>
    </BrowserRouter>
  );
}
