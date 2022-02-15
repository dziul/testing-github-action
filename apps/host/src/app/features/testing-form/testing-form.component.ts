import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testing-form',
  templateUrl: './testing-form.component.html',
  styleUrls: ['./testing-form.component.scss'],
})
export class TestingFormComponent implements OnInit {
  form: FormGroup;

  formResult?: string;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.minLength(3), Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('form.valid', this.form.valid);
    console.log('form', this.form);
  }
}
