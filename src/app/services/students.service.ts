import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Advisor } from '../Model/advisor';
import { Observable } from 'rxjs';
import { AdvisorAssignments } from '../models/advisor-assignments';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  $baseurl = environment.baseurl;
  constructor(private http: HttpClient) {}

  getAdvisorstudents(advisor: Advisor): Observable<AdvisorAssignments[]> {
    let params = new HttpParams().set('advisor_id', advisor.advisor_id);

    return this.http.get<AdvisorAssignments[]>(
      this.$baseurl + 'advisor-assignments',
      { params }
    );
  }

  approveRequest(data:AdvisorAssignments){
    return this.http.post<AdvisorAssignments[]>(
      this.$baseurl + 'advisor-assignments/approve',
     data)
  }
}
