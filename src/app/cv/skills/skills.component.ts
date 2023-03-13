import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleUnderlinedComponent} from "../title-underlined/title-underlined.component";
import {RatingComponent} from "../rating.component";

type Skill = {
  skillName: string,
  grasp: 1 | 2 | 3 | 4 | 5,
}

const syfSkills: Skill[] = [
  {skillName: 'C#', grasp: 5},
  {skillName: 'C++', grasp: 4},
  {skillName: 'Unity', grasp: 4},
  {skillName: 'JavaScript/TypeScript', grasp: 4},
];

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    TitleUnderlinedComponent,
    RatingComponent,
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = syfSkills;
}
