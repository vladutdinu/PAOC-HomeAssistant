import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  chart = 1;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(i => {
      this.chart = i['id'];
      console.log(i);
    });


  };

  goTo(i: number) {
    this.router.navigate(['result/', i]);
  }
}
