import { Component, Input, } from '@angular/core';

interface Attribute {
  label: string;
  value: number;
  type: string;
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent  {

  @Input() data: any[] = [];
  @Input() type: any;

  attrSum: Record<string, number> = {};
  attrObj: any[] = [];

  handleRated(value: number, type: string, label: string) {
    const insert: any = { label, value, type };
    const index = this.attrObj.findIndex((el) => el.label === label);
    if (index === -1) {
      this.attrObj.push(insert);
    } else {
      this.attrObj[index] = insert;
    }

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
