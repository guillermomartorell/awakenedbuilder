import { Component, Inject, inject } from "@angular/core";
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from "@angular/material/snack-bar";
import * as solid from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-custom-snack',
    template: `
    <div style="display: flex; align-items: baseline;">
        <div class='custom-snack' matSnackBarLabel>
            <div *ngFor="let string of data">
                {{string}}
            </div>
        </div>
        <div matSnackBarActions>
            <button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()">
                <fa-icon [icon]="solid.faClose"></fa-icon>
            </button>
        </div>
    </div>
    `,
    standalone: false
})

export class CustomSnackComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string[]){}
    snackBarRef = inject(MatSnackBarRef);
    readonly solid = solid
}