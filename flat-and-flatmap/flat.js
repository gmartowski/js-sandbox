
// .flat()

const arry = [1, 2, 3, [4, 5, 6, 7, [8, 9, 10, [1, 12, 13]]]];

// usuwa kolejny poziom zagnieżdżenia tablicy (pierwszy od lewej).
// console.error(arry.flat());
// console.error(arry.flat(2));
// console.error(arry.flat(Infinity)); // jeśli poziom zagniezdżenia nie jest nam znany


// .flatMap()
const arr = [1,2,3,4,5];

// Metoda najpierw mapuje elementy, a nastepnie spłaszcza wywołując .flat(1) - "It is identical to a map() followed by a flat() of depth 1".
const powed = arr.flatMap((x) => [x, Math.pow(x,2)]);
// console.error(powed);

