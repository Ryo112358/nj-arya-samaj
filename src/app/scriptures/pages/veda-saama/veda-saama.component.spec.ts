import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedaSaamaComponent } from './veda-saama.component';

describe('VedaSaamaComponent', () => {
  let component: VedaSaamaComponent;
  let fixture: ComponentFixture<VedaSaamaComponent>;

  beforeEach(async(() => {
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
