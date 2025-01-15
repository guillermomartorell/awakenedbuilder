import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { debounce, filter, map, startWith, tap } from 'rxjs/operators';
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

options = [
    { label: 'Activist', desc: ' You fix a broken world.' },
    {
      label: 'Benefactor',
      desc: ' You’ve got the power to help, and so you do.',
    },
    { label: 'Contrary', desc: ' You invert order to reveal greater truths.' },
    {
      label: 'Crusader',
      desc: ' You’re a front-line fighter for a better tomorrow.',
    },
    { label: 'Hacker', desc: ' You upgrade things by taking them apart.' },
    {
      label: 'Idealist',
      desc: ' A greater Truth awaits us, and you know what it is.',
    },
    { label: 'Innovator', desc: ' Your imagination drives progress forward.' },
    {
      label: 'Kid',
      desc: ' Innocent and playful, you inspire others to take care of you.',
    },
    { label: 'Loner', desc: ' You need no one else.' },
    { label: 'Machine', desc: ' Weakness is for lesser beings.' },
    { label: 'Mad Scientist', desc: ' True science knows no bounds!' },
    { label: 'Martyr', desc: ' It’s your pleasure to serve.' },
    {
      label: 'Monster',
      desc: ' You’re the unapologetic shadow in the mirror of your world.',
    },
    { label: 'Prophet', desc: ' Speaking truth to power is your life’s work.' },
    { label: 'Rogue', desc: ' Rebellion is your gospel and your fame.' },
    { label: 'Sensualist', desc: ' Sensation is your drug of choice.' },
    { label: 'Survivor', desc: ' No matter what happens, you endure.' },
    {
      label: 'Traditionalist',
      desc: ' As far as you’re concerned, the old ways are best.',
    },
    { label: 'Trickster', desc: ' You make the world your toy.' },
    {
      label: 'Visionary',
      desc: ' You see beyond the obvious and chase a greater vision for us all.',
    },
  ];

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
  ESheetInfo = ESheetInfo
}
