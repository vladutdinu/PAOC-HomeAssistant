import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LedService {

  constructor(private httpClient: HttpClient,
  ) { }

  url = `http://192.168.0.101:8080/`;

  room1(LedNumber: number) {
    return this.httpClient.post(this.url + "led1", LedNumber);
  }

  room2(LedNumber: number) {
    return this.httpClient.post(this.url + "led2", LedNumber);
  }

  room3(LedNumber: number) {
    return this.httpClient.post(this.url + "led3", LedNumber);
  }

}
