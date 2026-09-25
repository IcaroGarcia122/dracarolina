import React from 'react';
import { Settings } from 'lucide-react';
import { BookingConfig } from '../types';

interface FooterProps {
  config: BookingConfig;
  onOpenConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config: _config, onOpenConfig }) => {
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
          {/* Brand Identity - Exact match to template */}
          <div className="flex flex-col text-left">
            <span className="font-serif text-2xl font-normal tracking-tight text-[#2E2225] leading-none">
              Carolina Zampronha
            </span>
            <span className="font-sans text-[9px] tracking-[0.38em] uppercase text-[#7D6B70] mt-1.5 font-medium pl-0.5">
              Psiquiatria
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

          {/* Right Signature Quote with fine vertical divider - Template match */}
          <div className="hidden md:flex items-center gap-5 border-l border-[#DFC8C2] pl-6 text-left">
            <p className="font-sans text-xs text-[#7D6B70] leading-relaxed max-w-[210px]">
              Cuidado em saúde mental<br />
              para uma vida com mais sentido.
            </p>
          </div>
        </div>

        {/* Sub-footer regulatory / provisional note & quick config button */}
        <div className="pt-8 border-t border-[#E8DFD9]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7D6B70]/80">
          <p>
            © {new Date().getFullYear()} Dra. Carolina Zampronha • Psiquiatra • Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConfig}
              className="inline-flex items-center gap-1.5 text-xs text-[#B87986] hover:text-[#A36773] underline-offset-4 hover:underline transition-colors"
              title="Configurar URL de agendamento e dados"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Configurar link de agendamento</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
