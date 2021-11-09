import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GazComponent } from './gaz.component';

describe('GazComponent', () => {
  let component: GazComponent;
  let fixture: ComponentFixture<GazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
