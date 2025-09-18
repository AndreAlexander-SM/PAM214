const nombre = "Armando";
let edad = 25;

//nombre = "Ana Maria";

let saludo = "Hola, " + nombre + ". Tienes " + edad + " años.";

//muestra en consola en contenido de saludo

console.log(saludo);

// Ejercicio 2

/*function cuadrado (numero){
    return numero * numero;
}
*/

//console.log();
//muestra en la consola con 3 numeros diferentes

const cuadrado = (numero) => numero * numero;

let resultado1 = cuadrado(6);
console.log(resultado1);
let resultado2 = cuadrado(9);
console.log(resultado2);
let resultado3 = cuadrado(3);
console.log(resultado3);

// Ejercicio 3 

const saludoPersonalizado = (nombre, edad) => "Hola, me llamo " + nombre + " y tengo "+ edad + " años.";

let mostrar = saludoPersonalizado("Andre",18);
console.log(mostrar);