import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { LoaderService } from './core/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'host';

  constructor(
    private loaderService: LoaderService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.onClick();
  }

  onClick() {
    this.loaderService.open(this.viewContainerRef);
  }
}
