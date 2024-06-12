import { Component } from '@angular/core';
import { Appointment } from '../../Model/appointment';
import { AppointmentService } from '../../services/appointment.service';
import { ActivatedRoute } from '@angular/router';
import { AppointmentResponse } from '../../Interfaces/appointment-interface';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrl: './view-appointments.component.css'
})
export class ViewAppointmentsComponent {

  student: any;
  user: any;
  appointments:any;
  appointment: Appointment = new Appointment(); 

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    const loggedUser = localStorage.getItem("loggedUser");
  
    if (loggedUser !== null) {
      this.user = JSON.parse(loggedUser);
      console.log("data ra user", this.user.user.student.student_id);
      this.viewStudents(); // Call viewStudents() after user is assigned
    } else {
      console.error("No data stored");
    }
  }
  

  viewStudents() {
    this.appointmentService.viewAppointments(this.user.user.student.student_id).subscribe((res: AppointmentResponse) => {
      console.log(res); 

      this.appointments=res.appointment;
 
    });
  }


 

}
