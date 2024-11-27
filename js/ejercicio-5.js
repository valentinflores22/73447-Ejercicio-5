// EJERCICIO 5

const minutos = parseInt(prompt("Ingresa un número de minutos:"));
const segundos = minutos * 60;
const horas = minutos / 60;
alert(`Esa cantidad de minutos equivale a ${segundos} segundos o ${horas.toFixed(2)} horas.`);
