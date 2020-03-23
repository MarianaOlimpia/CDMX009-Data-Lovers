// importamos la función `example`
import { filterByTitle } from '../src/data';

describe('filterByTitle', () => {
  it('debería ser una función', () => {
    expect(typeof filterByTitle).toBe('function');
  });

  describe('filterByTitle', () => {
    it('deberia retornar el titulo que incluya la palabra Halloween', () => {
      expect(() => filterByTitle('Halloween')).toReturn('Title: All of Halloween is happening in TF2 s Scream Fortress X');
    });
  });
});
