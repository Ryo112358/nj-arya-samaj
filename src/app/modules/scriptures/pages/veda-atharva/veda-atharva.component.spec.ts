import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VedaAtharvaComponent } from './veda-atharva.component';

describe('VedaAtharvaComponent', () => {
  let component: VedaAtharvaComponent;
  let fixture: ComponentFixture<VedaAtharvaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VedaAtharvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedaAtharvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
