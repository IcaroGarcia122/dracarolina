import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import aboutBgImage from '../assets/images/about-bg.png';

interface AboutDoctorProps {
  onOpenAboutModal: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenAboutModal }) => {
  return (
    <section
      id="sobre"
      className="relative isolate overflow-hidden min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] flex flex-col justify-end lg:justify-center pt-28 sm:pt-36 lg:pt-0 pb-6 sm:pb-8 lg:pb-0 lg:py-28 bg-[#FAF7F4]"
    >
      {/* Background Image:
          - Mobile: soft transparency (opacity-55) and compact framing
          - PC: solid, vivid image (opacity-100) framed on the doctor at the left
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={aboutBgImage}
          alt="Dra. Carolina Zampronha"
          className="w-full h-full object-cover object-[20%_20%] sm:object-[22%_20%] lg:object-[18%_25%] opacity-55 sm:opacity-60 lg:opacity-100 transition-all duration-300"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== window.location.origin + '/about-bg.png') {
              target.src = '/about-bg.png';
            }
          }}
        />

        {/* Mobile: soft bottom vignette to anchor the card */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#FAF7F4] via-transparent to-transparent pointer-events-none" />

        {/* PC: gentle fade on the right behind the card, keeping the doctor on the left crystal clear */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#FAF7F4]/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Atmospheric glowing pink orbs */}
      <div className="absolute top-1/4 left-8 w-80 h-80 bg-[#DFC8C2]/20 rounded-full blur-[100px] pointer-events-none z-1" />
      <div className="absolute bottom-6 right-1/4 w-72 h-72 bg-[#B87986]/10 rounded-full blur-[90px] pointer-events-none z-1" />

      {/* Content Container:
          - Mobile: card at bottom and smaller
          - PC: card positioned on the right side of the section
      */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 w-full relative z-10">
        <div className="max-w-lg lg:max-w-xl mx-auto lg:ml-auto lg:mr-0 text-left">
          <div className="bg-white/92 lg:bg-white/95 backdrop-blur-md rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-10 xl:p-12 border border-[#DFC8C2]/70 shadow-sm lg:shadow-md relative overflow-hidden">
            {/* Decorative subtle rose accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DFC8C2] via-[#B87986] to-[#67434B]" />

            {/* Small Kicker */}
            <div className="flex items-center gap-2.5 lg:gap-3 mb-2.5 lg:mb-4">
              <span className="font-sans text-[10px] lg:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#B87986]">
                SOBRE MIM
              </span>
              <span className="w-8 lg:w-14 h-px bg-[#B87986]/40 inline-block" />
            </div>

            {/* Editorial Title: smaller on mobile, grand on PC */}
            <h2 className="font-serif text-xl sm:text-2xl lg:text-4xl xl:text-[44px] font-normal tracking-tight text-[#221619] leading-[1.15] mb-2.5 lg:mb-6 text-balance">
              A médica por trás da escuta.
            </h2>

            {/* Body Copy: compact on mobile, spacious and comfortable on PC */}
            <div className="space-y-2 lg:space-y-4 font-sans text-xs sm:text-sm lg:text-base text-[#524146] font-normal leading-relaxed">
              <p>
                Sou médica de família e comunidade (MFC), e acredito em um cuidado integral e em saúde mental baseado na escuta, no respeito e na singularidade de cada pessoa.
              </p>
              <p>
                Ofereço um acompanhamento próximo e humanizado para construirmos, juntos, um caminho seguro para mais equilíbrio e qualidade de vida.
              </p>
            </div>

            {/* Highlight Note */}
            <div className="mt-3 lg:mt-6 pt-3 lg:pt-5 border-t border-[#DFC8C2]/40 lg:border-[#DFC8C2]/50 flex items-center gap-2 lg:gap-3 text-[11px] sm:text-xs lg:text-sm text-[#8C4E5B] font-medium">
              <Sparkles className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#B87986] shrink-0" />
              <span>Atendimento acolhedor baseado em evidências científicas.</span>
            </div>

            {/* Outlined Action Button */}
            <div className="mt-3.5 lg:mt-8">
              <button
                onClick={onOpenAboutModal}
                className="group inline-flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3.5 rounded-full text-xs sm:text-sm lg:text-base font-medium text-[#67434B] hover:text-white bg-[#FAF7F4] hover:bg-[#67434B] border border-[#67434B]/40 hover:border-[#67434B] transition-all duration-200 cursor-pointer shadow-2xs lg:shadow-xs"
              >
                <span>Conheça mais sobre mim</span>
                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
