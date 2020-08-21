//En javaScript hay 7 tipos primitivos, Number, String, Boolean
// Null, Undefined, Symbol, Object
//Js es un lenguaje dinamico

//NUMBER

let var1 = 1;
let var2 = 0;
let var3 = -0;

console.log("1/0 = "+ var1 / var2);
console.log("Raiz cuadrada (-1): "+ Math.sqrt(-1));

// STRING
let saludo1 = "Hola mundo";
let saludo2 = 'Hola mundo "infectado"';
let caracter = "c";
let pizza = "🍕";

console.log(saludo2 + " quiero una "+ pizza);
// backtick, comilla francesa `
console.log(`${saludo2} quiero una ${pizza}`);

//Null & Undefined
let nulo;
//nulo = null;
console.log(nulo);

let someNumber = 10;
let someString = "Ten";
let someBoolean = true;

console.log("El tipo de: "+ someNumber + " es "+ typeof(someNumber));
console.log("El tipo de: "+ someString + " es "+ typeof(someString));
console.log("El tipo de: "+ someBoolean + " es "+ typeof(someBoolean));

//someNumber = "cadena";
//console.log("El tipo de: "+ someNumber + " es "+ typeof(someNumber));

// Ejercicio 1
// coersion vs conversion
//
// COERSION
// probar "sumar" un numero a un string , a que tipo es convertido?
let sumaNumeroyString = someNumber + someString;
console.log(`Suma de numero y string: ${typeof (sumaNumeroyString)} y el valor es: ${sumaNumeroyString}`);
// probar "sumar" un booleano a un string, a que tipo es convertido?
let sumaBooleanyString = someBoolean + someString;
console.log(`Suma de boolean y string: ${typeof(sumaBooleanyString)} y el valor es: ${sumaBooleanyString}`);
// probar sumar un numero a un booleano, a que tipo es convertido?
let sumaNumeroyBoolean = someNumber + someBoolean;
console.log(`Suma de numero y boolean: ${typeof(sumaNumeroyBoolean)} y el valor es: ${sumaNumeroyBoolean}`);

// PARSEO(Convertir) DE NUMEROS
let cadenaNumber = '34';
console.log(parseInt(cadenaNumber)+ 1);

// declaracion de objetos
let actor = {
    name: 'Julio',
    age: 46
};

console.log(actor);

// acceso a las propiedades

// acceso usando notacion corchetes []
console.log(`Nombre de actor: ${actor['name']}`);

// acceso usando notacion punto .
console.log('Nombre de actor: '+actor.name);

