

const { crearArchivo, crearArchivoPromise } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
require('colors');


console.clear();


crearArchivo( argv.base, argv.listar, argv.hasta )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log( err.red ));