import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCardComponent } from './green-card.component';

describe('GreenCardComponent', () => {
  let component: GreenCardComponent;
  let fixture: ComponentFixture<GreenCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
