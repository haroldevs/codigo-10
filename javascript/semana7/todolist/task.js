
// Reglas de clases
// 1. Recibir 3 parametros
// 2. tenemos 3 estados
//     status1=create
//     status2=done
//     status3=delete
// 3. tendremos una funcion para renderizar nuestra tarea
// 4. tendremos una function para aztulizar la tarea
// 5. tendremos una function para eliminar nuestra tarea
// CRUD -> create - read- update - delete

//instanciar a la clase Task
// const task=new Task("tarea 1", new Date(),1)


// !Importante: una clase siempre inicia en mayuscula
// Para usar import del archivo tenemos que hacer la clase exportable(pueda ser usado de otro archivo)

class Task{

    //parametros
    constructor(id,name,date,status){
        this._id=id
        this._name=name
        this._date=date
        this._status=status
    }

    static destroyRender(id){
        const element=document.querySelector(`#task-${id}`)
        element.remove()
    }

    static updateRender(id,name){
        const element=document.querySelector(`#task-name-${id}`)

        //si quieren cambiar el texto de un elemento se puede usar innertext o textContent
        element.textContent=name
    }

    //en una clase no hace falta usar la palabra function

    render(){
        return `
            <div id="task-${this._id}" class="item__task">
                <input type="checkbox" />
                <h6 id="task-name-${this._id}">${this._name}</h6>
                <button onclick="edit(${this._id})">
                    <img src="./images/edit.png" width="15" alt="">
                </button>
                <button onclick="destroy(${this._id})">
                    <img src="./images/delete.png" width="15" alt="">
                </button>
            </div>
        `
    }
}

