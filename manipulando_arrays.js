//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listCompras = [
    "Arroz",
    "Polenta",
    "Verduras",
    "Papel higienico",
    "Lavandina",
  ];
  
  //- Modifica la lista de la compra y añádele "Aceite de Girasol"
  const agrega = listCompras.push("Aceite de girasol");
  console.log(listCompras);
  
  // Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
  const quita = listCompras.pop("Aceite de girasol");
  console.log(listCompras);
  
  //- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
  const likedMovies = [
    {
      nombre: "El laberinto del fauno",
      fecha: new Date(2009, 9, 15),
      director: "Guillermo del Toro",
    },
    {
      nombre: "La isla siniestra",
      fecha: new Date(2011, 5, 12),
      director: "Martin Scorssese",
    },
    {
      nombre: "Alicia en el pais de las maravillas",
      fecha: new Date(1965, 6, 15),
      director: "Nombre del director",
    },
  ];
  
  //- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
  const posteriores = likedMovies.filter(
    (obj) => obj.fecha > new Date(2010, 0, 1)
  );
  console.log(posteriores);
  
  //- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
  const titulos = likedMovies.map((obj) => obj.nombre);
  console.log(titulos);
  
  //- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
  const concatena = likedMovies.concat(titulos);
  console.log(concatena);
  
  //- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
  const spread = [...likedMovies, ...titulos];
  console.log(spread);
  