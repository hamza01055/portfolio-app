import React from 'react';
import { Code, BrainCircuit, Monitor, Server, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AnimatedSection } from './common/AnimatedSection';
import { SectionTitle } from './common/SectionTitle';
import { DATA } from '../data/portfolioData';

const iconMap = {
  languages: Code,
  frameworks: BrainCircuit,
  cv_and_nlp: Monitor,
  deployment: Server
};

const serviceIcons = [BrainCircuit, Monitor, ArrowRight, Server];

const SKILL_ICONS = {
  Python: {
    bg: '#306998',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <defs>
          <linearGradient id="py-a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5A9FD4"/>
            <stop offset="100%" stopColor="#306998"/>
          </linearGradient>
          <linearGradient id="py-b" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD43B"/>
            <stop offset="100%" stopColor="#FFE873"/>
          </linearGradient>
        </defs>
        <path fill="url(#py-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
        <path fill="url(#py-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
      </svg>
    )
  },
  SQL: {
    bg: '#00618A',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <ellipse cx="64" cy="32" rx="52" ry="18" fill="#E8E8E8"/>
        <path d="M12 32v20c0 9.9 23.4 18 52 18s52-8.1 52-18V32c0 9.9-23.4 18-52 18S12 41.9 12 32z" fill="#E8E8E8"/>
        <path d="M12 52v20c0 9.9 23.4 18 52 18s52-8.1 52-18V52c0 9.9-23.4 18-52 18S12 61.9 12 52z" fill="#C8C8C8"/>
        <path d="M12 72v20c0 9.9 23.4 18 52 18s52-8.1 52-18V72c0 9.9-23.4 18-52 18S12 81.9 12 72z" fill="#A8A8A8"/>
        <ellipse cx="64" cy="32" rx="52" ry="18" fill="#E8F4FF"/>
        <text x="64" y="37" textAnchor="middle" fill="#00618A" fontSize="14" fontWeight="bold" fontFamily="Arial">SQL</text>
      </svg>
    )
  },
  'C++': {
    bg: '#00599C',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="20" fill="#00599C"/>
        <text x="30" y="82" fill="white" fontSize="52" fontWeight="bold" fontFamily="Arial">C</text>
        <text x="72" y="68" fill="white" fontSize="28" fontWeight="bold" fontFamily="Arial">++</text>
      </svg>
    )
  },
  Java: {
    bg: '#0074BD',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <path fill="#EA2D2E" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.87 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969z"/>
        <path fill="#EA2D2E" d="M44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
        <path fill="#0074BD" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
        <path fill="#EA2D2E" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468z"/>
        <path fill="#0074BD" d="M49.912 71.702s-22.686 5.396-8.033 7.35c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.645 19.644-4.645z"/>
        <path fill="#EA2D2E" d="M90.609 93.862c23.458-12.194 12.629-23.924 5.046-22.35-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.833 23.725 0 .001.361-.33.464-.552z"/>
        <path fill="#0074BD" d="M76.491 1s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C57.548 27.833 81.229 21.608 76.491 1z"/>
        <path fill="#EA2D2E" d="M52.214 126.021c22.476 1.437 57.005-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
      </svg>
    )
  },
  PyTorch: {
    bg: '#EE4C2C',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <path d="M63.3 3.2L32.4 34.1c-17.2 17.2-17.2 45.2 0 62.4 17.2 17.2 45.2 17.2 62.4 0 17.2-17.2 17.2-45.2 0-62.4L84.2 44.7c10.3 10.3 10.3 27 0 37.3-10.3 10.3-27 10.3-37.3 0-10.3-10.3-10.3-27 0-37.3l16.4-16.4" fill="#EE4C2C"/>
        <circle cx="85" cy="32" r="6" fill="#EE4C2C"/>
      </svg>
    )
  },
  TensorFlow: {
    bg: '#FF6F00',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <path d="M63.5 1.9L2 36.7v65.6l61.5 34.8L125 102.3V36.7z" fill="#FF6F00"/>
        <path d="M63.5 1.9v134.4L125 102.3V36.7z" fill="#FFA000"/>
        <path d="M63.5 1.9L2 36.7l61.5 34.8 61.5-34.8z" fill="#FFCA28"/>
        <path d="M50.8 93.5V56.1l-13.3-7.7v52.8l26.5 15.3V101z" fill="white"/>
        <path d="M63.5 71.5l26.5-15.4V101l-26.5 15.3z" fill="white" opacity="0.5"/>
        <path d="M50.8 56.1l12.7 7.3 13.8-8-13.8-7.5z" fill="white"/>
      </svg>
    )
  },
  'Scikit-learn': {
    bg: '#F7931E',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <circle cx="64" cy="64" r="62" fill="#F7931E"/>
        <path d="M64 20c-24.3 0-44 19.7-44 44s19.7 44 44 44 44-19.7 44-44-19.7-44-44-44zm0 80c-19.9 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.1 36-36 36z" fill="white"/>
        <text x="64" y="72" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial">SK</text>
      </svg>
    )
  },
  Keras: {
    bg: '#D00000',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="20" fill="#D00000"/>
        <line x1="36" y1="20" x2="36" y2="108" stroke="white" strokeWidth="8" strokeLinecap="round"/>
        <line x1="36" y1="64" x2="68" y2="24" stroke="white" strokeWidth="8" strokeLinecap="round"/>
        <line x1="36" y1="64" x2="68" y2="104" stroke="white" strokeWidth="8" strokeLinecap="round"/>
        <line x1="68" y1="24" x2="96" y2="64" stroke="white" strokeWidth="8" strokeLinecap="round"/>
        <line x1="68" y1="104" x2="96" y2="64" stroke="white" strokeWidth="8" strokeLinecap="round"/>
      </svg>
    )
  },
  Pandas: {
    bg: '#150458',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#150458"/>
        <rect x="32" y="16" width="18" height="96" rx="9" fill="#E70488"/>
        <rect x="78" y="16" width="18" height="96" rx="9" fill="#E70488"/>
        <rect x="32" y="50" width="64" height="18" rx="9" fill="white"/>
      </svg>
    )
  },
  NumPy: {
    bg: '#013243',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#013243"/>
        <path d="M14 64 L64 14 L114 64 L64 114 Z" fill="none" stroke="#4DABCF" strokeWidth="6"/>
        <path d="M14 64 L64 44 L114 64 L64 84 Z" fill="#4DABCF" opacity="0.4"/>
        <circle cx="64" cy="64" r="12" fill="#4DABCF"/>
      </svg>
    )
  },
  Matplotlib: {
    bg: '#11557C',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#11557C"/>
        <line x1="18" y1="110" x2="112" y2="110" stroke="white" strokeWidth="2"/>
        <line x1="18" y1="18" x2="18" y2="110" stroke="white" strokeWidth="2"/>
        <polyline points="18,90 40,55 62,70 84,35 112,48" stroke="#E24A33" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="18,100 40,80 62,88 84,65 112,72" stroke="#348ABD" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  Seaborn: {
    bg: '#4C72B0',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#4C72B0"/>
        <rect x="18" y="70" width="16" height="40" rx="4" fill="#BBDEFB"/>
        <rect x="40" y="50" width="16" height="60" rx="4" fill="#90CAF9"/>
        <rect x="62" y="35" width="16" height="75" rx="4" fill="#64B5F6"/>
        <rect x="84" y="55" width="16" height="55" rx="4" fill="#90CAF9"/>
        <line x1="14" y1="110" x2="110" y2="110" stroke="white" strokeWidth="2"/>
      </svg>
    )
  },
  OpenCV: {
    bg: '#5C8FBF',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <circle cx="40" cy="70" r="30" fill="#5C8FBF"/>
        <circle cx="88" cy="70" r="30" fill="#C33333"/>
        <circle cx="64" cy="30" r="30" fill="#33AA33"/>
        <circle cx="40" cy="70" r="18" fill="#3D6A99"/>
        <circle cx="88" cy="70" r="18" fill="#992222"/>
        <circle cx="64" cy="30" r="18" fill="#228822"/>
      </svg>
    )
  },
  YOLOv8: {
    bg: '#1A1A2E',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#1A1A2E"/>
        <rect x="16" y="16" width="96" height="96" rx="8" fill="none" stroke="#00D4FF" strokeWidth="4"/>
        <rect x="32" y="32" width="64" height="64" rx="4" fill="none" stroke="#00D4FF" strokeWidth="2" strokeDasharray="8 4"/>
        <circle cx="64" cy="64" r="14" fill="#00D4FF" opacity="0.7"/>
        <line x1="16" y1="16" x2="32" y2="32" stroke="#00D4FF" strokeWidth="2"/>
        <line x1="112" y1="16" x2="96" y2="32" stroke="#00D4FF" strokeWidth="2"/>
        <line x1="16" y1="112" x2="32" y2="96" stroke="#00D4FF" strokeWidth="2"/>
        <line x1="112" y1="112" x2="96" y2="96" stroke="#00D4FF" strokeWidth="2"/>
      </svg>
    )
  },
  CNN: {
    bg: '#1E1E3F',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#1E1E3F"/>
        <rect x="8" y="28" width="22" height="72" rx="4" fill="#7B68EE"/>
        <rect x="38" y="38" width="22" height="52" rx="4" fill="#9B89FF"/>
        <rect x="68" y="48" width="22" height="32" rx="4" fill="#B8AAFF"/>
        <rect x="98" y="43" width="22" height="42" rx="4" fill="#D4CCFF"/>
        <line x1="30" y1="64" x2="38" y2="64" stroke="#7B68EE" strokeWidth="2"/>
        <line x1="60" y1="64" x2="68" y2="64" stroke="#9B89FF" strokeWidth="2"/>
        <line x1="90" y1="64" x2="98" y2="64" stroke="#B8AAFF" strokeWidth="2"/>
      </svg>
    )
  },
  ResNet: {
    bg: '#0D1117',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#0D1117"/>
        <rect x="8" y="52" width="28" height="24" rx="4" fill="#58A6FF"/>
        <rect x="46" y="52" width="28" height="24" rx="4" fill="#58A6FF"/>
        <rect x="84" y="52" width="28" height="24" rx="4" fill="#58A6FF"/>
        <line x1="36" y1="64" x2="46" y2="64" stroke="#58A6FF" strokeWidth="2"/>
        <line x1="74" y1="64" x2="84" y2="64" stroke="#58A6FF" strokeWidth="2"/>
        <path d="M22 52 Q22 28 64 28 Q106 28 106 52" stroke="#FFA657" strokeWidth="2.5" fill="none" strokeDasharray="6 3"/>
      </svg>
    )
  },
  LangChain: {
    bg: '#1C1C1C',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#1C1C1C"/>
        <path d="M18 64 Q18 38 44 38 L84 38 Q110 38 110 64 Q110 90 84 90 L64 90" stroke="#1DB954" strokeWidth="7" fill="none" strokeLinecap="round"/>
        <path d="M64 90 Q38 90 38 64" stroke="#1DB954" strokeWidth="7" fill="none" strokeLinecap="round"/>
        <circle cx="18" cy="64" r="9" fill="#1DB954"/>
        <circle cx="110" cy="64" r="9" fill="#1DB954"/>
      </svg>
    )
  },
  RAG: {
    bg: '#0F172A',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#0F172A"/>
        <rect x="8" y="16" width="48" height="36" rx="6" fill="#334155"/>
        <rect x="12" y="22" width="40" height="5" rx="2" fill="#94A3B8"/>
        <rect x="12" y="31" width="30" height="5" rx="2" fill="#64748B"/>
        <rect x="72" y="16" width="48" height="36" rx="6" fill="#334155"/>
        <rect x="76" y="22" width="40" height="5" rx="2" fill="#94A3B8"/>
        <rect x="76" y="31" width="30" height="5" rx="2" fill="#64748B"/>
        <circle cx="64" cy="86" r="26" fill="#6366F1"/>
        <text x="64" y="91" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial">AI</text>
        <line x1="32" y1="52" x2="48" y2="70" stroke="#A855F7" strokeWidth="2" strokeDasharray="4 2"/>
        <line x1="96" y1="52" x2="80" y2="70" stroke="#A855F7" strokeWidth="2" strokeDasharray="4 2"/>
      </svg>
    )
  },
  FAISS: {
    bg: '#002147',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#002147"/>
        <circle cx="32" cy="36" r="10" fill="#4D94FF"/>
        <circle cx="96" cy="36" r="10" fill="#4D94FF"/>
        <circle cx="64" cy="64" r="12" fill="#FF6B35"/>
        <circle cx="32" cy="92" r="10" fill="#4D94FF"/>
        <circle cx="96" cy="92" r="10" fill="#4D94FF"/>
        <line x1="32" y1="36" x2="64" y2="64" stroke="#4D94FF" strokeWidth="2"/>
        <line x1="96" y1="36" x2="64" y2="64" stroke="#4D94FF" strokeWidth="2"/>
        <line x1="32" y1="92" x2="64" y2="64" stroke="#4D94FF" strokeWidth="2"/>
        <line x1="96" y1="92" x2="64" y2="64" stroke="#4D94FF" strokeWidth="2"/>
      </svg>
    )
  },
  'Hugging Face': {
    bg: '#FF9D00',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <circle cx="64" cy="64" r="62" fill="#FFD21E"/>
        <circle cx="64" cy="64" r="44" fill="#FFB800"/>
        <circle cx="64" cy="62" r="32" fill="#FFD21E"/>
        <circle cx="48" cy="54" r="8" fill="white"/>
        <circle cx="80" cy="54" r="8" fill="white"/>
        <circle cx="50" cy="54" r="4" fill="#1A1A1A"/>
        <circle cx="82" cy="54" r="4" fill="#1A1A1A"/>
        <path d="M46 72 Q64 84 82 72" stroke="#1A1A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <ellipse cx="38" cy="60" rx="9" ry="6" fill="#FFB800" transform="rotate(-15 38 60)"/>
        <ellipse cx="90" cy="60" rx="9" ry="6" fill="#FFB800" transform="rotate(15 90 60)"/>
      </svg>
    )
  },
  LLMs: {
    bg: '#1A0533',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#1A0533"/>
        <circle cx="64" cy="50" r="26" fill="none" stroke="#9333EA" strokeWidth="3"/>
        <circle cx="64" cy="50" r="15" fill="#9333EA" opacity="0.35"/>
        <circle cx="64" cy="50" r="7" fill="#C084FC"/>
        <line x1="64" y1="24" x2="64" y2="14" stroke="#9333EA" strokeWidth="2"/>
        <line x1="82" y1="32" x2="90" y2="24" stroke="#9333EA" strokeWidth="2"/>
        <line x1="90" y1="50" x2="100" y2="50" stroke="#9333EA" strokeWidth="2"/>
        <line x1="82" y1="68" x2="90" y2="76" stroke="#9333EA" strokeWidth="2"/>
        <line x1="46" y1="68" x2="38" y2="76" stroke="#9333EA" strokeWidth="2"/>
        <line x1="38" y1="50" x2="28" y2="50" stroke="#9333EA" strokeWidth="2"/>
        <line x1="46" y1="32" x2="38" y2="24" stroke="#9333EA" strokeWidth="2"/>
        <rect x="22" y="88" width="84" height="26" rx="6" fill="#2D0A4E"/>
        <text x="64" y="105" textAnchor="middle" fill="#C084FC" fontSize="11" fontWeight="bold" fontFamily="monospace">LLM</text>
      </svg>
    )
  },
  FastAPI: {
    bg: '#059669',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#059669"/>
        <path d="M64 14 L96 64 L64 64 L64 114 L32 64 L64 64 Z" fill="white"/>
      </svg>
    )
  },
  Django: {
    bg: '#092E20',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#092E20"/>
        <rect x="30" y="28" width="12" height="72" rx="6" fill="#44B78B"/>
        <rect x="52" y="16" width="12" height="60" rx="6" fill="#44B78B"/>
        <path d="M64 76 Q64 100 44 100 Q36 100 32 96" stroke="#44B78B" strokeWidth="12" fill="none" strokeLinecap="round"/>
        <rect x="76" y="28" width="12" height="44" rx="6" fill="#44B78B"/>
        <rect x="76" y="28" width="36" height="12" rx="6" fill="#44B78B"/>
        <rect x="76" y="50" width="28" height="12" rx="6" fill="#44B78B"/>
      </svg>
    )
  },
  Docker: {
    bg: '#066DA5',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <path d="M124.8 52.1c-4.3-2.5-10-2.8-14.7-1.4-.6-5.2-4-9.7-7.9-12.9l-1.6-1.3-1.4 1.6c-2.6 3.1-3.4 8.3-3 12.3-1.5-.9-4.1-1.7-6-2.1-2.5-.5-5.2-.6-7.7-.5H6.4C3.5 59 4 70 8.3 79.5c4.4 9.8 12.7 17 23.3 19.7 11.8 3 24.5 1.2 34.5-5.2 8-5.1 13.9-13 17.4-21.7 4.8.3 9.8-.4 13.9-2.8 4.3-2.4 7.7-6.7 9.4-11.4z" fill="#066DA5"/>
        <rect x="12" y="46" width="14" height="13" rx="2" fill="white"/>
        <rect x="30" y="46" width="14" height="13" rx="2" fill="white"/>
        <rect x="48" y="46" width="14" height="13" rx="2" fill="white"/>
        <rect x="66" y="46" width="14" height="13" rx="2" fill="white"/>
        <rect x="30" y="30" width="14" height="13" rx="2" fill="white"/>
        <rect x="48" y="30" width="14" height="13" rx="2" fill="white"/>
        <rect x="48" y="14" width="14" height="13" rx="2" fill="white"/>
      </svg>
    )
  },
  'REST APIs': {
    bg: '#1E293B',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#1E293B"/>
        <rect x="14" y="42" width="100" height="44" rx="8" fill="#334155"/>
        <text x="64" y="70" textAnchor="middle" fill="#38BDF8" fontSize="17" fontWeight="bold" fontFamily="monospace">REST</text>
        <circle cx="20" cy="24" r="6" fill="#22C55E"/>
        <circle cx="38" cy="24" r="6" fill="#EAB308"/>
        <circle cx="56" cy="24" r="6" fill="#EF4444"/>
      </svg>
    )
  },
  Roboflow: {
    bg: '#5850EC',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#5850EC"/>
        <polygon points="64,14 106,40 106,88 64,114 22,88 22,40" fill="none" stroke="white" strokeWidth="5"/>
        <polygon points="64,36 90,52 90,76 64,92 38,76 38,52" fill="white" opacity="0.2"/>
        <circle cx="64" cy="64" r="14" fill="white"/>
      </svg>
    )
  },
  Git: {
    bg: '#F34F29',
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <path fill="#F34F29" d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993L87.42 55.529c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.578 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.996-11.501z"/>
      </svg>
    )
  },
};

