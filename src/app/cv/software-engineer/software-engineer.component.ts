import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EducationComponent} from "../education/education.component";
import {ExperienceComponent} from "../experience/experience.component";
import {RightSideComponent} from "../right-side/right-side.component";
import {ProjectsComponent} from "../projects/projects.component";

@Component({
  selector: 'app-software-engineer',
  standalone: true,
  imports: [
    CommonModule,
    EducationComponent,
    ExperienceComponent,
    RightSideComponent,
    ProjectsComponent,
  ],
  templateUrl: './software-engineer.component.html',
  styleUrls: ['./software-engineer.component.scss']
})
export class SoftwareEngineerComponent {

}
