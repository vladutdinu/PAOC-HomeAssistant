import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GazModel } from '../models/gazModel';
import { TempApaModel } from '../models/TempApaModel';

@Injectable({
  providedIn: 'root'
})
export class GazService {

  gaz = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  data = [80, 59, 80, 81, 56, 55, 40]
  constructor(public httpClient: HttpClient) { }

  url = '192.168.0.101/';
  getGasValue(): Observable<GazModel> {
    return this.httpClient.get(this.url) as Observable<GazModel>;

  }
}
