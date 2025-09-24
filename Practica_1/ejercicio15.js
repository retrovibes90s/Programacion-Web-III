// 15. Proporcione un ejemplo para convertir un callback en una promesa.

function esPrimoCallback(num, callback) {
    if (num <= 1) {
      callback(false);
      return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        callback(false);
        return;
      }
    }
    callback(true);
  }
  
  esPrimoCallback(7, (resultado) => {
    console.log("¿Es primo? ", resultado); // true
  });
  
  // Usando Promesas
  
  function esPrimoPromesa(num) {
    return new Promise((resolve) => {
      if (num <= 1) {
        resolve(false);
        return;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          resolve(false);
          return;
        }
      }
      resolve(true);
    });
  }
  
  esPrimoPromesa(7).then((resultado) => {
    console.log("¿Es primo? ", resultado); // true
  });