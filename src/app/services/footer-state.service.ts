import { computed, Injectable, signal, WritableSignal } from "@angular/core";
import { EStat, IStatDesc } from "../interfaces/stat";
import { ISave, save } from "../models/save";

@Injectable({
    providedIn: 'root'
})
export class FooterStateService {
    hasFooterState$ = computed(()=> {
        return this.stat$()?.stat
    })

    stat$: WritableSignal<IStatDesc | null> = signal(null)
    showFooter$ = signal(true)

    toggle(){
        this.showFooter$.set(!this.showFooter$())
    }
}