import {Routes} from "@angular/router";

export const appRoutes: Routes = [
  {
    path: 'game-dev',
    loadComponent: () => import("./cv/game-dev/game-dev.component")
      .then(mod => mod.GameDevComponent)
  },
  {
    path: 'software-engineer',
    loadComponent: () => import("./cv/software-engineer/software-engineer.component")
      .then(mod => mod.SoftwareEngineerComponent)
  }
];
