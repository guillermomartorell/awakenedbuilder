import { Component } from '@angular/core';
import { attributes } from 'src/assets/attributes';
import { skills } from 'src/assets/skills';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  skills: any = skills
  attributes = attributes
}
