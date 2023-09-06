import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './components/student/student.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { CourseComponent } from './components/course/course.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { StudentService } from './shared/services/student.service';
import { InstructorService } from './shared/services/instructor.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    InstructorComponent,
    AssignmentComponent,
    EnrollmentComponent,
    CourseComponent,
    SubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    StudentService,
    InstructorService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
