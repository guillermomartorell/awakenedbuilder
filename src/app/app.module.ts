import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './components/footer/footer.component';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import { CounterStateService } from './services/counter-state.service';
import {MatExpansionModule} from '@angular/material/expansion';
import { FooterStateService } from './services/footer-state.service';


@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    FooterComponent,
    StarRatingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatRadioModule,
    FormsModule,
    MatSnackBarModule,
    MatExpansionModule
  ],
  providers: [
    provideAnimationsAsync(),
    FooterStateService,
    CounterStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

