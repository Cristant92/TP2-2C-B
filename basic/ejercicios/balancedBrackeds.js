// Complete the isBalanced function below.

function isBalanced(s) {
    let pila = [];
    let index = 0;
    let balanceado = true;
    let boolean = false;

    

         while (index < s.length && balanceado) {
            caracter = s.charAt(index);

            if(esDeApertura(caracter)){
            pila.push(caracter)
            }
                else {
                    if (!esDeApertura(caracter)) {
                        if (!pila.isEmpty) {
                            switch (caracter) {
                                case ')':
                                    if (peek(pila)==='(') {
                                        pila.pop();
                                    } 
                                    else {
                                        console.log('Falta el parentesis abierto: (');
                                        balanceado = false;
                                    }                                   
                                break;
                                case '}':
                                    if (peek(pila)==='{') {
                                        pila.pop();
                                    } 
                                    else {
                                        console.log('Falta la llave abierta: {');
                                        balanceado = false;
                                    }
                                break;
                                case ']':
                                    if (peek(pila)===('[')) {
                                        pila.pop();
                                    } 
                                    else {
                                        console.log('Falta el corchete abierto: [');
                                        balanceado = false;
                                    }
                                break;
                            }
                        }    
                        else {
                            balanceado = false;
                        }
                    }
                }
                index++;
        }

        if (pila.length===0 && balanceado) {
            boolean = true;
        }
        return boolean;
    
}   

function peek(pila){
    return pila[pila.length - 1]
}

function esDeApertura(caracter) {
    let respuesta = false;
    if (caracter == '(' || caracter == '{' || caracter == '[') {
        respuesta = true;
    } 
    return respuesta;
}
    


// TESTS
console.log(isBalanced('{[()]}'))
console.log(isBalanced('{[(])}'))
console.log(isBalanced('{{[[(())]]}}'))
console.log(isBalanced('{{[[(())]]}}{}()'))