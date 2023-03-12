import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title-underlined',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="title">
        <ng-content></ng-content>
      </div>
      <div class="line"></div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      padding: 0.5rem;

      color: var(--on-surface);
      font-weight: bolder;
      font-size: larger;

      .line {
        //background-color: var(--on-surface);

        border: 1px solid var(--on-surface);
        margin-top: 0.3rem;
      }
    }
  `],
})
export class TitleUnderlinedComponent {

}
