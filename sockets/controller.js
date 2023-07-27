

const socketController = ( socket ) => {

    console.log('Cliente conectado', socket.id);

    socket.on( 'disconnect', () => {
        // console.log('CLiente desconectado', socket.id);
        // console.log(`Cliente: ${socket.id} descontectado`);
    })

    socket.on('enviar-mensaje', ( payload, callback) => {
        const id = 123456789;
        callback(id);
        
        socket.broadcast.emit('enviar-mensaje', payload);
    })
}

module.exports = {
    socketController
}