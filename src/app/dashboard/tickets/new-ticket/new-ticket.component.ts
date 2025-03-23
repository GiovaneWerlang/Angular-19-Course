import { afterNextRender, afterRender, AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';
import { TicketData } from '../models/ticketdata.model';

@Component({
  selector: 'app-new-ticket',
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter();
  add = output<TicketData>();

  constructor(){
    afterRender(() => {
      console.log('after render')
    });

    afterNextRender(() => {
      console.log('after next render')
    });
  }

  onSubmit(title: string, ticketText: string) {
    console.log(title)
    console.log(ticketText)
    this.add.emit({title: title, text: ticketText});
    this.form().nativeElement.reset();
  }

  ngOnInit(): void {
    console.log('init')
    this.form().nativeElement.reset();
  }

  ngAfterViewInit(): void {
    console.log('after')
    this.form().nativeElement.reset();
  }

}
