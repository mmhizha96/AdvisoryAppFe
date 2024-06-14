import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IMessage, MessageResponse } from '../Interfaces/imessage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  $baseurl = environment.baseurl;
  constructor(private http: HttpClient) {}

  getMessages(receiver_id: number,sender_id:number): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(this.$baseurl + 'receiveMessage', {}, { params: { receiver_id,sender_id } });
  }

  advisorGetMessages(receiver_id: number,sender_id:number): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(this.$baseurl + 'receiveMessage', {}, { params: { receiver_id,sender_id } });
  }



  sendMessage(data: IMessage): Observable<IMessage> {
    return this.http.post<IMessage>(this.$baseurl + 'sendMessage', data);
  }

  getSentMessages(sender_id: number,receiver_id: number) {
    return this.http.post<MessageResponse>(this.$baseurl + 'getSentMessages', {}, { params: { sender_id,receiver_id } });
  }
  
}
