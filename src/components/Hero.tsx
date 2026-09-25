import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import heroBgImage from '../assets/images/hero-bg.png';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreCare: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreCare }) => {
  return (
    <section className="relative isolate overflow-hidden min-h-[640px] sm:min-h-[700px] lg:min-h-[800px] flex items-center pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 bg-[#FAF7F4]">
      {/* Background Image: shifted so the woman appears clearly with low/no wash transparency */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={heroBgImage}
          alt="Carolina Zampronha Psiquiatria"
          className="w-full h-full object-cover object-[82%_8%] sm:object-[80%_8%] lg:object-[78%_6%] opacity-95 transition-all duration-300"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== window.location.origin + '/hero-bg.png') {
              target.src = '/hero-bg.png';
            }
          }}
        />
        {/* Subtle, soft gradient only on the left/bottom to protect text legibility without covering the woman */}
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#FAF7F4]/90 via-[#FAF7F4]/50 to-transparent sm:via-[#FAF7F4]/20 lg:w-3/5 pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full relative z-10">
        <div className="max-w-2xl text-left">
          {/* Eye-catching Kicker Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/90 border border-[#B87986]/40 shadow-xs mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#B87986] animate-pulse" />
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#67434B]">
              CUIDADO EM SAÚDE MENTAL
            </span>
            <span className="w-4 h-px bg-[#B87986]/40 hidden sm:inline-block" />
            <span className="text-[11px] text-[#8C4E5B] font-medium hidden sm:inline-block">Dra. Carolina Zampronha</span>
          </div>

          {/* Slogan Container */}
          <div className="relative">
            {/* Giant Editorial Serif Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[78px] font-normal tracking-tight text-[#221619] leading-[1.05] text-balance">
              <span className="block">A sua</span>
              <span className="block">história</span>
              <span className="block">
                merece ser{' '}
                <span className="text-[#A35967] relative inline-block whitespace-nowrap font-medium">
                  ouvida.
                  {/* Organic hand-drawn stroke underline */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-4 sm:h-5 text-[#B87986] pointer-events-none"
                    viewBox="0 0 240 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2.5 16.5C45.2 6.8 132.8 3.2 236 12.8C202.4 17.5 130 19.8 45 22.2"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-95"
                    />
                    <path
                      d="M14 19C70 13 160 12 222 17"
                      stroke="#67434B"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      className="opacity-35"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-lg sm:text-[20px] text-[#3D2C31] font-normal leading-relaxed mt-7 mb-6 max-w-xl">
              Cuidado em saúde mental com atenção à sua história e às suas necessidades.
            </p>

            {/* Value highlight chips */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-[#523A41] bg-white/90 border border-[#DFC8C2] px-3 py-1.5 rounded-full font-medium shadow-2xs backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B87986]" />
                Atendimento Humanizado
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-[#523A41] bg-white/90 border border-[#DFC8C2] px-3 py-1.5 rounded-full font-medium shadow-2xs backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B87986]" />
                Consultas de 60 Minutos
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-[#523A41] bg-white/90 border border-[#DFC8C2] px-3 py-1.5 rounded-full font-medium shadow-2xs backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B87986]" />
                Presencial & Telemedicina
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#B87986] hover:bg-[#A36773] text-white px-7 py-3.5 rounded-full text-base font-medium shadow-md shadow-[#B87986]/25 hover:shadow-lg hover:shadow-[#B87986]/35 transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white/90" />
              <span>Agendar consulta</span>
              <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreCare}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-base font-medium text-[#4A373C] border border-[#67434B]/35 hover:border-[#67434B] hover:text-[#221619] hover:bg-white/95 transition-all duration-200 cursor-pointer backdrop-blur-xs bg-white/80 shadow-2xs"
            >
              <span>Conheça o atendimento</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
