



import { CanDeactivateFn } from '@angular/router';

// Interface for components to implement
export interface ICanDeactivate {
  canDeactivate: () => boolean;
}

// Correctly typed functional guard
export const canDeactivateGuard: CanDeactivateFn<ICanDeactivate> = (component) => {
  return component.canDeactivate();
};

