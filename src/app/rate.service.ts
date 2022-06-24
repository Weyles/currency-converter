import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    return this.http.get(url);
  }
}

