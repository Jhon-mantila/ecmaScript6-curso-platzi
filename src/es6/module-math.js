 export const add = (x,y) => {

    return x + y;

}

export const miFuncion = (name) => {

    return `Hello ${name} !!`;
}

export default {add, miFuncion} ; 

//No se puede usar export default antes de declaraciones const, let o var, pero puedes exportarlas al final.

