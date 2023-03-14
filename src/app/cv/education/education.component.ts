import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleUnderlinedComponent} from "../title-underlined/title-underlined.component";
import {DateRangeComponent} from "../date-range.component";
import {EducationItem, EducationService} from "./education.service";


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TitleUnderlinedComponent, DateRangeComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationItems: EducationItem[];

  constructor(private educationService: EducationService) {
    this.educationItems = educationService.getEducationItems();
  }
}
