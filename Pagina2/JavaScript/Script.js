let img=["Imagenes/imagen.jpg","Imagenes/imagen1.jpg","Imagenes/imagen2.jpg","Imagenes/imagen3.jpg"];
var link=0;
document.getElementById("Carusel").style.backgroundImage=`url(${img[link]})`;
function ImagenAnt() {
    posision(-1);
    cambioImg();
}
function ImagenSig() {
    posision(1);
    cambioImg();
}
function cambioImg() {
    document.getElementById("Carusel").style.backgroundImage=`url(${img[link]})`;
}
function posision(num) {
    link+=num;
    if(link<0){
        link=3;
    }else if (link>3) {
        link=0;
    }
}

function mostrarBotones() {
    document.getElementById("botonIzquierda").style.opacity = 1;
    document.getElementById("botonDerecha").style.opacity = 1;
  }
  
  function ocultarBotones() {
    document.getElementById("botonIzquierda").style.opacity = 0;
    document.getElementById("botonDerecha").style.opacity = 0;
  }