//Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el resultado en un objeto
function contarVocales(texto) {
    const resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    const textoMinusculas = texto.toLowerCase();
    for (let i = 0; i < textoMinusculas.length; i++) {  // Usamos un índice para iterar
        let char = textoMinusculas[i];  // Accedemos al carácter con el índice
        if (char === 'a') resultado.a++;
        else if (char === 'e') resultado.e++;
        else if (char === 'i') resultado.i++;
        else if (char === 'o') resultado.o++;
        else if (char === 'u') resultado.u++;
    }
    return resultado;
}

// Ejemplos de uso:
console.log(contarVocales("Euforia"));
