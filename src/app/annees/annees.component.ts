import { Component, OnInit } from '@angular/core';
import { NumbersApiService } from '../numbers-api.service';

@Component({
  selector: 'app-annees',
  templateUrl: './annees.component.html'
})
export class AnneesComponent implements OnInit {

  annee: number;
  donnees: any;
  loaded: boolean = false;

  constructor(private service: NumbersApiService) { }

  ngOnInit() {
    this.annee = Math.round(Math.random() * 10000);
    this.chargerDonnees();
  }

  chargerDonnees() {
    this.service.annees(this.annee).subscribe(res => {
      this.donnees = res.body;
      this.loaded = true;
    }, err => {
      console.error(err);
    });
  }

  chercher() {
    this.loaded = false;
    this.chargerDonnees();
  }
}
