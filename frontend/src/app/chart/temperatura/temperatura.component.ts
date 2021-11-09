import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { TemperaturaService } from 'src/app/services/temperatura.service';
@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['../chart.scss']
})
export class TemperaturaComponent implements OnInit {

  constructor(private tempServise: TemperaturaService) { }

  ngOnInit(): void {
  }
  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { data: [...this.tempServise.data], label: 'temperatura' },
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = [...this.tempServise.lineChartLabels];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
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
