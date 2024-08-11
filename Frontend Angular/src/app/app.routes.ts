import { Routes } from '@angular/router';
import { AddStudentPageComponent } from './Pages/add-student-page/add-student-page.component';
import { DashboardPageComponent } from './Pages/dashboard-page/dashboard-page.component';
import { StudentListPageComponent } from './Pages/student-list-page/student-list-page.component';
import { ViewStudentPageComponent } from './Pages/view-student-page/view-student-page.component';

export const routes: Routes = [
    {path: "",component: StudentListPageComponent},
    {path: "add-student/:id",component: AddStudentPageComponent},
    {path: "dashboard",component: DashboardPageComponent},
    {path: "student-list",component: StudentListPageComponent},
    {path: "view-student/:id",component: ViewStudentPageComponent},
];
