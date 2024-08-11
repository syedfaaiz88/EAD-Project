import { Component, Input } from '@angular/core';
import { FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.css'
})
export class DateInputComponent {
  @Input() label:any = '';
  @Input() id:string = '';
  @Input() controlName!: string;
  @Input() parentForm!: FormGroup;
}
