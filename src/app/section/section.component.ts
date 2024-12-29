import { Component, Input, OnInit } from '@angular/core';

// import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { save } from 'src/assets/save';

@Component({
    selector: 'app-section',
    template: `
    <div class="wrapper">
      <div class="attr-section" *ngFor="let attributeGroup of save[this.type]">
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
  // @Input() data: any[][] = [];
  @Input() type: string = '';
  @Input() desc: any;
  @Input() data: any;
  currentData: any = [];
  attrSum: any = {};
  attrObj: any[] = [];
  description: string = 'Description: []';
  // config: any = new MatSnackBarConfig();
  save: any = save;

  constructor(
    // private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    for (const attributeGroup of this.save[this.type]) {
      this.attrSum[attributeGroup[0].type] = 0;
    }
    // this.config = {
    //   duration: 0,
    // };
    const data: any = localStorage.getItem('myData');
    if (data) {
      const savedData = JSON.parse(data)[this.type];
      savedData.forEach((element: any) => {
        this.currentData.push(element);
        element?.forEach((e: any) => {
          if (e.value !== 0) {
            this.type === 'attributes'
              ? (this.attrSum[e.type] += e.value - 1)
              : (this.attrSum[e.type] += e.value);

            this.save[this.type].forEach((elemen: any) => {
              elemen.forEach((el: any) => {
                if (el.label === e.label) {
                  el.value = e.value;
                }
              });
            });
          }
        });
      });
    } else {
      this.currentData = this.data;
    }
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

      this.desc.forEach((element: any) => {
        element.forEach((attribute: any) => {
          if (attribute.label === label) {
            this.description = `${label}: ${attribute.val[value - 1]}`;
          }
        });
      });

      // this._snackBar.open(this.description, 'Dismiss', this.config);
      this.save[this.type].forEach((element: any) => {
        element.forEach((el: any) => {
          if (el.label === label) {
            el.value = value;
          }
        });
      });
      this.save[this.type].forEach((element: any) => {
        let filtered = element.filter((item: any) => item.type === type);
        let currentType: any = filtered[0]?.type;
        let sum = filtered.reduce((sum: any, item: any) => {
          if (this.type === 'attributes') {
            return sum + item.value - 1;
          }
          return sum + item.value;
        }, 0);
        if (currentType) {
          this.attrSum[currentType] = sum;
        }
      });

      localStorage.setItem('myData', JSON.stringify(this.save));
    } else {
      this.save[this.type].forEach((element: any) => {
        element.forEach((ele: any) => {
          if (ele.label === label) {
            ele.value = 0;
          }
        });
        let filtered = element.filter((item: any) => item.type === type);
        let currentType: any = filtered[0]?.type;
        let sum = filtered.reduce((sum: any, item: any) => {
          if (this.type === 'attributes') {
            return sum + item.value - 1;
          }
          return sum + item.value;
        }, 0);
        if (currentType) {
          this.attrSum[currentType] = sum;
        }
      });

      localStorage.setItem('myData', JSON.stringify(this.save));
    }
  }
}
