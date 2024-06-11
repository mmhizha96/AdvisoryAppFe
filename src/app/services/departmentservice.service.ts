import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../Model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentserviceService {
$baseurl=environment.baseurl;
  constructor(private http:HttpClient) { }


  getdepartments():Observable<Department[]>{
    return this.http.get<Department[]>(this.$baseurl+"departments");
  }
}
