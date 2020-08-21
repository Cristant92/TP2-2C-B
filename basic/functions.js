// Tipos de declaracion de funciones

// La forma mas simple 

function add (a,b){
    return a + b ;
    // Si no pongo return , devolvera Null
}

// Asignando a una variable
const square = function(x) {
    return x * x;
}
// llamo a la funcion mediante la variable
square(5);

// ES6 , hay una nueva forma de declarar funciones, funciones flecha (arrow function)

const getSum = (a,b) => {
    return a + b ;
};

const getSum2 = (a,b) => a + b;

// Si no tengo parametros, debo poner
// () => { instrucciones}

// Si tengo parametros: 
//  parametro => expresion
// (parametro1, parametro2, ...) => {return expresion}

// Si debo retornar un objeto:
// () => ({objeto})
// explicitamente : () => {return {objeto}}
