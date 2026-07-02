import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canDeactiveteGuard } from './can-deactivete-guard';

describe('canDeactiveteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => canDeactiveteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
