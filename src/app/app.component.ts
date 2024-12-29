import { Component } from '@angular/core';
import { attributes } from 'src/app/models/attributes';
import { save } from 'src/app/models/save';
import { skills } from 'src/app/models/skills';
import { IStat, EStat } from './interfaces/stat';

@Component({
    selector: 'app-root',
    template: `
    <div class="wrapper">
      <h1 class="center">Mage</h1>
      <div class="category">
        <h2 class="center">Attributes</h2>
      </div>
      <app-section [desc]="attributesDesc" [type]="EStat.ATTRIBUTE"></app-section>
      <div class="category">
        <h2 class="center">Abilities</h2>
      </div>
      <app-section [desc]="skillsDesc" [type]="EStat.SKILL"></app-section>
    </div>
  `,
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  skillsDesc:IStat[][] = skills;
  attributesDesc:IStat[][] = attributes;

  protected readonly EStat = EStat
}
