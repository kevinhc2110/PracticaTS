//Enums para enumerar. Se puede usar para una lista de datos finitos

enum ERROR_TYPES {
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN,
}

function mostrarMensaje(tipoDeError) {
    if (tipoDeError === ERROR_TYPES.NOT_FOUND ){
        console.log('No se encuentra recurso ')
    } else if(tipoDeError === ERROR_TYPES.UNAUTHORIZED){
        console.log('No tienes permisos para acceder')
    } else if(tipoDeError === ERROR_TYPES.FORBIDDEN){
        console.log('No tienes permisos para acceder')
    }
}

//Tambien se puede usar de esta manera pues al compilar queda menos codigo

// const enum ERROR_TYPES {
//     NOT_FOUND,
//     UNAUTHORIZED,
//     FORBIDDEN,
// }

//Aunque cuando se tiene una id ya establecida tambien se puede hacer esto con solo enums o con const

// enum ERROR_TYPES {
//     NOT_FOUND = 'notFound',
//     UNAUTHORIZED = 'unauthorized',
//     FORBIDDEN = 'forbiden'
// }

//Aunque se debe tener en cuenta que const se puede utilziar en la mayoria de los casos menos cuando tu componnete vaya fuera de la aplicacion ahi se recomeinda usar solo enum 