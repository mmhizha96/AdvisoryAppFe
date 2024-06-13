import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../Model/user';
import { AppstorageService } from '../../../services/appstorage.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit {
  user!:User;
  constructor(private router:Router,private authservice:AuthService,private storage:AppstorageService){}
  ngOnInit(): void {
  this.user=this.storage.retrieve('loggedUser').user;
  }
  logout(){
    this.authservice.logOut()
    }
}
