function createAdress() {
    return {
        planet: 'Tierra',
        city: 'Barcelona',
    }
}

type Adress = ReturnType<typeof createAdress>;
