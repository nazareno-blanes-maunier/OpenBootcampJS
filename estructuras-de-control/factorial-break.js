//- factorial-break.js -> Este archivo debe calcular el
// factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break*/

let i = 10;
let j = 9;

while (j > 1) {
  i = j * i;
  j--;
  console.log(i);
  if ((j == 6)) {
    console.log("paso por el 6 ");
  }
  if((j == 1)){
    console.log("Hasta aqui llegue: " + i)
    break
  }
}

