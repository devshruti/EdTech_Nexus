// instructor-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from '../services/instructor.service';

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.css']
})
export class InstructorEditComponent implements OnInit {
  instructor: any = {}; // Define the type for instructor
  instructorId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private instructorService: InstructorService
  ) {
    this.instructorId = 0; // Or any other default value if applicable 
  }

  ngOnInit(): void {
    this.instructorId = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(this.instructorId)) {
      this.instructorService.getInstructor(this.instructorId).subscribe((data) => {
        this.instructor = data;
      });
    }
  }

  updateInstructor(): void {
    this.instructorService.updateInstructor(this.instructorId, this.instructor).subscribe(() => {
      // Instructor updated successfully, navigate to instructor list or another page
      this.router.navigate(['/instructor-management']);
    });
  }
}
