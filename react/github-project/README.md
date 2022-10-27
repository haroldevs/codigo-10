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