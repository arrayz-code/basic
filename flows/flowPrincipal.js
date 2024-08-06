const { addKeyword } = require('@bot-whatsapp/bot');
const flowMenu = require('./flowMenu');
const flowReserva = require('./flowReserva');
const flowHorario = require('./flowHorario');
const flowContacto = require('./flowContacto');

const flowPrincipal = addKeyword(['hola', 'buenos días', 'buenas tardes', 'buenas noches'])
    .addAnswer('¡Hola! Bienvenido a *Date Vida* 🍽️')
    .addAnswer(
        [
            '¿En qué puedo ayudarte hoy?',
            '👉 *Menú* para ver el menú del restaurante.',
            '👉 *Reserva* para hacer una reserva.',
            '👉 *Horario* para conocer nuestro horario de apertura.',
            '👉 *Contacto* para ponerte en contacto con nosotros.',
        ],
        null,
        null,
        [flowMenu, flowReserva, flowHorario, flowContacto]
    );

module.exports = flowPrincipal;
