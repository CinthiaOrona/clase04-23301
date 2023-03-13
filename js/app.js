/********** TAREA CLASE 04 *****************/

/*******************INICIO*****************/
class App{
    constructor(parentID, className){
        this.parentID = parentID;
        this.className = className;
    }

    render(){
        let myApp = document.getElementById(this.parentID);
        myApp.className = this.className;

    }
}

class Input {
    constructor(parentID, type, placeholder, className, inputID) {
        this.parentID = parentID;
        this.type = type;
        this.placeholder = placeholder;
        this.className = className;
        this.inputID = inputID;
    }

    render() {
        const myApp = document.getElementById(this.parentID);
        const input = document.createElement("input");
        //myApp.innerHTML = `<input className="${this.className}" type="${this.type}" placeholder="${this.placeholder}">`;
        input.type = this.type;
        input.placeholder = this.placeholder;
        input.className = this.className;
        myApp.append(input);
    }
}


class Button {
    constructor(parentID, text, type, className, buttonID) {
        this.parentID = parentID;
        this.text = text;
        this.type = type;
        this.className = className;
        this.buttonID = buttonID;
    }

    render() {
        const myApp = document.getElementById(this.parentID);
        const button = document.createElement("button");
        button.textContent = this.text;
        button.type = this.type;
        button.className = this.className;
        myApp.append(button);  
        
        button.addEventListener('click', (e) =>{
            e.preventDefault();
            const myInput = document.querySelector("input");
            let mensaje = document.createElement("div");
            mensaje.setAttribute("id", "texto");
            mensaje.className = "alert alert-success m-4";
            mensaje.textContent = myInput.value;
            document.body.append(mensaje);
        });
    }    
}

const myApp = new App("app", "container my-4 p-4 bg-light w-50");
myApp.render();

const myInput = new Input("app", "text", "Escribe tu nombre", "form-control md-5", "input");
myInput.render();

const myButton = new Button("app", "Click me!", "button", "btn btn-primary mt-3", "button");
myButton.render();


/*********************FIN**********************/

/********** PRACTICA DE CLASE 04 **************/

let myDom = document; // document is a global object

const myDog = {
    name: "Firulais"
};

const myCat = {
    "name": "Kity"
};


console.log(myDog.name);
console.log(myCat.name);

// Como "clonar otro perro". Una plantilla.

class Perro{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}


const cookie = new Perro("Cookie", 5);
//cookie.render();

const pichicho = new Perro("Firu", 3);
//console.log(pichicho);
//pichicho.render();


// function Perro(name, age){
//     this.name = name;
//     this.age = age;
// }

const rocco = new Perro("Roquito", 9);
//rocco.render();


