import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../../shared/services/assignment.service';
import { Assignment } from '../../shared/models/assignment.model';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  assignments: Assignment[] = [];
  newAssignment: Assignment =  {
    id: 0,
    title: '',
    description: '',
    dueDate: new Date(),
    // Initialize other properties as needed
  }; // Used for creating a new assignment
  selectedAssignment: Assignment | null = null; // Used for editing an assignment

  constructor(private assignmentService: AssignmentService) {}

  ngOnInit(): void {
    this.loadAssignments();
  }

  loadAssignments() {
    this.assignmentService.getAssignments().subscribe(data => {
      this.assignments = data;
    });
  }

  createAssignment() {
    this.assignmentService.createAssignment(this.newAssignment).subscribe(() => {
      this.loadAssignments();
      this.newAssignment = {
        id: 0,
        title: '',
        description: '',
        dueDate: new Date(),
        // Initialize other properties as needed
      };; // Clear the form
    });
  }

  editAssignment(assignment: Assignment) {
    this.selectedAssignment = { ...assignment }; // Create a copy of the selected assignment for editing
  }

  updateAssignment(id: number, updatedAssignment: any) {
      this.assignmentService.updateAssignment(id, updatedAssignment).subscribe(() => {
        this.loadAssignments();
        this.selectedAssignment = null; // Clear the selected assignment
      });
  }

  cancelEdit() {
    this.selectedAssignment = null; // Cancel editing and clear the selected assignment
  }

  deleteAssignment(id: number) {
    this.assignmentService.deleteAssignment(id).subscribe(() => {
      this.loadAssignments();
    });
  }
}
