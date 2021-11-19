import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TempApaModel } from '../models/TempApaModel';

@Injectable({
  providedIn: 'root'
})
export class GazService {

  gaz = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  data = [80, 59, 80, 81, 56, 55, 40]
  constructor(public httpClient: HttpClient) { }

  url = '';
  getGasValues(): Observable<TempApaModel[]> {
    return this.httpClient.get(this.url) as Observable<TempApaModel[]>;

  }
}
