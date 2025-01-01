import { Component } from '@angular/core';
import { attributes } from 'src/app/models/attributes';
import { skills } from 'src/app/models/skills';
import { IStat, EStat } from './interfaces/stat';
import { ECounter } from './interfaces/enums';
import { spheres } from './models/spheres';
import { CounterStateService } from './services/counter-state.service';
import { FooterStateService } from './services/footer-state.service';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {

  constructor(public stateSvc: CounterStateService, public footerSvc: FooterStateService){
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
