let asterisco = '*';
let arrayAsterisco = [];
console.log(arrayAsterisco.length);
let tamanio = 6;
let index = 1;
for (let index = 0; index < tamanio; index++) {
    arrayAsterisco.push(asterisco);
    console.log(arrayAsterisco); 
}

while(index <= tamanio){
    arrayAsterisco.push(asterisco);
    console.log(arrayAsterisco);
    index++;
}

let simbolo = '#';
let s = [];
let i = 1;
let n = 6 ;
while(i<= n){
   
    s.unshift(simbolo);
    console.log(s);
    i++;
}