let prisionero = 3;
let golosinas = 7;
let nroSilla= 3;
console.log(saveThePrisioner(prisionero,golosinas,nroSilla));

function saveThePrisioner(prisionero,golosinas,nroSilla){
 let victima = "";
 let fin = false;
    while (!fin) {
        if(nroSilla == prisionero && golosinas > 1) {
            nroSilla = 1 // Si quedan mas de un caramelo y llego a la ultima silla, empieza desde el primer asiento
        } else if(golosinas == 1){
            victima = nroSilla;
            fin = true;
        } else {
            nroSilla++;
        }
        golosinas--;  
    }
    return victima;
} 