import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmiditateComponent } from './umiditate.component';

describe('UmiditateComponent', () => {
  let component: UmiditateComponent;
  let fixture: ComponentFixture<UmiditateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmiditateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmiditateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
