import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LedService {

  constructor(private httpClient: HttpClient,
  ) { }

  url = `http://localhost:8080/`;

  room1(LedNumber: number) {
    fetch(this.url + "led1/"+LedNumber);
    //return this.httpClient.get(this.url + "led1/"+LedNumber);
  }

  room2(LedNumber: number) {
    fetch(this.url + "led2/"+LedNumber);
    //return this.httpClient.get(this.url + "led2/"+LedNumber);
  }

  room3(LedNumber: number) {
    fetch(this.url + "led3/"+LedNumber);
    //return this.httpClient.get(this.url + "led3/"+LedNumber);
  }

}
