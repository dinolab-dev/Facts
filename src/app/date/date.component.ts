import { Component, OnInit } from '@angular/core';
import { NumbersApiService } from '../numbers-api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  moi: number;
  jour: number;
  days: any;
  donnees: any;
  loaded: boolean = false;

  constructor(private service: NumbersApiService) { }

  ngOnInit() {    
    this.moi = (moment().month() + 1);
    this.jour = moment().date();
    this.days = [1, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    this.chargerDonnees();
  }

  chargerDonnees() {
    this.service.date(this.jour, this.moi).subscribe(res => {
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

  onMonthChange(m) {
    console.log('changes..');
    switch (m) {
      case 1 || 3 || 5 || 7 || 8 || 10 || 12:
        this.days = [1, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        break;
      case 4 || 6 || 9 || 11:
        this.days = [1, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        break;
      case 2:
        this.days = [1, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
        break;
      default:
        this.days = [1, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    }
  }

}
