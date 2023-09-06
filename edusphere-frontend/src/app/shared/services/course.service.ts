import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://your-api-url-here/courses'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getCourse(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createCourse(course: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, course);
  }

  updateCourse(id: number, course: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
