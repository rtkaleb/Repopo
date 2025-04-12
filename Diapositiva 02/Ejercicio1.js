//Encuentra el segundo número más grande de un arreglo sin usar sort

const nums = [12, 35, 1, 10, 34, 1];
let mayor = nums[0];
let seguns = -Infinity; 

for (let i = 1; i < nums.length; i++) {
    if (nums[i] > mayor) {
        seguns = mayor;
        mayor = nums[i];
    } else if (nums[i] > seguns && nums[i] !== mayor) {
        seguns = nums[i];
    }
}console.log("El segundo número más grande es: ", seguns); 

