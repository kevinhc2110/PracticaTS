// Ya al momento de que no haya una manera de diferenciar se puede usar esto

interface Mario {
    nombre:string,
    salta: () => void,
}

interface Sonic {
    nombre: string,
    correr: () => void,
}

type Personaje = Mario | Sonic;

//Con esto comprobamos si el personaje es sonic
//Esta funcion se encarga de verificar

function checkIsSonic(personaje:Personaje): personaje is Sonic {
    return (personaje as Sonic).correr !== undefined
}

//Hay que evitarlos

function jugar(personaje:Personaje){
    if(checkIsSonic(personaje)){
        personaje.correr()
    }
}

