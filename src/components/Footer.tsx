import React from 'react';
import { BookingConfig } from '../types';
import { BrandLogo } from './BrandLogo';
import { Instagram, MessageCircle, Globe, Languages } from 'lucide-react';

interface FooterProps {
  config: BookingConfig;
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
            <BrandLogo variant="footer" />
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#8C4E5B] mt-2 font-medium pl-0.5">
              {config.area} • RQE 25.334 • CRM-DF 29.767
            </span>
            <div className="mt-3 flex items-center gap-4 text-xs text-[#524146]">
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#B87986] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#B87986]" />
                <span className="font-medium">{config.instagramHandle}</span>
              </a>
              <a
                href={`https://wa.me/${config.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#B87986] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#B87986]" />
                <span className="font-medium">{config.whatsappNumber}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8" aria-label="Navegação do rodapé">
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
          <div className="hidden md:flex flex-col items-start gap-1 border-l border-[#DFC8C2] pl-6 text-left">
            <p className="font-sans text-xs text-[#7D6B70] leading-relaxed max-w-[240px]">
              Cuidado médico em saúde mental para adultos no Brasil e exterior.
            </p>
            <span className="text-[11px] text-[#8C4E5B] font-medium">
              Consultas em Português e Inglês
            </span>
          </div>
        </div>

        {/* Sub-footer regulatory note with doctor's credentials */}
        <div className="pt-8 border-t border-[#E8DFD9]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#7D6B70]/90 text-left">
          <div className="space-y-1">
            <p className="font-medium text-[#2E2225]">
              © {new Date().getFullYear()} {config.doctorName} • {config.crmInfo} • {config.rqeInfo}
            </p>
            <p className="text-[11px] text-[#7D6B70]">
              Pós-graduada em Psiquiatria e Psicofarmacologia — <span className="uppercase text-[10px] tracking-wider text-[#7D6B70]/80">não especialista</span>
            </p>
          </div>
          <div className="sm:text-right space-y-0.5">
            <p className="text-xs text-[#67434B] font-medium">
              Atendimento online exclusivamente particular (para adultos)
            </p>
            <p className="text-[11px] text-[#7D6B70]">
              Telemedicina para todo o Brasil e pacientes no exterior • Não atende convênios
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
