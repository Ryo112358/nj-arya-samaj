import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveBodyComponent } from './executive-body.component';

describe('ExecutiveBodyComponent', () => {
  let component: ExecutiveBodyComponent;
  let fixture: ComponentFixture<ExecutiveBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
