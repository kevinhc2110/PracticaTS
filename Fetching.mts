//Usando herramientas como quicktype podemos obtener los types o interfaces de nuestro json

export type PokemonAPI = {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export type Result = {
    name: string;
    url:  string;
}

//se usa el .mts para hacer de modulo

export { }; // No poner cuidao a esto

const API_URL = "'https://pokeapi.co/api/v2/pokemon'";

const response = await fetch(API_URL)

if (!response.ok){
    throw new Error('Request failed');
}

const data = await response.json();

//Mapeo, fetching basico


data.results.map (repo => {
    return {
        name: repo.name,
        url: repo.url,
    }
})

// const repos = data.abilities.map(repo => {
//     console.log(repo);
// })

//Usando typescript zod de la herramienta quiktype podemos validar los datos
