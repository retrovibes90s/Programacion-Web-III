// 6. Desestructuración para tomar los dos primeros elementos de un arreglo

const letras = ['a', 'b', 'c', 'd'];
const [primera, segunda] = letras;

console.log(primera); // 'a'
console.log(segunda); // 'b'

// Resolviendo con una funcion flecha

const obtenerDosPrimeros = (arr) => {
    const [primero, segundo] = arr;
    return { primero, segundo };
};

const letra = ['a', 'b', 'c', 'd'];
const resultado = obtenerDosPrimeros(letra);

console.log(resultado.primero); // 'a'
console.log(resultado.segundo); // 'b'
