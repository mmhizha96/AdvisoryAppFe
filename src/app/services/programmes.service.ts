import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Programme } from '../Model/programme';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgrammesService {
baseurl=environment.baseurl;
  constructor(private http:HttpClient) { }

  getprogrammes():Observable<Programme[]>{

    return this.http.get<Programme[]>(this.baseurl+"programmes");

  }
}
