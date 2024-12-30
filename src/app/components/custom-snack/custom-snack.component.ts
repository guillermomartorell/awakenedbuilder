import { Component, Inject, inject } from "@angular/core";
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from "@angular/material/snack-bar";

@Component({
    selector: 'app-custom-snack',
    template: `
    <div class='custom-snack' matSnackBarLabel>
        <div *ngFor="let string of data">
            {{string}}
        </div>
    </div>
    `,
    standalone: false
})

export class CustomSnackComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string[]){}
    snackBarRef = inject(MatSnackBarRef);
}