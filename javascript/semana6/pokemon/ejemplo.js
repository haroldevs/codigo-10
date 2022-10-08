
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4cc4c577cdmsh6e25517382b8781p16d967jsn992e2eeb5bdc",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
};

const orden=document.querySelector("#orden")



const getMovies=async function(){
    const respuesta=await fetch("https://movies-app1.p.rapidapi.com/api/genres",options) 
    const data=await respuesta.json()
    // const generos=data.results

    // orden.innerHTML=""
    
    // generos.forEach((genero)=>{
        
    //     orden.innerHTML+=`<li>${genero.name}</li>`
    // })
    readApi(data.results)
    console.log(data)
}

getMovies()



function readApi(generos){
    orden.innerHTML=""
    generos.forEach((genero)=>{
        orden.innerHTML+=`<li>${genero.name}</li>`
    })
}