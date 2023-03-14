import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from "../contact/contact.component";
import {SkillsComponent} from "../skills/skills.component";
import {TitleUnderlinedComponent} from "../title-underlined/title-underlined.component";

@Component({
  selector: 'app-right-side',
  standalone: true,
  imports: [CommonModule, ContactComponent, SkillsComponent, TitleUnderlinedComponent],
  template: `
      <app-contact></app-contact>
      <app-skills></app-skills>
      <div class="language">
          <app-title-underlined>语言</app-title-underlined>
          <div class="english">英语</div>
          <div>
              CET-6（507分）和CET-4（604分）裸考一次通过，
              能够无障碍阅读英文技术文档、无字幕观看英文技术相关视频、高效率检索英文信息，有把握在专业相关领域正确使用英文
          </div>
      </div>
  `,
  styles: [`
    :host {
      max-width: 16rem;
      flex-shrink: 0;
      padding: 1rem;
      background-color: var(--primary-50);

      .english {
        font-weight: bold;
        font-size: var(--subtitle-fSize);
      }
    }
  `]
})
export class RightSideComponent {

}
