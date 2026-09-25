export interface BookingConfig {
  url: string;
  whatsappNumber: string;
  doctorName: string;
  specialty: string;
  presentialLocation: string;
  crmInfo: string;
}

export const DEFAULT_BOOKING_CONFIG: BookingConfig = {
  url: "https://wa.me/5561985920414?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamento%20de%20consulta%20com%20a%20Dra.%20Carolina%20Zampronha.",
  whatsappNumber: "(61) 98592-0414",
  doctorName: "Carolina Zampronha",
  specialty: "Médica de Família (MFC)",
  presentialLocation: "Brasília - DF e Telemedicina para todo o Brasil",
  crmInfo: "Médica de Família (MFC) | RQE 25334 | CRM 29767 DF",
};
