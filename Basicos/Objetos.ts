let hero = {
    name: 'thor',
    age: 1500
};

function createHero(name:string, age:number){
    return {
        name, age
    }
}

//Aunque sabemos que en el objeto tenemos los mismos tipos de datos, no podemos estar seguro si el objeto tiene el mismo tipo del hero creado

const thor = createHero ('Thor', 1500);

//Por eso existente los type Alias 

type Hero = {
    name: string;
    age: number;
}

let hero1: Hero = {
    name: 'thor',
     age: 1500
};

//Podemos poner que devuelve un Hero

function createHero1(hero:Hero): Hero{
    const {name,age} = hero
    return {name, age}
}

//Aunque debemos especificar que esperamos un objeto

const thor1 = createHero1 ({name: 'Thor', age:1500});