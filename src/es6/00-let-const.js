var lastName = 'Jhon';
lastName = 'Jessika';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
//animal = 'Cat'; // las constantes no se puere re-asignar
console.log(animal);

const fruits = () => {
    if (true){
        var fruit1 = 'Mango';
        let fruit2 = 'Banana';
        const fruit3 = 'Kiwi';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();