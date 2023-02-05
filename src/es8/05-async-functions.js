//Palabras reservadas async y await
//setTimeout esperar los 2 segudnos. no bloquea por el await y continua su processo
// async permite que la promesa trabaje.
// async y await trabajan de la mano.
const funcionAsync = () =>{
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(()=>resolve('AsynC!!!'),2000 ) 
        : reject(new Error('Error!'));
    });

}

const anoTherFuncion = async () => {
    const somethig = await funcionAsync();
    console.log(somethig);
    console.log("Hello");
}

console.log("before");
anoTherFuncion();
console.log("after");