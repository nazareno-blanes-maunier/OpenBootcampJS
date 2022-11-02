/*Crea un archivo llamado objetos.js que contenga las siguientes líneas*/

//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const persona = {
    nombre: "Nazareno",
    apellido: "Blanes_Maunier",
    edad: 27,
    altura: 1.7,
    eresDesarrollador: true,
  };
  
  console.log(persona);
  //- Una variable que obtenga tu edad a partir del objeto anterior
  
  const edad1 = persona.edad;
  console.log(edad1);
  
  //- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
  
  const lista = [
    { ...persona },
    {
      nombre: "Juan",
      apellido: "Gordillo",
      edad: 24,
      altura: 1.7,
      eresDesarrollador: false,
    },
    {
      nombre: "Florencia",
      apellido: "Rossomando",
      edad: 28,
      altura: 1.6,
      eresDesarrollador: false,
    },
  ];
  
  console.log(lista)
  
  //- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
  
  const listaOrdenada = lista.sort((a, b) => b.edad - a.edad); 
  
  console.log(listaOrdenada)