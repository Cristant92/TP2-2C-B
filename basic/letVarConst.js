// let vs var

//let es la forma mas actual de declarar variables (a partir de ES6)
// var queda limitado para legacy
// Cuando hablamos de legacy hablamos de cosas heredadas(archivos viejos)
let x = 1;
if(x === 1) {
    let x = 2; // es otra variable
    console.log('x dentro del bloque '+ x);
}
console.log('x fuera del bloque '+ x);

// VAR 
var y = 1;
if (y === 1){
    var y = 2;
    console.log('y dentro del bloque '+ y);
}
console.log('y fuera del bloque '+ y);

// CONST
const key = 'abc123';
// utilizar const por defecto
// Declaro con let, nunca con var

const person = {
    name : 'wes',
    age : 28
};
person.age = 44;
console.log(person);

const wez = Object.freeze(person);

wez.name = "Juan";
console.log(wez);
