import {Component,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateRangeComponent} from "../date-range.component";
import {Experience} from "./experience.interface";
import {CvDataService} from "../cvData.service";
import {ExperienceItemComponent} from "./experience-item.component";
import {TitleUnderlinedComponent} from "../title-underlined/title-underlined.component";
import {KeywordsComponent} from "../keywords.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    DateRangeComponent,
    ExperienceItemComponent,
    TitleUnderlinedComponent,
    KeywordsComponent
  ],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  experiences: Experience[];

  constructor(private cvData: CvDataService) {
    this.experiences = cvData.getExperiences();
  }
}
