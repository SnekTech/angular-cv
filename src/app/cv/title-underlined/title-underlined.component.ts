import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title-underlined',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="title">
      <ng-content></ng-content>
    </div>
    <div class="line"></div>
  `,
  styles: [`
    :host {
      margin-bottom: 0.5rem;
      display: flex;
      flex-direction: column;

      font-weight: bolder;
      font-size: large;

      .line {
        background-color: var(--on-surface-disabled);

        height: 2px;
        margin-top: 0.3rem;
      }
    }
  `],
})
export class TitleUnderlinedComponent {

}
