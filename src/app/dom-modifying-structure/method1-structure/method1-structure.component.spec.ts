import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Method1StructureComponent } from './method1-structure.component';

describe('Method1StructureComponent', () => {
  let component: Method1StructureComponent;
  let fixture: ComponentFixture<Method1StructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Method1StructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Method1StructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
