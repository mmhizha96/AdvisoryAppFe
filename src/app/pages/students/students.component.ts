import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { User } from '../../Model/user';
import { AppstorageService } from '../../services/appstorage.service';
import { Observable } from 'rxjs';
import { AdvisorAssignments } from '../../models/advisor-assignments';
import { Student } from '../../Model/student';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent implements OnInit {

  Approve(data: AdvisorAssignments) {
    this.studentservice.approveRequest(data).subscribe((res) => {
      this.getAdvisorstudents();
    });
  }
  user = {
    user: new User(),
  };
  studentsassigned!: AdvisorAssignments[];

  constructor(
    private router: Router,
    private studentservice: StudentsService,
    private storage: AppstorageService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.user = this.storage.retrieve('loggedUser');
    this.getAdvisorstudents();
  }

  viewstudent(student: AdvisorAssignments) {
    this.storage.store('student', student);
    this.router.navigate(['mainview-student']);
  }

  deleteRequest(data:AdvisorAssignments)
  {
    this.studentservice.deletestudentRequest(data).subscribe(res=>{
      this.getAdvisorstudents();
    })
  }

  getAdvisorstudents() {
  
    this.studentservice
      .getAdvisorstudents(this.user.user.advisor)
      .subscribe((res) => {
        this.studentsassigned = res;
      });
  }

  setStudent(student: AdvisorAssignments) {
    const studentDataString = JSON.stringify(student);
    sessionStorage.setItem("studentData", studentDataString);
    this.router.navigate(['/main', 'appointment']);
  }

  chat(student:any){
    this.storage.store("dataStudent",student);
    this.router.navigate(['/main', 'messages']);

  }

  
}
