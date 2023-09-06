import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../shared/services/enrollment.service';
import { Enrollment } from '../../shared/models/enrollment.model';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  enrollments: Enrollment[] = [];
  newEnrollment: Enrollment = {
    id: 0,           
    studentId: 0,     
    courseId: 0,      
    enrollmentDate: new Date(), 
    status: '',     
    // Add other properties as needed
  }; // Used for creating a new enrollment
  selectedEnrollment: Enrollment | null = null; // Used for editing an enrollment

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.loadEnrollments();
  }

  loadEnrollments() {
    this.enrollmentService.getEnrollments().subscribe(data => {
      this.enrollments = data;
    });
  }

  createEnrollment() {
    this.enrollmentService.createEnrollment(this.newEnrollment).subscribe(() => {
      this.loadEnrollments();
      this.newEnrollment = {
        id: 0,           
        studentId: 0,     
        courseId: 0,      
        enrollmentDate: new Date(), 
        status: '',  
  }; // Clear the form
    });
  }

  editEnrollment(enrollment: Enrollment) {
    this.selectedEnrollment = { ...enrollment }; // Create a copy of the selected enrollment for editing
  }

  updateEnrollment() {
    if (this.selectedEnrollment) {
      this.enrollmentService.updateEnrollment(this.selectedEnrollment.id, this.selectedEnrollment).subscribe(() => {
        this.loadEnrollments();
        this.selectedEnrollment = null; // Clear the selected enrollment
      });
    }
  }

  cancelEdit() {
    this.selectedEnrollment = null; // Cancel editing and clear the selected enrollment
  }

  deleteEnrollment(id: number) {
    this.enrollmentService.deleteEnrollment(id).subscribe(() => {
      this.loadEnrollments();
    });
  }
}
