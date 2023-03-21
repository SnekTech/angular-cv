import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleUnderlinedComponent} from "../title-underlined/title-underlined.component";
import {CvDataService} from "../cvData.service";
import {ProjectInfoComponent} from "./project-info.component";

export type Project = {
  name: string,
  keywords: string[],
  points: string[],
}
export const syfProjects: Project[] = [
  {
    name: '软件实现的光栅化渲染器',
    keywords: ['业余时间自学', 'C++', 'OpenGL', '计算机图形学', '光栅化', '渲染管线'],
    points: [
      `
      为了了解渲染管线底层的实现方法，使用纯软件的方式手动模拟硬件渲染管线的图形数据处理流程，
      通过各种 3D 数学运算将 3D 坐标系中的模型正确渲染到 2D 的显示设备上`,
      `
      基于 cmake mingw glfw glad 等技术在 Windows 桌面端搭建一个渲染器框架，
      使用 OpenGL 动态生成一个指定尺寸的纹理用来模拟渲染器的输出屏幕
      `,
      `
      提供一个 PutPixel(x, y, color) 方法来支持渲染一个像素至模拟屏幕纹理的某个坐标，
      以此为基础使用扫描线算法实现三角形的渲染，进而构建出整个软件渲染管线`,
      `
      实现了真实渲染管线的部分基础特性，包括 MVP 矩阵、左上规则的三角形光栅化、背面和深度剔除、
      纹理贴图、Shader 可配置、平行光源和点光源、镜面反射等`,
    ],
  },
  {
    name: 'Roguelike 扫雷游戏',
    keywords: ['毕业设计', 'C#', 'Unity', 'Roguelike', '设计模式', 'TDD 测试驱动开发'],
    points: [
      `
      基于 Unity 引擎开发，使用 Roguelike 游戏中常见的随机性元素对扫雷游戏的玩法进行扩展
      `,
      `
      加入倒计时模式；加入生命值的概念（踩雷后减少生命值）；加入可以对玩家和雷区产生影响的道具和事件；
      加入武器系统，武器是玩家探索雷区的工具，提供包括揭开单元格和标记旗帜等各种功能
      `,
      `
      大量使用 Unity 提供的可编程对象 Scriptable Object，使得游戏内容可以在编辑器中配置，
      比如通过组合不同效果 Scriptable Object 可以生产出各种道具
      `,
      `
      使用像素风格的美术素材，实现了一个简单的逐帧动画播放模块，使用有限状态机来实现不同动画的衔接
      `,
      `
      实现了部分 Unity 自定义编辑器来批量处理游戏内容。实现管理道具池、事件池的随机池编辑器，
      可以在创建新道具或删除已有道具时动态修改道具池；
      实现一套从像素动画编辑器 Aseprite 到 自定义逐帧动画模块的美术资源处理流程，
      使用动画序列帧导出时的 json 元数据，配合自定义编辑器，动态更新游戏内的动画资源
      `,
      `
      尝试使用测试驱动开发的理论完成了核心功能的开发，
      使用 Fluent Assertions 和 NSubstitute 等第三方库设计了高质量的单元测试
      `,
    ],
  },
  {
    name: '3D 人体模型数据标注工具',
    keywords: ['实习工作', '工具开发', 'C++', 'Dear ImGUI', '标注工具'],
    points: [
      `
  一个能够可视化标注图片中人体模型当前动作的桌面端工具，能够支持标注人员批量高效标注该类数据集，用于部门内部算法模型训练。
  算法部门给出一系列含有人体动作的图片，以及人体骨骼大致的动作 json 数据，
  标注人员使用该工具在可视化界面上标注每张图片精准的人体动作并保存为 json 数据，算法部门根据精准的标注数据进行进一步训练。
  工具参考轻量级渲染引擎 Filament 的示例实现，使用 C++ 编写业务逻辑、使用 Dear ImGui 提供的 UI 控件绘制用户界面。
      `,
    ],
  }
]

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TitleUnderlinedComponent, ProjectInfoComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects: Project[];
  constructor(private cvData: CvDataService) {
    // only take the first two, space is not enough
    this.projects = cvData.getProjects().filter((_, index) => index < 2);
  }
}
