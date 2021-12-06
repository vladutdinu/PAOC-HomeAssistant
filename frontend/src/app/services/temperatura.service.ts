import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TempApaModel } from '../models/TempApaModel';
import { TempModel } from '../models/TempModel';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {
  data = [65, 59, 80, 81, 56, 55, 40];
  lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  constructor(public httpClient: HttpClient) { }

  url = `http://192.168.0.101:8080/`;
  getTempAndUmiditateValue(): Observable<TempModel> {
    //  console.log(this.httpClient.get(this.url) as Observable<TempApaModel>);
    return this.httpClient.get(this.url + `temps`) as Observable<TempModel>;
  }

  //getTempValues() {

  //  return this.httpClient.get<TempApaModel>(this.url + `temperaturi`);
  //}
  getTempValues(): Observable<TempApaModel> {
    //  console.log(this.httpClient.get(this.url) as Observable<TempApaModel>);
    return this.httpClient.get(this.url + `temperaturi`) as Observable<TempApaModel>;
  }
}
