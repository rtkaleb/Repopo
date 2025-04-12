//Elimina los elementos duplicados de este arreglo sin usar Set.


const duplicados = [1, 2, 2, 3, 4, 4, 5];
const sinDuplicar = duplicados.filter((valor, indice, arreglo) => {
    return arreglo.indexOf(valor) === indice;
});
console.log(sinDuplicar); // [1, 2, 3, 4, 5]
