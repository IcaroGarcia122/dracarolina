import React from 'react';
import { 
  HeartPulse, 
  SunMedium, 
  Activity, 
  Brain, 
  Moon, 
  BatteryCharging, 
  Check, 
  ArrowRight, 
  Calendar 
} from 'lucide-react';
import plantaImg from '../assets/images/planta.png';

interface MentalHealthSectionProps {
  onOpenBooking: () => void;
}

export const MentalHealthSection: React.FC<MentalHealthSectionProps> = ({ onOpenBooking }) => {
  const cards = [
    {
      num: '01',
      icon: HeartPulse,
      tag: 'ACOLHIMENTO',
      title: 'Ansiedade',
      description:
        'Preocupação persistente, inquietação física ou sensação contínua de alerta que interferem no seu dia a dia e na tranquilidade.',
      bullets: [
        'Compreensão integral de gatilhos e sintomas',
        'Estratégias para alívio do estado de alerta',
        'Cuidado focado em resgatar o equilíbrio',
      ],
    },
    {
      num: '02',
      icon: SunMedium,
      tag: 'CUIDADO',
      title: 'Depressão',
      description:
        'Tristeza duradoura, perda de interesse nas atividades que antes traziam prazer, desânimo e cansaço constante.',
      bullets: [
        'Olhar atento para sua história e momento',
        'Avaliação clínica detalhada e sem pressa',
        'Construção gradual de vitalidade e bem-estar',
      ],
    },
    {
      num: '03',
      icon: Activity,
      tag: 'EQUILÍBRIO',
      title: 'Transtorno Bipolar',
      description:
        'Oscilações marcantes de humor, disposição e pensamentos, alternando fases de euforia ou agitação com períodos de abatimento.',
      bullets: [
        'Diagnóstico criterioso e acompanhamento próximo',
        'Estabilização do humor com segurança médica',
        'Foco em estabilidade e rotina saudável',
      ],
    },
    {
      num: '04',
      icon: Brain,
      tag: 'FOCO & ROTINA',
      title: 'TDAH',
      description:
        'Desafios contínuos com atenção, organização, procrastinação e gestão do tempo que afetam o trabalho e os estudos.',
      bullets: [
        'Investigação funcional da sua rotina',
        'Estratégias práticas para foco e produtividade',
        'Acompanhamento individualizado e contínuo',
      ],
    },
    {
      num: '05',
      icon: Moon,
      tag: 'DESCANSO',
      title: 'Alterações do Sono',
      description:
        'Dificuldade frequente para adormecer, despertares noturnos sucessivos ou a sensação de acordar sem energia renovada.',
      bullets: [
        'Análise da rotina biológica e higiene do sono',
        'Identificação de causas emocionais e físicas',
        'Resgate do descanso profundo e reparador',
      ],
    },
    {
      num: '06',
      icon: BatteryCharging,
      tag: 'BEM-ESTAR',
      title: 'Esgotamento Emocional',
      description:
        'Sensação de sobrecarga mental extrema, cansaço crônico e perda de motivação ligados às pressões e exigências cotidianas.',
      bullets: [
        'Espaço seguro para descompressão e escuta',
        'Reorganização de limites e suporte médico',
        'Plano de autocuidado para recuperar a energia',
      ],
    },
  ];

  return (
    <section id="saude-mental" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-[#FAF7F4] border-t border-[#E8DFD9]/70">
      {/* Delicate glowing ambient orbs */}
      <div className="absolute top-1/4 right-0 w-[480px] h-[480px] bg-[#DFC8C2]/25 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-0 w-[420px] h-[420px] bg-[#B87986]/15 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute top-2/3 right-1/4 w-[360px] h-[360px] bg-[#DFC8C2]/20 rounded-full blur-[110px] pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header: Kicker, Title & Opening Text */}
        <div className="max-w-3xl mb-14 sm:mb-16 text-left">
          <div className="flex items-center gap-3.5 mb-5">
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B87986]">
              ATENÇÃO E COMPREENSÃO
            </span>
            <span className="w-12 sm:w-16 h-px bg-[#B87986]/40 inline-block" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-[#2E2225] leading-[1.08] text-balance mb-6">
            Saúde mental faz parte da sua vida.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#524146] font-normal leading-relaxed text-balance">
            Mudanças no humor, no sono, na energia ou na forma de lidar com o dia a dia merecem atenção. Cada pessoa tem uma história, e compreender o que está acontecendo é o primeiro passo para encontrar um cuidado adequado.
          </p>
        </div>

        {/* 6 Cards Grid (Exact requested card layout with icon badge, tag, description, bullets & action) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white/95 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#DFC8C2]/60 hover:border-[#B87986]/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top bar with Icon Pill and Tag */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#DFC8C2]/35 border border-[#DFC8C2]/60 flex items-center justify-center text-[#8C4E5B] group-hover:scale-105 group-hover:bg-[#B87986] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <Icon className="w-5 h-5 transition-colors" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[#8C4E5B] bg-[#DFC8C2]/25 border border-[#DFC8C2]/50 px-2.5 py-1 rounded-full">
                      {card.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-[25px] font-normal text-[#2E2225] mb-2.5 tracking-tight group-hover:text-[#8C4E5B] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#524146] leading-relaxed mb-5 min-h-[44px]">
                    {card.description}
                  </p>

                  {/* 3 Checkmark Bullet Points */}
                  <div className="border-t border-[#DFC8C2]/35 pt-4 mb-6 space-y-2.5">
                    {card.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#67434B]">
                        <Check className="w-4 h-4 text-[#B87986] shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FAF7F4] group-hover:bg-[#B87986] text-[#67434B] group-hover:text-white border border-[#E8DFD9] group-hover:border-[#B87986] text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Saber mais</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Highlight Block in light pink with the requested plant element in the corner */}
        <div className="mt-12 sm:mt-16 relative rounded-[28px] sm:rounded-[36px] bg-[#DFC8C2]/35 border border-[#DFC8C2]/80 p-8 sm:p-12 lg:p-14 shadow-xs overflow-hidden text-left">
          {/* Plant Image placed right in the corner of the card/page as requested */}
          <div className="absolute right-0 top-0 sm:-top-2 bottom-0 w-32 sm:w-44 lg:w-56 pointer-events-none select-none flex items-start justify-end overflow-hidden">
            <img
              src={plantaImg}
              alt="Elemento botânico decorativo"
              className="h-full max-h-[380px] w-auto object-contain object-top-right opacity-90 transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== window.location.origin + '/planta.png') {
                  target.src = '/planta.png';
                }
              }}
            />
          </div>

          <div className="relative z-10 max-w-2xl pr-12 sm:pr-24">
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8C4E5B] block mb-3.5">
              ACOLHIMENTO E ESCUTA
            </span>

            {/* Primary Highlight Quote */}
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#2E2225] leading-[1.2] mb-5 tracking-tight">
              “Você não precisa entender tudo sozinho para procurar ajuda.”
            </h3>

            {/* Reassurance explanation */}
            <p className="font-sans text-sm sm:text-base text-[#524146] font-normal leading-relaxed mb-8 max-w-xl">
              A avaliação psiquiátrica considera a história, o contexto e as necessidades de cada pessoa, construindo um plano de cuidado singular e respeitoso.
            </p>

            {/* CTA Button */}
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#B87986] hover:bg-[#A36773] text-white px-8 py-3.5 rounded-full text-sm sm:text-base font-medium shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer group"
            >
              <Calendar className="w-4 h-4 text-white/90" />
              <span>Agendar uma consulta</span>
              <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
