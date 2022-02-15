import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingFormComponent } from './testing-form.component';

const routes: Routes = [
  {
    path: '',
    component: TestingFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingFormRoutingModule {}
