import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  BehaviorSubject,
  concat,
  delay,
  finalize,
  last,
  map,
  mapTo,
  merge,
  Observable,
  of,
  startWith,
  Subject,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  timer,
} from 'rxjs';

interface BufferData {
  time: number;
  letter: string;
}

@Component({
  selector: 'app-call-me-out',
  templateUrl: './call-me-out.component.html',
  styleUrls: ['./call-me-out.component.scss'],
})
export class CallMeOutComponent implements OnInit {
  form: FormGroup;

  list: string[] = [];

  characters = '&#*+%?£@§$';

  message!: Observable<string>;
  messageCache = '';
  private messageSubject = new Subject<string>();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      textarea: ['pedro\njoao\nhenrique lima\ntiago silva\ncristiana mello'],
    });
  }

  onSubmit() {
    const data = this.form.value['textarea'] ?? '';

    this.list = data.split('\n').filter(Boolean);
    this.getTarget();
  }

  getTarget() {
    const index = Math.floor(Math.random() * this.list.length);
    this.messageCache = this.list[index];
    this.messageSubject.next(this.messageCache);
  }

  generateHash(length: number) {
    let result = '';
    while (result.length < length) {
      // const random = window.crypto.getRandomValues(new Uint32Array(1))[0]/2**32; //to fortify
      const random = Math.random();
      const index = Math.floor(random * this.characters.length);
      result += this.characters[index];
    }
    return result;
  }

  hideBuffer(text: string, index: number) {
    const shift = 1;
    const countWithShift = index + shift;

    if (countWithShift < text.length) {
      return this.generateHash(countWithShift);
    }

    return this.generateHash(text.length);
  }

  showBuffer(text: string, buffer: BufferData[]) {
    const delay = 18;
    let textNew = '';

    if (!buffer.length) {
      text.split('').forEach((letter) => {
        buffer.push({ time: Math.floor(Math.random() * delay) + 1, letter });
      });
    }

    buffer.forEach((data) => {
      if (data.time > 0) {
        data.time--;
        const index = Math.floor(Math.random() * this.characters.length);
        textNew += this.characters[index];
      } else {
        textNew += data.letter;
      }
    });

    return textNew;
  }

  ngOnInit() {
    const delay = timer(200).pipe(startWith('&nbsp;'), mapTo('&nbsp;'));
    const hideWatch = (text: string) =>
      timer(0, 25).pipe(
        takeWhile((index) => index !== text.length),
        map((index) => this.hideBuffer(text, index))
      );

    const showWatch = (text: string) =>
      of(null).pipe(
        switchMap(() => {
          const buffer: BufferData[] = [];
          let result = '';

          return timer(0, 55).pipe(
            takeWhile(() => result !== text),
            map(() => this.showBuffer(text, buffer)),

            tap((value) => {
              result = value;
            })
          );
        })
      );

    this.message = this.messageSubject.pipe(
      switchMap((text) => concat(delay, hideWatch(text), showWatch(text)))
    );
  }

  /**
   * ref para animação de texto
   * https://codepen.io/bionik/pen/dzBweB?editors=1010
   */
}
