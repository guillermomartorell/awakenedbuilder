import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SectionComponent } from './components/section/section.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './components/footer/footer.component';
import {MatRadioModule} from '@angular/material/radio';
import { CounterStateService } from './services/counter-state.service';
import {MatExpansionModule} from '@angular/material/expansion';
import { FooterStateService } from './services/footer-state.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SheetInfoComponent } from './components/sheet-info/sheet-info.component';
import { FieldInfoComponent } from './components/field-info/field-info.component';


@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    FooterComponent,
    StarRatingComponent,
    SheetInfoComponent,
    FieldInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatRadioModule,
    FormsModule,
    MatSnackBarModule,
    MatExpansionModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    FooterStateService,
    CounterStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

