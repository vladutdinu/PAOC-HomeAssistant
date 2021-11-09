import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ThemeService } from 'ng2-charts';
import { GazService } from 'src/app/services/gaz.service';

@Component({
  selector: 'app-gaz',
  templateUrl: './gaz.component.html',
  styleUrls: ['../chart.scss']
})
export class GazComponent implements OnInit {

  constructor(private gazServises: GazService) { }

  ngOnInit(): void {
  }
  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { data: [...this.gazServises.data], label: 'gaz' }
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = [...this.gazServises.gaz];


  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true,

  };

  // Define colors of chart segments
  lineChartColors: Color[] = [
    { // dark grey
      hoverBorderColor: '#fafafa',
      backgroundColor: '#8c8e91',
      borderColor: 'rgba(77,83,96,1)',
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


  lineChartPlugins = [];




}
