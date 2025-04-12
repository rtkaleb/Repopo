//Escribe una función que tome un arreglo y lo devuelva invertido sin usar .reverse()


const original = [14, 23, 32, 24, 45];
function invirtiendo(array) {
    const inverso = [];
    for (let i = array.length - 1; i >= 0; i--) {
        inverso.push(array[i]);
    }
    return inverso;
}
const lanigiro = invirtiendo(original);
console.log(lanigiro); 
