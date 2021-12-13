import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ThemeService } from 'ng2-charts';
import { GazModel } from 'src/app/models/gazModel';
import { GazService } from 'src/app/services/gaz.service';

@Component({
  selector: 'app-gaz',
  templateUrl: './gaz.component.html',
  styleUrls: ['./gaz.component.scss']
})
export class GazComponent implements OnInit {

  constructor(private gazService: GazService) { }

  gaz?: GazModel;
  Data = [
    { gaz: 22, time: '12:00' },
    { gaz: 23, time: '13:00' },
    { gaz: 24, time: '14:00' },
    { gaz: 24, time: '15:00' },
    { gaz: 24, time: '16:00' },
    { gaz: 24, time: '17:00' },
    { gaz: 24, time: '18:00' },];

  ngOnInit(): void {
    this.gazService.getGasValue().subscribe(data => {
      this.gaz = data as GazModel;
    })
  }

}
