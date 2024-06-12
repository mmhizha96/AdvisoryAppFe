import { Component, OnInit } from '@angular/core';
import { AppstorageService } from '../../services/appstorage.service';
import { User } from '../../Model/user';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.css'
})
export class MainSidebarComponent implements OnInit {
  user!:User;
  constructor(private storage:AppstorageService){

  }
  ngOnInit(): void {
   this.user= this.storage.retrieve('loggedUser').user;
  }

}
