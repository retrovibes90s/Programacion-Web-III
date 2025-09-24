// 14. Ejemplo para convertir una promesa en un callback
// Función con Promesa

function factorialPromise(n) {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject('El número debe ser no negativo');
    } else {
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      resolve(result);
    }
  });
}

// Ejemplo de uso:
factorialPromise(5)
  .then(result => console.log(result))  // 120
  .catch(error => console.error(error));



  //Función con Callback

function factorialCallback(n, callback) {
  if (n < 0) {
    callback('El número debe ser no negativo');
    return;
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  callback(null, result);
}

// Ejemplo de uso:
factorialCallback(5, (error, result) => {
  if (error) {
    console.error(error);  // Si hay error, se muestra
  } else {
    console.log(result);    // 120
  }
});
