import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) {}
  getStats() {
    return this.http.get('http://localhost:3001/stats');
  }
}
