import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../Model/appointment';
import { AppointmentService } from '../../services/appointment.service';
import { ActivatedRoute } from '@angular/router';
import { AppointmentResponse } from '../../Interfaces/appointment-interface';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrl: './make-appointment.component.css'
})
export class MakeAppointmentComponent implements OnInit {
  advisor: any;
  user: any;
  appointment: Appointment = new Appointment(); // Moved appointment declaration here

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    const storedData = sessionStorage.getItem("advisorData");

    if (storedData !== null) {
      this.advisor = JSON.parse(storedData);
    } else {
      console.error("No data stored");
    }
    console.log(this.advisor);

    const loggedUser = localStorage.getItem("loggedUser");

    if (loggedUser !== null) {
      this.user = JSON.parse(loggedUser);
    } else {
      console.error("No data stored");
    }
    console.log(this.user.user.student);
  }

  addAppointment() {
    const advisor_id = this.advisor.advisor_id;
    const student_id = this.user.user.student.student_id;

    this.appointment.student_id = student_id;
    this.appointment.advisor_id = advisor_id;
    
    this.appointmentService.addAppointment(this.appointment).subscribe((res: AppointmentResponse) => {
      console.log(res.message);
      console.log(res.appointment);
    });
  }

}
