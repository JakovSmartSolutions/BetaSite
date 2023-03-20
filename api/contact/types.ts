export interface ContactUsPayload {
  name: string;
  email: string;
  message: string;
}

export interface SupportPayload {
  name: string;
  email: string;
  phone: string;
  ticketType: string;
  ticketTitle: string;
  message: string;
  image?: File;
}
