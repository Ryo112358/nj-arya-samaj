import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandalaComponent } from './mandala.component';

describe('MandalaComponent', () => {
  let component: MandalaComponent;
  let fixture: ComponentFixture<MandalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});