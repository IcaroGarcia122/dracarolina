import React, { useState } from 'react';
import { X, Check, Link as LinkIcon, RefreshCw, ExternalLink } from 'lucide-react';
import { BookingConfig, DEFAULT_BOOKING_CONFIG } from '../types';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BookingConfig;
  onSaveConfig: (newConfig: BookingConfig) => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
}) => {
  const [url, setUrl] = useState(config.url);
  const [whatsappNumber, setWhatsappNumber] = useState(config.whatsappNumber);
  const [crmInfo, setCrmInfo] = useState(config.crmInfo);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig({
      ...config,
      url: url.trim() || DEFAULT_BOOKING_CONFIG.url,
      whatsappNumber: whatsappNumber.trim() || DEFAULT_BOOKING_CONFIG.whatsappNumber,
      crmInfo: crmInfo.trim() || DEFAULT_BOOKING_CONFIG.crmInfo,
    });
    setCopiedSuccess(true);
    setTimeout(() => {
      setCopiedSuccess(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    setUrl(DEFAULT_BOOKING_CONFIG.url);
    setWhatsappNumber(DEFAULT_BOOKING_CONFIG.whatsappNumber);
    setCrmInfo(DEFAULT_BOOKING_CONFIG.crmInfo);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2E2225]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF7F4] rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E8DFD9] relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7D6B70] hover:text-[#2E2225] hover:bg-[#DFC8C2]/20 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-left mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-sans text-[11px] font-semibold tracking-wider uppercase text-[#B87986]">
              Painel de Configuração
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2E2225] tracking-tight">
            Link de Agendamento
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#7D6B70] mt-1.5 leading-relaxed">
            Configure o endereço exato para onde todos os botões "Agendar consulta" irão direcionar seus pacientes (ex: link direto do seu WhatsApp comercial, Doctoralia ou agenda online).
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block font-sans text-xs font-semibold text-[#423337] mb-1.5">
              URL do Botão de Agendamento
            </label>
            <div className="relative">
              <input
                type="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://wa.me/55..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E8DFD9] bg-white text-sm text-[#2E2225] focus:outline-none focus:border-[#B87986] focus:ring-1 focus:ring-[#B87986]"
              />
              <LinkIcon className="w-4 h-4 text-[#7D6B70] absolute left-3 top-3 pointer-events-none" />
            </div>
            <p className="text-[11px] text-[#7D6B70] mt-1">
              Pode ser um link curto de WhatsApp, Doctoralia, Calendly ou sistema próprio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-sans text-xs font-medium text-[#423337] mb-1.5">
                Número do WhatsApp
              </label>
              <input
                type="text"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="(11) 99999-9999"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD9] bg-white text-sm text-[#2E2225] focus:outline-none focus:border-[#B87986]"
              />
            </div>

            <div>
              <label className="block font-sans text-xs font-medium text-[#423337] mb-1.5">
                CRM / RQE (Rodapé)
              </label>
              <input
                type="text"
                value={crmInfo}
                onChange={(e) => setCrmInfo(e.target.value)}
                placeholder="CRM/SP 000000 • RQE 00000"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD9] bg-white text-sm text-[#2E2225] focus:outline-none focus:border-[#B87986]"
              />
            </div>
          </div>

          {/* Test Link Button */}
          <div className="pt-1 flex items-center justify-between">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#B87986] hover:text-[#A36773] hover:underline"
            >
              <span>Testar link atual</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-xs text-[#7D6B70] hover:text-[#2E2225]"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Restaurar padrão</span>
            </button>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-[#E8DFD9] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-[#7D6B70] hover:text-[#2E2225] transition-colors"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#B87986] hover:bg-[#A36773] text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm"
            >
              {copiedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Salvo com sucesso!</span>
                </>
              ) : (
                <span>Salvar configurações</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
