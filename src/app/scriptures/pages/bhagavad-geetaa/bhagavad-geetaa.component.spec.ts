import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhagavadGeetaaComponent } from './bhagavad-geetaa.component';

describe('BhagavadGeetaaComponent', () => {
  let component: BhagavadGeetaaComponent;
  let fixture: ComponentFixture<BhagavadGeetaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhagavadGeetaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhagavadGeetaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
