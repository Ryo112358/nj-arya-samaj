import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhajansComponent } from './bhajans.component';

describe('BhajansComponent', () => {
  let component: BhajansComponent;
  let fixture: ComponentFixture<BhajansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhajansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhajansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
