import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {appRoutes} from "../appRoutes";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  cvRoutePath: string[];

  constructor() {
    this.cvRoutePath = appRoutes
      .filter(route => route.path != undefined)
      .map(route => route.path!);
  }
}
