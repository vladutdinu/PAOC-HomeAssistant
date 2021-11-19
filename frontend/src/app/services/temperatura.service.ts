import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TempApaModel } from '../models/TempApaModel';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {
  data = [65, 59, 80, 81, 56, 55, 40];
  lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  constructor(public httpClient: HttpClient) { }

  url = 'localhost:8080/temps';
  getTempAndUmiditateValues(): Observable<TempApaModel[]> {
    return this.httpClient.get(this.url) as Observable<TempApaModel[]>;

  }
}
