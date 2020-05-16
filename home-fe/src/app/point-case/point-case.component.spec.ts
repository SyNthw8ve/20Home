import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointCaseComponent } from './point-case.component';

describe('PointCaseComponent', () => {
  let component: PointCaseComponent;
  let fixture: ComponentFixture<PointCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
