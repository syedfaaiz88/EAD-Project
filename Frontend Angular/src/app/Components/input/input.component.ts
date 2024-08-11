import { Component, Input } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() controlName!: string;
  @Input() parentForm!: FormGroup;
}
