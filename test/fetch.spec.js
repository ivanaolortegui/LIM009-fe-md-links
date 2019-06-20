import fetchMock from "../__mocks__/node-fetch"
import { fetchLink } from '../src/fetch.js'
fetchMock.config.sendAsJson = false;

describe('fetchLink', () => {
  fetchMock
    .mock('https://es.wikipedia.org/wiki/Markdown', 200)
    .mock('https://www.no-existe.com/', { throws: new TypeError('error') })


  it('debería ser una función', () => {
    expect(typeof fetchLink).toBe('function')
  });
  it('retornar un objeto con status y ok', () => {
    fetchLink({
      "link": "href=\"https://es.wikipedia.org/wiki/Markdown\"",
      "ok": "OK", "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
      "status": 200, "text": "Markdown"
    }, {
        "link": "href=\"https://es.wikipedia.org/wiki/Markdown\"",
        "ok": "OK", "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
        "status": 200, "text": "Markdown"
      }).then((data) => {
        expect(data).toEqual({
          "link": "href=\"https://es.wikipedia.org/wiki/Markdown\"",
          "ok": "OK", "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
          "status": 200, "text": "Markdown"
        })

      })
      .catch((error) => {
        expect(error).toEqual({
          "link": "href=https://es.wikipedia.org/wiki/Markdown",
          "ok": "fail", "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
          "status": "request to https://es.wikipedia.org/wiki/Markdown failed, reason: getaddrinfo ENOTFOUND es.wikipedia.org es.wikipedia.org:443", "text": "Markdown"
        })
      })
    })


    it('retornar un objeto con status y ok fail', () => {
      fetchLink({
        "link": "href=\"https://www.no-existe.com/'",
        "ok": "OK", "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
        "status": 200, "text": "Markdown"
      }, {
          "link": "href=\"https://www.no-existe.com/",
          "ok": "OK", "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
          "status": 200, "text": "Markdown"
        }).then((data) => {
          expect(data).toEqual({
            "link": "href=\"https://www.no-existe.com/'",
            "ok": "fail", "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
            "status": "error", "text": "Markdown"
          })

        })
        .catch((error) => {
          expect(error).toEqual({
            "link": "href=\"https://www.no-existe.com/'",
            "ok": "fail", "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
            "status": "error"
          })
        
        })
      
    })
  })