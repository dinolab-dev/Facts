import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DateComponent } from './date/date.component';
import { ChiffresComponent } from './chiffres/chiffres.component';
import { AnneesComponent } from './annees/annees.component';
import { DiversComponent } from './divers/divers.component';


const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'dates', component: DateComponent },
  { path: 'chiffres', component: ChiffresComponent },
  { path: 'annees', component: AnneesComponent },
  { path: 'divers', component: DiversComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
