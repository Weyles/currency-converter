import { Component } from '@angular/core';
import { RateService } from './rate.service';

export interface Rate {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private rate: RateService) {
    this.rate.getData().subscribe((data) => {
      console.log(data);
      this.readApi(data);
    });
  }

  rates: Array<Rate> = [];

  readApi(api: any) {
    this.rates = api;
    return this.rates;
  }
}
