import {bootstrapApplication} from "@angular/platform-browser";
import {provideRouter} from "@angular/router";
import {AppComponent} from "./app/app.component";
import {appRoutes} from "./app/appRoutes";


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes)
  ]
})
  .then(_ => console.log("App has launched successfully!"))
  .catch(reason => console.log(reason));
