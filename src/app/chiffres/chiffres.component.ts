import { Component, OnInit } from '@angular/core';
import { NumbersApiService } from '../numbers-api.service';

@Component({
  selector: 'app-chiffres',
  templateUrl: './chiffres.component.html',
  styleUrls: ['./chiffres.component.css']
})
export class ChiffresComponent implements OnInit {

  chiffre: number;
  donnees: any;
  loaded: boolean = false;

  constructor(private service: NumbersApiService) { }

  ngOnInit() {
    this.chiffre = Math.round(Math.random() * 1000);
    this.chargerDonnees();
  }

  chargerDonnees() {
    this.service.chiffres(this.chiffre).subscribe(res => {
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
