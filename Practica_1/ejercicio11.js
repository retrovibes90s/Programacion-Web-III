// 11. Proporcione un ejemplo concreto de encadenamiento de promesas.
function fibonacci(n) {
    if (n <= 1) return n; 
    let a = 0, b = 1, c = 1;
    for (let i = 2; i <= n; i++) { 
        c = a + b;
        a = b; 
        b = c;
    }
    return c;
}
// Promesa que resuelve con número Fibonacci para n dado 
function promesaFibonacci(n) {
    return Promise.resolve(fibonacci(n));
}
    
// Encadenamiento de promesas para Fibonacci en 3 etapas 
promesaFibonacci(5)
    .then(result => { console.log("Fib(5) =", result); return promesaFibonacci(6);
    })
    .then(result => { console.log("Fib(6) =", result); return promesaFibonacci(7);
    })
    .then(result => { console.log("Fib(7) =", result); });

/* Explicación: Cada .then recibe el resultado de la promesa anterior y retorna otra promesa lo que permite hacer tareas secuenciales dependientes de las anteriores garantizando orden y acceso a los resultados previos.
*/    