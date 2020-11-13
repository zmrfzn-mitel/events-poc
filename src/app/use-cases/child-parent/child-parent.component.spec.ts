import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildParentComponent } from './child-parent.component';

describe('ChildParentComponent', () => {
  let component: ChildParentComponent;
  let fixture: ComponentFixture<ChildParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
