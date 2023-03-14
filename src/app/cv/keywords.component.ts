import {Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-keywords',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngFor="let key of keywords">
      <div class="key">{{key}}</div>
    </ng-container>
  `,
  styles: [`
    :host {
      display: flex;
      color: var(--on-primary);
      font-size: small;

      .key {
        background-color: var(--primary);
        padding: 0.2rem;
        border-radius: 4px;
        margin-right: 0.2rem;
      }
    }
  `]
})
export class KeywordsComponent {
  @Input() keywords: string[] = [];
}
