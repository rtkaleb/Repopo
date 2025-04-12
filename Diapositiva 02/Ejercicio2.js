//Convierte el siguiente string en un objeto: "nombre: Kaleb, edad: 29, Ciudad: CDMX"

const str = "nombre: Kaleb, edad: 29, Ciudad: CDMX";
const objeto = {};
const partes = str.split(", ");
partes.forEach(parte => {
    const [clave, valor] = parte.split(": ");
    objeto[clave] = valor;
});
console.log(objeto);
