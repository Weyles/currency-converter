import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Rate } from '../app.component';
import { RateService } from '../rate.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  @Input() data!: Array<Rate>;

  ngOnInit(): void {}
  currencies = ['USD', 'EUR', 'UAH'];
  firstConvertValue: number = 0;
  secondConvertValue: number = 0;
  firstConvert: string = 'UAH';
  secondConvert: string = 'USD';
  // public selectedOption = null;

  rates: Array<Rate> = this.data;

  // USDRate: number = parseFloat(this.rates[0].buy);

  UAHtoUSD(value: number): number {
    const answer = value / Number(this.data[0].buy);
    return answer;
  }
  UAHtoEUR(value: number) {
    const answer = value / Number(this.data[1].buy);
    return answer;
  }
  USDtoEUR(value: number) {
    const answer =
      (value * Number(this.data[1].buy)) / Number(this.data[0].buy);
    return answer;
  }
  EURtoUSD(value: number) {
    const answer =
      (value * Number(this.data[0].buy)) / Number(this.data[1].buy);
    return answer;
  }
  USDtoUAH(value: number) {
    const answer = value * Number(this.data[0].buy);
    return answer;
  }
  EURtoUAH(value: number) {
    const answer = value * Number(this.data[1].buy);
    return answer;
  }
  // SameRate(value: number) {
  //   const answer = value * 1;
  //   return answer
  // }

  firstSelectChangeHandler() {
    console.log('This is 1 select -->', this.firstConvert, this.secondConvert);
    setTimeout(() => {
      this.firstInputChangeHandler(this.firstConvertValue);
    }, 5);
  }
  secondSelectChangeHandler() {
    console.log('This is 2 select -->', this.firstConvert, this.secondConvert);
    setTimeout(() => {
      this.secondInputChangeHandler(this.secondConvertValue);
    }, 5);
  }

  firstInputChangeHandler(rate: number) {
    console.log("first rate -->", rate)
    if (this.firstConvert == 'UAH' && this.secondConvert == 'USD') {
      this.secondConvertValue = this.UAHtoUSD(rate);
    } else if (this.firstConvert == 'UAH' && this.secondConvert == 'EUR') {
      this.secondConvertValue = this.UAHtoEUR(rate);
    } else if (this.firstConvert == 'EUR' && this.secondConvert == 'USD') {
      this.secondConvertValue = this.EURtoUSD(rate);
    } else if (this.firstConvert == 'USD' && this.secondConvert == 'EUR') {
      this.secondConvertValue = this.USDtoEUR(rate);
    } else if (this.firstConvert == 'USD' && this.secondConvert == 'UAH') {
      this.secondConvertValue = this.USDtoUAH(rate);
    } else if (this.firstConvert == 'EUR' && this.secondConvert == 'UAH') {
      this.secondConvertValue = this.EURtoUAH(rate);
    } else if (
      (this.firstConvert == 'EUR' && this.secondConvert == 'EUR') ||
      (this.firstConvert == 'UAH' && this.secondConvert == 'UAH') ||
      (this.firstConvert == 'USD' && this.secondConvert == 'USD')
    ) {
      this.secondConvertValue = this.firstConvertValue;
    }
  }

  secondInputChangeHandler(rate: number) {
    console.log("second rate -->",rate)
    if (this.secondConvert == 'UAH' && this.firstConvert == 'USD') {
      this.firstConvertValue = this.UAHtoUSD(rate);
    } else if (this.secondConvert == 'UAH' && this.firstConvert == 'EUR') {
      this.firstConvertValue = this.UAHtoEUR(rate);
    } else if (this.secondConvert == 'EUR' && this.firstConvert == 'USD') {
      this.firstConvertValue = this.EURtoUSD(rate);
    } else if (this.secondConvert == 'USD' && this.firstConvert == 'EUR') {
      this.firstConvertValue = this.USDtoEUR(rate);
    } else if (this.secondConvert == 'USD' && this.firstConvert == 'UAH') {
      this.firstConvertValue = this.USDtoUAH(rate);
    } else if (this.secondConvert == 'EUR' && this.firstConvert == 'UAH') {
      this.firstConvertValue = this.EURtoUAH(rate);
    } else if (
      (this.secondConvert == 'EUR' && this.firstConvert == 'EUR') ||
      (this.secondConvert == 'UAH' && this.firstConvert == 'UAH') ||
      (this.secondConvert == 'USD' && this.firstConvert == 'USD')
    ) {
      this.firstConvertValue = this.secondConvertValue;
    }
  }
}
