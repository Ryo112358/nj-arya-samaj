import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitarianWorkComponent } from './humanitarian-work.component';

describe('HumanitarianWorkComponent', () => {
  let component: HumanitarianWorkComponent;
  let fixture: ComponentFixture<HumanitarianWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanitarianWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitarianWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
