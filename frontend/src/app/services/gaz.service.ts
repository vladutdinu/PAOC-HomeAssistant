import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GazService {

  gaz = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  data = [80, 59, 80, 81, 56, 55, 40]
  constructor() { }
}
