let posicionGatoA = 1;
let posicionGatoB = 2;
let posicionRaton = 3;

//PosicionRaton-posicionGatoB = 1   < posicionRaton - posicionGatoA = 2
function escape (posicionGatoA,posicionGatoB,posicionRaton) {
    let seEscapo = "";
    if (((posicionGatoA-posicionGatoB) == posicionRaton ) || ((posicionGatoB - posicionGatoA) == posicionRaton)){
        seEscapo = "Ratón";
    }
    else if ((posicionRaton - posicionGatoB) < (posicionRaton - posicionGatoA)){
        seEscapo = "Cat B";
    }else if ((posicionRaton - posicionGatoA) < (posicionRaton - posicionGatoB)){
        seEscapo = "Cat A";
    }

    return seEscapo
}
let profugo = escape(4,5,7);
console.log("");
console.log("Gato B : "+posicionGatoB);
console.log("");
console.log("Raton : "+posicionRaton);
console.log("");

console.log("");

console.log("RATON - Gato A: "+(posicionRaton - posicionGatoA));
console.log("");
console.log("RATON - GATO A menor que RATON - GATO B: "+((posicionRaton - posicionGatoA) < (posicionRaton - posicionGatoB)));
console.log("");
console.log("RATON - GATO B menor que RATON - GATO A: "+((posicionRaton - posicionGatoB) < (posicionRaton - posicionGatoA)));
console.log("");
console.log("RATON - Gato B: "+(posicionRaton - posicionGatoB));
console.log("");
console.log("Raton - Gato A  igual que Raton - Gato B ?: "+((posicionRaton - posicionGatoA) == (posicionRaton - posicionGatoB)));
console.log("");
console.log("Raton - Gato B  igual que Raton - Gato A ?: "+((posicionRaton - posicionGatoB) == (posicionRaton - posicionGatoA)));
console.log("");
console.log("Cat A - Cat B : "+(posicionGatoA - posicionGatoB)+ " es igual a : "+posicionRaton+" ? : "+((posicionGatoA-posicionGatoB) == posicionRaton ));
console.log("");
console.log("Cat B - Cat A : "+(posicionGatoB - posicionGatoA)+ " es igual a : "+posicionRaton+" ? : "+((posicionGatoB-posicionGatoA) == posicionRaton ));

// Otra situacion
console.log("*******************************************");
posicionGatoA = 1;
posicionGatoB = 3;
posicionRaton = 2;
console.log("Gato A : "+posicionGatoA);
console.log("Gato B : "+posicionGatoB);
console.log("Raton : "+posicionRaton);

//PosicionRaton-posicionGatoB = 1   < posicionRaton - posicionGatoA = 2
if (((posicionGatoA-posicionGatoB) == posicionRaton ) || ((posicionGatoB - posicionGatoA) == posicionRaton)){
    console.log("****************Mouse C**************************");
}
else if ((posicionRaton - posicionGatoB) < (posicionRaton - posicionGatoA)){
    console.log("****Cat B****");
}else if ((posicionRaton - posicionGatoA) < (posicionRaton - posicionGatoB)){
    console.log("#### Cat A ####");
}

console.log("RATON - Gato A: "+(posicionRaton - posicionGatoA));
console.log("RATON - GATO A menor que  RATON - GATO B: "+((posicionRaton - posicionGatoA) < (posicionRaton - posicionGatoB)));
console.log("RATON - GATO B menor que RATON - GATO A: "+((posicionRaton - posicionGatoB) < (posicionRaton - posicionGatoA)));
console.log("RATON - Gato B: "+(posicionRaton - posicionGatoB));
console.log("Raton - Gato A  igual que Raton - Gato B ?: "+((posicionRaton - posicionGatoA) == (posicionRaton - posicionGatoB)));
console.log("Raton - Gato B  igual que Raton - Gato A ?: "+((posicionRaton - posicionGatoB) == (posicionRaton - posicionGatoA)));

console.log("Cat A - Cat B : "+(posicionGatoA - posicionGatoB)+ " es igual a : "+posicionRaton+" ? : "+((posicionGatoA-posicionGatoB) == posicionRaton ));
console.log("Cat B - Cat A : "+(posicionGatoB - posicionGatoA)+ " es igual a : "+posicionRaton+" ? : "+((posicionGatoB-posicionGatoA) == posicionRaton ));