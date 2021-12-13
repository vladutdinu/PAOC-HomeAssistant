import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { TempApaModel } from 'src/app/models/TempApaModel';
import { TemperaturaService } from 'src/app/services/temperatura.service';
import { UmiditateService } from 'src/app/services/umiditate.service';
@Component({
  selector: 'app-umiditate',
  templateUrl: './umiditate.component.html',
  styleUrls: ['./umiditate.component.scss']
})
export class UmiditateComponent implements OnInit {

  constructor(private tempService: TemperaturaService) { }

  apa?: TempApaModel;
  Data = [
    { apa: 22, time: '12:00' },
    { apa: 23, time: '13:00' },
    { apa: 24, time: '14:00' },
    { apa: 24, time: '15:00' },
    { apa: 24, time: '16:00' },
    { apa: 24, time: '17:00' },
    { apa: 24, time: '18:00' },];

  ngOnInit(): void {
    // this.tempService.getTempAndUmiditateValue().subscribe(data => {
    //   this.apa = data as TempApaModel;
    //   console.log(this.apa.humidity);
    // })
  }

}
