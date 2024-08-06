const { addKeyword } = require('@bot-whatsapp/bot');

const flowHorario = addKeyword(['horario', 'horarios', 'apertura'])
    .addAnswer(
        [
            '🕒 Nuestro horario de apertura es:',
            '👉 Lunes a Viernes: 12:00 PM - 10:00 PM.',
            '👉 Sábados: 1:00 PM - 11:00 PM.',
            '👉 Domingos: Cerrado.',
            '¡Esperamos verte pronto!',
        ]
    );

module.exports = flowHorario;
