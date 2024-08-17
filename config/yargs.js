
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        desc: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        desc: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        desc: 'Este es el limite de la tabla'
    })
    .check( (argv, option ) => {
        if ( isNaN( argv.base ) ){
            throw 'La base necesita ser un numero';
        }
        return true;
    })
    .check( (argv, option ) => {
        if ( isNaN( argv.hasta ) ){
            throw 'El limite necesita ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;