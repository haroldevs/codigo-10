function aumentarNumero(numero,aumento){
    //En esta funcion vamos a programar el numero aumente en una cantidad x
    // numero = numero + aumento;
    numero+=aumento
    numero-=aumento
    console.log(numero)
    numero*=aumento
    numero/=numero
}

aumentarNumero(10,20);


console.log("Funcion 2")
function aumentarDoble(numero,aumento){
    // numero**=aumento
    numero %=aumento
    console.log(numero)
}

aumentarDoble(2,3)
aumentarDoble(8,4)
aumentarDoble(12,2)

function operadorDeCambio(numero1,numero2){
    numero1 <<= numero2
    console.log("operadorDeCambio", numero1)
}
// FORMULA DEL OPERADOR <<=   --> numero1*(2**numero2)
  // 5.2**3      40
                // 5..2**4   80
                // 5.2**5  160

operadorDeCambio(1,4)
              

function operadoresLogicos(numero1,numero2){
    console.log(numero1>numero2)
    console.log(numero1<numero2)
    console.log(numero1==numero2)
    console.log("==","1"==1)
    console.log(typeof 41.3)
    console.log(typeof "hola")
    console.log(typeof [1,2,3])

}

operadoresLogicos(100,50)