import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Settening } from './settening';

describe('Settening', () => {
  let component: Settening;
  let fixture: ComponentFixture<Settening>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Settening],
    }).compileComponents();

    fixture = TestBed.createComponent(Settening);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
