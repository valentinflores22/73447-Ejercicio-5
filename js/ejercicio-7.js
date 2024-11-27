// EJERCICIO 7

const auto = {
    marca: "Ferrari",
    modelo: "Purosangre",
    año: 2024,
    color: "Rojo Ferrari",
    velocidadMaxima: "310 km/h",
    precio: "$390,000 USD"
};

console.log(auto);

document.write(`El ${auto.marca} ${auto.modelo} es uno de los autos más recientes en el mercado alcanzando un precio de ${auto.precio}. <br>
En este ${auto.año}, ${auto.marca} apostó mucho en su primera SUV lanzandola con el icónico color ${auto.color}. <br>
Su velicidad máxima es de ${auto.velocidadMaxima}.`);
