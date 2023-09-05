// instructor-create.component.ts
import { Component } from '@angular/core';
import { InstructorService } from '../services/instructor.service';

@Component({
  selector: 'app-instructor-create',
  templateUrl: './instructor-create.component.html',
  styleUrls: ['./instructor-create.component.css']
})
export class InstructorCreateComponent {
  constructor(private instructorService: InstructorService) {}

  // Define an object to hold the form data
  instructorForm: any = {};

  createInstructor(formData: any): void {
    // Use formData to send the data to your service
    this.instructorService.createInstructor(formData).subscribe((response) => {
      // Handle the response or any additional logic here
      console.log('Instructor created successfully:', response);
    });
  }
}
