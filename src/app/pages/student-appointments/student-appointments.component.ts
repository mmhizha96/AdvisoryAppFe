import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from '../../Model/appointment';
import { AppointmentResponse } from '../../Interfaces/appointment-interface';

@Component({
  selector: 'app-student-appointments',
  templateUrl: './student-appointments.component.html',
  styleUrl: './student-appointments.component.css'
})
export class StudentAppointmentsComponent implements OnInit {

  student: any;
  user: any;
  appointments:any;
  advisor:any;
 appointment = new Appointment();

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    const storedData = localStorage.getItem("advisorData");
    if (storedData !== null) {
      this.advisor = JSON.parse(storedData);
    } else {
      console.error("No data stored");
    }


    const loggedUser = localStorage.getItem("loggedUser");

    if (loggedUser !== null) {
      this.user = JSON.parse(loggedUser);
    } else {
      console.error("No data stored");
    }
    // console.log(this.user.user.student);
    this.getAppointments();
  }

  getAppointments() {
    const student_id = this.user.user.student.student_id;
    const advisor_id = this.advisor.advisor_id;
  
    console.log("Student ID:", student_id);
    console.log("advisor ID:", advisor_id);
  
    const appointmentData = {
      student_id: student_id,
      advisor_id: advisor_id
    };
  
    this.appointmentService.studentsAppointments(student_id, advisor_id).subscribe((res: any) => {
      this.appointments = res;
    });
  }
  

}
