//Tipar funcion arroy
//Le colocamos void porque no retorna nada, pero podemos colcoar un retorno diferente. Pero si colocamos un retorno como  string, debemos en la constante creada para la funcion colocar return string

const sayHiFromFuntion = (fn: (name:string)=> void) => {
    return fn('Miguel')
}

//Otras ejemplos
//Tipo 1

const sumar = (a:number, b:number): number => {
    return a+b
}
//Tipo 2

const restar: (a:number, b:number) => number = (a,b) => {
    return a-b
}

//Ejecuntando funcion

//1 forma

sayHiFromFuntion ((name:string) => {
    console.log(`Hola ${name}`)
});

//2 forma para tipar asi al funcion

const sayHi = (name:string)=> {
    console.log(`Hola ${name}`)
}

sayHiFromFuntion(sayHi);