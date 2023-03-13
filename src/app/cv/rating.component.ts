import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconComponent} from "./icon.component";

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <ng-container *ngFor="let _ of [].constructor(maxScore); let i = index;">
      <app-icon [isFill]="i < rating" [size]="iconSize">grade</app-icon>
    </ng-container>
  `,
})
export class RatingComponent {
  readonly maxScore = 5;
  @Input() rating: number = 3;
  @Input() iconSize: string = 'normal';
}
