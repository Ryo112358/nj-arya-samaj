import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FuturePlansComponent } from './future-plans.component';

describe('FuturePlansComponent', () => {
  let component: FuturePlansComponent;
  let fixture: ComponentFixture<FuturePlansComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturePlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
