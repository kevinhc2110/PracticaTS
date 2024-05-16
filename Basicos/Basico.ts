
//Inferencia

// var nombre:string = "Kevin";
// var apellido = "Herrera";

//Si a y b se infieren como numeros c por ser la suma de los dos tambien sera numero

// const a = 1;
// const b = 2;
// const c = a+b;

//Por inferencia los metodos de cada tipe infieren solos

// let cadenaTexto = 'pedro';

// cadenaTexto.toLowerCase();

//Por inferenica n se toma como string

// cadenaTexto = 2;

//Al no tener un tipo o un valor para inferir este dato sera de tipo Any

// var nose;


//Any

//Al ser de tipo any toma cualquier tipo de dato

// let obj: any = {x:0};

// obj.foo();
// obj();
// obj.bar = 100;
// obj = "Hello";
// const n: number = obj;


//Funciones

//Es mejor tipar los parametros de las funciones

//Este tipado de las funciones esta mal

// function saludar(name: string, age:number){
//     name.toLowerCase()
//     console.log(`Hola ${name}, tienes ${age} años`)
// }

// saludar('Pepe', 20);

//Manera correcta de tipa las funciones
//Por inferencia typescript toma que el valor retornado es un number

// function saludar ({name, age}: {name:string, age:number}){
//     console.log(`Hola ${name}, tienes ${age} años`)
//     return age
// }

//Tambien podemos tipa el valor retornadod e la siguiente manera

// function saludar ({name, age}: {name:string, age:number}):number{
//     console.log(`Hola ${name}, tienes ${age} años`)
//     return age
// }

//Arroy funtion
//Tipar funcion arroy
//Le colocamos void porque no retorna nada, pero podemos colcoar un retorno diferente. Pero si colocamos un retorno como  string, debemos en la constante creada para la funcion colocar return string

// const sayHiFromFuntion = (fn: (name:string)=> void) => {
//     return fn('Miguel')
// }

//Otras ejemplos
//Tipo 1

// const sumar = (a:number, b:number): number => {
//     return a+b
// }
//Tipo 2

// const restar: (a:number, b:number) => number = (a,b) => {
//     return a-b
// }

//Ejecuntando funcion

//1 forma

// sayHiFromFuntion ((name:string) => {
//     console.log(`Hola ${name}`)
// });

//2 forma para tipar asi al funcion

// const sayHi = (name:string)=> {
//     console.log(`Hola ${name}`)
// }

// sayHiFromFuntion(sayHi);


//Never

//Funciones que nunca devolvera nada

// function throwError(message: string): never {
//     throw new Error(message);
// }

//Contexto de funciones anonimas se pueden inferir 

// const avengers = ['Spiderman', 'Hulk', 'Capitan America'];

//Mas arrow funtion
// avengers.forEach(avenger => {
//     console.log(avenger.toUpperCase())
// })

//O como funcion normal
//Esto puede pasar con cualquier metodo del array map, foreach, etc
// avengers.forEach(function (avenger) {
//     console.log(avenger.toUpperCase())
// })


//Objetos

// let hero = {
//     name: 'thor',
//     age: 1500
// };


// function createHero(name:string, age:number){
//     return {
//         name, age
//     }
// }

//Aunque sabemos que en el objeto tenemos los mismos tipos de datos, no podemos estar seguro si el objeto tiene el mismo tipo del hero creado
// const thor = createHero ('Thor', 1500);

//Por eso existente los type Alias 

// type Hero = {
//     name: string;
//     age: number;
// }

// let hero: Hero = {
//     name: 'thor',
//      age: 1500
// };

//Podemos poner que devuelve un Hero

// function createHero(hero:Hero): Hero{
//     const {name,age} = hero
//     return {name, age}
// }

//Aquie debemos especificar que epserams un objeto

// const thor = createHero ({name: 'Thor', age:1500});


//Opcional Properies

//Añadimos isActive como opcional

// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// type Hero = {
//     readonly id?: HeroId, //Con el readonly ponemos esto solo de lectura para evitar que escriban un dato diferente en el id, no es inmutable
//     name: string,
//     age: number,
//     isActive?: boolean,
// }

// let hero: Hero = {
//     name: 'thor',
//      age: 1500
// };

//Agregamos a nuestro return un id, con un random UUID
// function createHero(hero:Hero): Hero{
//     const {name,age} = hero
//     return {id: crypto.randomUUID(), 
//         name, 
//         age, 
//         isActive: true
//     }
// }

//Para que sea inmutable se debe hacer esto, codigo javascript

// const thor = Object.freeze (createHero ({name: 'Thor', age:1500}));

// console.log(thor.isActive); // => true

//Aqui typescript toma esto como opcional pues si thor tiene un id este lo convertira en string, si no, no hara nada

// thor.id?.toString()

//Mutabilidad
//Esto lo podemos evitar desde el type

// thor.id = 3213213213;

//Template union Types

// Es crear la forma de escribir tus datos, una especie de platilla

// type HexadecimalColor = `#${string}`;
// const color: HexadecimalColor = '0033ff';
// const color2: HexadecimalColor = '#0033ff';

//Valores por defecto

// thor.id ?? 'No tiene id'


// Union Types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale = 'Local' | 'Planetary' | 'Galactic' | 'Universal' | 'Multiversal'; // | funciona como un O

//Tambien funciona como una union de tipos

// let annn: number | string;
// let annn: 2 | string;

// type Hero = {
//     readonly id?: HeroId, 
//     name: string,
//     age: number,
//     isActive?: boolean,
//     powerScale?: HeroPowerScale,
// }

// let hero: Hero = {
//     name: 'thor',
//     age: 1500
// };


// function createHero(hero:Hero): Hero{
//     const {name,age} = hero
//     return {id: crypto.randomUUID(), 
//         name, 
//         age, 
//         isActive: true
//     }
// }

// const thor = createHero ({name: 'Thor', age:1500});
// thor.powerScale = 'Universal';


//Interseption types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale = 'Local' | 'Planetary' | 'Galactic' | 'Universal' | 'Multiversal'; 

//Creamos un nuevo tipo con la info basica

// type HeroBasicInfo = {
//     readonly id?: HeroId,
//     name: string,
//     age: number,
// }

// type HeroProperties = {
//     isActive?: boolean,
//     powerScale?: HeroPowerScale,
// }

//Aqui estamos uniendo los dos types

// type Hero = HeroBasicInfo & HeroProperties;

// let hero: Hero = {
//     name: 'thor',
//     age: 1500
// };

//Podemos cambiar los parametros
// function createHero(input: HeroBasicInfo): Hero{
//     const {name,age} = input

//     return {
//         id: crypto.randomUUID(), 
//         name, 
//         age, 
//         isActive: true
//     }
// }

// const thor = createHero ({name: 'Thor', age:1500});
// thor.powerScale = 'Universal';


//Type Indexing

// type HeroProperties = {
//     isActive?: boolean,
//     address: {
//         planet:string,
//         city: string,
//     }
// }

// const adressHero: HeroProperties ['address'] = {
//     planet: 'Earth',
//     city: 'Madrid',
// }

//Type from value

// const address = {
//     planet: 'Earth',
//     city: 'Madrid',
// }

//Con el type of podemos extraer los tipos de un objeto, funciones, etc.

// type Address = typeof address;

// const adressTwitch: Address = {
//     planet: 'Mars',
//     city: 'Twitch',
// }

//type from funtion return

// function createAdress() {
//     return {
//         planet: 'Tierra',
//         city: 'Barcelona',
//     }
// }

// type Adress = ReturnType<typeof createAdress>;


//Arrays

//Debemos tipar nuestros arrays si no son never

//Opcion 1 solo acepta el tipo de dato que tipemos

