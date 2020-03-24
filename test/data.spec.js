// importamos la función `example`
import { filterByTitle } from '../src/data';

describe(filterByTitle, () => {
  test('deberia retornar el titulo que incluya la palabra Halloween', () => {
    expect('All of Halloween is happening in TF2 s Scream Fortress X').toMatch('ween');
  });
});
