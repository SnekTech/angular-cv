import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "./sidebar/sidebar.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    SidebarComponent,
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cv';
}
