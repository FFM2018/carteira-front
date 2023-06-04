import { TestBed } from '@angular/core/testing';

import { EmpresaResolver } from './empresa.resolver';

describe('EmpresaResolver', () => {
  let resolver: EmpresaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EmpresaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
