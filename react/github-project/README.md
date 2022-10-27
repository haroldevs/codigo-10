# ReactJS
Es un biblioteca de JavaScript para construir interfaces de usuario

## Reglas

1. Todo componente debe ser una funcion
2. Todo componente debe empezar con mayuscula

```js
function MyCard(){
    return <div> My Card </div>
}
```

3. Todo componente debe retornar un elemento padre

```js
function MyCard(){
    return(
        <div>
            <h1>Titulo</h1>
            <p>Parrafo</p>
            <div>
                <p>Parrafo hijo</p>
                <div>
                    <p>Parrafo hijo 2</p>
                </div>
            </div>
        </div>
    )
}

```
- Nota: Dentro de mi componente puede mas funciones y esas ya no llevan mayuscula.
- Eventos: Los nombres de los eventos son con camelCase
    - onclick -> onClick
    - onchange -> onChange
    - onsubmit -> onSubmit

```js
function MyCard(){
    function mostrarMensaje(){
        console.log('Hola Mundo')
    }

    return(
        <div>
            <h1>Titulo</h1>
            <button onClick={mostrarMensaje}>Mostrar mensaje</button>
        </div>
    )
}

```

## useState

En react para almacenar un valor en una variable usamos hook llamado useState
useState es una funcion que permite manejar el estado de una variable

- Como se usa useState

- Siempre los import de react van en la primera fila

```js
import {useState} from "react"





function App(){
    //useState nos retorna un arreglo con dos valores
    //el primer valor es el valor de la variable "Juan"
    //el segundo valor es una funcion que permite cambiar el valor

    const  [nombre,setNombre]=useState("Juan")

    //nombre="Pepe"  .esto no se puede hacer
    //setNombre("Pepe") .Esto si se puede hacer

    //Si queremos cambiar el valor de una variable
    //tenemos que llamar a la funcion setNombre

    return (
        <div>
            <p>Nombre {nombre}</p>
            <button onClick={()=>setNombre("Pepe")}>Cambiar nombre</button>
        </div>

    )
}
```

## onChange para Inputs

- En react para poder manejar el valor de un input usamos el evento onChange, este permite captar cada vez que el usuario escriba en el input

```js
function App() {
  const [inputText,setInputText]=useState("")

  function handleInputChange(event){
    //cambiar el valor de una variable inputtEXT
    //si queremos obtener lo que el usuario escribio
    //usamos event.target.value
  }
  return (
    <div>
        <p>Nombre{nombre}</p>
        <input type="text" onChange={handleInputChange}/>
    </div>

  )

```
