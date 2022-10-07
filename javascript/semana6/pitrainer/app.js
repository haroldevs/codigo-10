
// dentro del elemento
//const pi=document.getElementById("game")
// function clic(){
//      document.getElementById("game").style.display="block"
// }

//add event listner

const boton=document.getElementById("button_start")
const live_qty=document.querySelector(".live_qty")

boton.addEventListener("click",function(){
    this.disabled=true;
    document.getElementById("game").style.display="block"

})


// Game:
const pi_decimals =
	"1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";
let position = 0;
let errors=0;

const input_decimals = document.getElementById("input_decimals");
const result_decimals = document.getElementById("result_decimals");
const result_score = document.getElementById("result_score");

//Funcion alterar el valor del contador de vidas
function renderLives(){
	live_qty.innerHTML=""
	//split: funcion que transforma un texto a un array
	for(let i=0;i<5-errors;i++){
		// live_qty.innerHTML=live_qty.innerHTML+"❤️"
		live_qty.innerHTML+="❤️"
		
	}
}
renderLives()
// keydown -> keypress -> .value -> keyup
input_decimals.addEventListener("keyup", function () {
	this.value = "";
	this.focus();
});

function getSixCharacters(){
	// funcion convertir string a array  -> split
	const numeros=pi_decimals.split("")
	//retorna la lista de numeros hasta la posicion + 5-> los 6 numeros despues que me equivoque

	

	const newNumeros=numeros.filter((number,index)=> index<=position+5)
	result_decimals.innerHTML="3."+newNumeros.join("")
}


input_decimals.addEventListener("keydown", function (evt) {
	if (evt.code == "Enter") return;
	// Convirtiendo la tecla presionado a el caracter que representa:
	const decimal = String.fromCharCode(evt.keyCode);
	if (decimal == "") return;
	if (decimal == " ") return;
	if (isNaN(decimal)) return; // is Not a Number
	// Si decimal llegó hasta aquí, es porque el usuario presiono un numero:
	// Comprobar si decimal es igual al siguiente decimal de la cadena:
	if (decimal == pi_decimals.charAt(position)) {
		// acierto:
		result_decimals.innerText += decimal;
		result_decimals.style.color = "green";
		position++;
		result_score.innerText = position;
	} else {
		// desacierto:
		errors++
		result_decimals.style.color = "red";
		//llamar funcion renderLives()
		renderLives()
		if(errors===5)
		{
			input_decimals.disabled = true;
			getSixCharacters()
		}
		
			
	}
	// Volver el texto a negro:
	setTimeout(() => {
		result_decimals.style.color = "black";
	}, 500);
});
//reto si te equivocas te muestra los siguientes 6 decimales