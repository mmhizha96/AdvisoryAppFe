import { Component, OnInit } from '@angular/core';
import { AdvisorServiceService } from '../../services/advisor-service.service';

import { Router } from '@angular/router';
import { Advisor } from '../../Model/advisor';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrl: './advisors.component.css'
})
export class AdvisorsComponent implements OnInit {

  advisors:Advisor[] = [];


  constructor(private advisorService:AdvisorServiceService, private router: Router) { }
  ngOnInit(): void {
   this.advisorsData();
  }

  advisorsData(){
    
    this.advisorService.advisors().subscribe((res:Advisor[])=>{
      this.advisors = res;
      console.log("advisors",this.advisors);
    });
  }

  setAdvisor(advisor:any) {
    const advisorData = JSON.stringify(advisor);
    sessionStorage.setItem("advisorData", advisorData);
    this.router.navigate(['/main', 'makeAppointment']);
  }
  setAdvisorData(advisor:any) {
    const advisorData = JSON.stringify(advisor);
    localStorage.setItem("advisorData", advisorData);
    this.router.navigate(['/main', 'studentAppointments']);
  }

}
