const address = {
    planet: 'Earth',
    city: 'Madrid',
}

//Con el type of podemos extraer los tipos de un objeto, funciones, etc.

type Address = typeof address;

const adressTwitch: Address = {
    planet: 'Mars',
    city: 'Twitch',
}
