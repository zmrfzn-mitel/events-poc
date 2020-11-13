import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleEventsComponent } from './multiple-events.component';

describe('MultipleEventsComponent', () => {
  let component: MultipleEventsComponent;
  let fixture: ComponentFixture<MultipleEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
