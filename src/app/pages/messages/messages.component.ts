import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../../services/message-service.service';
import { AppstorageService } from '../../services/appstorage.service';
import { User } from '../../Model/user';
import { Advisor } from '../../Model/advisor';
import { IMessage, MessageResponse } from '../../Interfaces/imessage';
import { MessageModel } from '../../models/message-model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {
  user = {
    user: new User(),
  };
  advisor = {
    advisor: new Advisor(),
  };

  message = new MessageModel();
  messages!: IMessage[];

  constructor(private messageService: MessageServiceService,   private storage: AppstorageService) {}

  ngOnInit(): void {
    this.user = this.storage.retrieve('loggedUser');
    this.advisor = this.storage.retrieve('advisor_id');
    console.log("Logged user ID:", this.user.user.student.student_id);
    this.getMessages(this.user.user.student.student_id);
  }
  
  getMessages(receiver_id: number) {
    this.messageService.getMessages(receiver_id).subscribe((res: any) => {
      this.messages = res;
      console.log("misvo", this.messages);
    });
  }

  addMessage(){
    this.messageService.sendMessage(this.message).subscribe(res=>{

    });
  }

}
