import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './models/ticket.model';
import { TicketData } from './models/ticketdata.model';

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets:Ticket[] = [];

  onAdd(ticketData: TicketData){
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open'
    };
    this.tickets.push(ticket);
  }

}
