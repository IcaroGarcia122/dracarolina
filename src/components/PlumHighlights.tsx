import React from 'react';
import { Sparkles, Clock, HeartHandshake } from 'lucide-react';

export const PlumHighlights: React.FC = () => {
  const pillars = [
    {
      icon: HeartHandshake,
      title: 'Escuta\nindividual',
      description:
        'Um espaço seguro para falar sobre o que você sente, com acolhimento e sem julgamentos.',
    },
    {
      icon: Clock,
      title: 'Cuidado\ncontínuo',
      description:
        'Acompanhamento psiquiátrico planejado e individualizado, com foco em resultados e bem-estar.',
    },
    {
      icon: Sparkles,
      title: 'Acompanhamento\nhumanizado',
      description:
        'Um cuidado que considera sua história de vida, seus valores e o que faz sentido para você.',
    },
  ];

  return (
    <section className="bg-[#67434B] text-white py-5 sm:py-6 lg:py-7 relative overflow-hidden">
      {/* Subtle organic light accent on background */}
      <div className="absolute -top-16 -left-16 w-60 h-60 rounded-full bg-white/[0.04] blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-60 h-60 rounded-full bg-[#B87986]/15 blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-10">
        {/* Small Kicker with hairline */}
        <div className="flex items-center gap-2.5 mb-3.5 sm:mb-5">
          <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#DFC8C2]">
            CUIDADO EM SAÚDE MENTAL
          </span>
          <span className="w-8 sm:w-12 h-px bg-[#DFC8C2]/40 inline-block" />
        </div>

        {/* 3 Pillars: Side-by-side on mobile AND desktop */}
        <div className="flex flex-row overflow-x-auto no-scrollbar snap-x snap-mandatory sm:grid sm:grid-cols-3 divide-x divide-white/20 pb-1 sm:pb-0">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`shrink-0 min-w-[210px] sm:min-w-0 flex-1 snap-start flex flex-col justify-start group ${
                  idx === 0
                    ? 'pr-4 sm:pr-6 lg:pr-8'
                    : idx === 1
                    ? 'px-4 sm:px-6 lg:px-8'
                    : 'pl-4 sm:pl-6 lg:pl-8'
                }`}
              >
                {/* Delicate symbol */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#DFC8C2] mb-2 group-hover:scale-105 group-hover:bg-[#B87986]/40 transition-all duration-300">
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#DFC8C2]" />
                </div>

                <h2 className="font-serif text-base sm:text-lg lg:text-[21px] font-normal leading-[1.2] text-white mb-1.5 whitespace-pre-line tracking-tight">
                  {pillar.title}
                </h2>
                <p className="font-sans text-[11px] sm:text-xs text-white/80 font-light leading-relaxed max-w-sm">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
