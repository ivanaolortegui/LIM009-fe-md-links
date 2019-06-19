import { cli, mdLink } from '../src/cli.js'
// import { mdLinks } from '..src/md-links.js'

describe('cli', () => {
  it('debería ser una función', () => {
    expect(typeof cli).toBe('function')
  });


});

describe('md-links', () => {
  it('debería retornar broken', (done) => {
    mdLink('/home/ivana/LIM009-fe-md-links/test/readme.md', { validate: true, stats: true }).
      then((links) => {
        expect(links).toEqual("Total :2 Unique :1Broken : 0")
        done()
      });
  });

});

