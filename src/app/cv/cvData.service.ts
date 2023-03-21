import {Injectable} from "@angular/core";
import {Experience, syfExperiences} from "./experience/experience.interface";
import {Project, syfProjects} from "./projects/projects.component";

@Injectable({
  providedIn: "root"
})
export class CvDataService {
  getExperiences(): Experience[] {
    return syfExperiences;
  }
  getProjects(): Project[] {
    return syfProjects;
  }
}
