import {DateRange} from "../date-range.component";

export interface Experience {
  dateRange: DateRange,
  company: string,
  city?: '上海' | string;
  job: string,
  department: string,
  keywords: string[],
  points: string[],
}

const tencent: Experience = {
  dateRange: {
    from: '2021年07月',
    to: '2022年08月'
  },
  company: '腾讯（上海）',
  job: '客户端开发(实习)',
  department: 'QQ 影像中心/引擎组',
  keywords: ['图形学', 'C++', '工具开发'],
  points: [
    `常规需求开发，主要是为手机 QQ 应用提供图形渲染相关的技术支持，
    涉及到使用 C++ 和 lua 脚本驱动应用内置的虚幻引擎模块实现各种渲染效果`,
    `自动化工具开发，包括小组内部使用的批量截图测试工具、与流水线系统交互的资源整理工具，
    以及一个为 AI 组提供数据标注支持的 3D 人体模型标注工具。这些工具显著提高了执行相关任务的工作效率`,
  ],
};
const handChina: Experience = {
  dateRange: {
    from: '2018年10月',
    to: '2019年04月'
  },
  company: '上海汉得信息技术股份有限公司',
  job: 'Web 前端开发(实习)',
  department: '技术发展中心/框架组',
  keywords: ['组件库', 'CSS', 'TypeScript'],
  points: [
    `参与开发和维护一套定制的 React 组件库，包括按钮、菜单、卡片等常见的 UI 组件，
    以及针对部门业务需求设计的特定组件如自动对接后台数据的数据表组件。
    定制的组件库提高了多个部门在开发前端页面时的工作效率`
  ],
};

export const syfExperiences = [tencent, handChina];
