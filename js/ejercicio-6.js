// EJERCICIO 6

const precioDolares = parseInt(prompt("Ingresa el precio del producto en dólares:"));
const tasaCambio = 1130;
const iva = 0.21;

const precioPesos = precioDolares * tasaCambio;
const precioFinal = precioPesos + (precioPesos * iva);
alert(`El precio final con IVA es: $${precioFinal.toFixed(2)} pesos.`);
