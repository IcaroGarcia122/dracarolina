import React from 'react';
import { X, Heart, Shield, Sparkles, ArrowRight, Video, Globe, Languages, Instagram, MessageCircle } from 'lucide-react';
import insetImg from '../assets/images/493cfc2f-aaff-4dd0-87a0-d8cba751f397.png';
import { BrandLogo } from './BrandLogo';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2E2225]/45 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF7F4] rounded-[28px] max-w-2xl w-full p-6 sm:p-9 shadow-2xl border border-[#E8DFD9] relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7D6B70] hover:text-[#2E2225] hover:bg-[#DFC8C2]/20 transition-colors cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-7 text-center sm:text-left">
          <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-white">
            <img
              src={insetImg}
              alt="Dra. Carolina Zampronha"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="mb-2 flex justify-center sm:justify-start">
              <BrandLogo variant="modal" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2E2225] tracking-tight">
              Dra. Carolina Zampronha
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#8C4E5B] mt-0.5 font-medium">
              Médica | Saúde Mental • RQE 25.334 | CRM-DF 29.767
            </p>
            <div className="mt-2 flex items-center justify-center sm:justify-start gap-3 text-xs text-[#524146]">
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
        </div>

        {/* Philosophy & Approach */}
        <div className="space-y-5 font-sans text-[#524146] text-sm sm:text-base leading-relaxed text-left">
          <div className="p-4 rounded-2xl bg-[#DFC8C2]/25 border border-[#DFC8C2]/50">
            <p className="font-serif text-base sm:text-lg text-[#67434B] italic">
              “Cuidar de pessoas é um privilégio. Acredito que todo sintoma conta uma história — e nenhuma intervenção é completa se não começarmos pela escuta atenta de quem você é.”
            </p>
          </div>

          <h4 className="font-serif text-xl text-[#2E2225] pt-1">
            Pilares da Prática Clínica
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left">
            <div className="p-4 rounded-xl bg-white border border-[#E8DFD9]">
              <div className="w-8 h-8 rounded-full bg-[#B87986]/10 flex items-center justify-center text-[#B87986] mb-2.5">
                <Heart className="w-4 h-4" />
              </div>
              <h5 className="font-sans text-sm font-semibold text-[#2E2225] mb-1">
                Acolhimento Real
              </h5>
              <p className="text-xs text-[#7D6B70] leading-normal">
                Consultas sem pressa, em um ambiente seguro, ético e livre de julgamentos.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E8DFD9]">
              <div className="w-8 h-8 rounded-full bg-[#B87986]/10 flex items-center justify-center text-[#B87986] mb-2.5">
                <Shield className="w-4 h-4" />
              </div>
              <h5 className="font-sans text-sm font-semibold text-[#2E2225] mb-1">
                Rigor Técnico
              </h5>
              <p className="text-xs text-[#7D6B70] leading-normal">
                Decisões clínicas embasadas nas melhores evidências científicas disponíveis.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E8DFD9]">
              <div className="w-8 h-8 rounded-full bg-[#B87986]/10 flex items-center justify-center text-[#B87986] mb-2.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <h5 className="font-sans text-sm font-semibold text-[#2E2225] mb-1">
                Integralidade
              </h5>
              <p className="text-xs text-[#7D6B70] leading-normal">
                Cuidado que compreende saúde física, sono, rotina e relações humanas.
              </p>
            </div>
          </div>

          <p className="text-sm">
            Na Medicina de Família e Comunidade, o cuidado é centrado na pessoa. Compreendemos que o sofrimento emocional e a saúde mental não se resumem a rótulos — o equilíbrio resulta da harmonia entre corpo, mente, história de vida e relações.
          </p>

          {/* Official credentials box */}
          <div className="p-4 rounded-xl bg-[#FAF7F4] border border-[#DFC8C2] text-xs sm:text-sm text-[#524146] space-y-2">
            <div>
              <span className="font-semibold text-[#8C4E5B] block text-xs tracking-wider uppercase mb-1">
                Identificação Profissional
              </span>
              <p className="font-medium text-[#2E2225]">
                Dra. Carolina Zampronha • Médica | Saúde Mental
              </p>
              <p className="text-xs text-[#524146]">
                CRM-DF 29.767 • Especialista em Medicina de Família e Comunidade | RQE 25.334
              </p>
              <p className="text-[11px] text-[#7D6B70] pt-0.5">
                Pós-graduada em Psiquiatria e Psicofarmacologia — <span className="uppercase text-[10px] tracking-wider text-[#7D6B70]/90">não especialista</span>
              </p>
            </div>

            <div className="pt-2 border-t border-[#DFC8C2]/60 space-y-1 text-xs text-[#67434B]">
              <p className="flex items-center gap-1.5 font-medium">
                <Video className="w-3.5 h-3.5 text-[#B87986]" />
                <span>Atendimento online exclusivamente particular (para adultos)</span>
              </p>
              <p className="flex items-center gap-1.5 text-xs text-[#524146]">
                <Globe className="w-3.5 h-3.5 text-[#B87986]" />
                <span>Telemedicina para todo o Brasil e brasileiros no exterior</span>
              </p>
              <p className="flex items-center gap-1.5 text-xs text-[#524146]">
                <Languages className="w-3.5 h-3.5 text-[#B87986]" />
                <span>Consultas em português e inglês (including foreign patients)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-7 pt-4 border-t border-[#E8DFD9] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#7D6B70]">
            WhatsApp profissional: <strong>+55 61 99953-3860</strong>
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B87986] hover:bg-[#A36773] text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm cursor-pointer"
          >
            <span>Agendar consulta online</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
