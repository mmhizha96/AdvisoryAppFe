import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../../services/message-service.service';
import { AppstorageService } from '../../services/appstorage.service';
import { User } from '../../Model/user';
import { Advisor } from '../../Model/advisor';
import { IMessage, MessageResponse } from '../../Interfaces/imessage';
import { MessageModel } from '../../models/message-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {
  user = {
    user: new User(),
  };
  receiver:any;
 student:any

  message = new MessageModel();
  messages: IMessage[]=[];
  studentMessages: IMessage[]=[];
  messageDetail:any;
  dataSentMessages:any;
  advisorSentMessages:any;

  constructor(private messageService: MessageServiceService,   private storage: AppstorageService) {}

  ngOnInit(): void {
    this.user = this.storage.retrieve('loggedUser');
    this.receiver = this.storage.retrieve('dataAdvisor');
    this.student = this.storage.retrieve('dataStudent');

    this.sentMessages();
    this.AdvisorsentMessages();

    this.getMessages(this?.user?.user?.id,this?.receiver?.user?.id);
    this.advisorGetMessages(this?.user?.user?.id,this.student.student.user_id);

  }
  
  getMessages(receiver_id: number,sender_id:number) {
    this.messageService.getMessages(receiver_id,sender_id).subscribe((res: any) => {
      this.studentMessages = res.messages;
      console.log("data racho iri", this.studentMessages);
    });
  }
  advisorGetMessages(receiver_id: number,sender_id:number) {
    this.messageService.advisorGetMessages(receiver_id,sender_id).subscribe((res: any) => {
      this.messages = res.messages;
      console.log('role-baba',this.user.user.role_id);
      console.log("data for advisor", this.messages);
    });
  }
  addMessage(messageForm: NgForm) {
    console.log("shshshshshjsjhsjs");
    this.message.sender_id =this.user.user.id.toString();
    this.message.receiver_id = this.receiver.user.id.toString();
    this.message.message = messageForm.value.message;
  
    this.messageService.sendMessage(this.message).subscribe(res => {



      
      this.sentMessages();

      // console.log('msuuu',this.sentMessages());
    });
  }

  addAdvisorMessage(messageForm: NgForm) {
    this.message.sender_id =this.user.user.id.toString();
    this.message.receiver_id = this.student.student.user_id.toString();
    this.message.message = messageForm.value.message;
    // console.log("zvawatumira", this.message);
    this.messageService.sendMessage(this.message).subscribe(res => {
      // this.messageDetail=res;
      this.AdvisorsentMessages();

     
    });
  }


  sentMessages() {

    console.log("retrieving messages");
    
    const sender_id = this.user?.user?.id;
    const receiver_id = this?.receiver?.user?.id;
    
    this.messageService.getSentMessages(sender_id, receiver_id).subscribe(
        (res) => {
            this.dataSentMessages = res;
       
        },
        (error) => {
            // Handle error if needed
            console.error("Error fetching sent messages:", error);
        }
    );
}

AdvisorsentMessages() {
  const sender_id = this.user.user.id;
  const receiver_id = this.student?.student?.user_id
  
  this.messageService.getSentMessages(sender_id, receiver_id).subscribe(
      (res) => {
          this.advisorSentMessages = res;
          console.log(this.dataSentMessages);
      },
      (error) => {
          // Handle error if needed
          console.error("Error fetching sent messages:", error);
      }
  );
}


}
