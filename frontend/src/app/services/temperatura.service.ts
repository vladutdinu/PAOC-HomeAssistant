import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {
  data = [65, 59, 80, 81, 56, 55, 40];
  lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  constructor() { }
}
