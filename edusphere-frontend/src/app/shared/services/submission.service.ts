import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  private baseUrl = 'http://your-api-url-here/submissions'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getSubmissions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getSubmission(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createSubmission(submission: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, submission);
  }

  updateSubmission(id: number, submission: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, submission);
  }

  deleteSubmission(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
