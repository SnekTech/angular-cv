import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleUnderlinedComponent} from "../title-underlined/title-underlined.component";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TitleUnderlinedComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

}
