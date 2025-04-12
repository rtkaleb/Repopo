//Sin usar Math.max ni Math.min, encuentra el número mayor y menor de este arreglo


const valores = [12, 5, 8, 130, 44];
let max = valores[0]; 
let min = valores[0];
for (let i = 1; i < valores.length; i++) {
    if (valores[i] > mayor) {
        mayor = valores[i];
    }
    if (valores[i] < menor) {
        menor = valores[i];
    }
}
console.log("El número más grande del arreglo es: " + max); 
console.log("El número más pequeño del arreglo es: " + min); 
