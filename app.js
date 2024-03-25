//importacion de modulos/archivos
const leer = require("prompt-sync")();

//Declaracion e inicializacion de constantes
//Variables que no cambian de valor en tiempo de ejecucion
//Usamos SCREAM_SNAKE_CASE como nomenclatura
const PI = 3.141592653;

/**
 * Procedimiento(funcion sin return) principal del programa
 */
function main() {
    //Declaracion e inicializacion de variables
    let infoingresada = "def texto";

    //Instrucciones del algoritmo
    console.log("Ingresa algo en la terminal");//Escribir
    infoingresada = leer();//Leer
    console.log("Ingresaste", infoingresada, PI);//Escribir
}


//llamado al procedimiento(funcion)/algoritmo principal del programa
main();