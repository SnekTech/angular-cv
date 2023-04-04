import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    SidebarComponent,
    CommonModule,
    MatButtonModule,
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cv';

  isPrintMode = false;
}
