import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demopage } from './demopage';

describe('Demopage', () => {
  let component: Demopage;
  let fixture: ComponentFixture<Demopage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demopage],
    }).compileComponents();

    fixture = TestBed.createComponent(Demopage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
