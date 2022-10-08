//* var
//* let
//* const


//* var no se puede usar como variables porque esta reservada en js
var n1=1;
n1="hola";
var n2=10;
//! var ya no se usa
// var es global
// var es reasignable
// var es pesado
var n1=true;

// acutualmente no se usa var
// let es una palabra reservada que nos permite declarar variables en js
// let solo funciona en el scope (lugar) donde fue declarado por ejemplo: en esta hoja de la linea 1 a la 18

let nombre="Harold";

nombre=10;
nombre=true;
nombre=null;
nombre=undefined;

let nombre2="Thomas";
console.log("es una variable");
console.log(n1+nombre);
console.log(nombre);
//* const: palabra reservada uqe nos permite declarar variables en js
// const solo funciona en el scope donde fue declarado
// const no se puede reasignar

const nombre3="harold";
// no se puede hacer esto:
// propiedad de inmutabilidad
// nombre3="pepe";