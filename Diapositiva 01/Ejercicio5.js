//Escribe una función que determine si una palabra es palíndromo (se lee igual al derecho y al revés).


const palabra = "anita lava la tina";

function palindromo(palabra) {

    const a = palabra.replace(/\s+/g, '').toLowerCase();
    
    const b = a.split('').reverse().join('');
    
    return a === b;
}

console.log(palindromo(palabra)); 



