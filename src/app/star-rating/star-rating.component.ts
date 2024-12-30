import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as solid from '@fortawesome/free-solid-svg-icons';
import * as regular from '@fortawesome/free-regular-svg-icons';
import { EStat } from '../interfaces/stat';

@Component({
    selector: 'app-star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.component.scss'],
    standalone: false
})
export class StarRatingComponent implements OnInit {
  solidCircleIcon: any = solid.faCircle;
  regCircleIcon: any = regular.faCircle;
  @Output() rated: EventEmitter<any> = new EventEmitter<any>();
  @Input() type: EStat = EStat.ATTRIBUTE;;
  @Input() value: any;
  stars: any;
  isAttr: boolean = false;

  ngOnInit(): void {
    this.isAttr = this.type === 'attributes' ? true : false;
    this.stars = [
      {
        id: 1,
        icon: this.isAttr ? this.solidCircleIcon : this.regCircleIcon,
        class: 'star-gold star',
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
    this.stars.filter((star: any) => {
      if (star.id === 1 && this.isAttr) {
        star.icon = this.solidCircleIcon;
      } else if (star.id <= this.value) {
        star.class = 'star-gold star';
        star.icon = this.solidCircleIcon;
      } else {
        star.class = 'star-gray star';
        star.icon = this.regCircleIcon;
      }

      return star;
    });
  }

  selectStar(received: any): void {
    let value = 0 
    if(!this.isAttr && received === 1 && this.value === 1){
      value = 0
    } else if(received !== 1 && this.value === received){
      value = received -1
    } else {
      value = received;
    }
    
 
    this.stars.filter((star: any) => {
      if (star.id <= value) {
        star.class = 'star-gold star';
        star.icon = this.solidCircleIcon;
      } else {
        star.class = 'star-gray star';
        star.icon = this.regCircleIcon;
      }

      return star;
    });
    this.rated.emit(value);
  }
}
