// student.component.ts
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

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  // Implement other component logic (e.g., CRUD operations) here
}
