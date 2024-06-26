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
  appointments!:Appointment[];
  appointment!: Appointment;

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    const loggedUser = localStorage.getItem("loggedUser");

    if (loggedUser !== null) {
      this.user = JSON.parse(loggedUser);
      console.log(this.user.user.advisor.advisor_id);


    } else {
      console.error("No data stored");
    }
    this.viewStudents();
  }


  viewStudents() {

this.appointmentService.advisorAppointments(this.user.user.advisor.advisor_id).subscribe((res: any) => {
  this.appointments = res;
  console.log('data iri', res);
}, error => {
  console.error('Error:', error);
});
  }
  approveAppointment(app: Appointment){
    this.appointmentService.approveAppointment(app).subscribe((res:AppointmentResponse)=> {
      this.viewStudents();
    });
  }







}
