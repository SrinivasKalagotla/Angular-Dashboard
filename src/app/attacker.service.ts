import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttackerService {
  private baseUrl = 'http://iotui.us-east-1.elasticbeanstalk.com//api/v1/attackers';

  constructor(private http: HttpClient) { }

  getAttacker(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteAttacker(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });   
  }

  getAttackersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
