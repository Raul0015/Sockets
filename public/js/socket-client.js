// Referencias del html
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');



const socket = io(); // Socket del cliente


// EL on es para escuchar un evento
// El connect es un evento predeterminado
socket.on('connect', () => {
    // console.log('Conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');

    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

// Para que el cliente reciba un mensaje desde el servidor
socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
})

btnEnviar.addEventListener( 'click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123abc',
        fecha: new Date().getTime()
    }
    
    // Mensaje al servidor
    socket.emit( 'enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id);
    } );
});