// 2. Función que invierte el orden de las palabras en una frase

function invertirPalabras(frase) {
    let palabras = []; // Arreglo vacío
    let palabra = '';
    let index = 0; // Índice para el arreglo
    
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] !== ' ') {
            palabra += frase[i];
        } else {
            // En lugar de usar .push(), asignamos a la posición del índice
            if (palabra) { 
                palabras[index] = palabra;
                index++;
            }
            palabra = '';
        }
    }

    // Si al final hay una palabra que no se añadió (para el caso de que no haya un espacio al final)
    if (palabra) {
        palabras[index] = palabra;
    }

    let resultado = '';
    for (let i = palabras.length - 1; i >= 0; i--) {
        resultado += palabras[i];
        if (i !== 0) resultado += ' ';
    }
    return resultado;
}

let cad = invertirPalabras("abcd efgh ijkl");
console.log(cad);

    