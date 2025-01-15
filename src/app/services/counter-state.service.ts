import { computed, Injectable, signal, WritableSignal } from "@angular/core";
import { EStat } from "../interfaces/stat";
import { ISave, save } from "../models/save";

@Injectable({
    providedIn: 'root'
})
export class CounterStateService {

    creationCounterState$ = signal<Record<EStat, number>>({
        [EStat.ATTRIBUTE] : 0,
        [EStat.SKILL] : 0,
        [EStat.SPHERE] : 0,
    })

    freebieCounterState$ = signal<Record<EStat, number> | null>(null)
    experienceCounterState$ = signal<Record<EStat, number> | null>(null)

    save$ = signal(save)

    updateState(type: EStat, sectionState: Record<string, number>){
        let newState = this.creationCounterState$()
        const sum = Object.keys(sectionState).reduce((prev, curr)=>{
            return prev += sectionState[curr]
        }, 0)
        newState[type] = sum
        this.creationCounterState$.set(newState)
    }

    saveData(){
        localStorage.setItem('myData', JSON.stringify(this.save$()));
    }

    setState(){
        const data: JSON | string | null = localStorage.getItem('myData');
        if (data && data !== 'undefined') {
            const parseData = JSON.parse(data)
            this.save$.set(parseData)
        }
    }
}