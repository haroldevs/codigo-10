/*
 * Reto #1
 * EL FAMOSO "FIZZ BUZZ"
 * Fecha publicación enunciado: 27/12/21
 * Fecha publicación resolución: 03/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe un programa que muestre por consola (con un print)
 * los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión),
 * sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 *
*/

for(let i=1; i<=100;i++){
    if (i%15===0){
        console.log("fizzbuzz");
    }
    else if (i%3===0){
        console.log("fizz");
    } else if(i%5===0){
        console.log("buzz");
    } else{
        console.log(i);
    }
}



// area de un poligono
// triangulo, cuadrado, rectangulo | b*h/2, b*h, b*h
function areaPoligono(tipo,base,altura){
    const poligonos = {triangulo: (base*altura)/2,
                    cuadrado: base*altura,
                    rectangulo: base*altura,
                    };
 
    return poligonos[tipo] ?? "hubo un error";
}
const triangulo= areaPoligono("triangulo", 40,2);
const cuadrado= areaPoligono("cuadrado", 20,20);
const rectangulo= areaPoligono("rectangulo", 40,20);
const cubo= areaPoligono("cubo", 10,20);

console.log("triangulo", triangulo);
console.log("cuadrado", cuadrado);
console.log("rectangulo", rectangulo);
console.log("cubo",cubo);