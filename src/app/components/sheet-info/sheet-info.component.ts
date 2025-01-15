import { Component, OnInit, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { debounce, map, startWith, tap } from 'rxjs/operators';
import { ESheetInfo } from 'src/app/models/save';
import { CounterStateService } from 'src/app/services/counter-state.service';

@Component({
  selector: 'app-sheet-info',
  templateUrl: './sheet-info.component.html',
  styleUrl: './sheet-info.component.scss',
  standalone: false,
})
export class SheetInfoComponent {
  constructor(public stateSvc: CounterStateService) {}
  
  handleOUtput(event: any) {
    const state = this.stateSvc.save$()
    for (let field of state.sheet_info){
      if(field.label === event.label) {
        field.value = event.value 
        break
      }
    }
    this.stateSvc.save$.set(state)
    this.stateSvc.saveData()
  }
  ESheetInfo = ESheetInfo
}
