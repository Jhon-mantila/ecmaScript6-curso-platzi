//para los generator se usa el asterisco en la función function*
function* iterate(array){
    for (let value of array){
        yield value;
    }
}

let misNombres = ['jhon', 'jessika', 'daniela', 'maria', 'cristian'];
const it = iterate(misNombres);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

function* getId() {
    // Tu código aquí 👈
    let contador = 0;
    while(true){
        contador++;
        yield contador;
    }
  }

let id = getId();
let ids = [id.next().value, id.next().value, id.next().value];
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(ids);

