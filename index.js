
function solicitarNombre() {
    alert("Bienvenido al kiosko 24hs")
    let nombre = prompt("ingrese su nombre");
    while(nombre === ""){
    nombre = prompt("Ingrese su nombre");
    }
}


function mostrarProductos(){
    let producto;
    do{
        producto = parseInt(prompt("que producto llevara? : 1)Gaseosa 2)Golosina 3)Papitas "))
    }while(producto != 1 && producto!=2 && producto!=3)

    switch (producto){
        case 1:
            return "gaseosa";
        case 2:
            return "golosina";
        case 3:
            return "papitas";
    }
} 

function validarPrecio(producto){
    if(producto==="gaseosa"){
        return 500;
    }
    else if(producto==="golosina"){
        return 300;
    }else if(producto==="papitas"){
        return 1000;
    }
}

function cobrar(nombre,precio){
    alert("Usted lleva el siguiente producto: "+nombre+" Precio: $"+precio);
    let pago = parseInt(prompt("Con cuanto pagas?"))
    if(pago> precio){
        alert("Gracias ! Su vuelto es "+ (pago - precio))
    }else{
        alert("No te alcanza! ")
    }
}







solicitarNombre();
let productoNombre = mostrarProductos();
let precioProducto = validarPrecio(productoNombre);
cobrar(productoNombre,precioProducto);




mostrarProductos();