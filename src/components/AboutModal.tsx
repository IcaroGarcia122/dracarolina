import React from 'react';
import { X, Heart, Shield, Sparkles, ArrowRight } from 'lucide-react';
import insetImg from '../assets/images/493cfc2f-aaff-4dd0-87a0-d8cba751f397.png';
import logoImg from '../assets/images/logo.png';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2E2225]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF7F4] rounded-[28px] max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-[#E8DFD9] relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7D6B70] hover:text-[#2E2225] hover:bg-[#DFC8C2]/20 transition-colors"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">
          <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-white">
            <img
              src={insetImg}
              alt="Dra. Carolina Zampronha"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src={logoImg}
              alt="Dra. Carolina Zampronha"
              className="h-10 sm:h-12 w-auto object-contain mb-2 mx-auto sm:mx-0"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== window.location.origin + '/logo.png') {
                  target.src = '/logo.png';
                }
              }}
            />
            <span className="font-sans text-[11px] font-semibold tracking-widest uppercase text-[#B87986] block mb-1">
              SOBRE A MÉDICA
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2E2225] tracking-tight">
              Dra. Carolina Zampronha
            </h3>
            <p className="font-sans text-sm text-[#7D6B70] mt-1">
              Médica de Família (MFC) • Cuidado Integral e Saúde Mental
            </p>
          </div>
        </div>

        {/* Philosophy & Approach */}
        <div className="space-y-5 font-sans text-[#524146] text-sm sm:text-base leading-relaxed">
          <div className="p-4 rounded-2xl bg-[#DFC8C2]/20 border border-[#DFC8C2]/40">
            <p className="font-serif text-lg text-[#67434B] italic">
              “Cuidar de pessoas é um privilégio. Acredito que todo sintoma conta uma história — e nenhuma intervenção é completa se não começarmos pela escuta atenta de quem você é.”
            </p>
          </div>

          <h4 className="font-serif text-xl text-[#2E2225] pt-2">
            Pilares da Prática Clínica
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-xl bg-white border border-[#E8DFD9]">
              <div className="w-8 h-8 rounded-full bg-[#B87986]/10 flex items-center justify-center text-[#B87986] mb-3">
                <Heart className="w-4 h-4" />
              </div>
              <h5 className="font-sans text-sm font-semibold text-[#2E2225] mb-1">
                Acolhimento Real
              </h5>
              <p className="text-xs text-[#7D6B70] leading-normal">
                Consultas sem pressa, em um ambiente seguro e livre de julgamentos.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E8DFD9]">
              <div className="w-8 h-8 rounded-full bg-[#B87986]/10 flex items-center justify-center text-[#B87986] mb-3">
                <Shield className="w-4 h-4" />
              </div>
              <h5 className="font-sans text-sm font-semibold text-[#2E2225] mb-1">
                Rigor Técnico
              </h5>
              <p className="text-xs text-[#7D6B70] leading-normal">
                Decisões embasadas nas melhores evidências científicas com foco na segurança.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E8DFD9]">
              <div className="w-8 h-8 rounded-full bg-[#B87986]/10 flex items-center justify-center text-[#B87986] mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <h5 className="font-sans text-sm font-semibold text-[#2E2225] mb-1">
                Individualidade
              </h5>
              <p className="text-xs text-[#7D6B70] leading-normal">
                Cada tratamento é desenhado sob medida para sua rotina, objetivos e valores.
              </p>
            </div>
          </div>

          <p>
            Na Medicina de Família e Comunidade, o cuidado é centrado na pessoa. Compreendemos que o sofrimento emocional e a saúde mental não se resumem a rótulos — o equilíbrio resulta da harmonia entre corpo, mente, história de vida e relações.
          </p>

          {/* Official credentials box */}
          <div className="mt-4 p-4 rounded-xl bg-[#FAF7F4] border border-[#DFC8C2]/70 text-xs sm:text-sm text-[#524146] space-y-1">
            <span className="font-semibold text-[#8C4E5B] block text-xs tracking-wider uppercase">
              Registro Profissional
            </span>
            <p className="font-medium text-[#2E2225]">
              Médica de Família (MFC) | RQE 25334 | CRM 29767 DF
            </p>
            <p className="text-xs text-[#7D6B70]">
              Atendimento médico humanizado, com consultas presenciais em Brasília - DF e telemedicina para todo o Brasil.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-4 border-t border-[#E8DFD9] flex justify-end">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="inline-flex items-center gap-2 bg-[#B87986] hover:bg-[#A36773] text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm"
          >
            <span>Agendar primeira consulta</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
