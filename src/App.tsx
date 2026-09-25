import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PlumHighlights } from './components/PlumHighlights';
import { MentalHealthSection } from './components/MentalHealthSection';
import { HowItWorks } from './components/HowItWorks';
import { AboutDoctor } from './components/AboutDoctor';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AboutModal } from './components/AboutModal';
import { ConfigModal } from './components/ConfigModal';
import { BookingConfig, DEFAULT_BOOKING_CONFIG } from './types';

const STORAGE_KEY = 'carolina_zampronha_config_v1';

export default function App() {
  const [config, setConfig] = useState<BookingConfig>(DEFAULT_BOOKING_CONFIG);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  // Load config from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setConfig(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSaveConfig = (newConfig: BookingConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch {
      // ignore
    }
  };

  const handleOpenBooking = () => {
    // If the user wants direct URL redirect without intermediate modal,
    // we can either open the modal with options or go direct.
    // Opening the modal allows modality selection and direct forward to WhatsApp.
    setIsBookingOpen(true);
  };

  const handleExploreCare = () => {
    const el = document.getElementById('atendimento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F4] text-[#2E2225] flex flex-col font-sans selection:bg-[#DFC8C2] selection:text-[#67434B]">
      {/* 1. Header / Top Navigation */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      {/* Main Page Flow mirroring template */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onExploreCare={handleExploreCare}
        />

        {/* 3. Faixa Ameixa (3 typographic columns, zero cards) */}
        <PlumHighlights />

        {/* 4. Saúde Mental e Condições Psiquiátricas */}
        <MentalHealthSection onOpenBooking={handleOpenBooking} />

        {/* 5. Sobre Carolina (Foto expandida, acolhimento e biografia) */}
        <AboutDoctor
          onOpenAboutModal={() => setIsAboutOpen(true)}
        />

        {/* 6. Como Funciona (Etapas em cards: Primeiro contato, Consulta, Acompanhamento) */}
        <HowItWorks />

        {/* 6. Dúvidas Frequentes (Interactive accordion) */}
        <FaqSection />

        {/* 7. Chamada Final (Blush container, 'Vamos começar essa conversa?') */}
        <FinalCta
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* 8. Rodapé (Footer) */}
      <Footer
        config={config}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      {/* Modals & Dialogs */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        config={config}
        onOpenConfig={() => {
          setIsBookingOpen(false);
          setIsConfigOpen(true);
        }}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenBooking={() => {
          setIsAboutOpen(false);
          setIsBookingOpen(true);
        }}
      />

      <ConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
      />
    </div>
  );
}
