const anotherFuncion = () => {

    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Hey!!!');
        }else {
            reject('Whoooops');
        }

    })
}