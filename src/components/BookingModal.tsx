import React, { useState } from 'react';
import { X, MessageCircle, Video, ArrowRight, ShieldCheck, Clock, CheckCircle2, Globe, Languages } from 'lucide-react';
import { BookingConfig } from '../types';
import { BrandLogo } from './BrandLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BookingConfig;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  config,
}) => {
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientPeriod, setPatientPeriod] = useState('Indiferente');
  const [patientLanguage, setPatientLanguage] = useState<'pt' | 'en'>('pt');

  if (!isOpen) return null;

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();

    let message = '';
    const langNote = patientLanguage === 'en' ? ' [Consulta em inglês / English consultation]' : '';

    if (patientName.trim()) {
      message = `Olá, Dra. Carolina e equipe! Me chamo ${patientName.trim()}${
        patientPhone.trim() ? ` (${patientPhone.trim()})` : ''
      }. Gostaria de solicitar agendamento para consulta médica online em saúde mental (particular, para adulto)${
        patientPeriod !== 'Indiferente' ? ` no período da ${patientPeriod.toLowerCase()}` : ''
      }${langNote}.`;
    } else {
      message = `Olá, Dra. Carolina! Gostaria de informações sobre agendamento de consulta médica online em saúde mental (particular, para adulto)${
        patientPeriod !== 'Indiferente' ? ` no período da ${patientPeriod.toLowerCase()}` : ''
      }${langNote}.`;
    }

    const whatsappUrl = `https://wa.me/${config.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2E2225]/45 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF7F4] rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E8DFD9] relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7D6B70] hover:text-[#2E2225] hover:bg-[#DFC8C2]/20 transition-colors cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-left mb-6">
          <div className="mb-3">
            <BrandLogo variant="modal" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-sans text-[11px] font-semibold tracking-wider uppercase text-[#B87986]">
              Agendamento de Consulta
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2E2225] tracking-tight">
            Solicitar atendimento
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#7D6B70] mt-1.5 leading-relaxed">
            Preencha seus dados para direcionarmos seu contato ao WhatsApp profissional da Dra. Carolina ({config.whatsappNumber}).
          </p>
        </div>

        {/* Prominent Modality Banner */}
        <div className="mb-6 p-4 rounded-2xl border border-[#B87986]/40 bg-[#DFC8C2]/25 text-left space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#2E2225]">
              <Video className="w-4 h-4 text-[#B87986]" />
              <span>Atendimento Online • Adultos • Particular</span>
            </div>
          </div>
          <div className="space-y-1 text-xs text-[#524146] pl-6">
            <p className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#B87986]" />
              <span>Para pacientes em todo o Brasil e brasileiros no exterior</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Languages className="w-3.5 h-3.5 text-[#B87986]" />
              <span>Consultas em português ou inglês (including foreign patients)</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B87986]" />
              <span>Duração de aproximadamente 30 a 60 minutos</span>
            </p>
            <p className="text-[11px] text-[#7D6B70] pt-1 italic">
              * Atendimento exclusivamente particular (não realizamos convênios ou planos de saúde).
            </p>
          </div>
        </div>

        {/* Quick form for personalized message */}
        <form onSubmit={handleConfirmBooking} className="space-y-4 text-left">
          <div>
            <label className="block font-sans text-xs font-medium text-[#423337] mb-1.5">
              Seu nome completo (opcional)
            </label>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Ex.: Maria Silva"
              className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD9] bg-white text-sm text-[#2E2225] placeholder:text-[#7D6B70]/60 focus:outline-none focus:border-[#B87986] focus:ring-1 focus:ring-[#B87986]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-sans text-xs font-medium text-[#423337] mb-1.5">
                WhatsApp de contato
              </label>
              <input
                type="tel"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                placeholder="+55 (61) 99999-9999"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD9] bg-white text-sm text-[#2E2225] placeholder:text-[#7D6B70]/60 focus:outline-none focus:border-[#B87986] focus:ring-1 focus:ring-[#B87986]"
              />
            </div>

            <div>
              <label className="block font-sans text-xs font-medium text-[#423337] mb-1.5">
                Idioma da consulta
              </label>
              <select
                value={patientLanguage}
                onChange={(e) => setPatientLanguage(e.target.value as 'pt' | 'en')}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD9] bg-white text-sm text-[#2E2225] focus:outline-none focus:border-[#B87986] focus:ring-1 focus:ring-[#B87986]"
              >
                <option value="pt">Português</option>
                <option value="en">English (Inglês)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-sans text-xs font-medium text-[#423337] mb-1.5">
              Preferência de período
            </label>
            <select
              value={patientPeriod}
              onChange={(e) => setPatientPeriod(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD9] bg-white text-sm text-[#2E2225] focus:outline-none focus:border-[#B87986] focus:ring-1 focus:ring-[#B87986]"
            >
              <option value="Indiferente">Qualquer horário</option>
              <option value="Manhã">Manhã</option>
              <option value="Tarde">Tarde</option>
              <option value="Noite">Noite</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 bg-[#B87986] hover:bg-[#A36773] text-white py-3.5 px-6 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-4.5 h-4.5" />
              <span>Continuar no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Footer info note */}
        <div className="mt-6 pt-4 border-t border-[#E8DFD9]/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#7D6B70]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B87986]" />
            Atendimento médico ético e confidencial
          </span>
          <span className="text-[11px] text-[#7D6B70]">
            WhatsApp: <strong>{config.whatsappNumber}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
