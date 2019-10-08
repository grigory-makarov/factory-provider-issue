import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';

import { AppComponent } from './app.component';
import { PROVIDED_OBJECT, ProvidedObject } from './provided-object';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: PROVIDED_OBJECT, useFactory() { return new ProvidedObject(); } },
    { provide: ProvidedObject, useFactory() { return new ProvidedObject(); }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PROVIDED_OBJECT) case1: ProvidedObject,
    case2: ProvidedObject) {
      console.log(case1, case2);
    }
}
