import {Component, Input, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DateRangeComponent} from "../date-range.component";
import {Experience} from "./experience.interface";
import {KeywordsComponent} from "../keywords.component";

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [CommonModule, DateRangeComponent, KeywordsComponent],
  template: `
      <app-date-range [range]="info.dateRange"></app-date-range>
      <div class="content">
          <div class="company">{{info.company}}</div>
          <div class="job">{{info.job}} {{info.department}}</div>
          <app-keywords [keywords]="info.keywords"></app-keywords>
          <ng-container *ngTemplateOutlet="content"></ng-container>
      </div>
  `,
  styles: [`
    :host {
      display: flex;
    }
    .company {
      font-weight: bold;
      font-size: var(--subtitle-fSize);
    }
    .job {
      font-style: italic;
    }
    app-keywords {
      margin: 0.5rem 0;
    }
  `]
})
export class ExperienceItemComponent {
  @Input() info!: Experience;
  @Input() content!: TemplateRef<any>;
}
