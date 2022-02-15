import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallMeOutRoutingModule } from './call-me-out-routing.module';
import { CallMeOutComponent } from './call-me-out.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CallMeOutComponent],
  imports: [CommonModule, CallMeOutRoutingModule, ReactiveFormsModule],
})
export class CallMeOutModule {}
