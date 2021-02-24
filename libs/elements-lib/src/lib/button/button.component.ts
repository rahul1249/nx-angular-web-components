import { Component, Inject, Optional } from '@angular/core';
import { elementsBundleInfoToken } from '../elements-bundle-info-token';

@Component({
  selector: 'nx-angular-web-components-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  public clickCount = 0;
  public version = 'NA';
  public name = 'NA';

  constructor(@Optional() @Inject(elementsBundleInfoToken) private elementsBundleInfo) {
    this.version = this.elementsBundleInfo?.version;
    this.name = this.elementsBundleInfo?.name;
  }

  public increaseCount(): void {
    ++this.clickCount;
  }

}
