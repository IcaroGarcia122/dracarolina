import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PlumHighlights } from './components/PlumHighlights';
import { MentalHealthSection } from './components/MentalHealthSection';
import { HowItWorks } from './components/HowItWorks';
import { AboutDoctor } from './components/AboutDoctor';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { AboutModal } from './components/AboutModal';
import { BookingModal } from './components/BookingModal';
import { BookingConfig, DEFAULT_BOOKING_CONFIG } from './types';

export default function App() {
  const [config] = useState<BookingConfig>(DEFAULT_BOOKING_CONFIG);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Opens the friendly mini form modal before redirecting to WhatsApp
  const handleOpenBooking = () => {
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
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onExploreCare={handleExploreCare}
        />

        {/* 3. Faixa Ameixa (3 typographic columns, zero cards) */}
        <PlumHighlights />

        {/* 4. Saúde Mental e Condições */}
        <MentalHealthSection onOpenBooking={handleOpenBooking} />

        {/* 5. Sobre Carolina */}
        <AboutDoctor
          onOpenAboutModal={() => setIsAboutOpen(true)}
        />

        {/* 6. Como Funciona */}
        <HowItWorks />

        {/* 7. Dúvidas Frequentes */}
        <FaqSection />

        {/* 8. Chamada Final */}
        <FinalCta
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* 9. Rodapé (Footer) */}
      <Footer
        config={config}
      />

      {/* About Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenBooking={() => {
          setIsAboutOpen(false);
          handleOpenBooking();
        }}
      />

      {/* Booking Mini Form Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        config={config}
      />
    </div>
  );
}
