import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorEditComponent } from './instructor-edit.component';

describe('InstructorEditComponent', () => {
  let component: InstructorEditComponent;
  let fixture: ComponentFixture<InstructorEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorEditComponent]
    });
    fixture = TestBed.createComponent(InstructorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
