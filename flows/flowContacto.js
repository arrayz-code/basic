const { addKeyword } = require('@bot-whatsapp/bot');

const flowContacto = addKeyword(['contacto', 'contacto', 'llamar'])
    .addAnswer(
        [
            '📞 Puedes ponerte en contacto con nosotros a través de:',
            '👉 Teléfono: +123 456 7890',
            '👉 Correo electrónico: contacto@datevida.com',
            '👉 Dirección: Calle Ficticia 123, Ciudad, País.',
            '¡Estamos aquí para ayudarte!',
        ]
    );

module.exports = flowContacto;
