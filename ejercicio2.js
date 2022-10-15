/*Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)*/
const fecha = new Date (1995,2,15);
const lista = ["nazareno", 27, true, fecha];
const favBook = {
  nombre: "Jorge Luis Borges",
  fechadepublicacion: 1935,
  url: "https://www.pagindelibro.com",

};

console.log(lista);
