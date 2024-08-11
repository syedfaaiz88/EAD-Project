import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Student } from '../../../Interfaces/IStudent.interface';
import { StudentDataService } from '../../../services/student-data.service';
@Component({
  selector: 'app-view-student-page',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './view-student-page.component.html',
  styleUrl: './view-student-page.component.css'
})
export class ViewStudentPageComponent {
  id!:number;
  student!: Student;
  constructor(private route:ActivatedRoute, private service:StudentDataService)
  {}
  ngOnInit()
  {
    this.id = this.route.snapshot.params['id'];
    this.service.getStudentById(this.id).subscribe(
      data=>{
        this.student=data;
        console.log(this.student)

      }
    );
  }
}
