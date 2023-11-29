export interface oneTicket {
  ticketName?: string;
  price?: number;
  theTicket?: string;
}

export interface User {
  name?: string;
  image?: string;
  phone?: string;
}

export interface Ticket {
  id?: number;
  user?: User;
  ticket?: oneTicket;
  cinema?: string;
  noOfPersons?: number;
  noOfPurchases?: string;
}
