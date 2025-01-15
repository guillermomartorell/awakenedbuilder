import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { debounce, filter, map, startWith, tap } from 'rxjs/operators';
import { nature_demeanor } from 'src/app/models/nat-dem';
import { ESheetInfo, ISavedSheetInfo } from 'src/app/models/save';

@Component({
  selector: 'app-sheet-field',
  templateUrl: './field-info.component.html',
  standalone: false,
})
export class FieldInfoComponent implements OnInit {
  constructor() {}

@Input() info!: ISavedSheetInfo

@Output()outputField: EventEmitter<any> = new EventEmitter<any>();

  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.myControl.setValue(this.info.value)
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      filter(val=> !!val),
      debounce(()=>interval(500)),
      tap(val => {
        this.outputField.emit({label: this.info.label, value: val})
      }),
      map((value) => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.map(it => it.label).filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
  options = nature_demeanor
  ESheetInfo = ESheetInfo
}
