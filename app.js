// Arreglo para almacenar los nombres ingresados
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Debes ingresar un nombre válido');
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    inputAmigo.value = '';
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(function(amigo) {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigo;
        listaAmigos.appendChild(elementoLista);
    });
}

// Función para sortear un único amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debes ingresar al menos dos amigos para realizar el sorteo.');
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

