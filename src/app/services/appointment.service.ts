import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../Model/appointment';
import { Authres } from './auth.service';
import { AppointmentResponse } from '../Interfaces/appointment-interface';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  $baseurl = environment.baseurl;
  constructor(private http: HttpClient) {}

  addAppointment(data: Appointment): Observable<AppointmentResponse> {
    return this.http.post<AppointmentResponse>(this.$baseurl + 'appointments', data);
  }

  studentsAppointments(student_id: number, advisor_id: number) {
    const url = this.$baseurl + 'my-appointments';
    const body = { student_id, advisor_id }; 
  
    return this.http.post(url, body);
  }

  advisorAppointments(advisor_id:number){
    const url = this.$baseurl + 'advisorAppointments';
    const body = { advisor_id }; 
  
    return this.http.post(url, body);


  }

  approveAppointment(data: Appointment): Observable<AppointmentResponse> {
    return this.http.post<AppointmentResponse>(this.$baseurl + 'update-Appointment', data);
  }
  

}
