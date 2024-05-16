type HeroProperties = {
    isActive?: boolean,
    address: {
        planet:string,
        city: string,
    }
}

const adressHero: HeroProperties ['address'] = {
    planet: 'Earth',
    city: 'Madrid',
}