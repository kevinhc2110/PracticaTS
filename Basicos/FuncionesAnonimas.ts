//Contexto de funciones anonimas se pueden inferir 

const avengers = ['Spiderman', 'Hulk', 'Capitan America'];

//Mas arrow funtion
avengers.forEach(avenger => {
    console.log(avenger.toUpperCase())
})

//O como funcion normal
//Esto puede pasar con cualquier metodo del array map, foreach, etc
avengers.forEach(function (avenger) {
    console.log(avenger.toUpperCase())
})
