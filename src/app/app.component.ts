import { Component } from '@angular/core';
import { attributes } from 'src/assets/attributes';
import { save } from 'src/assets/save';
import { skills } from 'src/assets/skills';

@Component({
    selector: 'app-root',
    template: `
    <div class="wrapper">
      <h1 class="center">Mage</h1>
      <div class="category">
        <h2 class="center">Attributes</h2>
      </div>
      <app-section [desc]="attributes" [type]="attributesType"></app-section>
      <div class="category">
        <h2 class="center">Abilities</h2>
      </div>
      <app-section [desc]="skills" [type]="skillsType"></app-section>
    </div>
  `,
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'awakened-builder';
  skills: any = skills;
  attributes = attributes;
  attributesType = 'attributes';
  skillsType = 'skills';

}
