import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { ticketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-table',
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.scss'],
})
export class TicketTableComponent implements OnInit {
  tickets!: Ticket[];

  selectedTickets!: Ticket[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private myTicketService: ticketService) {}

  ngOnInit() {
    this.myTicketService.getTickets().then((tickets) => {
      this.tickets = tickets;
      this.loading = false;
    });
  }
}
