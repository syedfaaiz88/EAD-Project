import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../Components/button/button.component';
import { InputComponent } from '../../Components/input/input.component';
import { SelectInputComponent } from '../../Components/select-input/select-input.component';
import { DateInputComponent } from '../../Components/date-input/date-input.component';
import { SelectInputDataService } from '../../../services/select-input-data.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentDataService } from '../../../services/student-data.service';
import { Student } from '../../../Interfaces/IStudent.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-student-page',
  standalone: true,
  imports: [CommonModule,ButtonComponent,InputComponent,SelectInputComponent,DateInputComponent,ReactiveFormsModule],
  templateUrl: './add-student-page.component.html',
  styleUrls: ['./add-student-page.component.css'],
})
export class AddStudentPageComponent implements OnInit {
  students!: Student[];
  studentId!: number;
  distinctInterests!: string[];
  selectInputData: any = [];
  submissionSuccess: boolean = false;
  updatedStudent!: Student;

  
  addStudentForm: FormGroup = new FormGroup({
    fullName: new FormControl(null, Validators.required),
    rollNo: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gender: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    interest: new FormControl(null, Validators.required),
    dob: new FormControl(null, Validators.required),
    subject: new FormControl(null, Validators.required),
    degree: new FormControl(null, Validators.required),
    department: new FormControl(null, Validators.required),
    start: new FormControl(null, Validators.required),
    end: new FormControl(null, Validators.required),
  });

  constructor(private selectInputDataService: SelectInputDataService, private studentDataService: StudentDataService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['id']
    if(this.studentId !=0)
    {
      this.studentDataService.getStudentById(this.studentId).subscribe(
        (student: Student) => {
          this.addStudentForm.setValue({
            fullName: student.name,
            rollNo: student.rollNumber,
            email: student.email,
            gender: student.gender,
            city: student.city,
            interest: student.interest,
            dob: student.dob,
            subject: student.subject,
            degree: student.degree,
            department: student.department,
            start: student.start,
            end: student.end
          });
        },
        error => {
          console.error('Error fetching student data:', error);
        }
      );
    }
    this.selectInputDataService.getSelectInputData().subscribe((data) => {
      this.selectInputData = data;
    });
    this.getDistinctInterests();
    
  }

  get fullName() {
    return this.addStudentForm.get('fullName') as FormControl;
  }

  get rollNo() {
    return this.addStudentForm.get('rollNo') as FormControl;
  }

  get email() {
    return this.addStudentForm.get('email') as FormControl;
  }

  get gender() {
    return this.addStudentForm.get('gender') as FormControl;
  }

  get city() {
    return this.addStudentForm.get('city') as FormControl;
  }

  get interest() {
    return this.addStudentForm.get('interest') as FormControl;
  }

  get dob() {
    return this.addStudentForm.get('dob') as FormControl;
  }

  get subject() {
    return this.addStudentForm.get('subject') as FormControl;
  }

  get degree() {
    return this.addStudentForm.get('degree') as FormControl;
  }

  get department() {
    return this.addStudentForm.get('department') as FormControl;
  }

  get start() {
    return this.addStudentForm.get('start') as FormControl;
  }

  get end() {
    return this.addStudentForm.get('end') as FormControl;
  }

  onSubmit() {
    if(this.studentId != 0){
      this.updatedStudent = this.mapFormToStudent(this.studentId,this.addStudentForm)
      this.studentDataService.updateStudent(this.updatedStudent).subscribe(
        () => {
          this.submissionSuccess = true;
          this.addStudentForm.reset();
        }
      );
    }
    else{
      this.studentDataService.addStudent(this.addStudentForm.value).subscribe(() => {
        this.submissionSuccess = true;
        this.addStudentForm.reset();
      });
    }
    
  }
  public mapFormToStudent(studentId: number, form: FormGroup): Student {
    const dob: string | null = form.get('dob')?.value;
    const age: number | undefined = dob ? this.calculateAge(dob) : undefined;
  
    return {
      id: studentId,
      name: form.get('fullName')?.value,
      rollNumber: form.get('rollNo')?.value,
      email: form.get('email')?.value,
      department: form.get('department')?.value,
      degree: form.get('degree')?.value,
      dob: dob || '',
      start: form.get('start')?.value,
      end: form.get('end')?.value,
      city: form.get('city')?.value,
      interest: form.get('interest')?.value,
      gender: form.get('gender')?.value,
      subject: form.get('subject')?.value,
      age: age || 0,
    };
  }
  public calculateAge(dob: string): number {
    const birthdate = new Date(dob);
    const currentDate = new Date();
  
    let age = currentDate.getFullYear() - birthdate.getFullYear();
      if (
      currentDate.getMonth() < birthdate.getMonth() ||
      (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())
    ) {
      age--;
    }
  
    return age;
  }
  private getDistinctInterests() {
    this.studentDataService.getStudentData().subscribe((data) => {
      this.students = data;
      const interestSet = new Set<string>();
      this.students.forEach((student) => {
        interestSet.add(student.interest);
      });
      this.distinctInterests = Array.from(interestSet);
    });
  }
}