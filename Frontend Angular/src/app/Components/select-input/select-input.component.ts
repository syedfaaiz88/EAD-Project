import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.css'
})
export class SelectInputComponent {
  @Input() label:any = '';
  @Input() id:string = '';
  @Input() selectedInput:any = '';
  @Input() list:Array<any> = [];
  @Input() controlName!: string;
  @Input() parentForm!: FormGroup;
}
