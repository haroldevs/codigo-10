const nombres=["pepe","juan","luisa","carlos","maria"]

console.log(nombres[0])
console.log(nombres[3])
console.log(nombres[5])

const edades=[18,20,22,12]

console.log(edades)

const booleanos=[true,false,true,false]

edades.push(34)
edades.push("pepe")
edades.push(true)
edades.push(["juan","luis"])
console.log("edades 2",edades)
console.log(edades[7][1])

const cursos=[["react","angular","svelt","vue"],["laravel","sinfony","cake",["poo","java","php",["js","css","html"]]],["spring","jhipster"]];

console.log(cursos[1][3][3][1])

cursos.unshift("react native")
console.log("unshift",cursos)
cursos[1].unshift("nextjs")
console.log("asdds",cursos)

console.log("Pop", "Elimina el ultimo elemento");
const valorEliminado = cursos.pop()
console.log(valorEliminado)
console.log(cursos)

console.log("shif","elimina el 1er elemento")
const valorEliminado2=cursos.shift();
console.log(valorEliminado2)
console.log(cursos)

//for bucle esta es una forma antigua
console.log("=====================")
const newCursos=["angular","react","vue","svelt"]
for (let i = 0; i < newCursos.length; i++) {
    if(newCursos[i]==="react")
        console.log(newCursos[i])
}

console.log("===========forEach================")
// forma moderna
//foreach recorre el arreglo pero no retorna ningun valor
//necesita funcion para que obtenga su valor en cada vuelta
newCursos.forEach(function(curso,indice){
    if(curso==="react")
        console.log(curso,indice)
})

const numeros=[10,11,12,13,14,15]

for (let j = 0; j < numeros.length; j++) {
    console.log(numeros[j])   
    if (numeros[j]>13) {
        break
    }
     
}

console.log("foreach numeros")

numeros.forEach(function(numero){
    console.log(numero)  
    if (numero>13) {
        //es basicamente para romper una funcion
        return
    }
    //un foreach tiene la peculiaridad de que no se puede romper
    
})
