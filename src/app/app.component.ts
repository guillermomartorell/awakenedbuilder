import { Component } from '@angular/core';
import { attributes } from 'src/assets/attributes';
import { skills } from 'src/assets/skills';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awakened-builder';
  skills: any = skills;
  attributes = attributes;
}
