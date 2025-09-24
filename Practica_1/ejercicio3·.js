// 3. Función que recibe un arreglo de números y devuelve un objeto con pares e impares
function paresEImpares(arr) {
    let resultado = { pares: [], impares: [] };
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            resultado.pares = [...resultado.pares, arr[i]];
        } else {
            resultado.impares = [...resultado.impares, arr[i]];
        }
    }
    return resultado;
}
console.log(paresEImpares([1, 2, 3, 4, 5])); 