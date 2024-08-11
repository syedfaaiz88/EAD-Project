import { Component } from '@angular/core';
import { StudentDataService } from '../../../services/student-data.service';
import { NgFor } from '@angular/common';
import { Student } from '../../../Interfaces/IStudent.interface';
import { FormsModule } from '@angular/forms';
import { SortPipe } from '../../../pipes/sort.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-student-list-page',
  standalone: true,
  imports: [NgFor,FormsModule, SortPipe, RouterLink, RouterLinkActive],
  templateUrl: './student-list-page.component.html',
  styleUrl: './student-list-page.component.css'
})
export class StudentListPageComponent {

  studentData: Array<Student> = [];
  pageSizeOptions = [5, 10, 20, 30, 50];
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  sortField = '';
  sortDirection='';

  constructor(private studentDataService: StudentDataService) {}

  ngOnInit(): void {
    this.loadStudentData();
  }

  loadStudentData() {
    this.studentDataService.getPaginatedStudentData(this.pageSize, this.currentPage).subscribe(
      data => {
        this.studentData = data;
        console.log(data)
        this.totalPages = Math.ceil(data.length / this.pageSize);
      }
    );
  }

  deleteStudent(studentId: number) {
    this.studentDataService.deleteStudentById(studentId).subscribe(
      () => {
        this.loadStudentData();
      }
    );
  }
}

