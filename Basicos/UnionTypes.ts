type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = 'Local' | 'Planetary' | 'Galactic' | 'Universal' | 'Multiversal'; // | funciona como un O

//Tambien funciona como una union de tipos

// let annn: number | string;
// let annn: 2 | string;

type Hero = {
    readonly id?: HeroId, 
    name: string,
    age: number,
    isActive?: boolean,
    powerScale?: HeroPowerScale,
}

let hero: Hero = {
    name: 'thor',
    age: 1500
};


function createHero(hero:Hero): Hero{
    const {name,age} = hero
    return {id: crypto.randomUUID(), 
        name, 
        age, 
        isActive: true
    }
}

const thor = createHero ({name: 'Thor', age:1500});
thor.powerScale = 'Universal';
