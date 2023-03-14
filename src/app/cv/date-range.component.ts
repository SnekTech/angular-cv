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
        --flexBasis: 7rem;
        flex-basis: var(--flexBasis);
        font-weight: bold;
      }
    </style>

    <div>{{range.from}} ~</div>
    <div>{{range.to}}</div>
  `,
})
export class DateRangeComponent {
  @Input() range!: DateRange;
}
