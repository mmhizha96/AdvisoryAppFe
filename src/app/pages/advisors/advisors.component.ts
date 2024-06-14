import { Component, OnInit } from '@angular/core';
import { AdvisorServiceService } from '../../services/advisor-service.service';
import { Router } from '@angular/router';
import { Advisor } from '../../Model/advisor';
import { Assignment } from '../../Interfaces/assignment';
import { AppstorageService } from '../../services/appstorage.service';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.css'] // Corrected styleUrl to styleUrls
})
export class AdvisorsComponent implements OnInit {

  advisors: Advisor[] = [];
  user: any;
  assignment: Assignment = {
    advisor_id: 0,
    student_id: 0,
    status: ''
  }; // Initialize assignment as an empty object literal

  constructor(private advisorService: AdvisorServiceService, private router: Router,private storage: AppstorageService) {}

  ngOnInit(): void {
    this.advisorsData();

    const loggedUser = localStorage.getItem("loggedUser");

    if (loggedUser !== null) {
      this.user = JSON.parse(loggedUser);
    } else {
      console.error("No data stored");
    }
    console.log(this.user.user.student.student_id);
  }

  advisorsData() {
    this.advisorService.advisors().subscribe((res: Advisor[]) => {
      this.advisors = res;
      console.log("advisors", this.advisors);
    });
  }

  connectAdvisor(id: number) {
    this.assignment.student_id = this.user.user.student.student_id;
    this.assignment.advisor_id = id;

    this.advisorService.connect(this.assignment).subscribe(res => {
      console.log("musvo", res);
    });
  }

  setAdvisor(advisor: any) {
    const advisorData = JSON.stringify(advisor);
    sessionStorage.setItem("advisorData", advisorData);
    this.router.navigate(['/main', 'makeAppointment']);
  }

  setAdvisorData(advisor: any) {
    const advisorData = JSON.stringify(advisor);
    localStorage.setItem("advisorData", advisorData);
    this.router.navigate(['/main', 'studentAppointments']);
  }

  chat(advisor:Advisor){
    this.storage.store("dataAdvisor",advisor);
    this.router.navigate(['/main', 'messages']);

  }
}
