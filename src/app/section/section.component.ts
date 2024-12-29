import { Component, Input, OnInit, signal } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { ISave, ISavedStat, save } from 'src/app/models/save';
import { EStat, IStat } from '../interfaces/stat';

@Component({
    selector: 'app-section',
    template: `
    <div class="wrapper">
      <div class="attr-section" *ngFor="let attributeGroup of save()[this.type]">
        <div class="attr-type">
          <h3 class="center">
            {{ attributeGroup[0].type }}: {{ attrSum[attributeGroup[0].type] }}
          </h3>
        </div>
        <div class="attr" *ngFor="let attribute of attributeGroup">
          <strong>{{ attribute.label }}</strong>
          <div class="rating-wrapper">
            <app-star-rating
              [value]="attribute.value"
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
    standalone: false
})
export class SectionComponent implements OnInit {
  @Input() type: EStat = EStat.ATTRIBUTE;
  @Input() desc: IStat[][] = [];
  currentData: any = [];
  attrSum: any = {};
  attrObj: any[] = [];
  description: string = 'Description: []';
  config: MatSnackBarConfig = {
    duration: 0,
  };
  save = signal(save);

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.config = {
      duration: 0,
    };
    const data: JSON | string | null = localStorage.getItem('myData');
    if (data && data !== 'undefined') {
      const parseData = JSON.parse(data)
      const savedData: ISavedStat[][] = parseData[this.type];
      this.setCurrentSum(savedData)
      this.save.set(parseData)
    } else {
      this.currentData = this.save();
    }
  }
  setCurrentSum(savedData: ISavedStat[][]) {
    savedData.forEach((statList: ISavedStat[]) => {
      this.currentData.push(statList);
      const sum = statList.map(el => el.value).reduce((prev, curr) => {
        const currentVal = this.type === EStat.ATTRIBUTE && curr > 0 ? curr -1 : curr
        return prev += currentVal
      }, 0);
      this.attrSum[statList[0].type] = sum
    })
  }

  handleRated(value: number, type: string, label: string) {
    if (value > 0) {
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

      this.desc.forEach((element: IStat[]) => {
        element.forEach((attribute: IStat) => {
          if (attribute.label === label) {
            this.description = `${label}: ${attribute.val[value - 1]}`;
          }
        });
      });

      this._snackBar.open(this.description, 'Dismiss', this.config);
      this.save()[this.type].forEach((element: any) => {
        element.forEach((el: any) => {
          if (el.label === label) {
            el.value = value;
          }
        });
      });
      this.setCurrentSum(this.save()[this.type])

      localStorage.setItem('myData', JSON.stringify(this.save()));
    } else {
      this.setCurrentSum(this.save()[this.type])

      localStorage.setItem('myData', JSON.stringify(this.save));
    }
  }
}
