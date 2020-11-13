import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleInstancesComponent } from './multiple-instances.component';

describe('MultipleInstancesComponent', () => {
  let component: MultipleInstancesComponent;
  let fixture: ComponentFixture<MultipleInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
