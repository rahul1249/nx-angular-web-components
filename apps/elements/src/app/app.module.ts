import { DoBootstrap, NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { ElementsLibModule, ButtonComponent } from '@elements-lib';

@NgModule({
  imports: [BrowserModule, ElementsLibModule]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {}

  public ngDoBootstrap(): void {
    const customButtonElement = createCustomElement(ButtonComponent, { injector: this.injector });
    customElements.define('counter-button', customButtonElement);
  }

}
