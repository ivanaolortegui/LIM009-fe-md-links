import { cli } from '../src/cli.js'

describe('cli', () => {
    it('debería ser una función', () => {
      expect( typeof cli).toBe('function')
    });
    
    it('debería ser una función', () => {
      expect(cli(process.argv)).toEqual({"stats": false, "validate": false})
    });
    
  });