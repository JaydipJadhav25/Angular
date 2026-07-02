import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableForm } from './resuable-form';

describe('ResuableForm', () => {
  let component: ResuableForm;
  let fixture: ComponentFixture<ResuableForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResuableForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ResuableForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
