import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleUnderlinedComponent} from "../title-underlined/title-underlined.component";

@Component({
  selector: 'app-software-engineer',
  standalone: true,
  imports: [CommonModule, TitleUnderlinedComponent],
  templateUrl: './software-engineer.component.html',
  styleUrls: ['./software-engineer.component.scss']
})
export class SoftwareEngineerComponent {

}
