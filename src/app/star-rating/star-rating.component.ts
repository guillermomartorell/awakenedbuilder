import { Component } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  stars = [
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false }
  ];
  value = [
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false }
  ];

  fillStar(star: any) {
    const index = this.stars.indexOf(star);
    for (let i = 0; i <= index; i++) {
      this.stars[i].filled = true;
    }
  }

  emptyStar(star: any) {
    star.filled = false;
  }

  toggleStar(star: any) {
    const index = this.stars.indexOf(star);
    for (let i = 0; i <= index; i++) {
      this.stars[i].filled = true;
    }
  }
}
