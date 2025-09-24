// 4. Función que recibe un arreglo de números y devuelve el número mayor y menor en un objeto
function mayorYMenor(arr) {
    let mayor = arr[0];
    let menor = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
        if (arr[i] < menor) {
            menor = arr[i];
        }
    }

    return { mayor, menor };
}
console.log(mayorYMenor([3, 1, 5, 4, 2])); 