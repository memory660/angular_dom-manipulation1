import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Method2Component } from './method2.component';

describe('Method2Component', () => {
  let component: Method2Component;
  let fixture: ComponentFixture<Method2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Method2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Method2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
