//Se acostumbra que los requireds vayan al principio
const fs = require('fs');
//const fs = require('express'); es un paquete externo que se descarga 
//const fs = require('./fs'); son archivos externos que nosotros creamos

var colors = require('colors');

let listarTabla = (base, limite) => {
    if (!Number(base) && !Number(limite)) {
        console.log(`Los valores introducidos de ${base} y ${limite} no son numeros`);
        return;
    }
    console.log(`Tabla del ${base} al ${limite}`.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i} = ${base*i}`);
    }
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} = ${base*i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`)
            }
        });
    })

}

//para agregar funciones al modulo se puede hacer de esta manera

module.exports = {
    crearArchivo,
    listarTabla
}