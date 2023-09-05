import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';
import { InstructorCreateComponent } from './instructor-create/instructor-create.component';
import { InstructorEditComponent } from './instructor-edit/instructor-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/instructors', pathMatch: 'full' },
  { path: 'instructors', component: InstructorListComponent },
  { path: 'instructors/:id', component: InstructorDetailComponent },
  { path: 'instructors/create', component: InstructorCreateComponent },
  { path: 'instructors/edit/:id', component: InstructorEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
