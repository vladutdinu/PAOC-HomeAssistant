import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LedService } from '../services/led.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private ledService: LedService) { }

  led1 = 0;
  led2 = 0;
  led3 = 0;

  ngOnInit(): void {
  }

  navigate(i: number) {
    this.router.navigate(['result/', i]);
  }

  livingRoom() {
    if (this.led1 == 0) {
      this.led1 = 1;
    }
    else {
      this.led1 = 0;
    }
    this.ledService.room1(this.led1);
  }

  room2() {
    if (this.led2 == 0) {
      this.led2 = 1;
    }
    else {
      this.led2 = 0;
    }
    this.ledService.room2(this.led2);
  }

  room3() {
    if (this.led3 == 0) {
      this.led3 = 1;
    }
    else {
      this.led3 = 0;
    }
    this.ledService.room3(this.led3);
  }
}
