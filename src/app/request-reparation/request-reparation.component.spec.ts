import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReparationComponent } from './request-reparation.component';

describe('RequestReparationComponent', () => {
  let component: RequestReparationComponent;
  let fixture: ComponentFixture<RequestReparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestReparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
