import {Component, Input, TemplateRef} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Project} from "./projects.component";
import {KeywordsComponent} from "../keywords.component";

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [CommonModule, KeywordsComponent],
  template: `
    <div class="name">{{info.name}}</div>
    <app-keywords [keywords]="info.keywords"></app-keywords>
    <ng-container *ngTemplateOutlet="detail"></ng-container>
  `,
  styles: [`
    .name {
      font-size: var(--subtitle-fSize);
      font-weight: bold;
    }
  `]
})
export class ProjectInfoComponent {
  @Input() info!: Project;
  @Input() detail!: TemplateRef<any>;
}
