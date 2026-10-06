import React from 'react';
import { Video, ShieldCheck, Globe, Languages } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Primeiro contato',
      description:
        'Você solicita o agendamento da sua consulta médica online pelo WhatsApp (+55 61 99953-3860), informando o período preferido e o idioma desejado (português ou inglês).',
      tag: 'ETAPA 01',
    },
    {
      num: '02',
      title: 'Consulta médica online',
      description:
        'Um encontro por telemedicina com duração de 30 a 60 minutos, para compreender a sua história, seus sintomas e definir a conduta médica individualizada.',
      tag: 'ETAPA 02',
    },
    {
      num: '03',
      title: 'Acompanhamento longitudinal',
      description:
        'Reavaliação médica programada em cerca de 30 dias e acompanhamento periódico, com suporte próximo e prescrições médicas conforme as diretrizes.',
      tag: 'ETAPA 03',
    },
  ];

  return (
    <section id="atendimento" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#FAF7F4]">
      {/* Delicate glowing ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[460px] h-[460px] bg-[#DFC8C2]/20 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[380px] h-[380px] bg-[#B87986]/12 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="flex items-center gap-3.5 mb-5">
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B87986]">
              COMO FUNCIONA
            </span>
            <span className="w-12 sm:w-16 h-px bg-[#B87986]/40 inline-block" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal tracking-tight text-[#2E2225] leading-[1.12] mb-5 text-balance">
            Um cuidado integral para cada fase da sua vida.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#524146] font-normal leading-relaxed text-balance">
            O tratamento é individualizado para adultos, considerando a história, necessidades e rotina de cada paciente, em um ambiente seguro de escuta, respeito e acolhimento.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2.5 text-xs sm:text-[13px] text-[#67434B]">
            <span className="inline-flex items-center gap-1.5 bg-white/95 border border-[#DFC8C2] px-3.5 py-1.5 rounded-full font-medium shadow-2xs">
              <Video className="w-3.5 h-3.5 text-[#B87986]" />
              Online para adultos • Particular
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/95 border border-[#DFC8C2] px-3.5 py-1.5 rounded-full font-medium shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-[#B87986]" />
              Brasil e exterior
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/95 border border-[#DFC8C2] px-3.5 py-1.5 rounded-full font-medium shadow-2xs">
              <Languages className="w-3.5 h-3.5 text-[#B87986]" />
              Português & English
            </span>
          </div>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#DFC8C2]/70 hover:border-[#B87986]/60 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Tag and Large Number */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-[#8C4E5B] bg-[#DFC8C2]/30 border border-[#DFC8C2]/60 px-3 py-1 rounded-full">
                    {step.tag}
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl text-[#DFC8C2] group-hover:text-[#B87986] font-light transition-colors duration-300 select-none">
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-[25px] font-normal text-[#2E2225] mb-3 tracking-tight group-hover:text-[#8C4E5B] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm sm:text-[15px] text-[#524146] font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-8 pt-5 border-t border-[#DFC8C2]/40 flex items-center justify-between">
                <span className="text-xs text-[#7D6B70] font-sans">
                  Etapa individualizada
                </span>
                <span className="w-2 h-2 rounded-full bg-[#B87986]/60 group-hover:bg-[#B87986] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
