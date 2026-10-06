import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Saúde Mental', href: '#saude-mental' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Dúvidas', href: '#duvidas' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 sm:py-4 px-4 sm:px-6 pointer-events-none'
          : 'py-0 px-0 bg-[#FAF7F4]/90 backdrop-blur-md border-b border-[#E8DFD9]/60'
      }`}
    >
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'pointer-events-auto max-w-5xl mx-auto rounded-2xl sm:rounded-full bg-[#FAF7F4]/90 sm:bg-white/90 backdrop-blur-md border border-[#DFC8C2]/70 shadow-lg shadow-[#67434B]/6 px-4 sm:px-7 h-14 sm:h-16 flex items-center justify-between'
            : 'max-w-6xl mx-auto px-6 sm:px-10 h-20 sm:h-24 flex items-center justify-between'
        }`}
      >
        {/* Brand identity */}
        <a 
          href="#" 
          className="relative flex items-center group text-left focus:outline-none"
          aria-label="Dra. Carolina Zampronha - Mente & Saúde"
        >
          <BrandLogo isScrolled={isScrolled} variant="header" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[13px] sm:text-[14px] text-[#423337] hover:text-[#B87986] font-medium transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#B87986] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button with modality badge */}
        <div className="hidden sm:flex flex-col items-end gap-1">
          <button
            onClick={onOpenBooking}
            className={`group inline-flex items-center gap-2 bg-[#B87986] hover:bg-[#A36773] text-white rounded-full font-medium transition-all shadow-sm active:scale-[0.98] cursor-pointer ${
              isScrolled ? 'px-4 py-2 text-xs sm:text-sm' : 'px-5 py-2.5 text-sm'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
            <span>Agendar consulta</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
          </button>
          {!isScrolled && (
            <span className="text-[10px] text-[#7D6B70] tracking-wide pr-1">
              Online para adultos • Particular
            </span>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#423337] hover:text-[#B87986] focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`pointer-events-auto sm:hidden bg-[#FAF7F4]/98 backdrop-blur-md border border-[#E8DFD9] shadow-xl rounded-2xl mx-4 mt-2 px-6 py-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#423337] hover:text-[#B87986] py-2.5 border-b border-[#E8DFD9]/50"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full justify-center flex items-center gap-2 bg-[#B87986] hover:bg-[#A36773] text-white px-5 py-3 rounded-full text-sm font-medium shadow-sm transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar consulta</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#7D6B70]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B87986]" />
              <span>Consulta online • Atendimento particular</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
