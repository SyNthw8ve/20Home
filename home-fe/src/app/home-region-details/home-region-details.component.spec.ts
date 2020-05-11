import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegionDetailsComponent } from './home-region-details.component';

describe('HomeRegionDetailsComponent', () => {
  let component: HomeRegionDetailsComponent;
  let fixture: ComponentFixture<HomeRegionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRegionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRegionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