const Skill3DCard = ({ skill }) => {
  const meta = SKILL_ICONS[skill];
  return (
    <div className="group flex flex-col items-center gap-2 cursor-default" style={{ perspective: '400px' }}>
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center p-2 transition-all duration-300"
        style={{
          background: 'linear-gradient(145deg, #3f3f46, #18181b)',
          boxShadow: '6px 6px 12px rgba(0,0,0,0.5), -3px -3px 8px rgba(255,255,255,0.04), inset 0 1px 1px rgba(255,255,255,0.06)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'rotateY(-15deg) rotateX(10deg) scale(1.12)';
          e.currentTarget.style.boxShadow = `12px 12px 24px rgba(0,0,0,0.6), -4px -4px 12px rgba(255,255,255,0.05), 0 0 20px ${meta ? meta.bg + '55' : 'rgba(245,158,11,0.2)'}, inset 0 1px 1px rgba(255,255,255,0.08)`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.boxShadow = '6px 6px 12px rgba(0,0,0,0.5), -3px -3px 8px rgba(255,255,255,0.04), inset 0 1px 1px rgba(255,255,255,0.06)';
        }}
      >
        {meta ? meta.svg : (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <rect width="64" height="64" rx="10" fill="#27272a"/>
            <text x="32" y="42" textAnchor="middle" fill="#f59e0b" fontSize="20" fontWeight="bold" fontFamily="monospace">
              {skill.slice(0, 2).toUpperCase()}
            </text>
          </svg>
        )}
      </div>
      <span className="text-xs text-zinc-400 font-medium group-hover:text-amber-400 transition-colors text-center leading-tight max-w-[60px]">
        {skill}
      </span>
    </div>
  );
};

