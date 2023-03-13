import {Component, HostBinding, Input} from "@angular/core";
import {CommonModule} from "@angular/common";

type FontSize = 'normal' | 'medium' | 'small' | 'large' | string;

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <style>
      span {
        font-size: var(--fontSize);
        font-variation-settings: var(--variation);
      }
    </style>
    <span class="material-symbols-outlined">
      <ng-content></ng-content>
    </span>
  `,
})
export class IconComponent {
  @Input() isFill: boolean = false;
  @HostBinding('style.--fontSize')
  @Input() size: FontSize = 'normal'
  @HostBinding('style.--variation')
  get variation() {
    return `'FILL' ${this.isFill ? 1 : 'normal'}`;
  }

  get fontSize() {
    return this.size;
  }
}
