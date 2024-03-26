import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mariosection1Component } from './mariosection1.component';

describe('Mariosection1Component', () => {
  let component: Mariosection1Component;
  let fixture: ComponentFixture<Mariosection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mariosection1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mariosection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
