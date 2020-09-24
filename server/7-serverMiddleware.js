const express = require('express');
const chalk = require('chalk');
const moment = require('moment');

const app = express();
const PORT = 3000;

app.use('/', (req, res, next) => {
    if(req.query.token == 'abcde123'){
        next();
    } else {
        res.status(401).send('Login fail');
    }
});

app.use('/assets', express.static('./public'));

// app.get('/', (req, res, next)=>{
//     console.log('por acá 1 paso: app.get /');
//     res.send(`Respuesta de servidor`);
//     //next();
// });

// app.get('/', (req, res)=>{
//     console.log('por acá 2 paso: app.get /');
//     res.send(`Respuesta de servidor`);
// });

app.get('/', (req, res)=>{
    res.send(`
        <html>
            <head>
                <link href="assets/style.css?token=abcde123" type="text/css" rel="stylesheet" />
            </head>
            <body>
                <h1> Hola mundo ! </h1>
            </body>
        </html>
    `);
});



app.listen(PORT, () => {console.log(chalk.bgGreenBright.yellow('Servidor web disponible'))});
