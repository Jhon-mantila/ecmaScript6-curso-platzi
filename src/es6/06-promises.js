const anotherFuncion = () => {
    return new Promise((resolve, reject)=>{
        if(false){
            resolve('Hey!!!');
        }else {
            reject('Whoooops!!!');
        }
    })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err)); //se agrega el punto y coma solo hasta terminar la sintaxis de la promesa