import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mat-star-rating',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent {
  @Input('rating') public rating: number = 3;
  @Input('starCount') public starCount: number = 10;
  @Input('color') public color: string = 'accent';
  @Output() public ratingUpdated = new EventEmitter();

  public ratingArr = [0, 1, 2, 3, 4];

  constructor() { }
  onClick(rating: number) {
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
export enum StarRatingColor {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn',
}
