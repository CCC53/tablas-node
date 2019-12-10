//Se acostumbra que los requireds vayan al principio
//const fs = require('fs');
//const fs = require('express'); es un paquete externo que se descarga 
//const fs = require('./fs'); son archivos externos que nosotros creamos

//Cuando no tiene el "./" no es un path es un paquete

//En el .command() el primer argumento es el comando, el segundo argumento es una ayuda al usuario de lo que hace
//el tercer argumento es un objeto que recibe la configuracion de los parametros o flags 
const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log('Archivo creado', colors.green(archivo));
        }).catch(error => {
            console.log(error);
        })
        break;

    default:
        console.log('Comando no reconocido');
}