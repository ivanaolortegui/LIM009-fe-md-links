import fetchMock from "../__mocks__/node-fetch"
fetchMock.config.sendAsJson = false;
import { cli, mdLink } from '../src/cli.js'
const path = require('path');

fetchMock
  .mock('https://es.wikipedia.org/wiki/Markdown', 200)
  .mock('http://www.hddskds.cd/', { throws: new TypeError('request to http://www.hddskds.cd/ failed, reason: getaddrinfo ENOTFOUND www.hddskds.cd www.hddskds.cd:80') })

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
    mdLink( path.join(process.cwd(), 'test/readme.md'), { validate: true, stats: true }).
      then((links) => {
        expect(links).toEqual(`Total :2\nUnique :1\nBroken : 0`)
        done()
      });
  });
  it('debería retornar stats', (done) => {
    mdLink( path.join(process.cwd(), 'test/readme.md'), { validate: false, stats: true }).
      then((links) => {
        expect(links).toEqual(`Total :2\nUnique :1`)
        done()
      });
  });
  it('debería retornar validate', (done) => {
    mdLink( path.join(process.cwd(), 'test/readme.md'), { validate: true}).
      then((links) => {
        expect(links).toEqual(` https://es.wikipedia.org/wiki/Markdown  Markdown  ${path.join(process.cwd(), 'test/readme.md')}  200  OK 
 https://es.wikipedia.org/wiki/Markdown  Man  ${path.join(process.cwd(), 'test/readme.md')}  200  OK 
`)
        done()
      });
  });
});

