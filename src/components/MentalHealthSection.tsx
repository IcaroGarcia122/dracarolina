import React from 'react';
import { 
  HeartPulse, 
  Activity, 
  Brain, 
  RotateCcw,
  ShieldAlert,
  Eye,
  UtensilsCrossed,
  Moon, 
  Sparkles,
  ArrowRight, 
  Calendar
} from 'lucide-react';
import plantaImg from '../assets/images/planta.png';

interface MentalHealthSectionProps {
  onOpenBooking: () => void;
}

export const MentalHealthSection: React.FC<MentalHealthSectionProps> = ({ onOpenBooking }) => {
  const conditions = [
    {
      num: '01',
      icon: HeartPulse,
      tag: 'ACOLHIMENTO',
      title: 'Ansiedade e depressão',
      description:
        'Preocupação excessiva, angústia, crises de pânico, desânimo, tristeza duradoura, perda de interesse nas atividades diárias e cansaço constante.',
    },
    {
      num: '02',
      icon: Activity,
      tag: 'EQUILÍBRIO',
      title: 'Transtorno afetivo bipolar',
      description:
        'Oscilações expressivas de humor, energia e iniciativa, alternando episódios de exaltação ou agitação com períodos de depressão e abatimento.',
    },
    {
      num: '03',
      icon: Brain,
      tag: 'FOCO & ROTINA',
      title: 'TDAH',
      description:
        'Desafios contínuos com atenção, foco, desorganização, impulsividade e procrastinação que impactam a rotina profissional, acadêmica ou pessoal.',
    },
    {
      num: '04',
      icon: RotateCcw,
      tag: 'MANEJO',
      title: 'Transtorno obsessivo-compulsivo (TOC)',
      description:
        'Pensamentos intrusivos e repetitivos associados a rituais ou comportamentos executados na tentativa de aliviar o desconforto ou a angústia.',
    },
    {
      num: '05',
      icon: ShieldAlert,
      tag: 'SEGURANÇA',
      title: 'Transtorno de estresse pós-traumático (TEPT)',
      description:
        'Sofrimento psíquico intenso, memórias involuntárias, pesadelos e hipervigilância desencadeados após eventos traumáticos significativos.',
    },
    {
      num: '06',
      icon: Eye,
      tag: 'SUPORTE CLÍNICO',
      title: 'Esquizofrenia e outros transtornos psicóticos',
      description:
        'Alterações na percepção da realidade, pensamento desorganizado, ideias delirantes ou isolamento social que necessitam de estabilização contínua.',
    },
    {
      num: '07',
      icon: UtensilsCrossed,
      tag: 'RELAÇÃO & CORPO',
      title: 'Transtornos alimentares',
      description:
        'Relação conturbada com a comida, distorção da imagem corporal, compulsões ou restrições severas com impacto emocional e clínico.',
    },
    {
      num: '08',
      icon: Moon,
      tag: 'DESCANSO',
      title: 'Alterações do sono',
      description:
        'Insônia inicial, despertares noturnos frequentes, sono não reparador ou sonolência excessiva diurna prejudicando o rendimento.',
    },
    {
      num: '09',
      icon: Sparkles,
      tag: 'CUIDADO INTEGRAL',
      title: 'Outras demandas em saúde mental',
      description:
        'Dificuldades adaptativas, luto, fases de transição, estresse crônico, esgotamento e sofrimento emocional sem diagnóstico fechado prévio.',
    },
  ];

  return (
    <section id="saude-mental" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-[#FAF7F4] border-t border-[#E8DFD9]/70">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[480px] h-[480px] bg-[#DFC8C2]/25 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-0 w-[420px] h-[420px] bg-[#B87986]/15 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute top-2/3 right-1/4 w-[360px] h-[360px] bg-[#DFC8C2]/20 rounded-full blur-[110px] pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16 text-left">
          <div className="flex items-center gap-3.5 mb-5">
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B87986]">
              ÁREAS E CONDIÇÕES ATENDIDAS
            </span>
            <span className="w-12 sm:w-16 h-px bg-[#B87986]/40 inline-block" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-[#2E2225] leading-[1.08] text-balance mb-6">
            Saúde mental faz parte da sua vida.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#524146] font-normal leading-relaxed text-balance">
            Mudanças no humor, no sono, na energia ou na forma de lidar com o dia a dia merecem atenção. Ofereço acompanhamento médico em saúde mental para <strong>adultos</strong> em todo o Brasil e para pacientes no exterior, com consultas em português e inglês.
          </p>
        </div>

        {/* 9 Clean Cards Grid (3x3 grid, Ansiedade e Depressão unificados, TEA removido) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {conditions.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white/95 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#DFC8C2]/60 hover:border-[#B87986]/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top bar with Icon Pill, Tag and Number */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#DFC8C2]/35 border border-[#DFC8C2]/60 flex items-center justify-center text-[#8C4E5B] group-hover:scale-105 group-hover:bg-[#B87986] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <Icon className="w-5 h-5 transition-colors" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-[#8C4E5B] bg-[#DFC8C2]/25 border border-[#DFC8C2]/50 px-2.5 py-1 rounded-full">
                        {card.tag}
                      </span>
                      <span className="font-serif text-xs text-[#DFC8C2] font-medium">
                        {card.num}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-[23px] font-normal text-[#2E2225] mb-2.5 tracking-tight group-hover:text-[#8C4E5B] transition-colors leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-[14.5px] text-[#524146] leading-relaxed mb-5">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Action Button */}
                <button
                  onClick={onOpenBooking}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl bg-[#FAF7F4] group-hover:bg-[#B87986] text-[#67434B] group-hover:text-white border border-[#E8DFD9] group-hover:border-[#B87986] text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Agendar avaliação</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Highlight Block in light pink with the plant element in the corner */}
        <div className="mt-12 sm:mt-16 relative rounded-[28px] sm:rounded-[36px] bg-[#DFC8C2]/35 border border-[#DFC8C2]/80 p-8 sm:p-12 lg:p-14 shadow-xs overflow-hidden text-left">
          {/* Plant Image placed in the corner */}
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

            {/* Reassurance explanation with approved terminology */}
            <p className="font-sans text-sm sm:text-base text-[#524146] font-normal leading-relaxed mb-6 max-w-xl">
              A avaliação médica considera a história, o contexto e as necessidades de cada pessoa, construindo um plano de cuidado singular e respeitoso.
            </p>

            {/* CTA Button + Modality note */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#B87986] hover:bg-[#A36773] text-white px-8 py-3.5 rounded-full text-sm sm:text-base font-medium shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-white/90" />
                <span>Agendar uma consulta</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <span className="text-xs text-[#7D6B70]">
                Consulta online para adultos • Atendimento particular
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
