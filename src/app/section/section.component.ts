import { Component, Input, OnInit, signal } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { ISave, ISavedStat, save } from 'src/app/models/save';
import { EStat, isGroupedCounter, IStat, IStatDesc } from '../interfaces/stat';
import { CounterStateService } from '../services/counter-state.service';
import { FooterStateService } from '../services/footer-state.service';

@Component({
    selector: 'app-section',
    template: `
    <div class="wrapper">
      <div class="attr-section" *ngFor="let attributeGroup of countSv.save$()[this.type]">
        @if(groupedCounter()){
          <div class="attr-type">
            <h3 class="center">
              {{ attributeGroup[0].type }}: {{ attrSum[attributeGroup[0].type] }}
            </h3>
          </div>
        }
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
  @Input() state: ISave = save;
  @Input() counterType: any = null;
  currentData: IStat[][] = [];
  attrSum: Record<string, number> = {};
  attrObj: any[] = [];
  description: IStatDesc = {};
  config: MatSnackBarConfig = {
    duration: 0,
  };
  groupedCounter = signal(true)

  constructor(public countSv: CounterStateService, private footerSvc: FooterStateService ) {}

  ngOnInit() {
    this.config = {
      duration: 0,
    };
    this.groupedCounter.set(isGroupedCounter(this.type))
    this.countSv.updateState(this.type, this.setCurrentSum())
  }

  setCurrentSum() {
    const savedData = this.countSv.save$()[this.type]
    this.groupedCounter() 
    ? savedData.forEach((statList: ISavedStat[]) => {
      const sum = statList.map(el => el.value).reduce((prev, curr) => {
        const currentVal = this.type === EStat.ATTRIBUTE && curr > 0 ? curr -1 : curr
        return prev += currentVal
      }, 0);
      this.attrSum[statList[0].type] = sum
    })
    : this.attrSum[EStat.SPHERE] = savedData.map(data=> data.map(dat=>dat.value).reduce((prev,curr) => prev += curr)).reduce((prev,curr) => prev += curr)
    return this.attrSum
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

      this.desc.forEach((element: IStat[]) => {
        element.forEach((stat: IStat) => {
          if (stat.label === label && value) {
            this.footerSvc.stat$.set({
              statNum: value,
              stat,
            });
          }
        });
      });
      // if(value){
      //   this._snackBar.openFromComponent(CustomSnackComponent, {
      //     data: this.description
      //   });
      // }
      const newState = this.countSv.save$()
      newState[this.type].forEach((element: ISavedStat[]) => {
        element.forEach((el: ISavedStat) => {
          if (el.label === label) {
            if(el.value === value && el.value === 1){
              el.value = 0
            } else if (el.value === value){
              el.value = el.value - 1
            } else {
              el.value = value
            }
          }
        });
      });
      this.countSv.save$.set(newState)
      this.countSv.updateState(this.type, this.setCurrentSum())
      this.countSv.saveData()
  }

  readonly EStat = EStat
}
