export interface BookingConfig {
  url: string;
  whatsappNumber: string;
  whatsappRaw: string;
  instagramHandle: string;
  instagramUrl: string;
  doctorName: string;
  doctorFullName: string;
  area: string;
  specialty: string;
  crmInfo: string;
  rqeInfo: string;
  postGradInfo: string;
  careModality: string;
  audience: string;
  languages: string;
}

export const DEFAULT_BOOKING_CONFIG: BookingConfig = {
  url: "https://wa.me/5561999533860?text=Ol%C3%A1%2C%20Dra.%20Carolina%20e%20equipe!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamento%20de%20consulta%20online.",
  whatsappNumber: "+55 61 99953-3860",
  whatsappRaw: "5561999533860",
  instagramHandle: "@dra.carolina.zampronha",
  instagramUrl: "https://instagram.com/dra.carolina.zampronha",
  doctorName: "Dra. Carolina Zampronha",
  doctorFullName: "Dra. Carolina Zampronha Correia",
  area: "Médica | Saúde Mental",
  specialty: "Medicina de Família e Comunidade",
  crmInfo: "Médica | CRM-DF 29.767",
  rqeInfo: "Especialista em Medicina de Família e Comunidade | RQE 25.334",
  postGradInfo: "Pós-graduada em Psiquiatria e Psicofarmacologia — NÃO ESPECIALISTA",
  careModality: "Atendimento online particular por telemedicina",
  audience: "Atendimento online para adultos",
  languages: "Consultas disponíveis em português e inglês",
};
