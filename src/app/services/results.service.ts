import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Student } from '../Model/student';
import { Observable } from 'rxjs';

import { Level } from '../models/level';
import { Semester } from '../models/semester';
import { Result, ResultData } from '../models/result';
import { ResultTrend } from '../models/result-trend';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  baseurl=environment.baseurl;
  constructor(private http:HttpClient) { }


  getstudentResults(data:ResultData):Observable<Result[]>{

    let params = new HttpParams();


    for (const key of Object.keys(data)) {
      const value = data[key as keyof ResultData];
      if (value !== undefined) {
        params = params.append(key, value.toString());
      }
    }


return this.http.get<Result[]>(this.baseurl+"results",{params});
  }
  getResultTrends(student_id:number): Observable<ResultTrend[]> {
    let params= new HttpParams().set('student_id',student_id);
    return this.http.get<ResultTrend[]>(this.baseurl+'result-trends',{params});
  }


  createResults(data:ResultData):Observable<Resultresponse>{
    return this.http.post<Resultresponse>(this.baseurl+"results",data);
  }
  getLevels():Observable<Level[]>{
    return this.http.get<Level[]>(this.baseurl+"levels");
  }
  getSemesters():Observable<Semester[]>{
    return this.http.get<Semester[]>(this.baseurl+"semesters");
  }

}
export class Resultresponse{
  message!:string
}
