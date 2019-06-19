import { stats, broken } from '../src/main.js'

describe('stats', () => {
  it('debería ser una función', () => {
    expect(typeof stats).toBe('function')
  });

  it('debería retorna una cadena', () => {
    expect(stats([{
      "link": "href=\"https://es.wikipedia.org/wiki/Markdown\"",
      "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
      "text": "Markdown"
    },
    {
      "link": "href=\"https://es.wikipedia.org/wiki/Markdown\"",
      "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
      "text": "Man"
    }])).toBe(`Total :2\nUnique :1`)
  })

  it('debería retorna una cadena', () => {
    expect(stats([{ 
      "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
      "text": "Markdown"
    },
    { 
      "ruta": "/home/ivana/LIM009-fe-md-links/test/readme.md",
      "text": "Man"
    }])).toBe(`Total :0\nUnique :1`)
  })
});



describe('broken', () => {
  it('debería ser una función', () => {
    expect(typeof broken).toBe('function')
  });

  it('debería retorna una cadena con los links broken', () => {
    expect(broken("Total :2 Unique :1", [{
      "link": "href=\"http://www.hddskds.cd/\"",
      "ok": "fail",
      "ruta": "/home/ivana/LIM009-fe-md-links/test/vv",
      "status": "request to http://www.hddskds.cd/ failed, reason: getaddrinfo ENOTFOUND www.hddskds.cd www.hddskds.cd:80",
      "text": "vv"
    },
    {
      "link": "href=\"http://www.hddskds.cd/\"",
      "ok": "fail",
      "ruta": "/home/ivana/LIM009-fe-md-links/test/vv",
      "status": "request to http://www.hddskds.cd/ failed, reason: getaddrinfo ENOTFOUND www.hddskds.cd www.hddskds.cd:80",
      "text": "vv"
    }])).toEqual("Total :2 Unique :1Broken : 2")
  })
  it('debería retorna una cadena con los links broken', () => {
    expect(broken("Total :2 Unique :1", [ { 'link': 'href="https://es.wikipedia.org/wiki/Markdown"',
    'text': 'Markdown',
    'ruta': '/home/ivana/LIM009-fe-md-links/test/readme.md',
    'status': 200,
    'ok': 'OK' },
  { 'link': 'href="https://es.wikipedia.org/wiki/Markdown"',
    'text': 'Man',
    'ruta': '/home/ivana/LIM009-fe-md-links/test/readme.md',
    'status': 200,
    'ok': 'OK' } ])).toBe("Total :2 Unique :1Broken : 0")
  })
});