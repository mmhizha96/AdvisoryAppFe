import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../Model/appointment';
import { AppointmentResponse } from '../../Interfaces/appointment-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'] // Corrected styleUrl to styleUrls
})
export class AppointmentComponent implements OnInit {
  student: any;
  user: any;
  appointment: Appointment = new Appointment(); // Moved appointment declaration here

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    const storedData = sessionStorage.getItem("studentData");

    if (storedData !== null) {
      this.student = JSON.parse(storedData);
    } else {
      console.error("No data stored");
    }
    console.log(this.student.student);

    const loggedUser = localStorage.getItem("loggedUser");

    if (loggedUser !== null) {
      this.user = JSON.parse(loggedUser);
    } else {
      console.error("No data stored");
    }
    console.log(this.user.user.advisor);
  }

  addAppointment() {
    const student_id = this.student.student.student_id;
    const advisor_id = this.user.user.advisor.advisor_id;

    this.appointment.student_id = student_id;
    this.appointment.advisor_id = advisor_id;
    
    this.appointmentService.addAppointment(this.appointment).subscribe((res: AppointmentResponse) => {
      console.log(res.message);
      console.log(res.appointment);
    });
  }


}
