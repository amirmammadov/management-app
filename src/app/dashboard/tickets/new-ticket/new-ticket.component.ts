import {
  Component,
  ViewChild,
  viewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild<ElementRef<HTMLFormElement>>('form');

  ngOnInit(): void {
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, textInput: string) {
    console.log({ title, textInput });

    this.form?.nativeElement.reset();
  }
}
