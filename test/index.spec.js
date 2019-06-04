import { routeIsAbsolute } from '../lib.js'

describe('routeIsAbsolute', () => {
  it('debería ser una función', () => {
    expect(typeof routeIsAbsolute).toBe('function')
  });
  it('debería ser una función', () => {
    expect(routeIsAbsolute('/home/ivana/LIM009-fe-md-links/test/index.spec.js')).toBe(true)
  });
});