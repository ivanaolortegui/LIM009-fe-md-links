const path = require('path');
import { routeIsAbsolute, extensionmd, isFile, isDirectory } from '../src/index.js'

describe('routeIsAbsolute', () => {
  it('debería ser una función', () => {
    expect(typeof routeIsAbsolute).toBe('function')
  });
  it('debería retorna la ruta absoluta', () => {
    expect(routeIsAbsolute(path.join(process.cwd(), 'index.spec.js'))).toBe('/home/ivana/LIM009-fe-md-links/index.spec.js')
  });
  it('debería retorna la ruta absoluta', () => {
    expect(routeIsAbsolute('home/ivana/LIM009-fe-md-links/test/index.spec.js')).toBe("/home/ivana/LIM009-fe-md-links/home/ivana/LIM009-fe-md-links/test/index.spec.js")
  });

});

describe('extensionmd', () => {
  it('debería ser una función', () => {
    expect(typeof extensionmd).toBe('function')
  });
  it('debería retorna un array', () => {
    expect(extensionmd(path.join(process.cwd(), '/index.md'))).toBe(true)
  });
  it('debería retorna un array vacio', () => {
    expect(extensionmd(path.join(process.cwd(), 'test/index.spec.js'))).toBe(false)
  });
});


describe('isFile', () => {
  it('debería ser una función', () => {
    expect(typeof isFile).toBe('function')
  });
  it('debería retorna un bolean', () => {
    expect(isFile(path.join(process.cwd(), '/test/show.js'))).toBe(true)
  })

});

describe('isDirectory', () => {
  it('debería ser una función', () => {
    expect(typeof isDirectory).toBe('function')
  });
  it('debería retorna un bolean', () => {
    expect(isDirectory(path.join(process.cwd(), 'test/'))).toBe(true)
  })

});


