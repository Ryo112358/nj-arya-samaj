import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SanskaaraComponent } from './sanskaara.component';

describe('SanskaaraComponent', () => {
  let component: SanskaaraComponent;
  let fixture: ComponentFixture<SanskaaraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SanskaaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanskaaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
