import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIncidentComponent } from './home-incident.component';

describe('HomeIncidentComponent', () => {
  let component: HomeIncidentComponent;
  let fixture: ComponentFixture<HomeIncidentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIncidentComponent]
    });
    fixture = TestBed.createComponent(HomeIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
