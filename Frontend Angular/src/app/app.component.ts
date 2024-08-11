import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AddStudentPageComponent } from './Pages/add-student-page/add-student-page.component';
import { StudentListPageComponent } from './Pages/student-list-page/student-list-page.component';
import { DashboardPageComponent } from './Pages/dashboard-page/dashboard-page.component';
import { ViewStudentPageComponent } from './Pages/view-student-page/view-student-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, AddStudentPageComponent, StudentListPageComponent, DashboardPageComponent, ViewStudentPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
}
