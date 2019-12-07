//===================== EJERCICIO 01 =============================//
const funcionNumerosPares = () => {
 for (let i = 0; i <= 100; i += 2) {
  console.log(i);
 }
};

funcionNumerosPares();
funcionNumerosPares();

//===================== EJERCICIO 02=============================//
const datosPersonales = () => {
 console.log(`Nombre: Guada
 Edad: 27
 Teléfono: 4518387
 Calle: 7
 Altura: 3131
 Código postal: 1900`)
};

datosPersonales();
datosPersonales();

//================== EJERCICIOS CON PARÁMETROS ====================//
//============================= 01 ================================//
const mostrarNombreCompleto = (nombre, apellido) => {
 console.log(nombre + apellido)
};

mostrarNombreCompleto("Ada ", "Lovelace");

//============================= 02 ================================//
const sonIguales = (parametro1, parametro2) => {
 if (parametro1 === parametro2) {
  console.log(true)
 } else {
  console.log(false)
 };
};

sonIguales("Ada", "Ada");
sonIguales(2, 8);

//============================= 03 ================================//
const agregarNumero = (array, numero) => {
 array.push(numero);
 console.log(array);
};

let numerosPar = [2, 4];
agregarNumero(numerosPar, 6);

//============================= 04 ================================//
const comprobarPosicion = (arrayDeStrings, string) => {
 let stringHallado = false;

 for (let i = 0; i < arrayDeStrings.length; i++) {
  if (arrayDeStrings[i] === string) {
   stringHallado = true;
  }
 }
 console.log(stringHallado)
};

let cancionesDeEminem = ["Rock bottom", "Lose Yourself", "Rap God", "Lucky You"];

comprobarPosicion(cancionesDeEminem, "The Way I Am");

//============================= 05 ================================//
const calcularPromedio = (arrayConNumerosEnteros) => {
 let sumaParcial = 0;

 for (let i = 0; i < arrayConNumerosEnteros.length; i++) {
  sumaParcial += arrayConNumerosEnteros[i]
 }

 console.log(sumaParcial / arrayConNumerosEnteros.length)
}

let arr = [1, 2, 3, 5, 6, 7, 8];
calcularPromedio(arr);

//================== EJERCICIOS CON RETURN ======================//
//============================ 01 ===============================//
const obtenerNombre = miNombre => {
 return miNombre
}

console.log("Mi nombre es " + obtenerNombre("Guada"))

//============================ 02 ===============================//
const obtenerSaludo = () => {
 let nombre = obtenerNombre("Guada")
 return `¡Hola, ${nombre}!`
}

console.log(obtenerSaludo());

//============================ 03 ===============================//
const obtenerResto = (a, b) => a % b

console.log(obtenerResto(17, 2))

//============================ 04 ===============================//
const esPar = num => {
 if (obtenerResto(num, 2) == 0) {
  return true
 } else {
  return false
 }
}

// const esPar = num => obtenerResto(num, 2) === 0

//============================ 05 ===============================//
const listaDeNumeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];
let listaDeNumerosImpares;

const encontrarImpares = arr => {
 let acc = [];

 for (let i = 0; i < arr.length; i++) {
  if (esPar(arr[i]) == false) {
   //(!esPar(arr[i]))
   acc.push(arr[i]);
  }
 }
 return listaDeNumerosImpares = acc
}

console.log(encontrarImpares(listaDeNumeros));

//============================ 06 ===============================//
const exclamar = str => "¡" + str + "!" 

//============================ 07 ===============================//
const unirNombre = (nombre, apellido) => nombre + " " + apellido;

//============================ 08 ===============================//
const saludar = (nombre, apellido) => {
 return exclamar(unirNombre(nombre, apellido))
}

console.log(saludar("Guadalupe", "Iturralde"))