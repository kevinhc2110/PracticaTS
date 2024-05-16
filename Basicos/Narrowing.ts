//Con esto podemos hacer embudo en los tipos

//Ejemplo basico

function mostrarLongitud1 ( objeto: number | string){
    if(typeof objeto === 'string'){ 
    return objeto.length
    }

    return objeto.toString().length
}

mostrarLongitud1 ('1');

//Ejemplo avanzado

interface Mario {
    company: 'nintendo',
    nombre:string,
    salta: () => void,
}

interface Sonic {
    company: 'sega',
    nombre: string,
    correr: () => void,
}

type Personaje1 = Mario | Sonic;

//Por el hecho que diferenciamos los dos persoanjes por company no nos genera problema

function jugar1(personaje: Personaje1) {
    if (personaje.company === 'nintendo') {
        personaje.salta();
        return
    }
    personaje.correr();
}

