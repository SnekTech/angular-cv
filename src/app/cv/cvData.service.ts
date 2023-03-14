import {Injectable} from "@angular/core";
import {ExperienceInfo, syfExperiences} from "./experience/experience.interface";
import {Project, syfProjects} from "./projects/projects.component";

@Injectable({
  providedIn: "root"
})
export class CvDataService {
  getExperiences(): ExperienceInfo[] {
    return syfExperiences;
  }
  getProjects(): Project[] {
    return syfProjects;
  }
}
