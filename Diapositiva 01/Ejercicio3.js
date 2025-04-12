//Elimina los elementos duplicados de este arreglo sin usar Set.


const duplicados = [1, 2, 2, 3, 4, 4, 5];
const sinDuplicar = duplicados.filter((a, b, c) => {
    return c.indexOf(a) === b;
});
console.log(sinDuplicar); 
