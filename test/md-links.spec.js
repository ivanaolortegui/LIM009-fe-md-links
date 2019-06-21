import fetchMock from "../__mocks__/node-fetch"
fetchMock.config.sendAsJson = false;

import { mdLinks } from '../src/md-links.js'
fetchMock
.mock('https://es.wikipedia.org/wiki/Markdown', 200)
.mock('http://www.hddskds.cd/',
 { throws: new TypeError('request to http://www.hddskds.cd/ failed, reason: getaddrinfo ENOTFOUND www.hddskds.cd www.hddskds.cd:80') })

describe('mdLinks', () => {
  it('debería ser una función', () => {
    expect(typeof mdLinks).toBe('function')
  });
  it('debería ser retornar una promesa de array de objetos validados links', (done) => {
    mdLinks('/home/ivana/LIM009-fe-md-links/test/readme.md', { validate: true, stats:false }).
      then((links) => {
        expect(links).toEqual([{
          "link": "https://es.wikipedia.org/wiki/Markdown",
          "ok": "OK", "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
          "status": 200, "text": "Markdown"
        },
        {
          "link": "https://es.wikipedia.org/wiki/Markdown", "ok": "OK",
          "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
          "status": 200, "text": "Man"
        }])
        done()
      });

  });

  it('debería ser retornar una promesa de array de objetos sin validar links', (done) => {
    mdLinks('/home/ivana/LIM009-fe-md-links/test/readme.md', { validate: false, stats:false }).
      then((links) => {
        expect(links).toEqual([{
          "link": "https://es.wikipedia.org/wiki/Markdown",
          "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
          "text": "Markdown"
        },
        {
          "link": "https://es.wikipedia.org/wiki/Markdown",
          "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
          "text": "Man"
        }])
        done()
      })

  })
  it('debería ser retornar una promesa de array de objetos sin validar links', (done) => {
    mdLinks('/home/ivana/LIM009-fe-md-links/test/', { validate: false ,  stats: true}).
      then((links) => {
        expect(links).toEqual([{
          "link": "https://es.wikipedia.org/wiki/Markdown",
          "ruta": "/home/ivana/LIM009-fe-md-links/test/",
          "text": "Markdown"
        },
        {
          "link": "https://es.wikipedia.org/wiki/Markdown",
          "ruta": "/home/ivana/LIM009-fe-md-links/test/",
          "text": "Man"
        }, {
          "link": "http://www.hddskds.cd/",
          "ruta": "/home/ivana/LIM009-fe-md-links/test/",
          "text": "vv",
        }, {
          "link": "http://www.hddskds.cd/",
          "ruta": "/home/ivana/LIM009-fe-md-links/test/",
          "text": "vv",
        }])
        done();
      })

  })
  it('debería ser retornar una promesa de array de objetos validados links', (done) => {
    mdLinks('/home/ivana/LIM009-fe-md-links/test/vv', { validate: true }).
      then((links) => {
        expect(links).toEqual([{
          "link": "http://www.hddskds.cd/",
          "ok": "fail", 
          "ruta": "/home/ivana/LIM009-fe-md-links/test/vv", 
          "status": "request to http://www.hddskds.cd/ failed, reason: getaddrinfo ENOTFOUND www.hddskds.cd www.hddskds.cd:80",
           "text": "vv"},
            { "link": "http://www.hddskds.cd/",
             "ok": "fail", 
             "ruta": "/home/ivana/LIM009-fe-md-links/test/vv",
              "status": "request to http://www.hddskds.cd/ failed, reason: getaddrinfo ENOTFOUND www.hddskds.cd www.hddskds.cd:80",
              "text": "vv"}])
        done();
      });

  });
  it('debería ser retornar una promesa de array vacio validados links', (done) => {
    mdLinks('/home/ivana/LIM009-fe-md-links/test/index.spec.js', { validate: true }).
      then((links) => {
        expect(links).toEqual([])
        done();
      });
    });
});