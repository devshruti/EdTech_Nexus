import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private baseUrl = 'http://127.0.0.1:8000/api/instructors/';

  constructor(private http: HttpClient) { }

  getInstructors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getInstructor(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}/`);
  }

  createInstructor(instructor: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, instructor);
  }

  updateInstructor(id: number, instructor: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${id}/`, instructor);
  }

  deleteInstructor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }
}
