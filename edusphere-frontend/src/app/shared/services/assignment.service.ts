import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  private baseUrl = 'http://your-api-url-here/assignments'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAssignments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getAssignment(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createAssignment(assignment: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, assignment);
  }

  updateAssignment(id: number, assignment: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, assignment);
  }

  deleteAssignment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
