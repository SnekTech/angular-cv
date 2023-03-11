import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'game-dev',
    loadComponent: () => import("./app/game-dev/game-dev.component")
      .then(mod => mod.GameDevComponent)
  },
  {
    path: 'software-engineer',
    loadComponent: () => import("./app/software-engineer/software-engineer.component")
      .then(mod => mod.SoftwareEngineerComponent)
  }
];
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
  .then(_ => console.log("App has launched successfully!"))
  .catch(reason => console.log(reason));
