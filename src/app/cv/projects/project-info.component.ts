import {Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Project} from "./projects.component";
import {KeywordsComponent} from "../keywords.component";

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [CommonModule, KeywordsComponent],
  template: `
    <div class="name">{{project.name}}</div>
    <app-keywords [keywords]="project.keywords"></app-keywords>
    <ul>
      <li *ngFor="let point of project.points">{{point}}</li>
    </ul>
  `,
  styles: [`
    .name {
      font-size: var(--subtitle-fSize);
      font-weight: bold;
    }

    ul {
      margin-left: 1.5rem;
    }
  `]
})
export class ProjectInfoComponent {
  @Input() project!: Project;
}
