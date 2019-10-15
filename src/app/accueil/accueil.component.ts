import { Component, OnInit } from '@angular/core';
import { NumbersApiService } from '../numbers-api.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html'
})
export class AccueilComponent implements OnInit {

  donnees: any;
  loaded: boolean = false;

  constructor(private service: NumbersApiService) {}

  ngOnInit() {
    this.service.aleatoire().subscribe(res => {
      this.donnees = res.body;
      this.loaded = true;
      console.log(res);
    }, err => {
      console.error(err);
    });
  }

}
