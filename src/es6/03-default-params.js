//Funciones con parametros por defecto ES5
function newUser(name, age, country){
    var name = name || 'Jhon';
    var age = age || 34;
    var country = country || 'Colombia';

    console.log(name, age, country);
}
newUser();
newUser('Jessika', 33);

//Funciones con parametros por defecto ES6
function newAdmin(name = 'Jhon', age = 32, country = 'CO'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Danela', 13);