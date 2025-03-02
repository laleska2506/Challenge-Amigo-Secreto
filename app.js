//declaramos el array
let amigos = [];

function agregarAmigo(){
    //definimos la variable var
    //documento.getElementById.value = ayuda a traer el valor del id 
    var amigoIngresado = document.getElementById("amigo").value;

    if(amigoIngresado == ''){
        alert("Debes ingresar un nombre");
    }else{
    amigos.push(amigoIngresado);
    console.log(amigos);
    }
}