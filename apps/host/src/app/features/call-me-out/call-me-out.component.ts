import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-call-me-out',
  templateUrl: './call-me-out.component.html',
  styleUrls: ['./call-me-out.component.scss'],
})
export class CallMeOutComponent implements OnInit {
  form: FormGroup;

  list: string[] = [];

  target = '';

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      textarea: ['pedro\njoao\nhenrique lima\ntiago silva\ncristiana mello'],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const data = this.form.value['textarea'] ?? '';

    this.list = data.split('\n').filter(Boolean);
    this.getTarget();
  }

  getTarget() {
    const index = Math.floor(Math.random() * this.list.length);
    this.target = this.list[index];
  }

  /**
   * ref para animação de texto
   * https://codepen.io/bionik/pen/dzBweB?editors=1010
   */
}
