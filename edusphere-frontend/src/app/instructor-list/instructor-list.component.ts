// instructor-list.component.ts
import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../services/instructor.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {
  instructors: any[] = []; // Define the type for instructors

  constructor(private instructorService: InstructorService) {}

  ngOnInit(): void {
    this.loadInstructors();
  }

  loadInstructors(): void {
    this.instructorService.getInstructors().subscribe((data) => {
      this.instructors = data;
    });
  }
}
