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
          <app-title-underlined>外语</app-title-underlined>
      </div>
  `,
  styles: [`
    :host {
      flex-shrink: 0;
      padding: 1rem;
      background-color: var(--primary-50);
    }
  `]
})
export class RightSideComponent {

}
