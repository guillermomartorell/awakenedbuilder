import { Component } from '@angular/core';
import { attributes } from 'src/app/models/attributes';
import { skills } from 'src/app/models/skills';
import { IStat, EStat } from './interfaces/stat';
import { ECounter } from './interfaces/enums';
import { spheres } from './models/spheres';
import { CounterStateService } from './services/counter-state.service';
@Component({
    selector: 'app-root',
    template: `
    <div class="background">
    <div class="bg-l bg-side"></div>
    <div class="wrapper">
      <div style="display: flex; justify-content: center">
        <strong style="font-size: 14px;" class="mat-mdc-radio-button mat-internal-form-field">Define Counter type: </strong>
        <mat-radio-group
          aria-labelledby="example-radio-group-label"
          [(ngModel)]="counterType">
          @for (counter of counterTypes; track counter) {
            <mat-radio-button [value]="counter.key">{{counter.label}}</mat-radio-button>
          }
        </mat-radio-group>
      </div>  
      <h1 class="center">
        <img src="../assets/title.png" alt="Mage the Ascension" srcset="../assets/title.png">
      </h1>
      <div class="cool-border">
        <div class="category">
          <h3 *ngIf="counterType === ECounter.CREATE" class="center">Character Creation: ( 7 / 5 / 3 )</h3>
          <h2 class="center">Attributes</h2>
        </div>
        <app-section [counterType]="counterType" [desc]="attributesDesc" [type]="EStat.ATTRIBUTE"></app-section>
      </div>
      <div class="cool-border">
        <div class="category">
        <h3 *ngIf="counterType === ECounter.CREATE" class="center">Character Creation:  ( 13 / 9 / 5 )</h3>  
        <h2 class="center">Abilities</h2>
        </div>
        <app-section [counterType]="counterType" [desc]="skillsDesc" [type]="EStat.SKILL"></app-section>
      </div>
      <div class="cool-border">
        <div class="category">
        <h2 class="center">
            Spheres
            <span>: {{stateSvc.creationCounterState$()[EStat.SPHERE]}}</span>
          </h2>
        </div>
        <app-section [counterType]="counterType" [desc]="spheresDesc" [type]="EStat.SPHERE"></app-section>
      </div>
    </div>
    <div class="bg-r bg-side"></div>
    </div>
  `,
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {

  constructor(public stateSvc: CounterStateService){
    this.stateSvc.setState()
  }

  skillsDesc:IStat[][] = skills;
  attributesDesc:IStat[][] = attributes;
  spheresDesc:IStat[][] = spheres;
  counterType: string = ECounter.CREATE;
  counterTypes: {key: string; label: string}[] = [
    {key: ECounter.CREATE, label: 'Character Creation'}, 
    {key: ECounter.FREEBIE, label: 'Freebies'}, 
    {key: ECounter.EXPERIENCE, label: 'Experience'}];

  
  protected readonly EStat = EStat
  protected readonly ECounter = ECounter
}
