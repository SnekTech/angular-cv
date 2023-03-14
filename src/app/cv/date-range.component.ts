import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

export type DateRange = {
  from: string,
  to: string,
}

@Component({
  selector: 'app-date-range',
  standalone: true,
  imports: [CommonModule],
  template: `
    <style>
      :host {
        margin-right: 3rem;
        flex-shrink: 0;

        font-weight: bold;
        font-size: 0.9rem;
      }
    </style>

    <div>{{range.from}} ~</div>
    <div>{{range.to}}</div>
  `,
})
export class DateRangeComponent {
  @Input() range!: DateRange;
}
