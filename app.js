//declaramos el array
let amigos = [];

function agregarAmigo(){
    //definimos la variable var
    //documento.getElementById.value = ayuda a traer el valor del id 
    var amigoIngresado = document.getElementById("amigo").value;

    if(amigoIngresado === ''){  //no vacios
        alert("Debes ingresar un nombre");
    }else{
        if (amigos.includes(amigoIngresado)){
            alert("Ese amigo ya fue ingresado. Ingrese uno nuevo");
        } else{
            //ingresamos a la lista
            amigos.push(amigoIngresado);
            mostrarAmigo(); //mostramos al amigo
            limpiarInput(); //limpiamos el input
        }
    }
}

function mostrarAmigo(){
    var mostrarAmigo = document.getElementById("listaAmigos"); //obteine la lista
    mostrarAmigo.innerHTML = ""     //limpia la lista antes de agregar nuevos

    for (let i = 0; i< amigos.length;i++){
        let li = document.createElement("li");   //crea elemtno li
        li.textContent = amigos[i];     //soloo agrego un nombre a la vez
        mostrarAmigo.appendChild(li);   //agregamos a la lista para que se muestre
    }
}

function limpiarInput() {
    document.querySelector('#amigo').value = '';        //tomamos el id del input y le seteamos el valor ''
}

//eliminamos los numeros
document.getElementById("amigo").addEventListener("input", function () {
   this.value = this.value.replace(/[0-9]/g, ''); 
});

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debes agregar al menos un amigo antes de sortear");
        return;
    }

    let numeroAmigo = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[numeroAmigo];

    let mostrarAmigoSecreto = document.getElementById("resultado"); //obteine la lista
    mostrarAmigoSecreto.innerHTML = ""  //limpia la lista antes de agregar nuevos

    let liAmigo = document.createElement("li"); //creamos elemento para listar el resultado
    liAmigo.textContent = "Tu amigo secreto es "+ amigoSorteado;
    mostrarAmigoSecreto.appendChild(liAmigo);   //agregamos el resultado
}

