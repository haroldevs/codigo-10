

const inputTask=document.querySelector(".input__task")
const btnCreate=document.querySelector(".btn__create")
const listTask=document.querySelector(".container__list__task")

//arreglo vacio

let arrayTasks=[]

//una function no tiene nombre se llama function anonima

btnCreate.onclick=function(){
    const taskText=inputTask.value
    //console.log("taskText",taskText)

    //validar que taskText no este vacio
    if(taskText===""){
        alert("Debe completar la caja de texto")
        return

    }
    const task=new Task(arrayTasks.length+1,taskText,new Date(),1)
    arrayTasks.push(task)
    listTask.innerHTML+=task.render()

    inputTask.value=""
}

function destroy(id){
    //eliminar un elemento de un array
    //en la condicion podemos decir que traiga elementos nenos el que tenga
    //FIlter retorna un arrary

    const filterTask=arrayTasks.filter((task)=>task._id!==id)
    //el valor de arrayTaks es filterTask
    arrayTasks=filterTask
    Task.destroyRender(id);
}

function edit(id){
    const newText=prompt("Ingresa el nuevo nombre de la tarea")

    //find solo retorna 1 elemento
    const oneTask=arrayTasks.find((task)=>task._id===id)
    oneTask._name=newText
    console.log(arrayTasks)
}