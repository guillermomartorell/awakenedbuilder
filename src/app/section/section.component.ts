import { Component, Input, OnInit } from '@angular/core';

interface Attribute {
  label: string;
  value: number;
  type: string;
}

@Component({
  selector: 'app-section',
  template: `
    <div class="wrapper">
      <h4>{{ description }}</h4>
    </div>
    <div class="wrapper">
      <div class="attr-section" *ngFor="let attributeGroup of data">
        <h4>{{ attributeGroup[0].type }}: {{ attrSum[attributeGroup[0].type] }}</h4>
        <div class="attr" *ngFor="let attribute of attributeGroup">
          <strong>{{ attribute.label }}</strong>
          <div>
            <app-star-rating
              [type]="type"
              (rated)="handleRated($event, attribute.type, attribute.label)"
            ></app-star-rating>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  @Input() data: any[][] = [];
  @Input() type: string = '';
  attrSum: Record<string, number> = {};
  attrObj: any[] = [];
  description: string = 'Description: []';

  ngOnInit() {
    for (const attributeGroup of this.data) {
      this.attrSum[attributeGroup[0].type] = 0;
    }
  }

  handleRated(value: number, type: string, label: string) {
    const insert: any = { label, value, type };
    const index = this.attrObj.findIndex((el) => el.label === label);

    if (index === -1) {
      this.attrObj.push(insert);
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
  }
}
