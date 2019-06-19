import { cli, mdLink } from '../src/cli.js'


describe('cli', () => {
  it('debería ser una función', () => {
    expect(typeof cli).toBe('function')
  });
  it('debería ser un objeto con validate true', () => {
    expect(cli('--validate')).toEqual({ "stats": false, "validate": true })
  });
  it('debería ser un objeto con stats true', () => {
    expect(cli('--stats')).toEqual({ "stats": true, "validate": false })
  });

});

describe('md-links', () => {
  it('debería ser una función', () => {
    expect(typeof mdLink).toBe('function')
  });

  it('debería retornar validate y stats', (done) => {
    mdLink('/home/ivana/LIM009-fe-md-links/test/readme.md', { validate: true, stats: true }).
      then((links) => {
        expect(links).toEqual(`Total :2\nUnique :1Broken : 0`)
        done()
      });
  });
  it('debería retornar stats', (done) => {
    mdLink('/home/ivana/LIM009-fe-md-links/test/readme.md', { validate: false, stats: true }).
      then((links) => {
        expect(links).toEqual(`Total :2\nUnique :1`)
        done()
      });
  });
  it('debería retornar validate', (done) => {
    mdLink('/home/ivana/LIM009-fe-md-links/test/readme.md', { validate: true, stats: false }).
      then((links) => {
        expect(links).toEqual([{
          "link": "href=\"https://es.wikipedia.org/wiki/Markdown\"",
          "ok": "OK", "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
          "status": 200, "text": "Markdown"
        },
        {
          "link": "href=\"https://es.wikipedia.org/wiki/Markdown\"",
          "ok": "OK", "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
          "status": 200, "text": "Man"
        }])
        done()
      });
  });
});

