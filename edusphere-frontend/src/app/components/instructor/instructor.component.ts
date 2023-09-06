import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../shared/services/instructor.service';
import { Instructor } from '../../shared/models/instructor.model';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  instructors: Instructor[] = [];
  newInstructor: any = {}; // Define the type appropriately if possible
  editInstructor(instructor: any) {
    // Add your logic here to handle editing of instructors
  }
  
  constructor(private instructorService: InstructorService) {}

  ngOnInit(): void {
    this.loadInstructors();
  }

  loadInstructors() {
    this.instructorService.getInstructors().subscribe(data => {
      this.instructors = data;
    });
  }

  createInstructor(instructor: Instructor) {
    this.instructorService.createInstructor(instructor).subscribe(() => {
      this.loadInstructors();
    });
  }

  updateInstructor(instructor: Instructor) {
    this.instructorService.updateInstructor(instructor.id, instructor).subscribe(() => {
      this.loadInstructors();
    });
  }

  deleteInstructor(id: number) {
    this.instructorService.deleteInstructor(id).subscribe(() => {
      this.loadInstructors();
    });
  }
}
