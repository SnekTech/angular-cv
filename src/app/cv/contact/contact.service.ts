import {Injectable} from "@angular/core";
import {ContactItem, syfContacts} from "./contactItem";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  getContacts(): ContactItem[] {
    return syfContacts;
  }
}
