import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItChildFieldComponent } from './it-child-field.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ItChildFieldComponent],
  exports: [ItChildFieldComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ItChildFieldModule {}
