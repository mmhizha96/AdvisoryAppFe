import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advisor } from '../Model/advisor';

@Injectable({
  providedIn: 'root'
})
export class AdvisorServiceService {

  $baseurl = environment.baseurl;
  constructor(private http: HttpClient) {}

  advisors():Observable<Advisor[]>{
    return this.http.get<Advisor[]>(
      this.$baseurl + 'advisors',
    );
  }

  connect(data: any){
    return this.http.post(this.$baseurl + 'connect-advisor', data);
  }

}
