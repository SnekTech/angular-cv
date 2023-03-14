import {Component,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateRangeComponent} from "../date-range.component";
import {ExperienceInfo} from "./experience.interface";
import {CvDataService} from "../cvData.service";
import {ExperienceItemComponent} from "./experience-item.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, DateRangeComponent, ExperienceItemComponent],
  template: `
    <div *ngFor="let content of [c1, c2]; let i = index;">
      <app-experience-item [info]="experiences[i]" [content]="content"></app-experience-item>
    </div>

    <ng-template #c1>
      c1
    </ng-template>
    <ng-template #c2>
      c2
    </ng-template>
  `,
  styles: [
  ]
})
export class ExperienceComponent {
  experiences: ExperienceInfo[];

  constructor(private cvData: CvDataService) {
    this.experiences = cvData.getExperiences();
  }
}
