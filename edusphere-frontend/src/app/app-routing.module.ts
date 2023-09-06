// Import the components you want to route to
import { StudentComponent } from './components/student/student.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { CourseComponent } from './components/course/course.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'instructors', component: InstructorComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'enrollments', component: EnrollmentComponent },
  { path: 'assignments', component: AssignmentComponent },
  { path: 'submissions', component: SubmissionComponent },
  // Define routes for other components
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
