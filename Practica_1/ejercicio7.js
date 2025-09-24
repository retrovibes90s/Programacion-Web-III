// 7. Desestructuración para almacenar el resto de los elementos sin los dos primeros

const numeros = [10, 20, 30, 40, 50];
const [ , , ...resto] = numeros;

console.log(resto); 

//Resolviendo con una función flecha

const obtenerResto = ([, , ...resto]) => resto;
const numero = [60, 70, 80, 90, 100];
const resultado = obtenerResto(numero);

console.log(resultado); 

