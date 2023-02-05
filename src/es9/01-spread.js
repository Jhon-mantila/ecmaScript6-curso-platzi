const user = { 
    username: 'jhon',
    age: 36,
    country: 'CO'
}
const { username, ...value} = user;
console.log(username);
console.log(value);

/*Cuidado con la copia en diferentes niveles de profundidad
El operador de propagación sirve para crear una copia en un solo nivel de profundidad, esto quiere decir que si existen objetos o arrays dentro de un objeto a copiar. Entonces los sub-elementos en cada nivel, tendrán la misma referencia en la copia y en el original. */
const original = { datos: [1, [2, 3], 4, 5] }
const copia = { ...original }
console.log(original);
console.log(copia);

console.log(original === copia); // false

console.log(original["datos"] === copia["datos"]); // true