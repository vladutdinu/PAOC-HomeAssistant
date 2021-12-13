import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GazModel } from '../models/gazModel';
import { GasesModel } from '../models/gasesModel';

@Injectable({
  providedIn: 'root'
})
export class GazService {

  gaz = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  data = [80, 59, 80, 81, 56, 55, 40]
  constructor(public httpClient: HttpClient) { }

  
  url = `http://localhost:8080/`;
  getGasValue(): Observable<GazModel> {
    //  console.log(this.httpClient.get(this.url) as Observable<TempApaModel>);
    return this.httpClient.get(this.url + `gas`) as Observable<GazModel>;
  }

  //getTempValues() {

  //  return this.httpClient.get<TempApaModel>(this.url + `temperaturi`);
  //}
  getGasesValues(): Observable<GasesModel> {
    //  console.log(this.httpClient.get(this.url) as Observable<TempApaModel>);
    return this.httpClient.get(this.url + `gases`) as Observable<GasesModel>;
  }
}
