import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../shared/services/course.service';
import { Course } from '../../shared/models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  newCourse: Course ={
        id: 0,
        title: '',
        description: '',
        instructorId: 0,  
        startDate: new Date(),     
        endDate: new Date(),         
        courseName: '',    
        enrolledStudents: 0,
        department:'',
        courseCode: 0,
        // Initialize other properties as needed
      };; // Used for creating a new course
  selectedCourse: Course | null = null; // Used for editing a course

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  createCourse() {
    this.courseService.createCourse(this.newCourse).subscribe(() => {
      this.loadCourses();
      this.newCourse ={
        id: 0,
        title: '',
        description: '',
        instructorId: 0,  
        startDate: new Date(),     
        endDate: new Date(),          
        courseName: '',  
        enrolledStudents: 0,
        department:'',
        courseCode: 0,
        // Initialize other properties as needed
      };; // Clear the form
    });
  }

  editCourse(course: Course) {
    this.selectedCourse = { ...course }; // Create a copy of the selected course for editing
  }

  updateCourse() {
    if (this.selectedCourse) {
      this.courseService.updateCourse(this.selectedCourse.id, this.selectedCourse).subscribe(() => {
        this.loadCourses();
        this.selectedCourse = null; // Clear the selected course
      });
    }
  }

  cancelEdit() {
    this.selectedCourse = null; // Cancel editing and clear the selected course
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe(() => {
      this.loadCourses();
    });
  }
}
