import { routeIsAbsolute, extensionmd, isfile } from '../cli.js'

describe('routeIsAbsolute', () => {
  it('debería ser una función', () => {
    expect(typeof routeIsAbsolute).toBe('function')
  });
  it('debería retorna un bolean', () => {
    expect(routeIsAbsolute('/home/ivana/LIM009-fe-md-links/test/index.spec.js')).toBe(true)
  });
  it('debería retorna un bolean', () => {
    expect(routeIsAbsolute('home/ivana/LIM009-fe-md-links/test/index.spec.js')).toBe("/home/ivana/LIM009-fe-md-links/home/ivana/LIM009-fe-md-links/test/index.spec.js")
  });

});

describe('extensionmd', () => {
  it('debería ser una función', () => {
    expect(typeof extensionmd).toBe('function')
  });
  it('debería retorna un array', () => {
    expect(extensionmd('/home/ivana/LIM009-fe-md-links/test/index.md')).toEqual(['/home/ivana/LIM009-fe-md-links/test/index.md'])
  });
  it('debería retorna un array vacio', () => {
    expect(extensionmd('/home/ivana/LIM009-fe-md-links/test/index.spec.js')).toEqual([])
  });
});


describe('isfile', () => {
  it('debería ser una función', () => {
    expect(typeof isfile).toBe('function')
  });
  it('debería retorna un bolean', () => {
    isfile('/home/ivana/LIM009-fe-md-links/test/index.md').then((stats)=>{
      expect(stats).toEqual(true)
    }) 
  });
});