// const languages: string[] = [];

//Opcion 2 solo acepta el tipo de dato que tipemos

// const languages: Array<string> = [];

//Opcion 3 para mas tipos de datos, en este ejemplo puede ser de string y de number

// const languages: (string | number)[] = [];

// languages.push('JavaScript');

// Mas ejemplos y formas

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale = 'Local' | 'Planetary' | 'Galactic' | 'Universal' | 'Multiversal'; 

// type HeroBasicInfo = {
//     readonly id?: number,
//     name: string,
//     age: number,
// }

//Arrays de heros

// const heroWithBasicInfo: HeroBasicInfo[] = [];

//Matrices

/*
[
    ['x', 'o', 'x'],  <= //string[]
    ['o', 'o', 'x'],  <= //string[]
    ['', 'o', 'x'],  <= //string[]
]
*/

// type CellValue = 'X' | 'O' | ''

//Tuplas

// type GameBoard = [
//     [CellValue, CellValue, CellValue],
//     [CellValue, CellValue, CellValue],
//     [CellValue, CellValue, CellValue]
// ];

// const gameBoard: GameBoard  = [
//     ['X', 'O', ''],  
//     ['X', '', 'O'],  
//     ['', 'O', 'X'],  
// ];

//Mas ejemplo de tuplas

//Aqui en esta tupla estamos diciendo que recivimos un string y tambine una funcion de tipo string que no retorna nada

// type State = [string, (newName:string) => void ];

// const [hero, setHero] = useState('thor');

//RGB ejmplo

// const  RGB = [255, 255, 0];

//Esto lo podemos tipar con tuplas 

// type RGB = [number, number, number];

// const rgb: RGB = [2,5,6];


//Enums para enumerar. Se puede usar para una lista de datos finitos

// enum ERROR_TYPES {
//     NOT_FOUND,
//     UNAUTHORIZED,
//     FORBIDDEN,
// }

// function mostrarMensaje(tipoDeError) {
//     if (tipoDeError === ERROR_TYPES.NOT_FOUND ){
//         console.log('No se encuentra recurso ')
//     } else if(tipoDeError === ERROR_TYPES.UNAUTHORIZED){
//         console.log('No tienes permisos para acceder')
//     } else if(tipoDeError === ERROR_TYPES.FORBIDDEN){
//         console.log('No tienes permisos para acceder')  
//     }
// }

//Tambien se puede usar de esta manera pues al compilar queda menos codigo

// const enum ERROR_TYPES {
//     NOT_FOUND,
//     UNAUTHORIZED,
//     FORBIDDEN,
// }

//Aunque cuando se tiene una id ya establecida tambien se puede hacer esto con solo enums o con const

// enum ERROR_TYPES {
//     NOT_FOUND = 'notFound',
//     UNAUTHORIZED = 'unauthorized',
//     FORBIDDEN = 'forbiden'
// }

//Aunque se debe tener en cuenta que const se puede utilziar en la mayoria de los casos menos cuando tu componnete vaya fuera de la aplicacion ahi se recomeinda usar solo enum 


//Aserciones de tipos
//Toca tener cuidado con esto porque perdemos la opcion de que el elemnto sea null y no se se entiende la infernecia

// const canvas = document.getElementById('canvas') as HTMLCanvasElement;

// if(canvas != null){
//     const ctx = canvas.getContext('2d');
// }

//Tambien se puede hacer asi y es un poco mejor

// const canvas = document.getElementById('canvas') 

// if(canvas != null){
//     const ctx = (canvas as HTMLCanvasElement).getContext('2d');
// }

//La mejor manera seria esta
//Por inferencia  typescript se da cuentaque dentro del if ya solo el canvas va a poder un htmlcanvaselement

// const canvas = document.getElementById('canvas') 

// if(canvas instanceof HTMLCanvasElement){
// const ctx = canvas .getContext('2d');
// }


//fetching de datos

