import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DateRangeComponent} from "../date-range.component";
import {Experience} from "./experience.interface";
import {KeywordsComponent} from "../keywords.component";

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [CommonModule, DateRangeComponent, KeywordsComponent],
  template: `
    <app-date-range [range]="experience.dateRange"></app-date-range>
    <div class="content">
      <div class="company">{{experience.company}}</div>
      <div class="job">{{experience.job}} {{experience.department}}</div>
      <app-keywords [keywords]="experience.keywords"></app-keywords>
      <ul>
        <li *ngFor="let point of experience.points">
          {{point}}
        </li>
      </ul>
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
  @Input() experience!: Experience;
}
