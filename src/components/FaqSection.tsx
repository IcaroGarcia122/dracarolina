import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  note?: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Como é a primeira consulta?',
      answer:
        'A primeira consulta é um espaço de escuta cuidadosa, acolhedora e sem pressa. Conversamos detalhadamente sobre a sua história de vida, as queixas que motivaram a procura, sintomas atuais, rotina, qualidade de sono e histórico clínico. A partir desse panorama amplo e individualizado, construímos juntos o raciocínio diagnóstico e um plano terapêutico inicial com o qual você se sinta seguro e respeitado.',
    },
    {
      question: 'O atendimento é presencial ou online?',
      answer:
        'Oferecemos as duas modalidades com o mesmo padrão de excelência, sigilo e atenção humana. O atendimento online é realizado por videoconferência em plataforma médica segura, permitindo acompanhamento com comodidade em qualquer região. Já o atendimento presencial ocorre em ambiente acolhedor e privativo.',
      note: 'Modalidades sujeitas à avaliação clínica e disponibilidade de agenda.',
    },
    {
      question: 'Quanto tempo dura a consulta?',
      answer:
        'A primeira consulta costuma ter duração média de 60 minutos, garantindo tempo adequado para uma investigação clínica completa e esclarecimento de dúvidas. As consultas de retorno e acompanhamento duram em média 45 a 50 minutos, conforme as necessidades de cada fase do tratamento.',
      note: 'Duração estimada para revisão pela médica conforme rotina do consultório.',
    },
    {
      question: 'O tratamento é sempre com medicação?',
      answer:
        'Não. A medicação é um recurso terapêutico valioso quando indicada para reequilibrar sintomas e devolver funcionalidade, mas nunca é a única alternativa nem mandatória para todos os casos. Muitas situações requerem abordagens integradas com psicoterapia, ajustes de hábitos, rotina de sono e manejo do estresse. Toda decisão é tomada em diálogo compartilhado.',
    },
    {
      question: 'Como saber se é o momento certo de procurar um psiquiatra?',
      answer:
        'O momento certo é quando você sente que sintomas emocionais — como tristeza persistente, ansiedade paralisante, insônia crônica, esgotamento mental, alterações de humor ou angústia — começam a comprometer o seu bem-estar, suas relações ou sua vida diária. Não é necessário esperar que a situação se torne insustentável para buscar acolhimento profissional.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-20 sm:py-28 lg:py-32 bg-[#FAF7F4] border-t border-[#E8DFD9]/60 relative overflow-hidden">
      {/* Delicate glowing ambient orbs */}
      <div className="absolute top-1/4 right-0 w-[460px] h-[460px] bg-[#DFC8C2]/25 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-0 w-[380px] h-[380px] bg-[#B87986]/15 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* Small Kicker */}
            <div className="flex items-center gap-3.5 mb-6">
              <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B87986]">
                DÚVIDAS FREQUENTES
              </span>
              <span className="w-12 sm:w-16 h-px bg-[#B87986]/40 inline-block" />
            </div>

            {/* Editorial Title - Exact match to template */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-[#2E2225] leading-[1.12] text-balance">
              Perguntas<br />
              que chegam<br />
              aqui com<br />
              frequência.
            </h2>
          </div>

          {/* Right Column: Clean Accordion Lines */}
          <div className="lg:col-span-7 divide-y divide-[#E8DFD9]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-5 sm:py-6 transition-colors">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans text-base sm:text-lg text-[#2E2225] group-hover:text-[#B87986] font-normal transition-colors">
                      {faq.question}
                    </span>
                    <span className="shrink-0 p-1 text-[#67434B] group-hover:text-[#B87986] transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
                      ) : (
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pb-2 pr-6 text-sm sm:text-base text-[#524146] font-normal leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                      <p>{faq.answer}</p>
                      {faq.note && (
                        <p className="mt-2 text-xs text-[#7D6B70] italic">
                          * {faq.note}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
