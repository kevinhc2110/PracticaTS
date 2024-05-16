//Es mejor tipar los parametros de las funciones

//Este tipado de las funciones esta mal

function saludar(name: string, age:number){
    name.toLowerCase()
    console.log(`Hola ${name}, tienes ${age} años`)
}

saludar('Pepe', 20);

//Manera correcta de tipar las funciones
//Por inferencia typescript toma que el valor retornado es un number

function saludar1 ({name, age}: {name:string, age:number}){
    console.log(`Hola ${name}, tienes ${age} años`)
    return age
}

const person = { name: 'Pepe', age: 20 };
const returnedAge = saludar1(person);

//Tambien podemos tipar el valor retornado de la siguiente manera

function saludar2 ({name, age}: {name:string, age:number}):number{
    console.log(`Hola ${name}, tienes ${age} años`)
    return age
}