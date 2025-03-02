//declaramos el array
let amigos = [];

function agregarAmigo(){
    //definimos la variable var
    //documento.getElementById.value = ayuda a traer el valor del id 
    var amigoIngresado = document.getElementById("amigo").value;

    if(amigoIngresado === ''){
        alert("Debes ingresar un nombre");
    }else{
        if (amigos.includes(amigoIngresado)){
            alert("Ese amigo ya fue ingresado. Ingrese uno nuevo");
        } else{
            amigos.push(amigoIngresado);
            console.log(amigos);
            mostrarAmigo();
        }
    }
}

function mostrarAmigo(){
    var mostrarAmigo = document.getElementById("listaAmigos"); //obteine la lista
    mostrarAmigo.innerHTML = ""     //limpia la lista antes de agregar nuevos

    for (let i = 0; i< amigos.length;i++){
        let li = document.createElement("li");   //crea elemtno li
        li.textContent = amigos[i];     //soloo agrego un nombre a la vez
        mostrarAmigo.appendChild(li);
    }
}
