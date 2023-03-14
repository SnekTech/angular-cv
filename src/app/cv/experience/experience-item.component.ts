import {Component, Input, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DateRangeComponent} from "../date-range.component";
import {ExperienceInfo} from "./experience.interface";

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [CommonModule, DateRangeComponent],
  template: `
      <app-date-range [range]="info.dateRange"></app-date-range>
      <div class="content">
          <div class="company">{{info.company}}</div>
          <div class="job">{{info.job}} {{info.department}}</div>
          <ng-container *ngTemplateOutlet="content"></ng-container>
      </div>
  `,
  styles: [`
    :host {
      display: flex;
    }
    .company {
      font-weight: bold;
    }
    .job {
      font-style: italic;
    }
  `]
})
export class ExperienceItemComponent {
  @Input() info!: ExperienceInfo;
  @Input() content!: TemplateRef<any>;
}
