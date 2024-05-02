//Interfacez

// interface Heroe {
//     id: string,
//     name: string,
//     age: number,
//     saludar: () => void,
// }

// const hero: Heroe = {
//     id: '1',
//     name: 'Spiderman',
//     age: 30,
//     saludar: () => {
//         console.log('Hola');
//     }
// }

interface Producto {
    id: number,
    nombre: string,
    precio: number,
    cantidad: number,
}

interface Camisa extends Producto{
    talla: number,
}

interface CarritoDeCompras {
    totalprice: number,
    productos: Camisa[],
}

//Tambien se puede hacer esto 

// interface CarritoDeCompras {
//     totalprice: number,
//     productos: (Camisa[] | Camisa[]) ,
// }


const carrito: CarritoDeCompras = {
    totalprice:100,
    productos: [
        {
            id: 1,
            nombre: 'Prodcuto1',
            precio: 100,
            cantidad: 1,
            talla: 38,
        }
    ]
}


//Podemos agregar las funciones del carrito

//Primera forma

interface CarritoOps {
    add: (product: Producto) => void,
    remove: (id:number) => void,
    clear: () => void,
}

//Segunda forma

// interface CarritoOps{
//     add(product: Producto): void,
//     remove(id: number): void,
//     clear(): void,
// }

//Se debe tener en cuenta que las funciones dentro del la interfaz se comparten 

// interface CarritoOps {
//     add: (product: Producto) => void,
//     remove: (id:number) => void,
//    
// }

// interface CarritoOps {
    
//     clear: () => void,
// }

//Toma los 3 valores