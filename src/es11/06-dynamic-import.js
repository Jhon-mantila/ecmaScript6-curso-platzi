const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");

button.addEventListener('click', async function() {
    const module = await import('./module.js');
    console.log(module);
    module.hello();
});

/*Ejemplo con proesa */
const ruta = "./module.js";
// Utilizando promesas
import(ruta)
    .then( modulo => {
        modulo.miFuncion1();
        modulo.miFuncion2();
    })
    .catch(error => console.log(error));

// Utilizando async/await
async function importarModulo(rutaDelModulo) {
    const modulo = await import(rutaDelModulo)
    modulo.miFuncion1();
    modulo.miFuncion2();
}

importarModulo(ruta);

button2.addEventListener("click", async function () {
    const modulo = await import('./module.js')
    modulo.miFuncion1();
    modulo.miFuncion2();
})