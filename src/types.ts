export interface BookingConfig {
  url: string;
  whatsappNumber: string;
  doctorName: string;
  specialty: string;
  presentialLocation: string;
  crmInfo: string;
}

export const DEFAULT_BOOKING_CONFIG: BookingConfig = {
  url: "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamento%20de%20consulta%20com%20a%20Dra.%20Carolina%20Zampronha.",
  whatsappNumber: "(11) 99999-9999",
  doctorName: "Carolina Zampronha",
  specialty: "Psiquiatria",
  presentialLocation: "São Paulo - SP (Consultório Privativo) e Telemedicina",
  crmInfo: "CRM/SP [Inserir CRM] • RQE [Inserir RQE]",
};
