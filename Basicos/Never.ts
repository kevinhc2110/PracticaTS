//Funciones que nunca devolvera nada

function throwError(message: string): never {
    throw new Error(message);
}

//Otro ejemplo

function fn(x:string | number) {
    if (typeof x === 'string') {

        x.toUpperCase();
        
    } else if (typeof x === 'number') {
        
    } else {
        x
    }
}
