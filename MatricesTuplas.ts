/*
[
    ['x', 'o', 'x'],  <= //string[]
    ['o', 'o', 'x'],  <= //string[]
    ['', 'o', 'x'],  <= //string[]
]
*/

type CellValue = 'X' | 'O' | ''

//Tuplas

type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
];

const gameBoard: GameBoard  = [
    ['X', 'O', ''],  
    ['X', '', 'O'],  
    ['', 'O', 'X'],  
];

//Mas ejemplo de tuplas

//Aqui en esta tupla estamos diciendo que recivimos un string y tambine una funcion de tipo string que no retorna nada

type State = [string, (newName:string) => void ];

// const [hero, setHero] = useState('thor');

//RGB ejmplo

const  RGB = [255, 255, 0];

//Esto lo podemos tipar con tuplas 

type RGB = [number, number, number];

const rgb: RGB = [2,5,6];