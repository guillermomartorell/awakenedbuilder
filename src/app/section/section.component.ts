import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `<div class="wrapper">
    <div class="attr-section" *ngFor="let attributeGroup of data">
      <h4>
        {{ attributeGroup[0].type }}: {{ attrSum[attributeGroup[0].type] }}
      </h4>
      <div class="attr" *ngFor="let attribute of attributeGroup">
        <strong>{{ attribute.label }}</strong>
        <div>
          <app-star-rating
            (rated)="handleRated($event, attribute.type, attribute.label)"
          ></app-star-rating>
        </div>
      </div>
    </div>
  </div>`,
  styleUrls: ['./section.component.css'],
})

export class SectionComponent {
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
