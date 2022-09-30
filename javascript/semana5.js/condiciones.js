function validarComoIrAEstudiar(hora,dinero){
    if(hora === "6:00 am"){
        console.log("Tomo desayuno")
        if(dinero>20){
            console.log("Tomo colectivo")
        }else if(dinero > 10){
            console.log("Tomo el corredor")
        } else{
            console.log("Tomo el chino")
        }
        console.log("llego a estudiar")
    } else if(hora==="7:00 am"){
        console.log("no tomo desayuno")
        if (dinero){
            console.log("Tomo el corredor")
        }
        console.log("llego a estudiar")
    } else{
        console.log("no tomo desayuno")
        console.log("tomo colectivo")
        console.log("llego a estudiar")
    }
}

//caso 1
console.log("Caso 1")
validarComoIrAEstudiar("6:00 am",10)
console.log("Caso 2")
validarComoIrAEstudiar("6:00 am",15)
console.log("Caso 3")
validarComoIrAEstudiar("8:00 am",15)


function validarUsandoOperadores(username,password){
    if(username==="harold"&&password==="123456")
        console.log("ingreso")
    else
        console.log("datos invalidos")
    
    if(username==="harold" || password==="123456")
        console.log("ingreso 2")
    else
        console.log("datos invalidos 2")
}
validarUsandoOperadores("harolds","123456")
validarUsandoOperadores("harold","123456")
validarUsandoOperadores("harolds","12345")