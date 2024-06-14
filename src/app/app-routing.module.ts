import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './modules/main/appointments/appointments.component';
import { ChartComponent } from './modules/main/chart/chart.component';
import { MainComponent } from './modules/main/main.component';
import { ProgrammesComponent } from './modules/main/programmes/programmes.component';
import { ResultsComponent } from './modules/main/results/results.component';
import { RegisterUserComponent } from './modules/register-user/register-user.component';
import { UserloginComponent } from './modules/userlogin/userlogin.component';
import { AdvisorsComponent } from './pages/advisors/advisors.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentsComponent } from './pages/students/students.component';
import { ViewstudentComponent } from './pages/viewstudent/viewstudent.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ViewAppointmentsComponent } from './pages/view-appointments/view-appointments.component';
import { MakeAppointmentComponent } from './pages/make-appointment/make-appointment.component';
import { StudentAppointmentsComponent } from './pages/student-appointments/student-appointments.component';
import { authGuard } from './guards/auth.guard';
import { MessagesComponent } from './pages/messages/messages.component';

const routes: Routes = [
  {path:'main', component:MainComponent,    canActivate: [authGuard],children:[

    {path:'appointment', component:AppointmentComponent},
    {path:'makeAppointment', component:MakeAppointmentComponent},
    {path:'studentAppointments', component:StudentAppointmentsComponent},
    {path:'charts', component:ChartComponent},
    {path:'programmes', component:ProgrammesComponent},
    {path:'results', component:ResultsComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'advisors', component:AdvisorsComponent},
    {path:'students', component:StudentsComponent},
    {path:'view-student',component:ViewstudentComponent},
    {path:'view-appointments',component:ViewAppointmentsComponent},
    {path:'messages',component:MessagesComponent},

    {path:'',redirectTo:'dashboard',pathMatch:'full'},

   ],

  },

  { path: 'login', component: UserloginComponent },
  { path: 'register', component: RegisterUserComponent },
  {path:'',redirectTo:'login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
