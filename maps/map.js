/**
 * MAPY:
 *  - jak obiekty ale w ich przypadku kluczem może być wartość dowolnego typu.
 *  - iteracja po mapie: metoda `for of`
 */

/**
 * WEAK MAP:
 *  - to samo co mapa tylko kluczem może być obiekt lub funkcja.
 *  - gdy klucz zostanie usunięty, zniknie wartośc tego elementu.
 */

const map = new Map();
const map2 = new Map([
  [1, "item1"],
  [2, "item3"],
  [3, "item3"],
]);
const set = map.set(1, "item1").set(2, "item3").set([3, "item3"]);
console.error(map);
const get = map.get(1);
console.error(get);
const delete1 = map.delete(1);
console.error(map);

for (const iterator of map) {
  console.error(iterator);
}
