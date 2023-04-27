import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  template: ` <div class="wrapper">
      <h4>{{ desc }}</h4>
    </div>
    <div class="wrapper">
      <div class="attr-section" *ngFor="let attributeGroup of data">
        <h4>
          {{ attributeGroup[0].type }}: {{ attrSum[attributeGroup[0].type] }}
        </h4>
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
    </div>`,
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() type: any;

  attrSum: Record<string, number> = {};
  attrObj: any[] = [];
  desc: string = 'Description: []';

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

    this.attrSum[type] =
      this.type === 'attributes'
        ? this.attrObj
            .filter((item) => item.type === type)
            .reduce((sum, item) => sum + item.value - 1, 0)
        : this.attrObj
            .filter((item) => item.type === type)
            .reduce((sum, item) => sum + item.value, 0);

    this.data.forEach((element) => {
      element.forEach((el: any) => {
        if (el.label === label) {
          this.desc = label + ': ' + el.val[value - 1];
        }
      });
    });
  }
}
