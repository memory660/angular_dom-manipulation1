import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Method1Component } from './method1.component';

describe('Method1Component', () => {
  let component: Method1Component;
  let fixture: ComponentFixture<Method1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Method1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Method1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
