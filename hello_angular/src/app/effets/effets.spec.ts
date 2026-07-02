import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Effets } from './effets';

describe('Effets', () => {
  let component: Effets;
  let fixture: ComponentFixture<Effets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Effets],
    }).compileComponents();

    fixture = TestBed.createComponent(Effets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