export const SkillsAndServices = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 relative z-10" id="services">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Technical Arsenal — takes 2/3 width */}
          <AnimatedSection className="lg:col-span-2">
            <div className="p-12 rounded-[3rem] bg-zinc-900 border border-white/5 shadow-[16px_16px_32px_rgba(0,0,0,0.4),-12px_-12px_32px_rgba(255,255,255,0.02)] h-full">
              <SectionTitle title="Technical Arsenal" />
              <div className="space-y-10">
                {Object.entries(DATA.skills).map(([category, skills]) => {
                  const IconComponent = iconMap[category] || Code;
                  return (
                    <div key={category}>
                      <h4 className="text-zinc-200 capitalize mb-6 flex items-center gap-4 font-bold tracking-wide text-lg">
                        <div className="w-10 h-10 rounded-full bg-zinc-950 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6)] flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-amber-500" />
                        </div>
                        {category.replace(/_/g, ' ')}
                      </h4>
                      <div className="flex flex-wrap gap-5 pl-14">
                        {skills.map(skill => (
                          <Skill3DCard key={skill} skill={skill} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Services preview — 1/3 width */}
          <AnimatedSection delay={150} className="flex flex-col gap-6">
            <div className="mb-2">
              <SectionTitle title="Services" />
            </div>

            {DATA.services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900 border border-white/5 shadow-[6px_6px_12px_rgba(0,0,0,0.3)] flex items-center gap-4 group transition-all duration-300 cursor-pointer hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4)] hover:border-amber-500/20"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-950 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.6)] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.3)] transition-all">
                  <BrainCircuit className="w-5 h-5 text-amber-500" />
                </div>
                <p className="text-zinc-300 font-semibold text-sm leading-snug group-hover:text-amber-300 transition-colors">
                  {service.title}
                </p>
              </div>
            ))}

            {/* View all services CTA */}
            <button
              onClick={() => navigate('/services')}
              className="mt-2 w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-300 group hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                color: '#000',
                boxShadow: '0 6px 20px rgba(245,158,11,0.35)',
              }}
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};
