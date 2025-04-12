//Filtra los elementos "falsy" (false, 0, ", null, undefined, NaN) de un arreglo

const mezcla = [120, "Hello", false, 42, "", undefined, "JS"];
const filtrados = mezcla.filter(Boolean);
console.log(filtrados); 
