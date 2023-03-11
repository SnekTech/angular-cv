import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";

bootstrapApplication(AppComponent)
  .then(_ => console.log("App has launched successfully!"))
  .catch(reason => console.log(reason));
