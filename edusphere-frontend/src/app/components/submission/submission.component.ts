import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../../shared/services/submission.service';
import { Submission } from '../../shared/models/submission.model';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {
  submissions: Submission[] = [];
  newSubmission: Submission = {
    id: 0,
    studentName: 'string',
    assignmentId: 0,
    submittedDate: new Date(),
    status: false,
    remarks: 0,
  }; // Used for creating a new submission
  selectedSubmission: Submission | null = null; // Used for editing a submission

  constructor(private submissionService: SubmissionService) {}

  ngOnInit(): void {
    this.loadSubmissions();
  }

  loadSubmissions() {
    this.submissionService.getSubmissions().subscribe(data => {
      this.submissions = data;
    });
  }

  createSubmission() {
    this.submissionService.createSubmission(this.newSubmission).subscribe(() => {
      this.loadSubmissions();
      this.newSubmission = {
    id: 0,
    studentName: 'string',
    assignmentId: 0,
    submittedDate: new Date(),
    status: false,
    remarks: 0,
  };; // Clear the form
    });
  }

  editSubmission(submission: Submission) {
    this.selectedSubmission = { ...submission }; // Create a copy of the selected submission for editing
  }

  updateSubmission() {
    if (this.selectedSubmission) {
      this.submissionService.updateSubmission(this.selectedSubmission.id, this.selectedSubmission).subscribe(() => {
        this.loadSubmissions();
        this.selectedSubmission = null; // Clear the selected submission
      });
    }
  }

  cancelEdit() {
    this.selectedSubmission = null; // Cancel editing and clear the selected submission
  }

  deleteSubmission(id: number) {
    this.submissionService.deleteSubmission(id).subscribe(() => {
      this.loadSubmissions();
    });
  }
}
