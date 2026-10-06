import React from 'react';
import { ArrowRight, Globe, Languages, Instagram, MessageCircle } from 'lucide-react';
import aboutBgImage from '../assets/images/about-bg.png';

interface AboutDoctorProps {
  onOpenAboutModal: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenAboutModal }) => {
  return (
    <section
      id="sobre"
      className="relative isolate overflow-hidden min-h-[640px] sm:min-h-[700px] lg:min-h-[800px] flex flex-col justify-end lg:justify-center pt-24 sm:pt-32 lg:pt-0 pb-8 sm:pb-12 lg:pb-0 lg:py-24 bg-[#FAF7F4]"
    >
      {/* Background Image: Doctor clearly framed on the left */}
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

        {/* Mobile: soft bottom vignette */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#FAF7F4] via-[#FAF7F4]/40 to-transparent pointer-events-none" />

        {/* Desktop: fade behind the right card */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-3/5 bg-gradient-to-l from-[#FAF7F4]/95 via-[#FAF7F4]/60 to-transparent pointer-events-none" />
      </div>

      {/* Atmospheric glowing orbs */}
      <div className="absolute top-1/4 left-8 w-80 h-80 bg-[#DFC8C2]/20 rounded-full blur-[100px] pointer-events-none z-1" />
      <div className="absolute bottom-6 right-1/4 w-72 h-72 bg-[#B87986]/10 rounded-full blur-[90px] pointer-events-none z-1" />

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 w-full relative z-10">
        <div className="max-w-xl lg:max-w-2xl mx-auto lg:ml-auto lg:mr-0 text-left">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl lg:rounded-3xl p-5 sm:p-7 lg:p-9 xl:p-10 border border-[#DFC8C2]/80 shadow-md relative overflow-hidden">
            {/* Rose accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DFC8C2] via-[#B87986] to-[#67434B]" />

            {/* Small Kicker */}
            <div className="flex items-center gap-2.5 lg:gap-3 mb-2.5 lg:mb-3">
              <span className="font-sans text-[10px] lg:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#B87986]">
                SOBRE MIM
              </span>
              <span className="w-8 lg:w-14 h-px bg-[#B87986]/40 inline-block" />
            </div>

            {/* Editorial Title */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-normal tracking-tight text-[#221619] leading-[1.15] mb-4 text-balance">
              A médica por trás da escuta.
            </h2>

            {/* Complete, rich body text */}
            <div className="space-y-3 font-sans text-xs sm:text-[13.5px] lg:text-[14.5px] text-[#524146] font-normal leading-relaxed">
              <p>
                Sou médica, especialista em Medicina de Família e Comunidade (RQE 25.334), com pós-graduação em Psiquiatria e Psicofarmacologia{' '}
                <span className="text-[11px] text-[#7D6B70] tracking-wide uppercase font-medium">
                  — NÃO ESPECIALISTA
                </span>.
              </p>
              <p>
                Minha formação em Medicina de Família e Comunidade contribui para uma abordagem integral da saúde, considerando não apenas os sintomas, mas também a história de vida, a saúde física, o contexto familiar e social, o sono, a rotina e outros fatores que podem repercutir na saúde mental.
              </p>
              <p>
                Mantenho uma rotina de atualização científica contínua, por meio de estudo permanente e participação regular em congressos, cursos e eventos científicos de referência em psiquiatria, buscando incorporar à prática clínica conhecimentos atuais e condutas fundamentadas nas melhores evidências disponíveis.
              </p>
              <p>
                Meu atendimento é pautado em escuta individualizada, avaliação médica cuidadosa, acompanhamento longitudinal e prática baseada em evidências científicas, respeitando as particularidades e necessidades de cada paciente.
              </p>
            </div>

            {/* Official Credentials Box with Instagram and WhatsApp */}
            <div className="mt-5 p-3.5 sm:p-4 rounded-xl bg-[#FAF7F4] border border-[#DFC8C2]/70 text-left space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DFC8C2]/50 pb-2">
                <div>
                  <span className="font-serif text-base sm:text-lg text-[#2E2225] block font-normal">
                    Dra. Carolina Zampronha
                  </span>
                  <span className="text-xs text-[#8C4E5B] font-medium">
                    Médica | Saúde Mental
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#524146]">
                  <a
                    href="https://instagram.com/dra.carolina.zampronha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#B87986] transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#B87986]" />
                    <span>@dra.carolina.zampronha</span>
                  </a>
                </div>
              </div>

              <div className="space-y-0.5 text-xs text-[#67434B]">
                <p className="font-medium">
                  CRM-DF 29.767 • RQE 25.334 (Medicina de Família e Comunidade)
                </p>
                <p className="text-[11px] text-[#7D6B70]">
                  Pós-graduada em Psiquiatria e Psicofarmacologia — <span className="uppercase text-[10px] tracking-wider text-[#7D6B70]/90">não especialista</span>
                </p>
              </div>

              {/* Geographic and Language scope */}
              <div className="pt-2 border-t border-[#DFC8C2]/40 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-[#524146]">
                <span className="flex items-center gap-1">
                  <Globe className="w-3 h-3 text-[#B87986]" />
                  Telemedicina para o Brasil e exterior
                </span>
                <span className="flex items-center gap-1">
                  <Languages className="w-3 h-3 text-[#B87986]" />
                  Consultas em português e inglês
                </span>
                <span className="text-[#8C4E5B] font-medium">
                  Atendimento para adultos • Particular
                </span>
              </div>
            </div>

            {/* Outlined Action Button + Modality note */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <button
                onClick={onOpenAboutModal}
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-[#67434B] hover:text-white bg-[#FAF7F4] hover:bg-[#67434B] border border-[#67434B]/40 hover:border-[#67434B] transition-all duration-200 cursor-pointer shadow-2xs"
              >
                <span>Conheça os pilares do cuidado</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="https://wa.me/5561999533860"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs text-[#67434B] hover:text-[#B87986] font-medium transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#B87986]" />
                <span>WhatsApp: +55 61 99953-3860</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
