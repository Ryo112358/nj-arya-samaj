import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VedaSaamaComponent } from './veda-saama.component';

describe('VedaSaamaComponent', () => {
  let component: VedaSaamaComponent;
  let fixture: ComponentFixture<VedaSaamaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VedaSaamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedaSaamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
