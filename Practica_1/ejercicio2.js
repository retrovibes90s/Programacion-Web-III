function miFuncion(texto) {
    let invertida = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    return invertida;
}
let cad = miFuncion("abcd");
console.log(cad); 
