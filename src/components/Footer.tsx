import React from 'react';
import { BookingConfig } from '../types';
import logoImg from '../assets/images/logo.png';

interface FooterProps {
  config: BookingConfig;
  onOpenConfig?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const navLinks = [
    { label: 'Saúde Mental', href: '#saude-mental' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Dúvidas', href: '#duvidas' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FAF7F4] border-t border-[#E8DFD9] pt-14 pb-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10">
          {/* Brand Identity */}
          <div className="flex flex-col text-left">
            <img
              src={logoImg}
              alt="Dra. Carolina Zampronha"
              className="h-12 sm:h-14 w-auto object-contain object-left mb-2"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== window.location.origin + '/logo.png') {
                  target.src = '/logo.png';
                }
              }}
            />
            <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-[#7D6B70] font-medium pl-0.5">
              Médica de Família • MFC
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8" aria-label="Navegação do rodapé">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-[#524146] hover:text-[#B87986] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Signature Quote with fine vertical divider */}
          <div className="hidden md:flex items-center gap-5 border-l border-[#DFC8C2] pl-6 text-left">
            <p className="font-sans text-xs text-[#7D6B70] leading-relaxed max-w-[210px]">
              Cuidado em saúde mental<br />
              para uma vida com mais sentido.
            </p>
          </div>
        </div>

        {/* Sub-footer regulatory note with doctor's credentials */}
        <div className="pt-8 border-t border-[#E8DFD9]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7D6B70]/80">
          <p>
            © {new Date().getFullYear()} Dra. Carolina Zampronha • {config.crmInfo} • Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-[#7D6B70]/70">
            Brasília - DF • Telemedicina em todo o Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};
