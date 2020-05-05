import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCountryDetailsComponent } from './home-country-details.component';

describe('HomeCountryDetailsComponent', () => {
  let component: HomeCountryDetailsComponent;
  let fixture: ComponentFixture<HomeCountryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCountryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
