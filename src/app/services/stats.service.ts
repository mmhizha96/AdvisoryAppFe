import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatsFilter, StatsRes } from '../pages/dashboard/dashboard.component';
import { environment } from '../../environments/environment';
import { Student } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  baseurl=environment.baseurl;
  constructor(private http: HttpClient) {}

  getStats(data:StatsFilter): Observable<StatsRes> {
    let params = new HttpParams();


    for (const key of Object.keys(data)) {
      const value = data[key as keyof StatsFilter];
      if (value !== undefined) {
        params = params.append(key, value.toString());
      }
    }

    return this.http.get<StatsRes>(this.baseurl+"dashboardstats",{params});
  }
}
