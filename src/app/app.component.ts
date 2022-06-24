import { Component } from '@angular/core';
import { RateService } from './rate.service';

export interface Rate {
  ccy: string
  base_ccy: string
  buy: string
  sale: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private rate: RateService) {
    this.rate.getData().subscribe(data => {
      console.log(data)
      this.readApi(data)
    })
  }

  rates: Array<Rate> = [];

  readApi(api: any) {
    this.rates = api;
    return this.rates;
  }

  // isRate(r: any): any {
  //   return r.ccy == "USD";
  // }

  // filterRate(rates: any) {
  //   const filterRates = rates;
  //   const filter = filterRates.filter(this.isRate)
  //   console.log("Filter -->", filter)
  //   return filter;
  // }
  // filter = this.filterRate(this.rates);

}

// import { Component } from '@angular/core';

// export interface Card {
//   title: string
//   text: string
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   toggle = true;

//   toggleCard() {
//     this.toggle = !this.toggle;
//   }

//   cards: Array<Card> = [
//     {title: "Card 1", text: "This is card number 1"},
//     {title: "Card 2", text: "This is card number 2"},
//     {title: "Card 3", text: "This is card number 3"},
//     {title: "Card 4", text: "This is card number 4"},
//   ];
// }
