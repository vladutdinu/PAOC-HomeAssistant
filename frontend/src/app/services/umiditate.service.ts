import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apaModel } from '../models/apaModel';

@Injectable({
  providedIn: 'root'
})
export class UmiditateService {
  data = [65, 59, 80, 81, 56, 55, 40];
  lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  constructor(public httpClient: HttpClient) { }

  url = `http://localhost:8080/humds`;
  getUmiditateValue(): Observable<apaModel> {

    return this.httpClient.get(this.url) as Observable<apaModel>;
  }
}
