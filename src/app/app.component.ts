import { Component } from '@angular/core';
import { attributes } from 'src/app/models/attributes';
import { skills } from 'src/app/models/skills';
import { IStat, EStat } from './interfaces/stat';

@Component({
    selector: 'app-root',
    template: `
    <div class="background">
    <div class="bg-l bg-side"></div>
    <div class="wrapper">
      <h1 class="center">
        <img src="../assets/title.png" alt="Mage the Ascension" srcset="../assets/title.png">
      </h1>
      <div class="cool-border">
        <div class="category">
          <h2 class="center">Attributes</h2>
        </div>
        <app-section [desc]="attributesDesc" [type]="EStat.ATTRIBUTE"></app-section>
      </div>
      <div class="cool-border">
        <div class="category">
          <h2 class="center">Abilities</h2>
        </div>
        <app-section [desc]="skillsDesc" [type]="EStat.SKILL"></app-section>
      </div>
    </div>
    <div class="bg-r bg-side"></div>
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
