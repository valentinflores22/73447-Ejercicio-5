// EJERCICIO 3

const numero1 = parseInt(prompt("Ingresa el primer número:"));
const numero2 = parseInt(prompt("Ingresa el segundo número:"));
const operacion = prompt("Ingresa la operación (+, -, *, /):");

let resultado;

if (operacion === "+") {
resultado = numero1 + numero2;

} else if (operacion === "-") {
resultado = numero1 - numero2;

} else if (operacion === "*") {
  resultado = numero1 * numero2;

} else if (operacion === "/") {
if (numero2 !== 0) {
    resultado = numero1 / numero2;

} else {
    resultado = "Error: No se puede dividir por cero.";
}
} else {
resultado = "Operación no válida";
}

alert(`El resultado es: ${resultado}`);

