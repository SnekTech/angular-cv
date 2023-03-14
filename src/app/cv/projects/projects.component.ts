import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleUnderlinedComponent} from "../title-underlined/title-underlined.component";
import {CvDataService} from "../cvData.service";
import {ProjectInfoComponent} from "./project-info.component";

export type Project = {
  name: string,
  keywords: string[]
}
export const syfProjects: Project[] = [
  {
    name: '软件实现的光栅化渲染器',
    keywords: ['业余时间自学', 'C++', 'OpenGL', '计算机图形学', '光栅化', '渲染管线']
  },
  {
    name: 'Roguelike 扫雷游戏',
    keywords: ['毕业设计', 'C#', 'Unity', 'Roguelike', '设计模式', 'TDD 测试驱动开发']
  },
]

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TitleUnderlinedComponent, ProjectInfoComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects: Project[];
  constructor(private cvData: CvDataService) {
    this.projects = cvData.getProjects();
  }
}
