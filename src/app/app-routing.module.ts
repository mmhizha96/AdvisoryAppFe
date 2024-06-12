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


const routes: Routes = [
 {path:'main', component:MainComponent, children:[
  {path:'appointments', component:AppointmentsComponent},
  {path:'charts', component:ChartComponent},
  {path:'programmes', component:ProgrammesComponent},
  {path:'results', component:ResultsComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'advisors', component:AdvisorsComponent},
  {path:'students', component:StudentsComponent},
 ],

},

  {path:'login', component:UserloginComponent},
  {path:'register', component:RegisterUserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
