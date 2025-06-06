import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrayersComponent } from './prayers.component';

describe('PrayersComponent', () => {
  let component: PrayersComponent;
  let fixture: ComponentFixture<PrayersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
