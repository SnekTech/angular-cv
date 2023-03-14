import {Component, Input, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DateRangeComponent} from "../date-range.component";
import {ExperienceInfo} from "./experience.interface";

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [CommonModule, DateRangeComponent],
  template: `
      <div class="date-range">
          <app-date-range [range]="info.dateRange"></app-date-range>
      </div>
      <div class="content">
          <div>{{info.company}}</div>
          <div>{{info.job}} {{info.department}}</div>
          <ng-container [ngTemplateOutlet]="content"></ng-container>
      </div>

  `,
})
export class ExperienceItemComponent {
  @Input() info!: ExperienceInfo;
  @Input() content!: TemplateRef<any>;
}
