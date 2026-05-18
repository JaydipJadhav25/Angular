import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpForm } from './imp-form';

describe('ImpForm', () => {
  let component: ImpForm;
  let fixture: ComponentFixture<ImpForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ImpForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
