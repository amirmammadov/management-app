import {
  Component,
  ViewChild,
  viewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';

import { TicketData } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  add = output<TicketData>();

  ngOnInit(): void {
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, textInput: string) {
    this.add.emit({ title: title, text: textInput });

    this.form?.nativeElement.reset();
  }
}
