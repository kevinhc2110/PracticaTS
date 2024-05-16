// class Avenger {
    
//     //# solo se puede acceder de forma interna, propiedad privada. o tambien podemos usar el private pero no pasa al codigo javascript
//     //tambien tenemso el por defecto que es public y el protected que solo se puede usar en la clase o en las clases heredadas

//     readonly name: string;
//     #powerScore: number;
//     wonBattles: number = 0;

//     constructor(name: string, powerScore: number) {
//         this.name = name,
//         this.#powerScore = powerScore
//     }

//     get fullName(){
//         return ` ${this.name}, de poder ${this.#powerScore}`
//     }

//     set power(newPower: number){
//         if (newPower >= 100 ){
//             this.#powerScore = newPower
//         } else{
//             throw new Error ('Power Score cannot be more than 100')
//         }
//     }
// }

// const avengers = new Avenger('Spidey', 98);
// avengers.name = 'Hulk';


//Tambien podemos implementar las interfaces 
import { type IAvenger } from "./types"

class Avenger implements IAvenger  {
    name: string;
    powerScore: number;
    wonBattles: number;
    age: number;
    
    
    constructor(name: string, powerScore: number) {
        this.name = name,
        this.powerScore = powerScore
    }

    battle (enemy, win) {
        if (win) {
            this.wonBattles++
            this.powerScore += 5
        } else{
            this.powerScore -= 5
        }
    }

    get fullName(){
        return ` ${this.name}, de poder ${this.powerScore}`
    }

    set power(newPower: number){
        if (newPower >= 100 ){
            this.powerScore = newPower
        } else{
            throw new Error ('Power Score cannot be more than 100')
        }
    }
}
//Archivo d.ts aqui agregamos todas nuestras definiciones
