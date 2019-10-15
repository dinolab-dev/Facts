import { Component, OnInit } from '@angular/core';
import { NumbersApiService } from '../numbers-api.service';

@Component({
  selector: 'app-divers',
  templateUrl: './divers.component.html'
})
export class DiversComponent implements OnInit {

  type: string;
  donnees: any;
  loaded: boolean = false;

  constructor(private service: NumbersApiService) { }

  ngOnInit() {
    this.type = 'trivia';
    this.chargerDonnees(this.type);
  }

  chargerDonnees(type: string) {
    this.service.divers(this.type).subscribe(res => {
      this.donnees = res.body;
      this.loaded = true;
    }, err => {
      console.error(err);
    });
  }

  chercher() {
    this.loaded = false;
    this.chargerDonnees(this.type);
  }

  onTypeChange(m) {
    this.chargerDonnees(m);
  }

}
