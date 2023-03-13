import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconComponent} from "./icon.component";

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <ng-container *ngFor="let rating of [].constructor(maxScore); let i = index;">
      <app-icon [isFill]="i < score" size="medium">grade</app-icon>
    </ng-container>
  `,
})
export class RatingComponent {
  maxScore = 5;
  @Input() score: number = 3;
}
