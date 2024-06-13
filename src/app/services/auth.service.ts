import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../Model/user';
import { Observable } from 'rxjs';
import { AppstorageService } from './appstorage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  $baseurl = environment.baseurl;
  constructor(private http: HttpClient,private storage :AppstorageService,private router:Router) {}

  register(data: User): Observable<Authres> {
    return this.http.post<Authres>(this.$baseurl + 'register', data);
  }

  login(data: User): Observable<Authres> {
    return this.http.post<Authres>(this.$baseurl + 'login', data);
  }

  logOut(){
this.storage.clearstorage()
this.router.navigate(['login']);
 }

  generateToken(): Observable<any> {
    return this.http.post<any>(this.$baseurl + 'twilio/generate-token', {});
  }

}

export class Authres {
  message!: string;
  token!: string
  user!: User
}
