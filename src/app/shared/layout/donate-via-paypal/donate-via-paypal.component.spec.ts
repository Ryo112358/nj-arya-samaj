import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateViaPaypalComponent } from './donate-via-paypal.component';

describe('DonateViaPaypalComponent', () => {
  let component: DonateViaPaypalComponent;
  let fixture: ComponentFixture<DonateViaPaypalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateViaPaypalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateViaPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
