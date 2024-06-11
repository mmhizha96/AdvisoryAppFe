import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Model/user';
import { AuthService } from '../../services/auth.service';
import { AppstorageService } from '../../services/appstorage.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {
  user= new User();
  constructor(private router:Router,private storage:AppstorageService, private authservice:AuthService){

  }

  login(){
this.authservice.login(this.user).subscribe(
  res=>{

this.storage.store("loggedUser",res);
    this.router.navigate(['main'])
  }
)


  }


}
