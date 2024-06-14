import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';




import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/AuthInterceptor';
import { MainSidebarComponent } from './modules/main-sidebar/main-sidebar.component';
import { AppointmentsComponent } from './modules/main/appointments/appointments.component';
import { ChartComponent } from './modules/main/chart/chart.component';
import { CoursesComponent } from './modules/main/courses/courses.component';
import { FooterComponent } from './modules/main/footer/footer.component';
import { MainComponent } from './modules/main/main.component';
import { ProgrammesComponent } from './modules/main/programmes/programmes.component';
import { ResultsComponent } from './modules/main/results/results.component';
import { ScheduleComponent } from './modules/main/schedule/schedule.component';
import { ToolbarComponent } from './modules/main/toolbar/toolbar.component';
import { RegisterUserComponent } from './modules/register-user/register-user.component';
import { UserloginComponent } from './modules/userlogin/userlogin.component';
import { AdvisorsComponent } from './pages/advisors/advisors.component';
import { ControlSidenavComponent } from './pages/control-sidenav/control-sidenav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentsComponent } from './pages/students/students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewstudentComponent } from './pages/viewstudent/viewstudent.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ViewAppointmentsComponent } from './pages/view-appointments/view-appointments.component';
import { VideoCallComponent } from './pages/video-call/video-call.component';
import { MakeAppointmentComponent } from './pages/make-appointment/make-appointment.component';
import { StudentAppointmentsComponent } from './pages/student-appointments/student-appointments.component';
import { MessagesComponent } from './pages/messages/messages.component';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    ToolbarComponent,
    AppointmentsComponent,
    ResultsComponent,
    ScheduleComponent,
    ProgrammesComponent,
    CoursesComponent,
    ControlSidenavComponent,
    MainSidebarComponent,
    ChartComponent,
    StudentsComponent,
    DashboardComponent,
    RegisterUserComponent,
    UserloginComponent,
  
    AdvisorsComponent,
        ViewstudentComponent,
        AppointmentComponent,
        ViewAppointmentsComponent,
        VideoCallComponent,
        MakeAppointmentComponent,
        StudentAppointmentsComponent,
        MessagesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ToastrModule.forRoot()],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor , multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
