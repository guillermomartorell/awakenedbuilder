import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  ngOnInit(): void {
    this.attrSum = {
      [this.data[0][0].type]: 0,
      [this.data[1][0].type]: 0,
      [this.data[2][0].type]: 0,
    };
  }
  @Input() data: any = [];
  selectedValue: any;
  attrSum: any;
  attrObj: any = [];

  handleRated(value: number, type: any, label: any) {
    const insert = {
      label: label,
      value: value,
      type: type,
    };
    if (this.attrObj.length === 0) {
      this.attrObj.push(insert);
      this.attrSum[type] += value;
      return;
    }
    const selectedAttr = this.attrObj.filter((el: any) => el.label === label);
    if (selectedAttr.length === 0) {
      this.attrObj.push(insert);
      return;
    }
    selectedAttr.forEach((el: any) => {
      this.attrSum[el.type] = el.value;
    });

    this.attrSum = this.attrObj.reduce((totals: any, item: any) => {
      const { type, value } = item;
      if (!totals[type]) {
        totals[type] = 0;
      }
      totals[type] += value;
      return totals;
    }, {});
  }
}
