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

const canvas = document.getElementById('canvas') 

if(canvas instanceof HTMLCanvasElement){
const ctx = canvas .getContext('2d');
}
