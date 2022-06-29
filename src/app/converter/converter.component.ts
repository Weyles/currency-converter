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
  firstConvertValue: number = 0;
  secondConvertValue: number = 0;
  firstConvert: string = 'UAH';
  secondConvert: string = 'USD';

  rates: Array<Rate> = this.data;

  UAHtoUSD(value: number): number {
    const answer = value / Number(this.data[0].buy);
    return answer;
  }
  UAHtoEUR(value: number) {
    const answer = value / Number(this.data[1].buy);
    return answer;
  }
  EURtoUSD(value: number) {
    const answer =
      (value * Number(this.data[1].buy)) / Number(this.data[0].buy);
    return answer;
  }
  USDtoEUR(value: number) {
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

  Converter(
    firstRate: string,
    secondRate: string,
    value: number,
    theSameValue: number
  ): any {
    console.log(firstRate, secondRate, value, theSameValue);
    let valueToChange = 0;
    if (firstRate == 'UAH' && secondRate == 'USD') {
      valueToChange = this.UAHtoUSD(value);
      return valueToChange;
    } else if (firstRate == 'UAH' && secondRate == 'EUR') {
      valueToChange = this.UAHtoEUR(value);
      return valueToChange;
    } else if (firstRate == 'EUR' && secondRate == 'USD') {
      valueToChange = this.EURtoUSD(value);
      return valueToChange;
    } else if (firstRate == 'USD' && secondRate == 'EUR') {
      valueToChange = this.USDtoEUR(value);
      return valueToChange;
    } else if (firstRate == 'USD' && secondRate == 'UAH') {
      valueToChange = this.USDtoUAH(value);
      return valueToChange;
    } else if (firstRate == 'EUR' && secondRate == 'UAH') {
      valueToChange = this.EURtoUAH(value);
      return valueToChange;
    } else if (
      (firstRate == 'EUR' && secondRate == 'EUR') ||
      (firstRate == 'UAH' && secondRate == 'UAH') ||
      (firstRate == 'USD' && secondRate == 'USD')
    ) {
      valueToChange = theSameValue;
      return valueToChange;
    }
  }

  firstInputChangeHandler(rate: number) {
    this.secondConvertValue = this.Converter(
      this.firstConvert,
      this.secondConvert,
      rate,
      this.firstConvertValue
    );
  }

  secondInputChangeHandler(rate: number) {
    this.firstConvertValue = this.Converter(
      this.secondConvert,
      this.firstConvert,
      rate,
      this.secondConvertValue
    );
  }
}
