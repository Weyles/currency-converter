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

  UAHtoUSD() {
    this.secondConvertValue = this.firstConvertValue / Number(this.data[0].buy);
    return this.secondConvertValue;
  }
  UAHtoEUR() {
    this.secondConvertValue = this.firstConvertValue / Number(this.data[1].buy);
    return this.secondConvertValue;  
  }
  EURtoUSD() {
    this.secondConvertValue = this.firstConvertValue * Number(this.data[1].buy)/Number(this.data[0].buy);
    return this.secondConvertValue;  
  }
  USDtoEUR() {
    this.secondConvertValue = this.firstConvertValue * Number(this.data[0].buy)/Number(this.data[1].buy);
    return this.secondConvertValue;  
  }

  firstInputChangeHandler() {
    console.log(this.firstConvertValue)
    console.log(this.secondConvertValue)
    console.log(this.data[0].buy)
    console.log(this.secondConvert)

    if (this.firstConvert == "UAH" && this.secondConvert == "USD") {
      this.UAHtoUSD()
    } else if (this.firstConvert == "UAH" && this.secondConvert == "EUR") {
      this.UAHtoEUR()
    } else if (this.firstConvert == "EUR" && this.secondConvert == "USD") {
      this.EURtoUSD()
    } else if (this.firstConvert == "USD" && this.secondConvert == "EUR") {
      this.USDtoEUR()}
  }

  secondInputcChangeHandler() {

  }
}
