import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) {
    this.http
      .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .subscribe((data) => {
        console.log('This is data -->', data);
        const someData: any = data;
        this.rates = someData.filter((rate: Rate) => {
          return rate.ccy !== 'BTC';
        });
      });
  }

  rates: Array<Rate> = [];
}
