import { Component, Inject, inject, signal } from "@angular/core";
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from "@angular/material/snack-bar";
import * as solid from '@fortawesome/free-solid-svg-icons';
import { EStat, IStat, IStatDesc } from "src/app/interfaces/stat";
import { FooterStateService } from "src/app/services/footer-state.service";
@Component({
    selector: 'app-custom-snack',
    template: `
      <div class='custom-snack'>
        <ng-container *ngIf="this.footerState.stat$()?.stat as stat">
          <mat-accordion>
              <mat-expansion-panel [expanded]="panelOpenState()" (closed)="panelOpenState.set(false)">
                <!-- <mat-expansion-panel-header> -->
                <!-- <mat-panel-title> {{stat.label}} </mat-panel-title> -->
                <!-- <mat-panel-description> -->
                  <!-- <ng-container *ngIf="this.footerState.stat$()?.statNum as statNum"> -->
                    <!-- {{stat.type === EStat.SPHERE ?  'Level: ' + statNum : stat.val[statNum - 1]}} -->
                  <!-- </ng-container> -->
                <!-- </mat-panel-description> -->
                <!-- </mat-expansion-panel-header> -->
                <div style="max-width: 500px;" *ngIf="this.footerState.stat$()?.statNum as statNum">
                  <p>{{stat.label}}</p>
                  <p>{{stat.val[statNum - 1]}}</p>
                  <p>{{stat.description}}</p>
                  <p *ngIf="stat.possessed">Possesed by: {{stat.possessed}}</p>
                  <p *ngIf="stat.specialty">Specialties: {{stat.specialty}}</p>
                  <p *ngIf="stat.explaination" [innerHTML]="stat.explaination[statNum - 1]"></p>
                </div>
              </mat-expansion-panel>
          </mat-accordion>
        </ng-container>
      </div>
    `,
    styleUrl: "footer.component.scss",
    standalone: false
})

export class FooterComponent {
    constructor(public footerState: FooterStateService){}
    readonly solid = solid
    readonly panelOpenState = signal(true);
    EStat = EStat
}