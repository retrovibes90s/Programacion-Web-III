// 16. Migrar una función con promesas a async/await
  //Supongamos que tenemos una función que usa promesas para calcular el promedio de varios números:
  
  function calcularPromedio(numeros) {
    return new Promise((resolve, reject) => {
      if (numeros.length === 0) {
        reject("No se pueden calcular promedios de una lista vacía.");
      } else {
        let suma = 0;
        for (let i = 0; i < numeros.length; i++) {
          suma += numeros[i];
        }
        resolve(suma / numeros.length);
      }
    });
  }
  
  calcularPromedio([10, 20, 30, 40, 50])
    .then(promedio => {
      console.log("El promedio es:", promedio);
    })
    .catch(error => {
      console.error(error);
    });
  

  // Migrado a async/await
  async function calcularPromedioAsync(numeros) {
    if (numeros.length === 0) {
      throw new Error("No se pueden calcular promedios de una lista vacía.");
    } else {
      let suma = 0;
      for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
      }
      return suma / numeros.length;
    }
  }
  
  (async () => {
    try {
      const promedio = await calcularPromedioAsync([10, 20, 30, 40, 50]);
      console.log("El promedio es:", promedio);
    } catch (error) {
      console.error(error);
    }
  })();
  