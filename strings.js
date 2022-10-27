let str_Nombre = "Nazareno";
let str_Apellido = "Blanes-Maunier";
let estudiante = str_Nombre + " " + str_Apellido;

console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase(estudiante);
let estudianteMinus = estudiante.toLowerCase(estudiante);

console.log(estudianteMayus);
console.log(estudianteMinus);

let numeroLetras = estudiante.length;
let numeroLetrasApellido = str_Apellido.length;

console.log(numeroLetrasApellido);
console.log(numeroLetras);

let primerLetra = str_Nombre.slice(0, 1);

console.log(primerLetra);

let ultimaLetra = str_Apellido.slice(13, 14);

console.log(ultimaLetra);

let eliminar = str_Nombre.trimEnd() + str_Apellido;

console.log(eliminar);

let boolean = estudiante.includes(str_Nombre)

console.log(boolean)
