import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Method2StructureComponent } from './method2-structure.component';

describe('Method2StructureComponent', () => {
  let component: Method2StructureComponent;
  let fixture: ComponentFixture<Method2StructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Method2StructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Method2StructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
