import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

let nextId = 0;

interface Config {
  id: string;
  label: string;
  value: string;
  input: boolean;
}

@Component({
  selector: 'app-it-child-field',
  templateUrl: './it-child-field.component.html',
  styleUrls: ['./it-child-field.component.scss'],
})
export class ItChildFieldComponent implements OnInit {
  @Input() form?: FormGroup;
  @Input() config: Partial<Config> = {};

  uuid = `input-${nextId++}`;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (this.config.input && this.config.id && this.form) {
      this.form?.addControl(
        this.config.id,
        this.formBuilder.control(this.config.value ?? '', [Validators.required])
      );
    }
  }
}
