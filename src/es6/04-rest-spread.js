//ES6: asignación de desestructuración
//arrays destructuring

let fruits = ['Apple', 'Bananas'];
let [a,b] = fruits;
console.log(a, fruits[1]);

//object destructuring
let user = {
    username : 'Jhon', 
    age: 36
};
let {username, age } = user;
console.log(username, user.age);

//spread operator
let person = {name: 'oscar', age: 28};
let country = 'CO';
//se le aplica la desestructuración al objeto y se le agrega la variable country
let data = { person, country};
console.log(data)
//los tres puntos me pertimen que sean del mismo objeto sin los puntos crearia un objeto nuevo donde englobaria dos objetos
data = { ...person, country};
console.log(data);
data = { id: 1, ...person, country};
console.log(data);

//rest
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);

    return num + values[0];
}
sum(1, 5,4,3,2);