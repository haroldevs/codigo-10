const personas = [];

function crearPersona() {
	const persona1 = {
		name: "bruno",
		years: 32,
		gender: "masculino",
		talla: 179,
		is_adult: function () {
			return this.years >= 18;
		},
		inches: function () {
			return this.talla / 2.54;
		},
		upper_name: function () {
			return this.name.toUpperCase();
		},
		capital_name: function () {
			return (
				this.upper_name().substring(0, 1) +
				this.name.substring(1, this.name.length)
			);
		},
	};
	personas.push(persona1);
	console.log(personas);
}

// Funcion para crear varias 3 personas:
function crearPersonas() {
	const persona1 = {
		name: "bruno",
		years: 32,
		gender: "masculino",
		talla: 179,
		is_adult: function () {
			return this.years >= 18;
		},
		inches: function () {
			return this.talla / 2.54;
		},
		upper_name: function () {
			return this.name.toUpperCase();
		},
		capital_name: function () {
			return (
				this.upper_name().substring(0, 1) +
				this.name.substring(1, this.name.length)
			);
		},
	};
	const persona2 = {
		name: "linder",
		years: 22,
		gender: "masculino",
		talla: 170,
		is_adult: function () {
			return this.years >= 18;
		},
		inches: function () {
			return this.talla / 2.54;
		},
		upper_name: function () {
			return this.name.toUpperCase();
		},
		capital_name: function () {
			return (
				this.upper_name().substring(0, 1) +
				this.name.substring(1, this.name.length)
			);
		},
	};
	const persona3 = {
		name: "elvia",
		years: 25,
		gender: "femenino",
		talla: 170,
		is_adult: function () {
			return this.years >= 18;
		},
		inches: function () {
			return this.talla / 2.54;
		},
		upper_name: function () {
			return this.name.toUpperCase();
		},
		capital_name: function () {
			return (
				this.upper_name().substring(0, 1) +
				this.name.substring(1, this.name.length)
			);
		},
	};
	personas.push(persona1);
	personas.push(persona2);
	personas.push(persona3);
	console.log(personas);
}

//Crear molde a partir de crear multiples personas


class Person{
    constructor(name,years,gender,heigth){
        this.name=name;
        this.years=years;
        this.gender=gender;
        this.heigth=heigth;
    }
    is_adult(){
        return this.years>=18
    }
    inches(){
        return this.heigth/2.54
    }
    upper_name(){
        return this.name.toUpperCase()
    }
    capital_name(){
        return(
            this.upper_name().substring(0,1)+this.name.substring(1,this.name.lenght)
        )
    }
}

//Funcion para crear varias personas a partir de un modelo
/*
function crearPersonasClass(){
    const persona1=new Person("bruno",32,"masculino",179)
    const persona2=new Person("linder",22,"masculino",170);
    const persona3=new Person("linder",25,"femenino",170);

    personas.push(persona1)
    personas.push(persona2)
    personas.push(persona3)

    console.log(personas)
}
*/

function crearPersonasCustom(){
    const persona1=new Person(prompt("Your name?"),prompt("Your age?"),prompt("Your gender?"),prompt("Your height?"))
    // const persona2=new Person("linder",22,"masculino",170);
    // const persona3=new Person("linder",25,"femenino",170);

    personas.push(persona1)
    // personas.push(persona2)
    // personas.push(persona3)

    console.log(personas)
}

function notificacion(){
    window.alert("soy una notificacion")
    console.log(window.location.host)
    console.log(window.location.pathname)
    console.log(window.innerHeight)
    console.log(window.innerWidth)
    console.log(window.history)

    // crear un popup
    // window.open("variables.html","variablesTab","popup")
}

function goVariables(){
    window.location.href="variables.html"
}


function edadMinima(){
	let edadMinima=100
	// personas.forEach((persona)=> {
		
	// 	if(persona.years<edadMinima){
	// 		edadMinima=persona.years
	// 	}
	// })
	personas.forEach((persona)=> {
		edadMinima= Math.min(edadMinima,persona.years)
	})	
	console.log(edadMinima)
}

function buscarPersonaNombre(){
	const term= prompt("Ingresa el nombre a buscar: ")

	let persona_match

	personas.forEach((persona)=>{
		if(persona.name===term)
		persona_match=persona
	})
	console.log(persona_match)

	//ahora con find

	const persona_find=personas.find((persona)=>persona.name===term)
	console.log(persona_find)
}