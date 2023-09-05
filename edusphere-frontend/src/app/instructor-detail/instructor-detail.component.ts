import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from '../services/instructor.service'; // Make sure to import your service

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {
  instructor:  any; // Define the type for instructor

  constructor(
    private route: ActivatedRoute,
    private instructorService: InstructorService
  ) {}

  ngOnInit(): void {
    this.loadInstructorDetail();
  }

  loadInstructorDetail(): void {
    const idParam = this.route.snapshot.paramMap.get('id'); // Get the instructor ID as a string
    const id = Number(idParam); // Convert the string to a number
    if (!isNaN(id)) { // Check if the conversion is successful
      this.instructorService.getInstructor(id).subscribe((data) => {
        this.instructor = data;
      });
    }
  }
}
