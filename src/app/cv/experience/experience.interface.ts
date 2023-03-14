import {DateRange} from "../date-range.component";

export interface ExperienceInfo {
  dateRange: DateRange,
  company: string,
  city?: '上海' | string;
  job: string,
  department: string,
  keywords: string[],
}

const tencent: ExperienceInfo = {
  dateRange: {
    from: '2021年07月',
    to: '2022年08月'
  },
  company: '腾讯（上海）',
  job: '客户端开发(实习)',
  department: 'QQ 影像中心/引擎组',
  keywords: ['图形学', 'C++', '工具开发']
};
const handChina: ExperienceInfo = {
  dateRange: {
    from: '2018年10月',
    to: '2019年04月'
  },
  company: '上海汉得信息技术股份有限公司',
  job: 'Web 前端开发(实习)',
  department: '技术发展中心/框架组',
  keywords: ['组件库', 'CSS', 'TypeScript']
};

export const syfExperiences = [tencent, handChina];
