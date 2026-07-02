import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bashbord } from './bashbord';

describe('Bashbord', () => {
  let component: Bashbord;
  let fixture: ComponentFixture<Bashbord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bashbord],
    }).compileComponents();

    fixture = TestBed.createComponent(Bashbord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
