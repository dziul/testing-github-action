import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingFormRoutingModule } from './testing-form-routing.module';
import { TestingFormComponent } from './testing-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItChildFieldModule } from './it-child-field/it-child-field.module';

@NgModule({
  declarations: [TestingFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestingFormRoutingModule,
    ItChildFieldModule,
  ],
})
export class TestingFormModule {}
