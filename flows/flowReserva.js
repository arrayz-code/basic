const { addKeyword } = require('@bot-whatsapp/bot');

const flowReserva = addKeyword(['reserva', 'reservar', 'reservación'])
    .addAnswer(
        [
            'Para hacer una reserva, por favor proporciona la siguiente información:',
            '👉 Nombre completo.',
            '👉 Número de personas.',
            '👉 Fecha y hora deseada.',
            'Nuestro equipo confirmará la reserva lo antes posible.',
        ]
    );

module.exports = flowReserva;
