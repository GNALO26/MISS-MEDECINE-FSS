import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/vote', label: 'Voter' },
    { path: '/billetterie', label: 'Billetterie' },
    { path: '/a-propos', label: 'À propos' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass-effect shadow-2xl py-3' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-dark rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src="/images/logo-event.png" 
                  alt="Miss FSS-Médecine" 
                  className="h-12 sm:h-14 w-auto relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold gradient-text-elegant">
                  Miss FSS-Médecine
                </h1>
                <p className="text-xs text-gray-400 tracking-wide">Faculté des Sciences de Santé</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    location.pathname === link.path
                      ? 'text-secondary'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {location.pathname === link.path && (
                    <span className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary-dark/20 rounded-lg"></span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-secondary-dark transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg glass-effect hover:border-secondary/50 transition-all duration-300"
              aria-label="Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span 
                  className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span 
                  className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <nav className="relative h-full flex flex-col items-center justify-center space-y-2 px-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`w-full text-center py-4 px-6 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                location.pathname === link.path
                  ? 'bg-gradient-to-r from-secondary/20 to-secondary-dark/20 text-secondary border border-secondary/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              style={{ 
                animation: mobileMenuOpen ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none' 
              }}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Decorative Element */}
          <div className="absolute bottom-20 w-full max-w-xs">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;