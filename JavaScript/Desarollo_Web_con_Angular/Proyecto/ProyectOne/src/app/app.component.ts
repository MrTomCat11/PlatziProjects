import { Component } from '@angular/core';
import {InputComponent} from './input/input.component';
import { TicketService } from './services/ticket.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  votacion = '';
  tickets:any;

  constructor(private ticketService:TicketService){
    this.tickets = ticketService.getTicket();
  }

  votos = [
    {title: 'opcion 1'},
    {title: 'opcion 2'},
    {title: 'opcion 3'},
    {title: 'opcion 4'}
  ];

  addVoto(response:string){
    this.votacion = "usted eligio: " + response;
  }

  cantidad = 5;
  factor = 1;
}
