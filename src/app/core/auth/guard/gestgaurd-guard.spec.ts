import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gestgaurdGuard } from './gestgaurd-guard';

describe('gestgaurdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => gestgaurdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
