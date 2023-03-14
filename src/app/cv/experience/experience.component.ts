import {Component,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateRangeComponent} from "../date-range.component";
import {ExperienceInfo} from "./experience.interface";
import {CvDataService} from "../cvData.service";
import {ExperienceItemComponent} from "./experience-item.component";
import {TitleUnderlinedComponent} from "../title-underlined/title-underlined.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, DateRangeComponent, ExperienceItemComponent, TitleUnderlinedComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: ExperienceInfo[];

  constructor(private cvData: CvDataService) {
    this.experiences = cvData.getExperiences();
  }
}
