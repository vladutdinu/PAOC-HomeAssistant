import { Component, OnChanges, OnInit } from '@angular/core';
import { TempApaModel } from '../models/TempApaModel';
import { GazService } from '../services/gaz.service';
import { TemperaturaService } from '../services/temperatura.service';
import { UmiditateService } from '../services/umiditate.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {
  constructor(private tempService: TemperaturaService, private gazService: GazService, private apaService: UmiditateService) {
  }

  mobile: boolean = false;
  temp?: number;
  apa?: number;
  gaz: number = 0;
  interval: any;
  tempApa?: TempApaModel;

  ngOnInit(): void {

    this.isMobile();
    this.getUmiditate();
    this.getGas();
    this.getTemp();

    this.interval = setInterval(() => {

      this.getTemp();
      this.getUmiditate();
      this.getGas();
      
    }, 1000);

  }

  getUmiditate() {
    this.apaService.getUmiditateValue().subscribe(data => {
      this.apa = data.humidity;
    })
  }

  getGas() {
    this.gazService.getGasValue().subscribe(data => {
      this.gaz = data.gas;
    })
  }

  getTemp() {
    this.tempService.getTempAndUmiditateValue().subscribe(data => {
      this.temp = data.temp;
    })
  }

  isMobile() {
    if (window.innerWidth >= 600) {
      this.mobile = true;
    }
    else {
      this.mobile = false;
    }
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

