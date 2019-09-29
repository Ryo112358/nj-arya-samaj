import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedaYajurComponent } from './veda-yajur.component';

describe('VedaYajurComponent', () => {
  let component: VedaYajurComponent;
  let fixture: ComponentFixture<VedaYajurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedaYajurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedaYajurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
