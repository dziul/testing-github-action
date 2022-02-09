import {
  ApplicationRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  ViewContainerRef,
  createNgModuleRef,
  ComponentRef,
} from '@angular/core';

import { LoaderComponent } from './loader.component';
import { LoaderModule } from './loader.module';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private componentRef?: ComponentRef<LoaderComponent>;

  constructor(private injector: Injector, private appRef: ApplicationRef) {}

  close() {
    if (!this.componentRef) return;
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
    this.componentRef = undefined;
  }

  open(viewContainerRef: ViewContainerRef) {
    // async open(viewContainerRef: ViewContainerRef) {
    // const { LoaderComponent } = await import('./loader.component');
    // const { LoaderModule } = await import('./loader.module');
    if (this.componentRef) return;
    this.componentRef = viewContainerRef.createComponent(LoaderComponent, {
      injector: this.injector,
      ngModuleRef: createNgModuleRef(LoaderModule, this.injector),
    });

    this.componentRef.instance.name = 'teste';

    // this.appRef.attachView(componentRef.hostView);

    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);
  }
}
