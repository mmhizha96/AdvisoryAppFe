import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../Model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  $baseurl = environment.baseurl;
  constructor(private http: HttpClient) {}

  register(data: User): Observable<Authres> {
    return this.http.post<Authres>(this.$baseurl + 'register', data);
  }

  login(data: User): Observable<Authres> {
    return this.http.post<Authres>(this.$baseurl + 'login', data);
  }
}

export class Authres {
  message!: string;
  token!: string
  user!: User
}
