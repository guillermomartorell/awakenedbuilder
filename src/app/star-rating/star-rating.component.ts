import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';
import * as solid from '@fortawesome/free-solid-svg-icons';
import * as regular from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  solidCircleIcon: any = solid.faCircle;
  regCircleIcon: any = regular.faCircle;
  selectedRating = 0;
  @Output() rated: EventEmitter<any> = new EventEmitter<any>();

  stars = [
    {
      id: 1,
      icon: this.solidCircleIcon,
      class: 'star-gray star-hover star',
      value: 1,
    },
    {
      id: 2,
      icon: this.regCircleIcon,
      class: 'star-gray star-hover star',
      value: 1,
    },
    {
      id: 3,
      icon: this.regCircleIcon,
      class: 'star-gray star-hover star',
      value: 1,
    },
    {
      id: 4,
      icon: this.regCircleIcon,
      class: 'star-gray star-hover star',
      value: 1,
    },
    {
      id: 5,
      icon: this.regCircleIcon,
      class: 'star-gray star-hover star',
      value: 1,
    },
  ];

  selectStar(value: any): void {
    // prevent multiple selection
    // if (this.selectedRating === 0) {
      this.stars.filter((star) => {
        if (star.id <= value) {
          star.class = 'star-gold star';
          star.icon = this.solidCircleIcon
        } else {
          star.class = 'star-gray star';
          star.icon = this.regCircleIcon
        }

        return star;
      });
    // }
    // console.log(value)
    this.selectedRating = value;
    this.rated.emit(value);
  }
}