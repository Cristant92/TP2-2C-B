// Es un objeto ECS6 en adelante, no esta 
// soportado en los navegadores antiguos, como IExplorer
// Sirve para manipular el exito o el fracaso de una operacion
// de una manera mas clara tal vez que con solo callbacks

const { resolve } = require("path");
const { rejects } = require("assert");

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout (() => {
        // va hacia el then
        resolve([2,3,4,6]);

        // va hacia el catch
        reject('Algo paso mal');
    },2 * 1000);
});

doWorkPromise
    .then(result => {
        console.log('Exito!', result);
    })
    .catch (error => {
        console.log('Error: ',error);
    });

