
const colors = require('colors');
const fs = require('fs');

const crearArchivo = async ( base = 5, listar, hasta ) => {

    try {
        
        let salida = '';
        let consola = '';
        
        for( let i = 0; i <= hasta; i++) {
            let multiplo = base * i;
            salida += `${ base } x ${ i } = ${ multiplo }\n`;
            consola += `${ colors.red(base) } ${ 'x'.green } ${ colors.cyan(i) } ${ '='.green } ${ colors.yellow(multiplo) }\n`;
        }

        if(listar) {
            console.log('==============='.green)
            console.log('  Tabla de:'.green, colors.blue(base))
            console.log('==============='.green)
            console.log(salida);
        }
    
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
    
        return `tabla-${ base }.txt`;
    } catch (error) {
        throw error;
    }
    
};

const crearArchivoPromise = ( base = 5, listar, hasta ) => {
    
    return new Promise ( (resolve, reject) => {
        let salida = '';

        for( let i = 0; i <= hasta; i++) {
            let multiplo = base * i;
            salida += `${ base } x ${ i } = ${ multiplo }\n`;
        }

        if(listar) {
            console.log("===============")
            console.log('  Tabla de:', base)
            console.log("===============")
            console.log(salida);
        }

        fs.writeFileSync( `tabla-${ base }.txt`, salida);

        resolve(`tabla-${ base }.txt`);
    
    })};

module.exports = {
    crearArchivo,
    crearArchivoPromise
}