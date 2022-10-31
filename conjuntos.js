//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

//- Un nuevo Set con los nombres de tu familia

const familia = [
    { familiar: "primo", nombre: "ignacio" },
    { familiar: "madre", nombre: "maria" },
    { familiar: "prima", nombre: "camila" },
    { familiar: "tia", nombre: "liliana" },
    { familiar: "tio", nombre: "juan" },
  ];
  
  const familiaSet = new Set(familia);
  //- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
  
  familiaSet.add({ familiar: "yo", nombre: "Nazareno" });
  
  console.log(familiaSet);
  //- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
  
  familiaSet.add({ familiar: "JavaScript", nombre: "JavaScript" });
  
  console.log(familiaSet);
  