//Usando herramientas como quicktype podemos obtener los types o interfaces de nuestro json

// export type PokemonAPI = {
//     count:    number;
//     next:     string;
//     previous: null;
//     results:  Result[];
// }

// export type Result = {
//     name: string;
//     url:  string;
// }

//se usa el .mts para hacer de modulo

// export { }; // No poner cuidao a esto

// const API_URL = "'https://pokeapi.co/api/v2/pokemon'";

// const response = await fetch(API_URL)

// if (!response.ok){
//     throw new Error('Request failed');
// }

// const data = await response.json();

//Mapeo, fetching basico


// data.results.map (repo => {
//     return {
//         name: repo.name,
//         url: repo.url,
//     }
// })

//Asi podemos tipar 

// data.results.map ((repo: { name: any; url: any; }) => {
//     return {
//         name: repo.name,
//         url: repo.url,
//     }
// })

// const repos = data.abilities.map(repo => {
//     console.log(repo);
// })

//Usando typescript zod de la herramienta quiktype podemos validar los datos


//Interfacez

// interface Heroe {
//     id: string,
//     name: string,
//     age: number,
//     saludar: () => void,
// }

// const hero: Heroe = {
//     id: '1',
//     name: 'Spiderman',
//     age: 30,
//     saludar: () => {
//         console.log('Hola');
//     }
// }

// interface Producto {
//     id: number,
//     nombre: string,
//     precio: number,
//     cantidad: number,
// }

// interface Camisa extends Producto{
//     talla: number,
// }

// interface CarritoDeCompras {
//     totalprice: number,
//     productos: Camisa[],
// }

//Tambien se puede hacer esto 

// interface CarritoDeCompras {
//     totalprice: number,
//     productos: (Camisa[] | Camisa[]) ,
// }


// const carrito: CarritoDeCompras = {
//     totalprice:100,
//     productos: [
//         {
//             id: 1,
//             nombre: 'Prodcuto1',
//             precio: 100,
//             cantidad: 1,
//             talla: 38,
//         }
//     ]
// }


//Podemos agregar las funciones del carrito

//Primera forma

// interface CarritoOps {
//     add: (product: Producto) => void,
//     remove: (id:number) => void,
//     clear: () => void,
// }

//Segunda forma

// interface CarritoOps{
//     add(product: Producto): void,
//     remove(id: number): void,
//     clear(): void,
// }

//Se debe tener en cuenta que las funciones dentro del la interfaz se comparten 


//Narrowing

//Con esto podemos hacer embudo en los tipos

//Ejemplo basico

function mostrarLongitud ( objeto: number | string){
    if(typeof objeto === 'string'){ 
    return objeto.length
    }

    return objeto.toString().length
}

mostrarLongitud ('1');

//Ejemplo avanzado

// interface Mario {
//     company: 'nintendo',
//     nombre:string,
//     salta: () => void,
// }

// interface Sonic {
//     company: 'sega',
//     nombre: string,
//     correr: () => void,
// }

// type Personaje = Mario | Sonic;

//Por el hecho que diferenciamos los dos persoanjes por company no nos gera problema

// function jugar(personaje: Personaje) {
//     if (personaje.company === 'nintendo') {
//         personaje.salta();
//         return
//     }
//     personaje.correr();
// }


//TypeGuard

// Ya al momento de que no haya una manera de diferenciar se puede usar esto

// interface Mario {
//     nombre:string,
//     salta: () => void,
// }

// interface Sonic {
//     nombre: string,
//     correr: () => void,
// }

// type Personaje = Mario | Sonic;

//Con esto comprobamos si el personaje es sonic
//Esta funcion se encarga de verificar

// function checkIsSonic(personaje:Personaje): personaje is Sonic {
//     return (personaje as Sonic).correr !== undefined
// }

//Hay que evitarlo

// function jugar(personaje:Personaje){
//     if(checkIsSonic(personaje)){
//         personaje.correr()
//     }
// }

