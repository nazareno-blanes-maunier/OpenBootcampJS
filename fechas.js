/*Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy*/

const fecha = new Date();

console.log(fecha);

//- La fecha de tu nacimiento
const fechaNacimiento = new Date(1995, 01, 15);
console.log(fechaNacimiento);

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const comparacion = fecha > fechaNacimiento;
console.log(comparacion);

//- Una variable que contenga el día de tu nacimiento
const dia = fechaNacimiento.getDate()
console.log(dia)
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = fechaNacimiento.getMonth();
console.log(mes + 1);
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)*/

const año = fechaNacimiento.getFullYear();

console.log(año);
