import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'testing-form',
    loadChildren: async () =>
      (await import('./features/testing-form/testing-form.module'))
        .TestingFormModule,
  },
  {
    path: 'call-me-out',
    loadChildren: async () =>
      (await import('./features/call-me-out/call-me-out.module'))
        .CallMeOutModule,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
