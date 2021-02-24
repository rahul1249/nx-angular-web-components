import { Component } from '@angular/core';

@Component({
  selector: 'nx-angular-web-components-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  public clickCount = 0;

  public increaseCount(): void {
    ++this.clickCount;
  }

}
