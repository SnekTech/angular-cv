import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleUnderlinedComponent} from "../title-underlined/title-underlined.component";
import {ContactService} from "./contact.service";
import {ContactItem} from "./contactItem";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TitleUnderlinedComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts: ContactItem[];
  constructor(private contactService: ContactService) {
    this.contacts = contactService.getContacts();
  }
}
