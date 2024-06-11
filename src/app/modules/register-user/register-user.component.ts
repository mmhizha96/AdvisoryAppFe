import { Component } from '@angular/core';
import { Department } from '../../Model/department';
import { User } from '../../Model/user';
import { AuthService } from '../../services/auth.service';
import { DepartmentserviceService } from '../../services/departmentservice.service';
import { Router } from '@angular/router';
import { Programme } from '../../Model/programme';
import { ProgrammesService } from '../../services/programmes.service';
import { Student } from '../../Model/student';
import { Advisor } from '../../Model/advisor';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css',
})
export class RegisterUserComponent {
  user = new User();
  departments!: Department[];
  programmes!:Programme[]

  constructor(
    private auth: AuthService,
    private departmentservice: DepartmentserviceService,
    private router: Router,
    private programeservice:ProgrammesService
  ) {}
  ngOnInit(): void {
    this.getdepartments();
    this.getprogrammes();
  }
  registerUser(role_id: number) {
    this.user.role_id = role_id;

    if(role_id==1){
      this.user.student=new Student()
    }
    else if(role_id==2){
this.user.advisor= new Advisor();
    }
    this.auth.register(this.user).subscribe(
      (res) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }

  getdepartments() {
    this.departmentservice.getdepartments().subscribe((res) => {
      this.departments = res;
    });
  }

  getprogrammes(){
    this.programeservice.getprogrammes().subscribe(res=>{
      this.programmes=res;
    })
  }
}
