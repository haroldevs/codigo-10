//Es clase porque va externet HTMLElement
//HTMLElement: es una clase nativa de JS
class MyCard extends HTMLElement{
    // como esta clase tiene un extends requerimos un super
    constructor(){
        //usando supper() dentro del constructor podemos crear atributos propios
        super()
        this.title=""
        this.img=""
        this.message=""
    }

    //para recibir parametros de html necesitamos 2 funciones
    static get observedAttributes(){
        //En esta funcion vamos a definir parametros acepta el componente
        //para saber quienes son vamos a definirlos por array
        return ["title","message","img"]
    }

    //como podemos guardar el valor que estamos recibiendo
    attributeChangedCallback(name,_,newvalue){
        
        switch (name) {
            case "title":
              this.title = newvalue;
              break;
            case "img":
              this.img = newvalue;
              break;
            case "message":
              this.message = newvalue;
              break;
            default:
              break;
        }
        
        
        // if(name==="title"){
        //     //name=>nombre del atributo
        //     //oldvalue=>valor actual
        //     //newvalue=>nuevo valor
        //     this.title=newvalue
        // }
        
    }

    //para asignar html dentro de mi tag 
    // debemos llamar a la funcion connectedCallback()
    //funcion se ejecuta automaticamente cuando nuestro componente se crea con html

    connectedCallback(){
        this.classList.add("col-12","col-sm-4","col-md-3")
        this.innerHTML=`
            <div class="card mt-5">
                <img width="100%" class="card-img-top" src="${this.img}" /> 
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text">${this.message}</p>
                    <button class="btn btn-link">Leer mas</button>
                </div>
            </div>
        `
    }
}

customElements.define('my-card',MyCard)

// this=> window

class Element{
    // this=> clase Element
    constructor(){
        this.name="asdf"
    }
}

button.onclick()=function(){
    console.log(this)
}