let hola = 'hello';
hola = hola.padStart(12, '*-*');
console.log(hola.padStart(8, '*-*')); // termina de rellenar las posiciones con **
console.log(hola.padEnd(20, '*-*'));