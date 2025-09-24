// 5. Función que determina si una cadena es palíndromo
function esPalindromo(cadena) {
    let normalizada = '';
    
    for (let i = 0; i < cadena.length; i++) {
        const c = cadena[i];
        if (c !== ' ') {
            normalizada += c.toLowerCase();
        }
    }

    for (let i = 0; i < normalizada.length / 2; i++) {
        if (normalizada[i] !== normalizada[normalizada.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

let band1 = esPalindromo("oruro");
console.log(band1); // true
let band2 = esPalindromo("hola");
console.log(band2); // false
/* Se puede mostrar el resultado de otras 2 maneras:
opcion 2: Usar band una sola vez y reasígnala (sin let la segunda vez):

let band = esPalindromo("oruro");
console.log(band); // true

band = esPalindromo("hola");  // ✅ Solo reasignas
console.log(band); // false


opcion 3: Encierra cada prueba en su propio bloque:

{
    let band = esPalindromo("oruro");
    console.log(band); // true
}

{
    let band = esPalindromo("hola");
    console.log(band); // false
}

*/

