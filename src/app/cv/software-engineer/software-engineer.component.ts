import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleUnderlinedComponent} from "../title-underlined/title-underlined.component";
import {ContactComponent} from "../contact/contact.component";
import {SkillsComponent} from "../skills/skills.component";
import {EducationComponent} from "../education/education.component";

@Component({
  selector: 'app-software-engineer',
  standalone: true,
  imports: [
    CommonModule,
    TitleUnderlinedComponent,
    ContactComponent,
    SkillsComponent,
    EducationComponent,
  ],
  templateUrl: './software-engineer.component.html',
  styleUrls: ['./software-engineer.component.scss']
})
export class SoftwareEngineerComponent {

}
