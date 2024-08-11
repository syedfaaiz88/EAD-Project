import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';
import { StudentDataService } from '../../../services/student-data.service';
import { Student } from '../../../Interfaces/IStudent.interface';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  studentData!: Array<Student>;
  distinctInterests: string[] = [];
  constructor(private studentDataService: StudentDataService) { }

  ngOnInit() {
    this.loadStudentData();
  }

  loadStudentData() {
    this.studentDataService.getStudentData().subscribe(
      data => {
        this.studentData = data;
        console.log('Student Data:', this.studentData);
        
        this.distinctInterests = this.getDistinctInterests(this.studentData);

        // City Chart
        const cityCounts = this.getCountsByCategory(this.studentData, 'city');
        this.RenderChart(Object.keys(cityCounts), Object.values(cityCounts), this.getRandomColors(Object.keys(cityCounts)), 'pie', 'cityChart');

        // Department Chart
        const departmentCounts = this.getCountsByCategory(this.studentData, 'department');
        this.RenderChart(Object.keys(departmentCounts), Object.values(departmentCounts), this.getRandomColors(Object.keys(departmentCounts)), 'pie', 'departmentChart');

        // Degree Chart
        const degreeCounts = this.getCountsByCategory(this.studentData, 'degree');
        this.RenderChart(Object.keys(degreeCounts), Object.values(degreeCounts), this.getRandomColors(Object.keys(degreeCounts)), 'pie', 'degreeChart');

        //Gender Chart
        const genderCounts = this.getCountsByCategory(this.studentData, 'gender');
        this.RenderChart(Object.keys(genderCounts), Object.values(genderCounts), this.getRandomColors(Object.keys(genderCounts)), 'pie', 'genderChart');
        
        //Age Chart
        const ageCounts = this.getCountsByCategory(this.studentData, 'age');
        this.RenderChart(Object.keys(ageCounts), Object.values(ageCounts), this.getRandomColors(Object.keys(ageCounts)), 'bar', 'ageChart');
        
      }
    );
  } 
  private getDistinctInterests(students: Student[]): string[] {
    const interestSet = new Set<string>();
    students.forEach(student => {
      interestSet.add(student.interest);
    });
    return Array.from(interestSet);
  }
  private getCountsByCategory(students: Student[], category: keyof Student): Record<string, number> {
    return students.reduce((acc, student) => {
      const value = student[category];
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }
  getRandomColors(labels: string[]): string[] {
    return labels.map(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }
  RenderChart(labeldata: any, maindata: any, colordata: any, type: ChartType, id: any) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [{
          label: '# of Votes',
          data: maindata,
          backgroundColor: colordata,
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
