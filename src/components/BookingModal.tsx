import React, { useState } from 'react';
import { X, Calendar, MessageCircle, MapPin, Video, ArrowRight, ExternalLink } from 'lucide-react';
import { BookingConfig } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BookingConfig;
  onOpenConfig: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  config,
  onOpenConfig,
}) => {
  const [modality, setModality] = useState<'online' | 'presencial'>('online');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientPeriod, setPatientPeriod] = useState('Indiferente');

  if (!isOpen) return null;

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();

    // If the configured URL is a direct WhatsApp or custom URL, we build a friendly pre-filled text
    let targetUrl = config.url;

    if (patientName.trim()) {
      const message = `Olá, Dra. Carolina e equipe! Me chamo ${patientName.trim()}${
        patientPhone ? ` (${patientPhone.trim()})` : ''
      }. Gostaria de solicitar agendamento para consulta ${
        modality === 'online' ? 'Online (Telemedicina)' : 'Presencial'
      }${patientPeriod !== 'Indiferente' ? ` no período da ${patientPeriod.toLowerCase()}` : ''}.`;

      if (targetUrl.includes('wa.me')) {
        const baseUrl = targetUrl.split('?')[0];
        targetUrl = `${baseUrl}?text=${encodeURIComponent(message)}`;
      }
    }

    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2E2225]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF7F4] rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E8DFD9] relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7D6B70] hover:text-[#2E2225] hover:bg-[#DFC8C2]/20 transition-colors"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-left mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-sans text-[11px] font-semibold tracking-wider uppercase text-[#B87986]">
              Agendamento de Consulta
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2E2225] tracking-tight">
            Como prefere seu atendimento?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#7D6B70] mt-1.5 leading-relaxed">
            Selecione a modalidade ideal para o seu momento e fale diretamente conosco para verificar os próximos horários.
          </p>
        </div>

        {/* Modality Selector */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={() => setModality('online')}
            className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 ${
              modality === 'online'
                ? 'border-[#B87986] bg-[#DFC8C2]/25 shadow-xs'
                : 'border-[#E8DFD9] bg-white hover:border-[#DFC8C2]'
            }`}
          >
            <div className="flex items-center justify-between">
              <Video
                className={`w-5 h-5 ${
                  modality === 'online' ? 'text-[#B87986]' : 'text-[#7D6B70]'
                }`}
              />
              {modality === 'online' && (
                <span className="w-2 h-2 rounded-full bg-[#B87986]" />
              )}
            </div>
            <div>
              <p className="font-sans text-sm font-medium text-[#2E2225]">
                Online (Telemedicina)
              </p>
              <p className="font-sans text-xs text-[#7D6B70] mt-0.5">
                Para todo o Brasil e exterior
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setModality('presencial')}
            className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 ${
              modality === 'presencial'
                ? 'border-[#B87986] bg-[#DFC8C2]/25 shadow-xs'
                : 'border-[#E8DFD9] bg-white hover:border-[#DFC8C2]'
            }`}
          >
            <div className="flex items-center justify-between">
              <MapPin
                className={`w-5 h-5 ${
                  modality === 'presencial' ? 'text-[#B87986]' : 'text-[#7D6B70]'
                }`}
              />
              {modality === 'presencial' && (
                <span className="w-2 h-2 rounded-full bg-[#B87986]" />
              )}
            </div>
            <div>
              <p className="font-sans text-sm font-medium text-[#2E2225]">
                Presencial
              </p>
              <p className="font-sans text-xs text-[#7D6B70] mt-0.5">
                Consultório privativo
              </p>
            </div>
          </button>
        </div>

        {/* Quick form for personalized message or direct click */}
        <form onSubmit={handleConfirmBooking} className="space-y-4">
          <div>
            <label className="block font-sans text-xs font-medium text-[#423337] mb-1.5">
              Seu nome completo (opcional)
            </label>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Ex: Mariana Silva"
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
                placeholder="(DDD) 99999-9999"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD9] bg-white text-sm text-[#2E2225] placeholder:text-[#7D6B70]/60 focus:outline-none focus:border-[#B87986] focus:ring-1 focus:ring-[#B87986]"
              />
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
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 bg-[#B87986] hover:bg-[#A36773] text-white py-3.5 px-6 rounded-full text-sm font-medium shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Continuar para agendamento</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Configuration link note */}
        <div className="mt-6 pt-4 border-t border-[#E8DFD9]/60 flex items-center justify-between text-xs text-[#7D6B70]">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#B87986]" />
            Resposta ágil em horário comercial
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConfig();
            }}
            className="text-[#B87986] hover:underline inline-flex items-center gap-1"
          >
            <span>Alterar URL</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
