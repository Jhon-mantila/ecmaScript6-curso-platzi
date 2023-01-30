let hello = 'Hello';
let world = 'Word';
//ES5 tradicional de antes la concatenación
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

//Templte literal ES6
//`` comillas francesas.
let epicPhrase2 = `${hello} ${world}!`;

console.log(epicPhrase2);

//Multi-line Strings
let lorem = 'Esto es un string \n' + 'esto es otra línea.';
console.log(lorem);

let lorem2 = `Esta es una frase epica
con la multi lineas con las 
comillas fransesas.`;
console.log(lorem2);