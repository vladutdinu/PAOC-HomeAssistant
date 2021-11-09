import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { UmiditateService } from 'src/app/services/umiditate.service';
@Component({
  selector: 'app-umiditate',
  templateUrl: './umiditate.component.html',
  styleUrls: ['../chart.scss']
})
export class UmiditateComponent implements OnInit {

  constructor(private umiditateServise: UmiditateService) { }

  ngOnInit(): void {
  }
  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { data: [...this.umiditateServise.data], label: 'Umiditate' }
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = [...this.umiditateServise.lineChartLabels];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [


    { // blue
      backgroundColor: 'rgba(0,0,255,0.5)',
      borderColor: 'blue',
      pointBackgroundColor: '#fafafa',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: '#fafafa'
    }
  ];

  // Set true to show legends
  lineChartLegend = false;

  // Define type of chart
  lineChartType: ChartType = 'line';
  //pieChartType: ChartType = 'pie';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
