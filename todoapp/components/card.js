// los objetos HTMLElement tienen varias propiedads:
// - una es innerHTML
// - otra es innerText
// - otra es classList

class Card extends HTMLElement{
    constructor() {
		super()
		this.class = "card p-3"
	}
    //sin esto no se puede manipular las nuevas etiquetas
    static get observedAttributes() {
		return ["class", "classname", "shadow"]
	}
    

    attributeChangedCallback(prop, oldvalue, newvalue) {
		this[prop] = newvalue
		if (prop == "shadow") {
			this.classList.remove("shadow")
			if (newvalue == "true") this.classList.add("shadow")
		}
	}
    

    //Cuando este elemento sea llamado a renderizarse:
    connectedCallback() {
		if (this.class) {
			const lista_de_clases = this.class.split(" ")
			lista_de_clases.forEach((xclass) => {
				this.classList.add(xclass);
			});
		}

		if (this.classname) {
			const lista_de_clases = this.classname.split(" ")
			lista_de_clases.forEach((xclass) => {
				this.classList.add(xclass)
			})
		}
	}

    
    //Cuando este elemento sea quitado de la renderización:
    disconnectedCallback(){

    }
}

customElements.define("my-card",Card)