import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleUnderlinedComponent} from "../title-underlined/title-underlined.component";
import {RatingComponent} from "../rating.component";

type Skill = {
  name: string,
  grasp: 1 | 2 | 3 | 4 | 5,
}

const syfSkills: Skill[] = [
  {name: 'C#/.Net', grasp: 5},
  {name: 'C++', grasp: 4},
  {name: 'Unity', grasp: 4},
  {name: 'JavaScript/TypeScript', grasp: 4},
  {name: '计算机图形学', grasp: 4},
  {name: '算法与数据结构', grasp: 4},
  {name: '设计模式', grasp: 4},
  {name: '操作系统', grasp: 4},
  {name: '计算机网络', grasp: 3},
  {name: '数据库', grasp: 4},
  {name: 'Angular', grasp: 4},
  {name: 'Git', grasp: 5},
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
