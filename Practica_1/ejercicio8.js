// 8. Ejecutar una función callback después de 2 segundos
function esperarDosSegundos(callback) {
    const ahora = Date.now();
    const esperarHasta = ahora + 2000; // 2 segundos

    // Bucle for clásico para esperar
    for (let i = 0; Date.now() < esperarHasta; i++) {
        // Solo iterando sin hacer nada útil
    }

    // Ejecuta la función callback
    callback();
}

// Ejemplo de uso:
esperarDosSegundos(() => {
    console.log("¡Han pasado 2 segundos!");
});
/*Date.now() devuelve el tiempo actual en milisegundos.
Se calcula el tiempo futuro (esperarHasta) sumando 2000 ms.
El bucle for se ejecuta hasta que pasen los 2 segundos.
Luego se llama a la función callback.
No recomendado para producción

Este método es útil solo con fines educativos, porque bloquea completamente la ejecución del programa durante el tiempo de espera. En aplicaciones reales se debe usar setTimeout.
*/