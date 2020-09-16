var numero_carrito = 0;
var cont = 0;

function sumar_carrito(){

    numero_carrito = numero_carrito + 1;
    console.log(numero_carrito);
    document.getElementById('numero_de_elementos').innerHTML = numero_carrito;
    if (numero_carrito == 10){
        var obj = document.getElementById("numero_de_elementos");
        obj.style.marginRight =  '-40%';
        var obj1 = document.getElementById("carrito_imagen_id");
        obj1.style.paddingLeft =  '20%'
    }
} 

function canviar_modo(){ //  canviar modo claro/oscuro
    console.log("canviando de modo...");

    x = document.getElementById('cabecera');
    x.style.borderColor = (x.style.borderColor == 'rgb(26, 26, 26)') ? 'white' : 'rgb(26, 26, 26)';

    y = document.getElementById('cuerpo');
    y.style.borderColor = (y.style.borderColor == 'rgb(26, 26, 26)') ? 'white' : 'rgb(26, 26, 26)';

    z = document.getElementById('anuncios');
    z.style.borderColor = (z.style.borderColor == 'rgb(26, 26, 26)') ? 'white' : 'rgb(26, 26, 26)';

    w = document.getElementById('body');
    w.style.backgroundColor = (w.style.backgroundColor == 'rgb(26, 26, 26)') ? 'white' : 'rgb(26, 26, 26)'; 

    u = document.getElementById('sugerencias');
    u.style.backgroundColor = (u.style.backgroundColor == 'rgb(75, 74, 74)') ? ' whitesmoke' : 'rgb(75, 74, 74)';  

    if(cont == 0){      //ns porque la imagen no va con lo anterior asi que lo he hecho con if
        v = document.getElementById('imagen_bombilla');
        v.src = 'img/bombilla_off.png';
        cont = 1;
        console.log("Bombilla apagada");
    }
    else{
        document.getElementById("imagen_bombilla");
        v.src = 'img/bombilla_on.png';
        cont = 0;
        console.log("Bombilla encendida");

    }
    console.log("Cont = " + cont);
}