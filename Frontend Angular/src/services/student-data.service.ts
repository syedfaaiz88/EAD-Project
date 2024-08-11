import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Student } from '../Interfaces/IStudent.interface';
@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  
  constructor(private http:HttpClient) { }
  StudentUrl:string='https://localhost:7121/api/Student'
  listStudents:Student[]=[];
  StudentData!:Student;

  deleteStudentById(studentId: number): Observable<any> {
    return this.http.delete(`${this.StudentUrl}/${studentId}`);
  }
  getStudentById(studentId: number): Observable<any> {
    return this.http.get(`${this.StudentUrl}/${studentId}`);
  }

  addStudent(studentData: any): Observable<any> {
    const transformedData = this.transformData(studentData);
    console.log("Transformed data: "+ JSON.stringify(transformedData))
    return this.http.post(this.StudentUrl, { ...transformedData });
  }

  updateStudent(studentData: Student)
  {
    return this.http.put(`${this.StudentUrl}/${studentData.id}`, studentData);
  }
  
  getStudentData(): Observable<Student[]>
  {
    return this.http.get<Student[]>(this.StudentUrl).pipe(
      map(data =>{
          const studentArray:Array<Student>= [];
          for(const id in data)
          {
            if(data.hasOwnProperty(id))
            {
              studentArray.push(data[id]);
            }
          }
          return studentArray;          
      })
    );
  }
  getPaginatedStudentData(pageSize:number, pageNumber:number): Observable<Student[]>
  {
    return this.http.get<Student[]>(this.StudentUrl).pipe(
      map(data =>{
          const studentArray:Array<Student>= [];
          for(const id in data)
          {
            if(data.hasOwnProperty(id))
            {
              studentArray.push(data[id]);
            }
          }
          return studentArray;          
      })
    );
  }
  private transformData(data: any): Student {
    const birthdate = new Date(data.dob);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
      age--;
    }
    const person = {
    id: 0,
    name: data.fullName,
    email: data.email,
    rollNumber: data.rollNo,
    department: data.department,
    degree: data.degree,
    dob: data.dob,
    end: data.end,
    start: data.start,
    city: data.city,
    interest: data.interest,
    subject: data.subject,
    age: age,
    gender: data.gender
    };
    return person;
  }
}
