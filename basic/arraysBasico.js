const miArray = [1,2,3,4,5];
// Array de objetos
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

  let primerInventor = inventors[0];
  let ultimoInventor = inventors[inventors.length-1];
  console.log(primerInventor);
  console.log(ultimoInventor);

// iterar arrays en ES6+
// Existen varias formas : 
// el foreach , como maneja callback, es Asincrono
for (let index = 0; index < inventors.length; index++) {
    const element = inventors[index];
    console.log(index+' : ' + element.first);
}

// No es posible cambiar la dimension 
for (const inventor of inventors) {
    console.log(inventor);
}


let miInventor = {
    first : 'Pablo', last: 'Perez', year: 1976
}
// agregar elementos al final de un array
inventors.push(miInventor);

// Obtener ultimo elemento
let ultimoElemento = inventors.pop();

// sacar del principio
let primerElemento = inventors.shift();

// Agregar al principio
inventors.unshift(miInventor);

// indice del elemento
inventors.indexOf();

// Obtener una copia del array
let inventors2 = inventors.slice();

// ordenamiento
inventors.sort(); // Sirve para ordenar un array de cadenas

// Ejercicio, quiero ordenar los inventores por año de nacimiento

// Ordena por cadena
let nombres = ['Pablo',"Maria", "Juana"];

nombres.sort();
console.log(nombres);

let numeros = [34,12,1,100];
numeros.sort();
console.log(numeros);

// Ejercicio 2
// Dado un array de numeros enteros positivos, determinar el
// segundo mayor
// input [3,4,6,6,5,5] , output = 5

//TDD
function segundoMayor(array){
    array.sort();
    return array[array.length - 2];
}

console.log(segundoMayor([3,4,6,6,5,5]) === 5);
console.log(segundoMayor([1,2,3,4,5,6]) === 5);
console.log(segundoMayor([0,4,5]) === 4);