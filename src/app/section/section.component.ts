import { Component, Input, OnInit } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { save } from 'src/assets/save';

@Component({
  selector: 'app-section',
  template: `
    <div class="wrapper">
      <div class="attr-section" *ngFor="let attributeGroup of data">
        <div class="attr-type">
          <h3 class="center">
            {{ attributeGroup[0].type }}: {{ attrSum[attributeGroup[0].type] }}
          </h3>
        </div>
        <div class="attr" *ngFor="let attribute of attributeGroup">
          <strong>{{ attribute.label }}</strong>
          <div class="rating-wrapper">
            <app-star-rating
              [type]="type"
              (rated)="handleRated($event, attribute.type, attribute.label)"
            ></app-star-rating>
          </div>
          <div class="underline"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() data: any[][] = [];
  @Input() type: string = '';
  attrSum: Record<string, number> = {};
  attrObj: any[] = [];
  description: string = 'Description: []';
  config: any = new MatSnackBarConfig();
  save: any = save;

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
    for (const attributeGroup of this.data) {
      this.attrSum[attributeGroup[0].type] = 0;
    }
    this.config = {
      duration: 0,
    };
    const data: any = localStorage.getItem('myData');
    if (data) {
      // this.save = JSON.parse(data);
      // console.log(this.save);
      // console.log(data);
      console.log(JSON.parse(data));
    }
  }

  handleRated(value: number, type: string, label: string) {
    const insert: any = { label, value, type };
    const index = this.attrObj.findIndex((el) => el.label === label);

    if (index === -1) {
      this.attrObj.push(insert);
    } else if (value === 1 && this.attrObj[index].value === 1) {
      this.attrObj[index] = {
        label: label,
        value: 0,
        type: type,
      };
    } else {
      this.attrObj[index] = insert;
    }

    const sum = this.attrObj
      .filter((item) => item.type === type)
      .reduce((sum, item) => {
        if (this.type === 'attributes') {
          return sum + item.value - 1;
        }
        return sum + item.value;
      }, 0);

    this.attrSum[type] = sum;

    this.data.forEach((attributeGroup) => {
      attributeGroup.forEach((attribute) => {
        if (attribute.label === label) {
          this.description = `${label}: ${attribute.val[value - 1]}`;
        }
      });
    });

    this._snackBar.open(this.description, 'Dismiss', this.config);
    this.save[this.type].forEach((element: any) => {
      element.forEach((el: any) => {
        if (el.label === label) {
          // console.log(el);
          el.value = value
        }
      });
    });
    localStorage.setItem('myData', JSON.stringify(this.save));
  }
}
