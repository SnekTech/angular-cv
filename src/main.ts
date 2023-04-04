import {bootstrapApplication} from "@angular/platform-browser";
import {provideRouter} from "@angular/router";
import {AppComponent} from "./app/app.component";
import {appRoutes} from "./app/appRoutes";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(BrowserAnimationsModule)
]
})
  .then(_ => console.log("App has launched successfully!"))
  .catch(reason => console.log(reason));
