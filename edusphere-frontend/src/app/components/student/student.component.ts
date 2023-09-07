import { Component, OnInit } from '@angular/core';
import { Student } from '../../shared/models/student.model';
import { StudentService } from '../../shared/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  newStudent: Student = new Student(); // A new student for creating

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  // Load students from the service
  loadStudents(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  // Create a new student
  createStudent(): void {
    this.studentService.createStudent(this.newStudent).subscribe(() => {
      this.loadStudents(); // Reload the list after creating
      this.newStudent = new Student(); // Clear the form
    });
  }

  // Edit an existing student
  editStudent(student: Student): void {
    // Implement the edit logic, e.g., show a modal or navigate to an edit page
    // You can also create an editStudent method in your service and use it here.
  }

  // Delete a student by ID
  deleteStudent(studentId: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(studentId).subscribe(() => {
        this.loadStudents(); // Reload the list after deleting
      });
    }
  }
}
