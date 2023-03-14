import {DateRange} from "../date-range.component";
import {Injectable} from "@angular/core";

export type EducationItem = {
  university: '云南大学' | '中国科学技术大学' | string,
  dateRange: DateRange,
  city: '苏州' | '昆明' | string,
  major: '软件工程' | string,
  degree: '本科' | '硕士' | string;
  school: '软件学院' | string,
  GPA: string,
  onGoing: boolean,
}

export const syfEducationItems: EducationItem[] = [
  {
    university: "中国科学技术大学",
    dateRange: {
      from: '2020年9月',
      to: '2023年6月'
    },
    city: "苏州",
    major: "软件工程",
    school: "软件学院",
    GPA: '3.43',
    onGoing: true,
    degree: "硕士"
  },
  {
    university: "云南大学",
    dateRange: {
      from: '2015年9月',
      to: '2019年6月'
    },
    city: "昆明",
    major: "软件工程",
    school: "软件学院",
    GPA: '3.40',
    onGoing: false,
    degree: "本科",
  },
];

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  public getEducationItems(): EducationItem[] {
    return syfEducationItems;
  }

}
