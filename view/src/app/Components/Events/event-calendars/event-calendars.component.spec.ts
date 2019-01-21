import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCalendarsComponent } from './event-calendars.component';

describe('EventCalendarsComponent', () => {
  let component: EventCalendarsComponent;
  let fixture: ComponentFixture<EventCalendarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCalendarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCalendarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
