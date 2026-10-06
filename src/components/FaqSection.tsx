import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  paragraphs?: string[];
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Como funciona a primeira consulta?',
      answer:
        'A primeira consulta consiste em uma avaliação médica individualizada e detalhada. São avaliados os sintomas atuais, histórico de saúde física e mental, tratamentos anteriores, medicamentos em uso, rotina, sono, contexto de vida e outros aspectos relevantes para definição da conduta.',
    },
    {
      question: 'Quem pode ser atendido e onde?',
      answer:
        'O atendimento é voltado para adultos (a partir de 18 anos), realizado por telemedicina para pacientes em todo o Brasil e para brasileiros residentes no exterior. Consultas também estão disponíveis em inglês para pacientes estrangeiros (consultations in English available).',
    },
    {
      question: 'Quanto tempo dura a consulta?',
      answer:
        'A consulta dura aproximadamente 30 a 60 minutos, de acordo com a necessidade de cada paciente.',
    },
    {
      question: 'O atendimento é online ou presencial?',
      answer:
        'O atendimento é realizado exclusivamente online, por telemedicina, com segurança e sigilo, para pacientes no Brasil e exterior.',
    },
    {
      question: 'O atendimento é particular?',
      answer:
        'Sim. O atendimento é exclusivamente particular. Não realizo atendimento por convênios ou planos de saúde.',
    },
    {
      question: 'As consultas podem ser realizadas em outros idiomas?',
      answer:
        'Sim! As consultas estão disponíveis em português e em inglês, permitindo o atendimento de brasileiros no exterior bem como de pacientes estrangeiros que se comuniquem em inglês.',
    },
    {
      question: 'Todo tratamento precisa de medicação?',
      answer:
        'Não. O tratamento é definido individualmente após avaliação médica. Nem todos os pacientes necessitam de tratamento medicamentoso. Dependendo de cada caso, a conduta pode envolver orientações, mudanças de hábitos, acompanhamento médico, psicoterapia com profissional habilitado e/ou tratamento medicamentoso.',
    },
    {
      question: 'Como funciona o retorno?',
      answer: '',
      paragraphs: [
        'Após a primeira consulta, é necessária uma nova avaliação em aproximadamente 30 dias para acompanhamento da evolução e do tratamento.',
        'Estando o paciente estável e bem adaptado à medicação, as consultas passam a ocorrer, em geral, a cada 2 meses, inclusive para acompanhamento e renovação das receitas.',
        'Caso ocorram intercorrências relacionadas à adaptação à medicação prescrita, poderá ser realizada reavaliação sem custo adicional. Para novas demandas ou outras necessidades médicas, será necessário agendar uma nova consulta particular.',
      ],
    },
    {
      question: 'Posso renovar uma receita sem consulta?',
      answer:
        'A renovação de receita é um ato médico e depende de avaliação adequada. Quando houver necessidade de reavaliação clínica, será necessário agendar uma consulta.',
    },
    {
      question: 'Posso solicitar alteração da medicação pelo WhatsApp?',
      answer:
        'Não. Ajustes de dose, introdução ou suspensão de medicamentos e outras mudanças de conduta são realizados mediante consulta médica e registro em prontuário.',
    },
    {
      question: 'Para que serve o WhatsApp profissional?',
      answer:
        'O WhatsApp profissional (+55 61 99953-3860) é destinado a agendamentos e informações administrativas relacionadas ao atendimento. Condutas médicas devem ser realizadas durante consulta formal.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-20 sm:py-28 lg:py-32 bg-[#FAF7F4] border-t border-[#E8DFD9]/60 relative overflow-hidden">
      {/* Glowing ambient background orbs */}
      <div className="absolute top-1/4 right-0 w-[460px] h-[460px] bg-[#DFC8C2]/25 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-0 w-[380px] h-[380px] bg-[#B87986]/15 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col justify-start text-left">
            {/* Small Kicker */}
            <div className="flex items-center gap-3.5 mb-6">
              <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B87986]">
                DÚVIDAS FREQUENTES
              </span>
              <span className="w-12 sm:w-16 h-px bg-[#B87986]/40 inline-block" />
            </div>

            {/* Editorial Title */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-[#2E2225] leading-[1.12] text-balance">
              Perguntas<br />
              que chegam<br />
              aqui com<br />
              frequência.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#524146] mt-6 leading-relaxed max-w-sm">
              Tire suas principais dúvidas sobre o formato das consultas online para adultos, atendimento no Brasil e no exterior, consultas em inglês e acompanhamento médico.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 divide-y divide-[#E8DFD9]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-5 sm:py-6 transition-colors text-left">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none cursor-pointer"
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
                      {faq.paragraphs ? (
                        <div className="space-y-3">
                          {faq.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      ) : (
                        <p>{faq.answer}</p>
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
