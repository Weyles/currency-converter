import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Rate } from '../app.component';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  @Input() data!: Array<Rate>;

  ngOnInit(): void {}
  currencies = ['USD', 'EUR', 'UAH'];
  convertValue: number = 0;
  firstConvert: string = 'UAH';
  secondConvert: string = 'USD';

  rates: Array<Rate> = this.data;

  UAHtoUSD() {
    const answer: number = this.convertValue * Number(this.rates[0].buy);
    return answer;
  }
  UAHtoEUR() {
    const answer: number = this.convertValue * Number(this.rates[1].buy);
    return answer;
  }
  EURtoUSD() {
    const answer: number = this.convertValue * Number(this.rates[1].buy)/Number(this.rates[0].buy);
    return answer;
  }
  USDtoEUR() {
    const answer: number = this.convertValue * Number(this.rates[0].buy)/Number(this.rates[1].buy);
    return answer;
  }
}
