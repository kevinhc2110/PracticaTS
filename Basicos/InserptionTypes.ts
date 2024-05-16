type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = 'Local' | 'Planetary' | 'Galactic' | 'Universal' | 'Multiversal'; 

//Creamos un nuevo tipo con la info basica

type HeroBasicInfo = {
    readonly id?: HeroId,
    name: string,
    age: number,
}

type HeroProperties = {
    isActive?: boolean,
    powerScale?: HeroPowerScale,
}

//Aqui estamos uniendo los dos types

type Hero = HeroBasicInfo & HeroProperties;

let hero: Hero = {
    name: 'thor',
    age: 1500
};

//Podemos cambiar los parametros

function createHero(input: HeroBasicInfo): Hero{
    const {name,age} = input

    return {
        id: crypto.randomUUID(), 
        name, 
        age, 
        isActive: true
    }
}

const thor = createHero ({name: 'Thor', age:1500});
thor.powerScale = 'Universal';
