let n3=30;

function sumar(){
    let n1=10;
    let n2=20;
    console.log(n1+n2+n3);
}

//console.log(n1);
console.log(n3);
let nombre = "Pepe";


function restar(n1,n2){
    console.log(n1-n2);
}

restar(10,50);
restar(90,100);
restar(120,30);
const edadMinima=18;
function saludar(nombre) {
    return "Hola me llamo " + nombre; 
  }
  
saludar("Pepe");
saludar("Juan");

//ahora vamos a ver funcion con return

function entrarFiesta(edad){
    //si es mayor a 18 puede entrar
    let r=false;
    if(edad>=edadMinima){
        r= true;
    }
    return r;
}
const validacionEdad = entrarFiesta(26);
console.log("validar edad: ", validacionEdad)