import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleUnderlinedComponent} from "../title-underlined/title-underlined.component";
import {ContactService} from "./contact.service";
import {ContactItem} from "./contactItem";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TitleUnderlinedComponent],
  template: `
      <app-title-underlined>联系方式</app-title-underlined>
      <ul class="items">
          <li *ngFor="let contact of contacts;">
              <div class="name">{{contact.name}}</div>
              <div>{{contact.value}}</div>
          </li>
      </ul>
  `,
  styles: [`
    .items {
      margin: 0;
      padding: 0 0.5rem;
      list-style: none;

      .name {
        font-weight: bold;
        font-size: small;
      }
    }
  `]
})
export class ContactComponent {
  contacts: ContactItem[];
  constructor(private contactService: ContactService) {
    this.contacts = contactService.getContacts();
  }
}
