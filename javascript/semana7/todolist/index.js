//import { response } from "express"


const inputTask=document.querySelector(".input__task")
const btnCreate=document.querySelector(".btn__create")
const listTask=document.querySelector(".container__list__task")

const check=document.querySelector(".check")

const url_todoapi='http://localhost:4000'

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

    //Descomentar para comunicarse con el servidor todoapi
    /*
    fetch(url_todoapi + "/puerta", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(task),
	}).then((response) => {
		if (response.ok) {
			fetch(url_todoapi + "/tasks")
				.then((res) => res.json())
				.then((data_json) => {
					console.log(data_json.tasks);
					data_json.tasks.forEach((tarea) => {
						const objTarea = new Task(
							tarea._id,
							tarea._name,
							tarea._date,
							tarea._status
						);
						listTask.innerHTML += objTarea.render();
                })
            })
        }
    })
    */

    arrayTasks.push(task)
    listTask.innerHTML+=task.render()

    inputTask.value=""
    inputTask.focus()
}

//agregamos el listener para el evento de presionar enter en el input
inputTask.addEventListener("keyup",(event)=>{
    if(event.key==="Enter"){
        btnCreate.click()
    }
})

function destroy(id){
    //eliminar un elemento de un array
    //en la condicion podemos decir que traiga elementos nenos el que tenga
    //Filter retorna un array

    const filterTask=arrayTasks.filter((task)=>task._id!==id)
    //el valor de arrayTaks es filterTask
    arrayTasks=filterTask
    Task.destroyRender(id);
}
// Edit v1
// function edit(id){
//     const newText=prompt("Ingresa el nuevo nombre de la tarea")

//     //find solo retorna 1 elemento
//     const oneTask=arrayTasks.find((task)=>task._id===id)

//     // cuando un if ejecuta 1 linea se puede evitar las llaves
//     if(oneTask===undefined) return

//     oneTask._name=newText
//     oneTask._status=2
//     Task.updateRender(id,newText)
// }

function edit(id){
    const element=document.querySelector(`#task-name-${id}`)
    element.style.display="none"

    //para crear elementos tipo nodo usamos 
    //funcion createElement

    const container=document.createElement('div') //<div></div>
    container.id=`task-edit-${id}`
    container.style.display="flex"
    container.style.gap="5px"
    const input = document.createElement('input') // <input type="text" placeholder=""/>
    input.id=`task-edit-${id}`
    
    //create element input type text
    input.type="text"
    input.placeholder="Ingresa el nuevo nombre"

    const button=document.createElement('button') //<button>Save </button>
    button.textContent="Save"
    button.style.backgroundColor="#ccc"
    button.onclick=function(){
        if(input.value===""){
            alert("Debe escribir un nombre")
            return
        }
        //update a nivel array

        const oneTask=arrayTasks.find((task)=>task._id===id)
        oneTask._name=input.value

        //update a nivel visual
        element.textContent=input.value
        element.style.display="block"
        container.remove()
    }

    const buttonCancel=document.createElement("button") //<button>Cancel</button>
    buttonCancel.textContent="Cancel"
    buttonCancel.style.backgroundColor="#ccc"
    buttonCancel.onclick=function(){
        container.remove()
        element.style.display="block"
    }


    container.appendChild(input) // <div> <input type="text" placeholder=""/> </div>
    container.appendChild(button) // <div> <input type="text" placeholder=""/> //<button>Save </button> </div>
    container.appendChild(buttonCancel)  // <div> <input type="text" placeholder=""/> //<button>Save </button>  <button>Cancel</button></div>

    //recordar element es el h6 y poner el container al costado
    //parentNode.insertBefore= coloca el container antes del h6
    // element.nextSibling=cambia la posicion a despues del h6
    element.parentNode.insertBefore(container,element.nextSibling)
}

