import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mariosection2Component } from './mariosection2.component';

describe('Mariosection2Component', () => {
  let component: Mariosection2Component;
  let fixture: ComponentFixture<Mariosection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mariosection2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mariosection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
