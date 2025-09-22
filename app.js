let amigos = [];
let nuevoNombreAmigo = document.getElementById("amigo");
let listaAmigosAgregados = document.getElementById("listaAmigos");
let amigoSecreto = document.getElementById("resultado");

function agregarAmigo(){
    let nombreAgregado = nuevoNombreAmigo.value;
    if (nombreAgregado == "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(nombreAgregado);
        nuevoNombreAmigo.value = "";
        actualizarListaAmigos();
    }
}

function actualizarListaAmigos(){
    listaAmigosAgregados.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigosAgregados.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length == 0) {
        alert("Primero agrega amigos para sortear");
    } else {
        amigoSecreto.innerHTML = "";
        let numeroSorteoAleatorio = Math.floor(Math.random() * amigos.length);
        let li = document.createElement("li");
        li.textContent = `El amigo secreto es ${amigos[numeroSorteoAleatorio]}`;
        amigoSecreto.appendChild(li);
    }
}
