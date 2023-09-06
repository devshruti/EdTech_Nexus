import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/shared/models/department.model';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: Department[] = [];
  selectedDepartment: Department | null = null;
  isNewDepartment: boolean = false;
  departmentForm: Department = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe((data) => {
      this.departments = data;
    });
  }

  selectDepartment(department: Department): void {
    this.selectedDepartment = department;
    this.isNewDepartment = false;
  }

  createNewDepartment(): void {
    this.selectedDepartment = null;
    this.isNewDepartment = true;
    this.departmentForm = {
      id: 0,
      name: '',
      description: ''
    };
  }

  saveDepartment(): void {
    if (this.isNewDepartment) {
      this.departmentService.createDepartment(this.departmentForm).subscribe(() => {
        this.loadDepartments();
        this.isNewDepartment = false;
      });
    } else if (this.selectedDepartment) {
      this.departmentService.updateDepartment(this.selectedDepartment.id, this.departmentForm).subscribe(() => {
        this.loadDepartments();
      });
    }
  }

  deleteDepartment(id: number): void {
    if (confirm('Are you sure you want to delete this department?')) {
      this.departmentService.deleteDepartment(id).subscribe(() => {
        this.loadDepartments();
      });
    }
  }
}
