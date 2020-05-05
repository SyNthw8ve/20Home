import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegionsComponent } from './home-regions.component';

describe('HomeRegionsComponent', () => {
  let component: HomeRegionsComponent;
  let fixture: ComponentFixture<HomeRegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRegionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
