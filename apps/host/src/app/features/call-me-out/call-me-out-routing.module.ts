import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallMeOutComponent } from './call-me-out.component';

const routes: Routes = [
  {
    path: '',
    component: CallMeOutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallMeOutRoutingModule {}
