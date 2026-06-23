import React from 'react';
import { Github, Linkedin, BrainCircuit, MapPin, Phone, Mail } from 'lucide-react';
import { DATA } from '../data/portfolioData';

const Upwork = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.43 6.23a4.73 4.73 0 0 0-4.08 2.27 18 18 0 0 1-1.63-3.61H9.27V12a2.32 2.32 0 0 1-4.63 0V4.89H2.17V12a4.8 4.8 0 0 0 9.59 0V9.45a20.81 20.81 0 0 0 1.38 3.23l-1.67 4.89h2.64l1.1-3.32a4.67 4.67 0 1 0 2.22-8Zm0 6.97A2.32 2.32 0 1 1 19.75 10.87 2.32 2.32 0 0 1 17.43 13.2Z" />
  </svg>
);

const Instagram = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const WhatsApp = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const XTwitter = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const ThreeDIcon = ({ Icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    className="w-16 h-16 rounded-full bg-zinc-900 border border-white/5 shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.02)] flex items-center justify-center text-amber-500 hover:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.5)] transition-all duration-300 group cursor-pointer"
  >
    <Icon className="w-7 h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:scale-90 group-hover:drop-shadow-[0_0_10px_rgba(245,158,11,0.8)] transition-all duration-300" />
  </a>
);

export const Footer = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 pt-24 pb-10 relative overflow-hidden z-20 shadow-[inset_0_20px_40px_rgba(0,0,0,0.6)] border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 text-zinc-100 font-extrabold text-3xl mb-8 tracking-tight">
              <div className="w-12 h-12 rounded-full bg-zinc-900 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6)] flex items-center justify-center">
                <BrainCircuit className="w-6 h-6 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
              </div>
               Hamza.AI
            </div>
            <p className="text-zinc-400 max-w-sm mb-10 font-light leading-relaxed text-lg">
              Building intelligent systems, conducting advanced AI/ML research, and developing scalable real-world solutions.
            </p>
            <div className="flex gap-5 flex-wrap">
              <ThreeDIcon Icon={Github} href={DATA.personal.social.github} />
              <ThreeDIcon Icon={Linkedin} href={DATA.personal.social.linkedin} />
              <ThreeDIcon Icon={Upwork} href={DATA.personal.social.upwork} />
              <ThreeDIcon Icon={Instagram} href={DATA.personal.social.instagram} />
              <ThreeDIcon Icon={WhatsApp} href={DATA.personal.social.whatsapp} />
              <ThreeDIcon Icon={XTwitter} href={DATA.personal.social.twitter} />
            </div>
          </div>
          <div>
            <h4 className="text-zinc-100 font-bold mb-8 tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-5 text-zinc-400 font-medium">
              <li><button onClick={() => handleScrollTo('home')} className="hover:text-amber-400 transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Home</button></li>
              <li><button onClick={() => handleScrollTo('about')} className="hover:text-amber-400 transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> About</button></li>
              <li><button onClick={() => handleScrollTo('projects')} className="hover:text-amber-400 transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Projects</button></li>
              <li><button onClick={() => handleScrollTo('education')} className="hover:text-amber-400 transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Education</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-zinc-100 font-bold mb-8 tracking-wider uppercase text-sm">Contact Base</h4>
            <ul className="space-y-5 text-zinc-400 font-medium">
              <li className="flex items-center gap-4"><MapPin className="w-5 h-5 text-amber-500"/> {DATA.personal.location}</li>
              <li className="flex items-center gap-4"><Phone className="w-5 h-5 text-amber-500"/> {DATA.personal.phone}</li>
              <li className="flex items-center gap-4"><Mail className="w-5 h-5 text-amber-500"/> {DATA.personal.email}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm font-semibold tracking-wide">
          <p>&copy; {new Date().getFullYear()} Hamza Shahzad. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">Designed with React & <span className="text-amber-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]">Neumorphism</span></p>
        </div>
      </div>
    </footer>
  );
};
