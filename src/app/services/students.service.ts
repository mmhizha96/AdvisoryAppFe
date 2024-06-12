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

  approveRequest(data:AdvisorAssignments):Observable<StudentsServiceResponse>{
    return this.http.post<StudentsServiceResponse>(
      this.$baseurl + 'advisor-assignments/approve',
     data)
  }

  deletestudentRequest(data:AdvisorAssignments):Observable<StudentsServiceResponse>{
    let params = new HttpParams().set('assignment_id', data.assignment_id);
   return this.http.delete<StudentsServiceResponse>(
      this.$baseurl + 'advisor-assignments/delete',{params}

    );
  }
}



export class StudentsServiceResponse{
  message!:string
}
