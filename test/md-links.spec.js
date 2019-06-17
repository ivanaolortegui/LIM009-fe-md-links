import { mdLinks } from '../src/md-links.js'

describe('mdLinks', () => {
  it('debería ser una función', () => {
    expect(typeof mdLinks).toBe('function')
  });
  it('debería ser retornar una promesa de array de objetos validados links', (done) => {
    mdLinks('/home/ivana/LIM009-fe-md-links/test/readme.md', { validate: true }).
      then((links) => {
        expect(links).toEqual([{
          "link": "href=\"https://es.wikipedia.org/wiki/Markdown\"",
          "ok": "OK", "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
          "status": 200, "text": "Markdown"
        },
        {
          "link": "href=\"https://es.wikipedia.org/wiki/Markdown\"", "ok": "OK",
          "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
          "status": 200, "text": "Man"
        }])
        done()
      });

  });

  it('debería ser retornar una promesa de array de objetos sin validar links', (done) => {
    mdLinks('/home/ivana/LIM009-fe-md-links/test/readme.md', { validate: false }).
      then((links) => {
        expect(links).toEqual([{
          "link": "href=\"https://es.wikipedia.org/wiki/Markdown\"",
          "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
          "text": "Markdown"
        },
        {
          "link": "href=\"https://es.wikipedia.org/wiki/Markdown\"",
          "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
          "text": "Man"
        }])
        done()
      })

  })
  it('debería ser retornar una promesa de array de objetos sin validar links', (done) => {
    mdLinks('/home/ivana/LIM009-fe-md-links/test/', { validate: false }).
      then((links) => {
        expect(links).toEqual([{
          "link": "href=\"https://es.wikipedia.org/wiki/Markdown\"",
          "ruta": "/home/ivana/LIM009-fe-md-links/test/",
          "text": "Markdown"
        },
        {
          "link": "href=\"https://es.wikipedia.org/wiki/Markdown\"",
          "ruta": "/home/ivana/LIM009-fe-md-links/test/",
          "text": "Man"
        }, {
          "link": "href=\"https://es.wikipedia.org/wiki/ss\"",
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
          "link": "href=\"https://es.wikipedia.org/wiki/ss\"",
          "ok": "OK", "ruta": "/home/ivana/LIM009-fe-md-links/test/vv",
          "status": 200, "text": "vv"
        }])
        done();
      });

  });
  it('debería ser retornar una promesa de array de objetos validados links', (done) => {
    mdLinks('/home/ivana/LIM009-fe-md-links/test/index.spec.js', { validate: true }).
      then((links) => {
        expect(links).toEqual([])
        done();
      });
    });
});