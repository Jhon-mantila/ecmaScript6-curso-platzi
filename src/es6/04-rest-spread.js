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

