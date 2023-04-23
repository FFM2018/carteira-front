import { TestBed } from '@angular/core/testing';

import { CarteiraResolver } from './carteira.resolver';

describe('CarteiraResolver', () => {
  let resolver: CarteiraResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CarteiraResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
