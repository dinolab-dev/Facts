import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DateComponent } from './date/date.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ChiffresComponent } from './chiffres/chiffres.component';
import { AnneesComponent } from './annees/annees.component';
import { DiversComponent } from './divers/divers.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    AccueilComponent,
    ChiffresComponent,
    AnneesComponent,
    DiversComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
