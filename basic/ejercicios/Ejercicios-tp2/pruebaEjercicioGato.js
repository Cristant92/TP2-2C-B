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
let profugo = escape(1,6,2);
console.log(profugo);