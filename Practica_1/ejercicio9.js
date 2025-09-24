// 9. Crear una promesa que devuelva un mensaje de éxito después de 3 segundos
function esperarTresSegundos() {
  return new Promise((resolve, reject) => {
      const inicio = Date.now();
      const fin = inicio + 3000; // 3 segundos (3000 ms)

      // Bucle que bloquea la ejecución
      for (let i = 0; Date.now() < fin; i++) {
          // No hacemos nada, solo esperamos que pasen 3 segundos
      }
      // Una vez pasados los 3 segundos, resolvemos la promesa
      resolve("Éxito: Han pasado 3 segundos");
  });
}

esperarTresSegundos().then((mensaje) => {
  console.log(mensaje);
});

/* 
¿Qué hace este código?
Crea una promesa que se resolverá cuando hayan pasado 3 segundos.
Usa Date.now() para medir el tiempo actual.
Ejecuta un bucle for clásico que no hace nada útil, solo consume tiempo hasta que se cumplan los 3000 milisegundos.
Luego llama a resolve() con un mensaje de éxito.

Advertencia técnica

Este método:

Bloquea completamente el hilo principal (la interfaz del navegador o el evento loop en Node.js).
No permite hacer otras operaciones en paralelo durante esos 3 segundos.
Pero cumple la restricción: sin librerías, sin setTimeout, y usando un bucle for clásico.

¿Mejor alternativa real?
En la práctica, se usaría setTimeout
*/
