const nombre = document.querySelector("#nombre");
const edad = document.querySelector("#edad");
const nombreButon = document.querySelector("#nombreButton")
const saludoButton = document.querySelector("#saludoButton")
const legalButton = document.querySelector("#legalButton")
nombre.onchange = function (){comprobacion()}
edad.onchange = function (){comprobacion()}
function comprobacion() {
    if(nombre.value != "" && edad.value != ""){
        nombreButon.disabled = false;
        saludoButton.disabled = false;
        legalButton.disabled = false;
    }
}
nombreButon.addEventListener("click", function(){
    const respuesta = document.createElement("div");
    respuesta.innerHTML  = `Nombre: ${nombre.value}, edad: ${edad.value}`
    document.body.appendChild(respuesta)
});
saludoButton.addEventListener("click", function(){
    const respuesta = document.createElement("div");
    respuesta.innerHTML  = `Hola ${nombre.value}`
    document.body.appendChild(respuesta)
})
legalButton.addEventListener("click", function(){
    if(edad.value < 18){
        const respuesta = document.createElement("div");
        respuesta.innerHTML  = `${nombre.value} es menor de edad`
        document.body.appendChild(respuesta)
    }else{
        const respuesta = document.createElement("div");
        respuesta.innerHTML  = `${nombre.value} es mayor de edad`
        document.body.appendChild(respuesta)
    }
})