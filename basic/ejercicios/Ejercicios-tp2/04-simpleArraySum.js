let array = [100,1000,50];

function acumular(){
    let acum = 0;
    for (let index = 0; index < array.length; index++) {
        acum += array[index];
    }
    return acum;
}
console.log(acumular());