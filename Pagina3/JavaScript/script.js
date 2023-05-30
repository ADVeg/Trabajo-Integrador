let corr=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
function Formulario(event) {
    let error=false;
    let errorCR=false;
    let nombre=document.getElementById("nombre");
    let apellido=document.getElementById("apellido");
    let correo=document.getElementById("correoElectronico");
    let telefono=document.getElementById("telefono");
    let comentario=document.getElementById("comentario");
    if(nombre.value==""){
        document.querySelector("#errorNombre").innerHTML="*";
        errorCR=true;
    }else{
        document.querySelector("#errorNombre").innerHTML="";
    }
    if(apellido.value==""){
        document.querySelector("#errorApellido").innerHTML="*";
        errorCR=true;
    }else{
        document.querySelector("#errorApellido").innerHTML="";
    }
    if(correo.value==""){
        document.querySelector("#errorCorreo").innerHTML="*";
        errorCR=true;
    }else if(!corr.test(correo.value)){
        document.querySelector("#errorCorreo").innerHTML="*Correo Invalido";
        error=true;
    }else{
        document.querySelector("#errorCorreo").innerHTML="";
    }
    if(telefono.value==""){
        document.querySelector("#errorTelefono").innerHTML="*";
        errorCR=true;
    }else if(telefono.value.length<10){
        document.querySelector("#errorTelefono").innerHTML="*Telefono muy corto";
        error=true;
    }else{
        document.querySelector("#errorTelefono").innerHTML="";
    }
    if(comentario.value==""){
        document.querySelector("#errorComentario").innerHTML="*";
        error=true;
        errorCR=true;
    }else{
        document.querySelector("#errorComentario").innerHTML="";
    }
    if(errorCR){
        document.querySelector("#errorGlobal").innerHTML="*Campo Requerido";
    }else{
        document.querySelector("#errorGlobal").innerHTML="";
    }
    if(!error==true&&!errorCR==true){
        console.alert("Formulario enviado");
    }
    event.preventDefault();
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