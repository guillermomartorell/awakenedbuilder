import { Component, OnInit, signal } from '@angular/core';
import { attributes } from 'src/app/models/attributes';
import { skills } from 'src/app/models/skills';
import { IStat, EStat } from './interfaces/stat';
import { ECounter } from './interfaces/enums';
import { spheres } from './models/spheres';
import { CounterStateService } from './services/counter-state.service';
import { FooterStateService } from './services/footer-state.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { filter, map, startWith, tap } from 'rxjs/operators';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit{

  constructor(public stateSvc: CounterStateService, public footerSvc: FooterStateService){
    this.stateSvc.setState()
  }

  skillsDesc:IStat[][] = skills;
  attributesDesc:IStat[][] = attributes;
  spheresDesc:IStat[][] = spheres;
  selectedCounter$ = signal(ECounter.CREATE)
  counterType = new FormControl(ECounter.CREATE);
  
  counterTypes: {key: string; label: string}[] = [
    {key: ECounter.CREATE, label: 'Character Creation'}, 
    {key: ECounter.FREEBIE, label: 'Freebies'}, 
    {key: ECounter.EXPERIENCE, label: 'Experience'}];


    ngOnInit(): void {
      this.counterType.valueChanges.pipe(
        tap((i: any) => this.selectedCounter$.set(i))
      )
    }
  
  protected readonly EStat = EStat
  protected readonly ECounter = ECounter
}
