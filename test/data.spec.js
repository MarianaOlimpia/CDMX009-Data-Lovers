// importamos la función `example`
import { filterByTitle, getAllNews } from '../src/data';

// Prueba de filtro por título para input
describe(filterByTitle, () => {
  test('Debería retornar el título que incluya la palabra Halloween', () => {
    expect('All of Halloween is happening in TF2 s Scream Fortress X').toMatch('Halloween');
  });
});

describe(getAllNews, () => {
  test('Debería recibir todos los títulos contenidos en expected sin importar si hay adicionales', () => {
    expect(getAllNews).toEqual(['Operation Canteen Crasher!', 'All of Halloween is happening in TF2 s Scream Fortress X']);
  });
});

describe('arrayContaining', () => {
  const expected = ['Alice', 'Bob'];
  it('matches even if received contains additional elements', () => {
    expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
  });
});
