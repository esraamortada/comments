import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mariosection3Component } from './mariosection3.component';

describe('Mariosection3Component', () => {
  let component: Mariosection3Component;
  let fixture: ComponentFixture<Mariosection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mariosection3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mariosection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
