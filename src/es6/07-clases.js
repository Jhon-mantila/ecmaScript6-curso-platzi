//Declarando la clase
class User{

}
//instancia clase
const newUser = new User();

class user{
    //Constructor
    constructor(){
        console.log('Nuevo Usuario');
        
    }

    //metodos
    greeting(){
        return 'Hello';
    }
};

const newUser2 = new user();
console.log(newUser2.greeting());
const newUser3 = new user();
console.log(newUser3.greeting());

class saludo{
    //Constructor
    constructor(name){
        this.name = name;
    }
    //Métodos
    speak(){
        return 'Hello';
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const saludo1 = new saludo("jhon");
console.log(saludo1.greeting());

//setter getter

class Personas{
    //Constructor
    constructor(name, edad){
        this.name = name;
        this.edad = edad;
    }

    //Métodos
    speak(){
        return 'Hello';
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get getAge(){
        return this.edad;
    }

    set setAge(edad){
        this.edad = edad;
    }
}

const persona1 = new Personas("Jhon", 36);
//para llamar los getter no se necesita el parentisis
console.log(persona1.getAge);
//para pasar un para metro = y el parametro, 
console.log(persona1.setAge = 20);