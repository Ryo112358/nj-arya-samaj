import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpanishadComponent } from './upanishad.component';

describe('UpanishadComponent', () => {
  let component: UpanishadComponent;
  let fixture: ComponentFixture<UpanishadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpanishadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpanishadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
