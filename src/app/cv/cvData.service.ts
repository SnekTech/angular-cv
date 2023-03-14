import {Injectable} from "@angular/core";
import {ExperienceInfo, syfExperiences} from "./experience/experience.interface";

@Injectable({
  providedIn: "root"
})
export class CvDataService {
  getExperiences(): ExperienceInfo[] {
    return syfExperiences;
  }
}
