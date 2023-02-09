class Personas{
    //Constructor
    constructor(name, edad){
        this.name = name;
        this.edad = edad;
    }

    //Métodos
    //con # se vuelve privado el metodo
    #speak(){
        return 'Hello';
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    //con # se vuelve privado el metodo
    get #getAge(){
        return this.edad;
    }
    //con # se vuelve privado el metodo
    set #setAge(edad){
        this.edad = edad;
    }
}

const persona1 = new Personas("Jhon", 36);
//para llamar los getter no se necesita el parentisis
console.log(persona1.getAge);
//para pasar un para metro = y el parametro, 
console.log(persona1.setAge = 20);
console.log(persona1.speak);