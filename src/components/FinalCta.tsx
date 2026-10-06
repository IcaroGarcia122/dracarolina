import React from 'react';
import { Calendar, ArrowRight, Video, Globe, Languages } from 'lucide-react';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-12 pb-20 sm:pb-28 bg-[#FAF7F4] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Soft blush container */}
        <div className="relative bg-[#F3E7E4] rounded-[32px] sm:rounded-[40px] px-8 sm:px-12 lg:px-16 py-14 sm:py-16 overflow-hidden border border-[#DFC8C2]/40 shadow-xs">
          {/* Subtle decorative curved ambient SVG backdrop */}
          <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-20 -z-0">
            <svg viewBox="0 0 300 300" fill="none" className="w-full h-full text-[#B87986]">
              <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Heading */}
            <div className="lg:col-span-5 flex flex-col justify-start text-left">
              <div className="flex items-center gap-3.5 mb-5">
                <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B87986]">
                  ESTOU AQUI PARA TE OUVIR
                </span>
                <span className="w-10 sm:w-14 h-px bg-[#B87986]/40 inline-block" />
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal tracking-tight text-[#2E2225] leading-[1.12]">
                Vamos começar<br />
                essa conversa?
              </h2>
            </div>

            {/* Right Column: Text & Booking CTA separated by subtle hairline */}
            <div className="lg:col-span-7 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8 lg:pl-10 lg:border-l lg:border-[#DFC8C2] text-left">
              <div className="space-y-2">
                <p className="font-sans text-base sm:text-[17px] text-[#524146] font-normal leading-relaxed max-w-sm">
                  Agende sua consulta médica online e dê o primeiro passo para uma vida com mais leveza, equilíbrio e bem-estar.
                </p>
                <div className="flex flex-col gap-1 text-xs text-[#7D6B70] pt-1">
                  <div className="flex items-center gap-1.5 text-[#67434B] font-medium">
                    <Video className="w-3.5 h-3.5 text-[#B87986]" />
                    <span>Consulta online para adultos • Atendimento particular</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Globe className="w-3.5 h-3.5 text-[#B87986]" />
                    <span>Brasil e exterior • Consultas em Português e Inglês</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-1.5 shrink-0">
                <button
                  onClick={onOpenBooking}
                  className="group shrink-0 inline-flex items-center gap-2.5 bg-[#B87986] hover:bg-[#A36773] text-white px-7 py-3.5 rounded-full text-sm sm:text-base font-medium transition-all duration-200 shadow-sm active:scale-[0.98] cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white/90" />
                  <span>Agendar consulta</span>
                  <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <span className="text-[11px] text-[#7D6B70]">
                  WhatsApp: +55 61 99953-3860
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
