let img=["https://images.blz-contentstack.com/v3/assets/blt2ef8b4fee426fd3e/blt3d29e3d4489846b9/5f4616244eebe153cbb099be/screenshot_2.jpg","https://images.blz-contentstack.com/v3/assets/blt2ef8b4fee426fd3e/blt615cc938da6f1888/5f461624b7dcf5546ea92c29/screenshot_1.jpg","https://images.blz-contentstack.com/v3/assets/blt2ef8b4fee426fd3e/blt07227bea52668d97/5f4616250ac6ce5468cebb19/screenshot_3.jpg","https://images.blz-contentstack.com/v3/assets/blt2ef8b4fee426fd3e/blt1379791417434c8b/5f461625bb238f55563777db/screenshot_6.jpg"];
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