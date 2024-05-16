//Debemos tipar nuestros arrays si no son never

//Opcion 1 solo acepta el tipo de dato que tipemos

const languages: string[] = [];

//Opcion 2 solo acepta el tipo de dato que tipemos

const languages1: Array<string> = [];

//Opcion 3 para mas tipos de datos, en este ejemplo puede ser de string y de number

const languages2: (string | number)[] = [];

languages2.push('JavaScript');

// Mas ejemplos y formas

type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = 'Local' | 'Planetary' | 'Galactic' | 'Universal' | 'Multiversal'; 

type HeroBasicInfo = {
    readonly id?: number,
    name: string,
    age: number,
}

//Arrays de heros

const heroWithBasicInfo: HeroBasicInfo[] = [];