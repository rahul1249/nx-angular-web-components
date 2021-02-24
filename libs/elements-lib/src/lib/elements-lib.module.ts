import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent],
})
export class ElementsLibModule {}

export { ButtonComponent } from './button/button.component';
export { elementsBundleInfoToken } from './elements-bundle-info-token';
