import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedaRigComponent } from './veda-rig.component';

describe('VedaRigComponent', () => {
  let component: VedaRigComponent;
  let fixture: ComponentFixture<VedaRigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedaRigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedaRigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
