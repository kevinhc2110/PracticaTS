//Añadimos isActive como opcional

type HeroId = `${string}-${string}-${string}-${string}-${string}`

type Hero = {
    readonly id?: HeroId, //Con el readonly ponemos esto solo de lectura para evitar que escriban un dato diferente en el id, no es inmutable
    name: string,
    age: number,
    isActive?: boolean,
}

let hero: Hero = {
    name: 'thor',
     age: 1500
};

//Agregamos a nuestro return un id, con un random UUID

function createHero(hero:Hero): Hero{
    const {name,age} = hero
    return {id: crypto.randomUUID(), 
        name, 
        age, 
        isActive: true
    }
}

//Para que sea inmutable se debe hacer esto, codigo javascript

const thor = Object.freeze (createHero ({name: 'Thor', age:1500}));

console.log(thor.isActive); // => true

//Aqui typescript toma esto como opcional pues si thor tiene un id este lo convertira en string, si no, no hara nada

thor.id?.toString()

//Mutabilidad
//Esto lo podemos evitar desde el type

// thor.id = 3213213213;
