import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { DATA } from '../data/portfolioData';

const WhatsAppIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [iconState, setIconState] = useState('entering');
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setIconState('exiting');
    setTimeout(() => {
      toggleTheme();
      setIconState('entering');
    }, 200);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'services', label: 'Services', route: '/services' }
  ];

  const handleScrollTo = (id, route) => {
    setIsOpen(false);
    if (route) {
      navigate(route);
      return;
    }
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 150);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 50,
          backgroundColor: scrolled ? 'var(--bg-nav)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          boxShadow: scrolled ? 'var(--shadow-nav)' : 'none',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          padding: scrolled ? '1rem 0' : '2rem 0',
          transition: 'background-color 350ms ease, padding 350ms ease, box-shadow 350ms ease, border-color 350ms ease',
        }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <div
            className="flex items-center gap-4 font-extrabold text-2xl cursor-pointer tracking-tight"
            style={{ color: 'var(--text-primary)' }}
            onClick={() => handleScrollTo('home')}
          >
            <div
              className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center"
              style={{
                background: 'var(--bg-secondary)',
                boxShadow: 'var(--shadow-logo)',
                border: '1.5px solid var(--border-accent)',
              }}
            >
              <img
                src="/profile_img.jpeg"
                alt="Hamza logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span style={{ fontFamily: '"Permanent Marker", cursive' }}>
              Hamza
              <span
                style={{
                  color: 'var(--accent)',
                  filter: 'drop-shadow(0 0 8px var(--accent-glow))',
                }}
              >
                .
              </span>
              AI
            </span>
          </div>

          {/* Desktop Nav Links + Toggle */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Nav pill */}
            <div
              className="flex items-center gap-8 backdrop-blur-xl px-10 py-4 rounded-full"
              style={{
                background: 'var(--bg-nav-pill)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-pill)',
              }}
            >
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id, link.route)}
                  className="text-sm font-bold tracking-wide uppercase group relative"
                  style={{ color: link.route && location.pathname === link.route ? 'var(--accent)' : 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.filter = 'drop-shadow(0 0 8px var(--accent-glow))';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = link.route && location.pathname === link.route ? 'var(--accent)' : 'var(--text-secondary)';
                    e.currentTarget.style.filter = 'none';
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* WhatsApp button – desktop */}
            <a
              href={DATA.personal.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: '#25D366',
                boxShadow: '0 4px 14px rgba(37,211,102,0.4)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.7)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 14px rgba(37,211,102,0.4)'}
            >
              <WhatsAppIcon className="w-6 h-6 text-white" />
            </a>

            {/* Theme toggle – desktop */}
            <button
              onClick={handleToggle}
              className="theme-toggle"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className={`theme-toggle-icon ${iconState}`}>
                {isDark ? '🌙' : '☀️'}
              </span>
            </button>
          </div>

          {/* Mobile right cluster */}
          <div className="xl:hidden flex items-center gap-3">
            {/* Theme toggle – mobile */}
            <button
              onClick={handleToggle}
              className="theme-toggle"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className={`theme-toggle-icon ${iconState}`}>
                {isDark ? '🌙' : '☀️'}
              </span>
            </button>

            {/* WhatsApp – mobile */}
            <a
              href={DATA.personal.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{ background: '#25D366', boxShadow: '0 4px 14px rgba(37,211,102,0.4)' }}
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
            </a>

            {/* Hamburger */}
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: 'var(--bg-secondary)',
                boxShadow: 'var(--shadow-pill)',
                border: '1.5px solid var(--border-accent)',
                color: 'var(--accent)',
                cursor: 'pointer',
              }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <div
          className={`xl:hidden absolute top-full left-0 w-full backdrop-blur-3xl p-8 flex flex-col gap-6 transition-all duration-300 origin-top ${
            isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
          style={{
            background: 'var(--bg-nav)',
            borderBottom: '1px solid var(--border-subtle)',
            boxShadow: isDark ? '0 20px 40px rgba(0,0,0,0.8)' : '0 20px 40px rgba(0,0,0,0.12)',
          }}
        >
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id, link.route)}
              className="text-left text-xl font-bold py-4 uppercase tracking-widest"
              style={{
                color: 'var(--text-secondary)',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left',
                padding: '1rem 0',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};
