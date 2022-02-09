import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() name!: string;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    console.log('---ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('---ngOnDestroy');
  }

  onClick(event: any) {
    this.loaderService.close();
  }
}
