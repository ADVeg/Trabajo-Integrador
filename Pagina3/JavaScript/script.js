let corr=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
function Formulario() {
    let error=false;
    let listerrores=document.getElementById("errores");
    let nombre=document.getElementById("nombre");
    let apellido=document.getElementById("apellido");
    let correo=document.getElementById("correoElectronico");
    let telefono=document.getElementById("telefono");
    let comentario=document.getElementById("comentario");
    if(nombre.value==""){
        nombre.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = "Falta el nombre";
        listerrores.appendChild(p);
        error=true;
    }
    if(apellido==""){
        error=true;
    }
    if(correo==""){
        error=true;
    }
    if(!corr.test(correo.value)){
        
        error=true;
    }
    if(!error){
        document.forms[F_Contacto].reset;
    }
    return false;
}
function verificarLetras(event) {
    let tecla=event.keyCode || event.which;
    if((tecla<65||tecla>90)&&tecla!=8){
        event.preventDefault();
        console.log("Ingrese letras");
    }
}
function verificarNumeros(event) {
    let tecla=event.keyCode || event.which;
    if((tecla<48||tecla>57)&&tecla!=8){
        event.preventDefault();
        console.log("Ingrese numeros");
    }
}