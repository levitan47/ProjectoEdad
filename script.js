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
    const respuesta = document.querySelector("#respuesta");
    respuesta.textContent  = `Nombre: ${nombre.value}, edad: ${edad.value}`
    nombre.value = ""
    edad.value = ""
});
saludoButton.addEventListener("click", function(){
    const respuesta = document.querySelector("#respuesta");
    respuesta.textContent  = `Hola ${nombre.value}`
    nombre.value = ""
    edad.value = ""
})
legalButton.addEventListener("click", function(){
    if(edad.value < 18){
        const respuesta = document.querySelector("#respuesta");
        respuesta.textContent  = `${nombre.value} es menor de edad`
        nombre.value = ""
        edad.value = ""
    }else{
        const respuesta = document.querySelector("#respuesta");
        respuesta.textContent  = `${nombre.value} es mayor de edad`
        nombre.value = ""
        edad.value = ""                 
    }
})